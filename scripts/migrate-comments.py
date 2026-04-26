#!/usr/bin/env python3
"""Migrate comments from comments.json to GitHub Discussions."""

import json
import subprocess
import sys
import time

REPO = "rdmueller/rdmueller.github.io"
CATEGORY_ID = "DIC_kwDORG0f8c4C7uSW"
REPO_ID = "R_kgDORG0f8Q"
BASE_URL = "https://rdmueller.github.io/images/blog/elfi"

AVATARS = {
    "Elfi Wang": "avatar-elfi.png",
    "lala": "avatar-lala.png",
    "Peter Pigeon": "avatar-peter.png",
    "Madame": "avatar-madame.png",
    "Ringo": "avatar-ringo.png",
}

EMOJIS = {
    "Elfi Wang": "🐾",
    "lala": "🐈‍⬛",
    "Peter Pigeon": "🕊️",
    "Madame": "🐕",
    "Ringo": "🐿️",
}


def gh_graphql(query):
    result = subprocess.run(
        ["gh", "api", "graphql", "-f", f"query={query}"],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"ERROR: {result.stderr}", file=sys.stderr)
        return None
    return json.loads(result.stdout)


def format_comment(comment):
    author = comment["author"]
    avatar = AVATARS.get(author, "")
    role = comment.get("role", "")
    text = comment["text"]
    emoji = EMOJIS.get(author, "")

    if avatar:
        avatar_url = f"{BASE_URL}/{avatar}"
        header = (
            f'<img src="{avatar_url}" width="32" height="32" '
            f'style="border-radius:50%; vertical-align:middle;"> '
            f'**{author}** · *{role}*'
        )
    else:
        header = f"**{author}**"

    likes = comment.get("likes", [])
    likes_line = ""
    if likes:
        likes_line = f"\n\n_{', '.join(likes)} liked this_"

    return f"{header}\n\n{text} {emoji}{likes_line}"


def find_discussion(slug):
    query = '''{ repository(owner: "rdmueller", name: "rdmueller.github.io") {
        discussions(categoryId: "%s", first: 100) {
            nodes { number, id, title }
        }
    } }''' % CATEGORY_ID
    data = gh_graphql(query)
    if not data:
        return None, None
    for d in data["data"]["repository"]["discussions"]["nodes"]:
        if d["title"] == f"pages/blog/{slug}.html" or d["title"] == slug:
            return d["id"], d["number"]
    return None, None


def create_discussion(slug):
    title = f"pages/blog/{slug}.html"
    body = f"LinkedWild comments for [{slug}](https://rdmueller.github.io/pages/blog/{slug}.html)"
    escaped_body = body.replace('"', '\\"')
    escaped_title = title.replace('"', '\\"')
    query = '''mutation { createDiscussion(input: {
        repositoryId: "%s",
        categoryId: "%s",
        title: "%s",
        body: "%s"
    }) { discussion { id, number } } }''' % (REPO_ID, CATEGORY_ID, escaped_title, escaped_body)
    data = gh_graphql(query)
    if not data or "errors" in data:
        print(f"  ERROR creating discussion: {data}")
        return None, None
    d = data["data"]["createDiscussion"]["discussion"]
    return d["id"], d["number"]


def post_comment(discussion_id, body, reply_to_id=None):
    escaped = body.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    if reply_to_id:
        query = '''mutation { addDiscussionComment(input: {
            discussionId: "%s", body: "%s", replyToId: "%s"
        }) { comment { id } } }''' % (discussion_id, escaped, reply_to_id)
    else:
        query = '''mutation { addDiscussionComment(input: {
            discussionId: "%s", body: "%s"
        }) { comment { id } } }''' % (discussion_id, escaped)
    data = gh_graphql(query)
    if not data or "errors" in data:
        print(f"  ERROR posting comment: {data}")
        return None
    return data["data"]["addDiscussionComment"]["comment"]["id"]


def migrate():
    with open("data/comments.json") as f:
        all_comments = json.load(f)

    print(f"Migrating {len(all_comments)} posts...", flush=True)

    # Cache all existing discussions in one query
    existing = {}
    query = '''{ repository(owner: "rdmueller", name: "rdmueller.github.io") {
        discussions(categoryId: "%s", first: 100) {
            nodes { number, id, title }
        }
    } }''' % CATEGORY_ID
    data = gh_graphql(query)
    if data:
        for d in data["data"]["repository"]["discussions"]["nodes"]:
            existing[d["title"]] = (d["id"], d["number"])
    print(f"Found {len(existing)} existing discussions", flush=True)

    for slug, comments in all_comments.items():
        print(f"\n--- {slug} ({len(comments)} comments) ---", flush=True)

        title = f"pages/blog/{slug}.html"
        if title in existing:
            print(f"  Discussion #{existing[title][1]} already exists, skipping", flush=True)
            continue

        disc_id, disc_num = None, None

        disc_id, disc_num = create_discussion(slug)
        if not disc_id:
            print(f"  FAILED, waiting 10s...", flush=True)
            time.sleep(10)
            disc_id, disc_num = create_discussion(slug)
            if not disc_id:
                print(f"  SKIPPED after retry", flush=True)
                time.sleep(5)
                continue
        print(f"  Created discussion #{disc_num}", flush=True)
        time.sleep(3)

        for c in comments:
            body = format_comment(c)
            comment_id = post_comment(disc_id, body)
            if comment_id:
                print(f"  Posted: {c['author']}", flush=True)
            else:
                print(f"  FAILED: {c['author']}, retrying...", flush=True)
                time.sleep(8)
                comment_id = post_comment(disc_id, body)
                if comment_id:
                    print(f"  Posted (retry): {c['author']}", flush=True)
            time.sleep(3)

            for r in c.get("replies", []):
                if comment_id:
                    reply_body = format_comment(r)
                    reply_id = post_comment(disc_id, reply_body, comment_id)
                    if reply_id:
                        print(f"    Reply: {r['author']}", flush=True)
                    time.sleep(3)

    print("\nDone!")


if __name__ == "__main__":
    migrate()
