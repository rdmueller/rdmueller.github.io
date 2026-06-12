#!/usr/bin/env python3
"""Sync the canonical nav across all HTML files in the repo.

Reads scripts/nav-snippet.html (with {ROOT} placeholders) and rewrites the
<ul class="nav-links">...</ul> block in every HTML file, computing the
relative root prefix from the file's depth and marking the active item
based on path rules.

Usage:
    python3 scripts/sync-nav.py            # apply changes
    python3 scripts/sync-nav.py --check    # exit 1 if any file would change
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SNIPPET_PATH = ROOT / "scripts" / "nav-snippet.html"

NAV_RE = re.compile(r'<ul class="nav-links">.*?</ul>', re.DOTALL)

ACTIVE_RULES = [
    (re.compile(r'^pages/manifesto(\.de)?\.html$'), 'Manifest'),
    (re.compile(r'^pages/blog\.html$'), "Ralf's Corner"),
    (re.compile(r'^pages/blog/.*\.html$'), "Ralf's Corner"),
    (re.compile(r'^pages/elfi\.html$'), "Elfi's Corner"),
    (re.compile(r'^pages/profiles/.*\.html$'), "Elfi's Corner"),
    (re.compile(r'^pages/talks\.html$'), "Vorträge"),
    (re.compile(r'^pages/talks/.*\.html$'), "Vorträge"),
]

SKIP_DIRS = {"node_modules", ".git"}


def load_snippet() -> str:
    text = SNIPPET_PATH.read_text(encoding="utf-8")
    m = NAV_RE.search(text)
    if not m:
        raise SystemExit(f"ERROR: {SNIPPET_PATH} does not contain <ul class=\"nav-links\">")
    return m.group(0)


def render_nav(snippet: str, root_prefix: str, active_label: str | None) -> str:
    nav = snippet.replace("{ROOT}", root_prefix)
    if active_label:
        pattern = re.compile(
            r'(<a href="[^"]*")(>' + re.escape(active_label) + r'</a>)'
        )
        nav = pattern.sub(r'\1 class="active"\2', nav, count=1)
    return nav


def active_for(rel_str: str) -> str | None:
    for pattern, label in ACTIVE_RULES:
        if pattern.match(rel_str):
            return label
    return None


def iter_html_files():
    for path in ROOT.rglob("*.html"):
        if any(part in SKIP_DIRS for part in path.relative_to(ROOT).parts):
            continue
        if path == SNIPPET_PATH:
            continue
        yield path


def sync(check_only: bool) -> int:
    snippet = load_snippet()
    changed: list[str] = []
    skipped: list[str] = []

    for html_file in iter_html_files():
        rel = html_file.relative_to(ROOT)
        rel_str = "/".join(rel.parts)
        root_prefix = "../" * (len(rel.parts) - 1)
        new_nav = render_nav(snippet, root_prefix, active_for(rel_str))

        text = html_file.read_text(encoding="utf-8")
        match = NAV_RE.search(text)
        if not match:
            skipped.append(rel_str)
            continue
        if match.group(0) == new_nav:
            continue

        new_text = text[: match.start()] + new_nav + text[match.end():]
        changed.append(rel_str)
        if not check_only:
            html_file.write_text(new_text, encoding="utf-8")

    if changed:
        verb = "would update" if check_only else "updated"
        print(f"{verb} {len(changed)} file(s):")
        for f in changed:
            print(f"  {f}")
    else:
        print("All nav blocks already in sync.")

    if skipped:
        print(f"\nNote: {len(skipped)} file(s) without nav-links (skipped).")

    return 1 if (check_only and changed) else 0


def main() -> int:
    check_only = "--check" in sys.argv[1:]
    return sync(check_only)


if __name__ == "__main__":
    raise SystemExit(main())
