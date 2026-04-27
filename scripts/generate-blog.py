#!/usr/bin/env python3
"""Generate static blog.html and blog/feed.xml from blog.json.

Posts are rendered as static HTML for search engine crawlers.
JavaScript enhances with tag filtering on top.
An Atom 1.0 feed is generated for feed readers.
"""

import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

MONTHS_DE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
             'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']

ROOT = Path(__file__).parent.parent

def main():
    with open(ROOT / "data" / "blog.json") as f:
        posts = json.load(f)

    posts.sort(key=lambda p: p["date"], reverse=True)

    all_tags = sorted({tag for p in posts for tag in p.get("tags", [])})

    # Generate filter buttons
    filter_buttons = '                <button class="filter-btn active" data-filter="all">Alle</button>\n'
    for tag in all_tags:
        filter_buttons += f'                <button class="filter-btn" data-filter="{tag}">{tag}</button>\n'

    # Generate post HTML
    posts_html = ""
    for post in posts:
        year, month, day = post["date"].split("-")
        month_name = MONTHS_DE[int(month) - 1]
        lang = post.get("lang", "de")
        lang_badge = "EN" if lang == "en" else "DE"

        url = post.get("url", "")
        is_external = url.startswith("http")
        href = url if is_external else url
        target = ' target="_blank" rel="noopener"' if is_external else ""
        link_text = "Auf LinkedIn lesen" if is_external else "Artikel lesen"

        tags_html = f'<span class="lang-badge">{lang_badge}</span>'
        for tag in post.get("tags", []):
            tags_html += f'<span class="blog-tag">{tag}</span>'

        data_tags = " ".join(post.get("tags", []))

        icon_html = ""
        icon = post.get("icon", "")
        if icon:
            thumb = re.sub(r'/linkedin/(.+)\.(png|jpg|jpeg)$', r'/linkedin/thumb/\1.jpg', icon)
            thumb_path = ROOT / thumb
            if thumb_path.exists():
                icon_src = f"../{thumb}"
            else:
                icon_src = f"../{icon}"
            icon_html = f"""
                    <div class="blog-icon">
                        <img src="{icon_src}" alt="" loading="lazy" width="240" height="160">
                    </div>"""

        posts_html += f"""
                <article class="blog-item" data-tags="{data_tags}">{icon_html}
                    <div class="blog-date">
                        <span class="day">{day}</span>
                        <span class="month">{month_name}</span>
                        <span class="year">{year}</span>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            {tags_html}
                        </div>
                        <h2><a href="{href}"{target}>{post["title"]}</a></h2>
                        <p>{post.get("excerpt", "")}</p>
                        <a class="blog-link" href="{href}"{target}>{link_text}</a>
                    </div>
                </article>
"""

    html = f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Blog-Artikel von Ralf D. Müller über AI, Software-Architektur und Dokumentation">
    <link rel="canonical" href="https://rdmueller.github.io/pages/blog.html">
    <meta property="og:url" content="https://rdmueller.github.io/pages/blog.html">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Blog | Ralf D. Müller">
    <meta property="og:description" content="Blog-Artikel über AI, Software-Architektur und Dokumentation">
    <meta property="og:image" content="https://rdmueller.github.io/images/ralf-mueller.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Blog | Ralf D. Müller">
    <meta name="twitter:description" content="Blog-Artikel über AI, Software-Architektur und Dokumentation">
    <meta name="twitter:image" content="https://rdmueller.github.io/images/ralf-mueller.jpg">
    <title>Blog | Ralf D. Müller</title>
    <link rel="alternate" type="application/atom+xml" title="Blog | Ralf D. Müller" href="blog/feed.xml">
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">
    <link rel="stylesheet" href="../css/style.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">Ralf D. Müller</a>
            <ul class="nav-links">
                <li><a href="../index.html#about">Über mich</a></li>
                <li><a href="../index.html#trainings">Trainings</a></li>
                <li><a href="talks.html">Vorträge</a></li>
                <li><a href="../index.html#publications">Publikationen</a></li>
                <li><a href="blog.html" class="active">Blog</a></li>
                <li><a href="../index.html#contact">Kontakt</a></li>
            </ul>
            <button class="mobile-menu-btn" aria-label="Menü öffnen">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <main class="page-content">
        <div class="container">
            <h1>Blog</h1>
            <p class="page-intro">
                Gedanken zu AI, Software-Architektur, Dokumentation und der Zukunft der Softwareentwicklung.
                Ursprünglich auf LinkedIn veröffentlicht.
            </p>

            <div class="blog-filters" id="blog-filters">
{filter_buttons}            </div>

            <div class="blog-list" id="blog-list">
{posts_html}            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; <span class="current-year">2026</span> Ralf D. Müller. Alle Rechte vorbehalten.</p>
            <nav class="footer-nav">
                <a href="impressum.html">Impressum</a>
                <a href="datenschutz.html">Datenschutz</a>
            </nav>
        </div>
    </footer>

    <script src="../js/main.js"></script>
    <script>
        // Tag filtering on static HTML
        (function() {{
            const filters = document.getElementById('blog-filters');
            const items = document.querySelectorAll('.blog-item');
            filters.addEventListener('click', function(e) {{
                if (!e.target.classList.contains('filter-btn')) return;
                filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');
                items.forEach(item => {{
                    if (filter === 'all' || item.dataset.tags.includes(filter)) {{
                        item.style.display = '';
                    }} else {{
                        item.style.display = 'none';
                    }}
                }});
            }});
        }})();
    </script>
</body>
</html>
"""

    output = ROOT / "pages" / "blog.html"
    output.write_text(html)
    print(f"Generated {output} with {len(posts)} posts")

    generate_feed(posts)


def generate_feed(posts):
    """Generate an Atom 1.0 feed from the given list of posts (already sorted)."""
    BASE_URL = "https://rdmueller.github.io"
    FEED_URL = f"{BASE_URL}/pages/blog/feed.xml"
    BLOG_URL = f"{BASE_URL}/pages/blog.html"

    ET.register_namespace("", "http://www.w3.org/2005/Atom")
    feed = ET.Element("{http://www.w3.org/2005/Atom}feed")
    feed.set("{http://www.w3.org/XML/1998/namespace}lang", "en")

    def sub(parent, tag, text=None, **attrib):
        el = ET.SubElement(parent, f"{{http://www.w3.org/2005/Atom}}{tag}", **attrib)
        if text is not None:
            el.text = text
        return el

    sub(feed, "title", "Blog | Ralf D. Müller")
    sub(feed, "subtitle", "Gedanken zu AI, Software-Architektur, Dokumentation und der Zukunft der Softwareentwicklung.")
    sub(feed, "link", rel="self", href=FEED_URL)
    sub(feed, "link", rel="alternate", href=BLOG_URL)
    sub(feed, "id", FEED_URL)

    most_recent_date = posts[0]["date"] if posts else "1970-01-01"
    sub(feed, "updated", f"{most_recent_date}T00:00:00Z")

    author = sub(feed, "author")
    sub(author, "name", "Ralf D. Müller")
    sub(author, "uri", f"{BASE_URL}/")

    for post in posts:
        url = post.get("url", "")
        if not url:
            continue
        abs_url = url if url.startswith("http") else f"{BASE_URL}/pages/{url}"

        entry = sub(feed, "entry")
        sub(entry, "id", abs_url)
        sub(entry, "title", post["title"])
        sub(entry, "updated", f"{post['date']}T00:00:00Z")
        sub(entry, "link", rel="alternate", href=abs_url)

        excerpt = post.get("excerpt", "")
        if excerpt:
            sub(entry, "summary", excerpt)

        for tag in post.get("tags", []):
            sub(entry, "category", term=tag)

        # Include a content element for local (non-external) posts
        if not url.startswith("http"):
            content = sub(entry, "content", type="html")
            content.text = (
                f'<p>{excerpt}</p>'
                f'<p><a href="{abs_url}">Artikel lesen</a></p>'
            )

    ET.indent(feed, space="    ")
    tree = ET.ElementTree(feed)

    output = ROOT / "pages" / "blog" / "feed.xml"
    with open(output, "wb") as f:
        f.write(b'<?xml version="1.0" encoding="UTF-8"?>\n')
        tree.write(f, encoding="UTF-8", xml_declaration=False)
    print(f"Generated {output} with {len([p for p in posts if p.get('url')])} entries")


if __name__ == "__main__":
    main()
