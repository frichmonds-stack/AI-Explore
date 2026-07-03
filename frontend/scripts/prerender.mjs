// Post-build pre-render: write a real, static index.html for every route with
// its own <title> + description + Open Graph / Twitter tags, so that non-JS
// crawlers and social-card scrapers (Facebook, LinkedIn, Slack, iMessage, Bing)
// see correct per-page metadata. Content users still get the SPA, which hydrates
// on top. No headless browser — routes and their meta are derived from the same
// content JSON the app uses, so builds stay fast and reliable on any host.
//
// Set SITE_URL (e.g. https://yoursite.pages.dev) as a build env var so og:url /
// og:image resolve to absolute URLs — required for social images to render.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = join(root, 'dist');
const contentDir = join(root, 'src', 'content');
const readJSON = (f) => JSON.parse(readFileSync(join(contentDir, f), 'utf8'));

const tools = readJSON('tools.json');
const guides = readJSON('guides.json');
const articles = readJSON('articles.json');
const capabilities = readJSON('capabilities.json');
const foundations = readJSON('foundations.json');
const risks = readJSON('risks.json');
const pedagogies = readJSON('pedagogies.json');

const SITE_NAME = 'AI for Teachers';
const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
const DEFAULT_DESC =
  'Practical, classroom-ready help for teaching with AI — start with the work, grow the craft, keep children safe.';
const OG_IMAGE = `${SITE_URL}/og-default.png`; // add a 1200×630 og-default.png to public/

// --- Route + meta manifest (derived from content, one source of truth) ---
const routes = [];
const add = (path, title, description, type = 'website') =>
  routes.push({ path, title, description, type });

add('/', null, DEFAULT_DESC);
add('/articles', 'Articles', 'Curated reading on teaching with AI — practical pieces, perspectives, and what’s new, chosen to be worth a busy teacher’s time.');
add('/guides', 'Guides', 'Short, classroom-ready walkthroughs for getting real work done with AI — safely and pedagogically.');
add('/tools', 'Tools', 'A browsable library of AI tools for teaching — what each is good for, and how it fits your classroom.');
add('/glossary', 'Glossary', 'Plain-language definitions for the approval badges and categories used across the site.');
add('/saved', 'Saved', 'Your saved tools, guides and articles — kept on this device.');
add('/about', 'About', 'An independent, honest attempt to help teachers decide whether, when and how to use AI — child safety and good teaching first.');
add('/learn', 'Learn', 'Understand the AI behind your work — what it is, what it can do, and how to keep students safe.');
add('/learn/capabilities', 'AI Capabilities', 'What AI can actually do, grouped by capability, with the tools that do it.');
add('/foundations', foundations.title, foundations.description);
add('/risks', risks.title, risks.description);
add('/pedagogies', pedagogies.title, pedagogies.description);

tools.tools.forEach((t) => add(`/tools/${t.id}`, t.name, t.description, 'article'));
guides.guides.forEach((g) => add(`/guides/${g.id}`, g.title, g.summary, 'article'));
articles.articles.forEach((a) => add(`/articles/${a.id}`, a.title, a.dek, 'article'));
capabilities.capabilities.forEach((c) => add(`/learn/capabilities/${c.id}`, c.name, c.summary, 'article'));
[['foundations', foundations], ['risks', risks], ['pedagogies', pedagogies]].forEach(([id, track]) =>
  (track.sections || []).forEach((s) => add(`/${id}/${s.id}`, s.title, s.summary || track.description, 'article'))
);

// --- HTML head rewriting helpers ---
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
}
function upsertMeta(html, attr, key, content) {
  if (!content) return html;
  const re = new RegExp(`<meta ${attr}=["']${key}["'][^>]*>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${esc(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}
const setName = (h, n, c) => upsertMeta(h, 'name', n, c);
const setProp = (h, p, c) => upsertMeta(h, 'property', p, c);

const template = readFileSync(join(dist, 'index.html'), 'utf8');

function render({ path, title, description, type }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
  const desc = clean(description) || DEFAULT_DESC;
  const url = SITE_URL ? SITE_URL + path : path;
  let html = template;
  html = setTitle(html, fullTitle);
  html = setName(html, 'description', desc);
  html = setProp(html, 'og:title', fullTitle);
  html = setProp(html, 'og:description', desc);
  html = setProp(html, 'og:type', type);
  html = setProp(html, 'og:url', url);
  html = setName(html, 'twitter:title', fullTitle);
  html = setName(html, 'twitter:description', desc);
  if (SITE_URL) {
    html = setProp(html, 'og:image', OG_IMAGE);
    html = setName(html, 'twitter:image', OG_IMAGE);
    html = setName(html, 'twitter:card', 'summary_large_image');
  }
  return html;
}

let written = 0;
for (const r of routes) {
  const outDir = r.path === '/' ? dist : join(dist, r.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), render(r));
  written += 1;
}

console.log(`✓ Prerendered ${written} routes` + (SITE_URL ? ` (SITE_URL=${SITE_URL})` : ' (no SITE_URL set — og:image/url are relative; set SITE_URL for social images)'));
