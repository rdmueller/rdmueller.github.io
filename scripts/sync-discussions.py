#!/usr/bin/env python3
"""
Sync LinkedWild discussion mapping from GitHub Discussions to data/discussions.json.

Lists every discussion in the LinkedWild category via GraphQL and maps its title
(by convention `pages/blog/<slug>.html`) to its number. Writes the file only if
the result differs from what is on disk, so unchanged runs leave the tree clean.

Env:
  GH_TOKEN  GitHub token with `discussions:read`. Provided by Actions as
            GITHUB_TOKEN; can also be a PAT for local runs.
  GH_REPO   "<owner>/<repo>", defaults to rdmueller/rdmueller.github.io.
"""
import json
import os
import sys
import urllib.request

REPO = os.environ.get("GH_REPO", "rdmueller/rdmueller.github.io")
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
CATEGORY = "LinkedWild"
OUT = os.path.join(os.path.dirname(__file__), "..", "data", "discussions.json")

if not TOKEN:
    sys.exit("GH_TOKEN / GITHUB_TOKEN not set")

owner, name = REPO.split("/", 1)

GQL = """
query($owner:String!, $name:String!, $cursor:String) {
  repository(owner:$owner, name:$name) {
    discussionCategories(first:20) { nodes { id name } }
    discussions(first:100, after:$cursor, orderBy:{field:CREATED_AT, direction:DESC}) {
      pageInfo { hasNextPage endCursor }
      nodes { number title category { name } }
    }
  }
}
"""


def gql(cursor):
    body = json.dumps({"query": GQL, "variables": {"owner": owner, "name": name, "cursor": cursor}}).encode()
    req = urllib.request.Request(
        "https://api.github.com/graphql",
        data=body,
        headers={
            "Authorization": f"bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
            "User-Agent": "linkedwild-sync",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode())
    if "errors" in data:
        sys.exit(f"GraphQL errors: {data['errors']}")
    return data["data"]["repository"]


def fetch_all():
    mapping = {}
    duplicates = {}
    cursor = None
    while True:
        repo = gql(cursor)
        for n in repo["discussions"]["nodes"]:
            if n["category"]["name"] != CATEGORY:
                continue
            title = n["title"].strip()
            if title in mapping:
                duplicates.setdefault(title, [mapping[title]]).append(n["number"])
            else:
                mapping[title] = n["number"]
        page = repo["discussions"]["pageInfo"]
        if not page["hasNextPage"]:
            break
        cursor = page["endCursor"]
    if duplicates:
        msg = "duplicate LinkedWild discussion titles found:\n"
        for title, nums in sorted(duplicates.items()):
            msg += f"  {title!r} -> {nums}\n"
        msg += "Resolve by deleting or renaming one of each pair before sync can proceed."
        sys.exit(msg)
    return dict(sorted(mapping.items()))


def main():
    fresh = fetch_all()
    try:
        with open(OUT) as f:
            current = json.load(f)
    except FileNotFoundError:
        current = {}

    if current == fresh:
        print(f"discussions.json unchanged ({len(fresh)} entries)")
        return 0

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(fresh, f, indent=2, ensure_ascii=False)
        f.write("\n")
    added = set(fresh) - set(current)
    removed = set(current) - set(fresh)
    print(f"discussions.json updated: {len(fresh)} entries (+{len(added)} -{len(removed)})")
    for k in sorted(added):
        print(f"  + {k} -> #{fresh[k]}")
    for k in sorted(removed):
        print(f"  - {k}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
