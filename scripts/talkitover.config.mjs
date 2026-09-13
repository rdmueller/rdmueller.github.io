/**
 * TalkItOver — Konfiguration dieser Site für den Generator.
 *
 * Rezept 1: https://raifdmueller.github.io/talkitover/rezepte/rezept-1.md
 *
 * Der Generator (talkitover-build.mjs) bleibt unverändert. Hier stehen nur die
 * Werte dieser Site und die beiden Stellen, an denen sie ihre Daten hat:
 * die Datumsangaben aus sitemap.xml bzw. data/blog.json und der Knopf auf der
 * Startseite.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from './talkitover-build.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE_URL = 'https://rdmueller.github.io/'

/** Erster Codeblock aus https://raifdmueller.github.io/talkitover/prompts/site.md (site@1). */
const PROSE = `Load {url}. That is one page of a site, as plain text.

Your fetch tool may refuse a link it only found inside a document it fetched,
so every URL you might need is here in my message instead. Each file is one
page as text and names the address a person can open at the top.

{pages}

When I ask for a link, give me the page a person can open — each file names it
under "Page:" — never the .md file you read from.

Ask what I am looking for before you fetch anything. Then fetch what matches,
read it, and answer from what you read. Keep it short and name the page each
answer came from.

If nothing here fits, say so — do not answer from memory and do not go looking
elsewhere.`

/** Seiten, die eine Frage über die Site selbst beantworten — wichtigste zuerst. */
const SECTIONS = [
  'index.html',
  'pages/manifesto.html',
  'pages/blog.html',
  'pages/elfi.html',
  'pages/talks.html',
  'pages/hhgdac.html',
].map((p) => SITE_URL + p)

/** Keine Seiten: Build-Zubehör, Rohdaten, Assets und die Weiterleitungs-Stubs. */
const SKIP = [
  '.git',
  '.github',
  'node_modules',
  'scripts',
  'docs',
  'data',
  'css',
  'js',
  'images',
  'pages/blog/index.html',
]

/**
 * url -> Datum, damit die jüngsten Beiträge einzeln genannt werden.
 *
 * sitemap.xml ist die genannte Quelle, deckt aber nur einen Teil der Seiten ab.
 * Für den Rest steht das Datum in data/blog.json — derselben Datei, aus der die
 * Blog-Übersicht gebaut ist. Beides ist vorhandene Repo-Daten, nichts Neues.
 */
function readDates() {
  const dates = {}

  const blog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/blog.json'), 'utf-8'))
  for (const post of blog) {
    if (post.url && post.date) dates[`${SITE_URL}pages/${post.url}`] = post.date
  }

  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf-8')
  for (const entry of sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
    dates[entry[1]] = entry[2]
  }

  return dates
}

/** Ein Attributwert, der eine HTML-Zeile nicht zerreißt. */
function asAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\r?\n/g, '&#10;')
}

/**
 * Schreibt den Knopf in die Startseite.
 *
 * Von Hand gepflegt wäre er die Liste, die dieses Rezept gerade abschafft:
 * url und prompt ändern sich mit jedem Beitrag.
 */
function writeButton(page, { url, prompt }) {
  const file = path.join(ROOT, page)
  const markup = [
    '<script src="js/talkitover.js"></script>',
    `<talk-it-over url="${url}" prompt="${asAttribute(prompt)}" data-prompt="site@1"></talk-it-over>`,
  ]
    .map((line) => `                        ${line}`)
    .join('\n')

  const html = fs.readFileSync(file, 'utf-8')
  const between = /( *<!-- talkitover:start -->\n)[\s\S]*?( *<!-- talkitover:end -->)/
  if (!between.test(html)) throw new Error(`${page}: Marker <!-- talkitover:start --> fehlt`)
  fs.writeFileSync(file, html.replace(between, (_, start, end) => `${start}${markup}\n${end}`), 'utf-8')
}

const result = build({
  root: ROOT,
  out: path.join(ROOT, 'text'),
  siteUrl: SITE_URL,
  sections: SECTIONS,
  stripSuffix: / \| Ralf D\. Müller$/,
  container: 'main',
  prose: PROSE,
  dates: readDates(),
  skip: SKIP,
})

writeButton('index.html', result)

console.log(
  `talkitover: ${result.named} Seiten einzeln, ` +
    `${result.bundled.length} Bündel (${result.bundled.join('+')} Seiten), ` +
    `Provider-URL ${result.length} Zeichen.`
)
