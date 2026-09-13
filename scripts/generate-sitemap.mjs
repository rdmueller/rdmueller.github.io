/**
 * Erzeugt sitemap.xml aus den HTML-Dateien, die im Repository liegen.
 *
 * Von Hand gepflegt geht eine Sitemap mit dem nächsten Beitrag schief: Die
 * vorige kannte 43 von 91 Seiten und endete ein Vierteljahr vor dem jüngsten
 * Artikel.
 *
 * Das Datum kommt aus dem JSON-LD der Seite (`datePublished`, schon ISO), weil
 * die Artikel es ohnehin für Suchmaschinen ausliefern.
 *
 * Seiten ohne JSON-LD — Startseite, Übersichten, Impressum, Profile — bekommen
 * gar kein <lastmod>. Die Angabe ist optional, und keine ist ehrlicher als eine
 * geratene: Das git-Datum würde den nav-sync, der einmal jede Seite angefasst
 * hat, als inhaltliche Änderung ausgeben. Ein unzuverlässiges <lastmod> ignoriert
 * Google ohnehin.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE_URL = 'https://rdmueller.github.io/'

/** Kein Inhalt: Build-Zubehör, Rohdaten, Assets, Textfassungen. */
const SKIP = new Set([
  '.git', '.github', '.lighthouseci', '.playwright-mcp', '.claude', '.serena',
  'node_modules', 'scripts', 'docs', 'data', 'css', 'js', 'images', 'text',
])

/** Wichtigste zuerst, wie im Menü — der Rest folgt nach Datum. */
const SECTIONS = [
  'index.html',
  'pages/manifesto.html',
  'pages/manifesto.de.html',
  'pages/blog.html',
  'pages/elfi.html',
  'pages/talks.html',
  'pages/hhgdac.html',
  'pages/impressum.html',
  'pages/datenschutz.html',
]

const LD = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
const NOINDEX = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i

function htmlFiles(dir = ROOT) {
  const found = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...htmlFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.html')) found.push(full)
  }
  return found
}

/** Das Datum, das die Seite selbst nennt — oder keines. */
function lastmodOf(file, html) {
  const found = html.match(LD)
  if (!found) return null
  let data
  try {
    data = JSON.parse(found[1])
  } catch (cause) {
    throw new Error(`${path.relative(ROOT, file)}: JSON-LD ist kaputt`, { cause })
  }
  if (!data.datePublished) return null
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.datePublished)) {
    throw new Error(`${path.relative(ROOT, file)}: datePublished ist kein ISO-Datum`)
  }
  return data.datePublished
}

const pages = []
for (const file of htmlFiles()) {
  const html = fs.readFileSync(file, 'utf-8')
  // Eine Seite, die Suchmaschinen abweist, gehört nicht in die Sitemap.
  if (NOINDEX.test(html)) continue
  const relative = path.relative(ROOT, file).split(path.sep).join('/')
  pages.push({ relative, url: SITE_URL + relative, lastmod: lastmodOf(file, html) })
}

const rank = (page) => {
  const index = SECTIONS.indexOf(page.relative)
  return index === -1 ? SECTIONS.length : index
}
pages.sort(
  (a, b) =>
    rank(a) - rank(b) ||
    (b.lastmod || '').localeCompare(a.lastmod || '') ||
    a.url.localeCompare(b.url)
)

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((p) =>
    p.lastmod
      ? `  <url><loc>${p.url}</loc><lastmod>${p.lastmod}</lastmod></url>`
      : `  <url><loc>${p.url}</loc></url>`
  ),
  '</urlset>',
  '',
].join('\n')

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf-8')

const dated = pages.filter((p) => p.lastmod).length
console.log(`sitemap: ${pages.length} Seiten, ${dated} mit Datum aus dem JSON-LD der Seite.`)
