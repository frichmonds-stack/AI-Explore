# Backlog

Priority order: top = next up.

## Now
- [x] Fix GitHub push authentication
- [x] Integrate Lumen design system into frontend (tokens, fonts, component patterns)
- [ ] Build AI Tools Library — data, tool cards, status badges, discovery layer + power layer
- [ ] Build How AI Works sections (session, memory, token, model, use cases) in Foundations track

## Now
- [x] Spotlight tool cards — calm selector cards + persistent sticky spotlight panel (auto-selects first featured, expands on click, minimises on scroll). Replaced the original in-grid FLIP morph, which felt janky.

## Now (work-first pivot — 2026-06-22)
- [x] **Learn hub revamp** — consolidated the AI-generated AI tracks into one `/learn` hub: About AI (`foundations`, retitled), AI Capabilities (NEW `capabilities.json` + `CapabilitiesPage`/`CapabilityPage`), AI Safety (`risks`, retitled, now holds the "When AI Serves Learning" section moved out of pedagogies). Nav simplified to Guides · Tools · Teaching theory · Learn. `practice` + `explore` dropped from nav (files retained).
- [~] **Guides → Articles rework** — DECIDED (2026-06-25): repurpose "Guides" into a curated **articles/reading** section. SCAFFOLD BUILT (2026-07-01): `articles.json` (topics + two `kind`s: `authored` on-site body of blocks, `link` curated external), `ArticlesPage` (topic filter, newest-first, AI-draft badges, empty state), `ArticlePage` (block renderer + external "read at source"), routes `/articles` + `/articles/:id`, indexed in global search, `usePageMeta` on both. Discoverable via footer ("Articles"). STILL TODO: (a) write real articles (2 samples are placeholders); (b) **repoint primary nav "Explore" → `/articles`** once there's content (one-line change in `Layout.jsx`; deferred to avoid an empty front door); (c) reconcile the homepage (still leads with featured Guides); (d) decide fate of existing task-walkthrough guides in `guides.json` (retire / fold how-tos into Learn) and legacy `explore` "recommended research" (fold in here).
- [x] **SEO architecture** — DONE (2026-07-01): `HashRouter → BrowserRouter` (clean URLs) + `scripts/prerender.mjs` (per-route static HTML with OG/Twitter tags, run in `npm run build`) + SPA fallback configs (`public/_redirects`, `vercel.json`) + `usePageMeta` retrofitted across all pages. Host = Cloudflare Pages. See DECISIONS + `.claude/deploy.md`.
- [ ] **Add `public/og-default.png`** (1200×630 share image — logo + tagline on Lumen palette) and set the `SITE_URL` build env var on the host, so social share cards show an image (they show title/description without it). Optional later: per-section OG images.
- [ ] **Social share buttons** — lightweight copy-link / email / X / LinkedIn on tool/guide/article pages via plain share-intent URLs (NO platform SDKs/pixels — keeps it tracking-free). Pairs with the Save & Share infra.
- [ ] Decide fate of legacy `practice` track (Administration/Classroom/Curriculum/Assessment prose) — likely mine for Guides/Learn then retire.
- [x] Scope & strategy doc (`.claude/scope-and-strategy.md`)
- [x] Guides content frame — `guides.json` model, `GuidesPage` hub, `GuidePage` detail, routes, work-first nav + homepage
- [x] Deep pedagogies track — each approach restructured to a consistent shape (What it is → Core concepts → In the classroom → Where it meets AI). Sections: constructivism, cognitive-load, socratic, differentiation, udl, supports-vs-undermines. Section ids for cognitive-load/udl/differentiation deliberately match the `pedagogyFrameworks` ids in `tools.json`.
- [x] AI-draft review reminder — `DraftNotice` component (banner + card badge) on all generated content; shows unless `reviewStatus: 'human-reviewed'`
- [x] Finish framework alignment: add deep `pedagogies` sections for the remaining `pedagogyFrameworks` ids (`blooms`, `depth-of-knowledge`, `visible-learning`) using the same 4-part structure, then deep-link tool/guide pedagogy tags to `/pedagogies/:id` instead of `/explainer/pedagogies` (only once every referenced framework has a matching section, so no dead links).
- [ ] Write the full guide library across all use-categories and bands (4 samples exist as the frame)
- [x] Add the referenced-but-unwritten guides (`scaffold-a-writing-task`, `draft-a-parent-update`) so `next` rails fill out
- [x] Wire the `concept` links to real Foundations sections (fixed to what-can-ai-do / how-it-works / where-ai-fails)
- [x] Deep-link pedagogy tags to `/pedagogies/:id` (guide pedagogyNote + tool detail teaching approaches)

## Next
- [ ] **Finish the role → domain migration** — the filter bar, glossary and tooltips now use **Domain** (parent of Work type; mapping in `tools.json meta.domains`), but the legacy flat `roles` concept still drives: tool/guide **card** chips (middle chip shows `role`), **tool detail page** role-bucket sections, and `ExplainerPage` `ROLE_DATA`. Decide whether to (a) fully replace `roles` with `domains` across those surfaces, or (b) keep `roles` for detail-page narrative and only use domains for filtering. Until resolved, cards show e.g. "Classroom" while the filter shows "Classroom Teaching" — close but not identical.
- [ ] **Rebrand — "AI for Teachers" is too close to "AI for Education"** (existing org, aiforeducation.io). Need a distinct name; personal launch wants something clearly *ours*. Avoid existing edtech names: AI for Education, Lumen Learning, BetterLesson. Shortlist by direction: **Warm/collegial** — Staffroom (top pick; note UK recruitment brand collision to check), Commonroom, The Commons · **Strategy-encoded** — Throughline (top pick; names the work→craft pull), The Long Way · **Guidance/compass** — Wayfinder, Northlight · **Craft-forward** — Teachcraft, Practised. TODO when picked: domain (.com/.com.au/.ai) + trademark + social-handle check; then rename across UI, content, repo, docs.
- [x] **Footer + disclaimer** — real site footer (`SiteFooter.jsx`): nav columns (incl. Reference → Glossary), unofficial-project disclaimer ("not affiliated with CEWA, sourced from published list, snapshot June 2026, verify before use") linking to the glossary, last-updated line. Replaces the old one-line footer in `Layout.jsx`. `CEWA_AS_OF` constant = single date to bump when data refreshes.
- [x] **Glossary page** (`/glossary`, `GlossaryPage.jsx` + `content/glossary.json`) — the CEWA approval legend moved here (out of the footer) and joined by every other categorisation we use: Work type, Work area, Pedagogy (deep-links to `/pedagogies/:id`), Year level, Subject, Difficulty, Availability & cost. Definitions resolve from one source of truth (tools.json `meta` + guides difficulties); only roles & subjects (no description elsewhere) carry inline defs in glossary.json. Linked from footer + Learn hub. **Explicitly a placeholder** — carries an in-page note that these should become inline tooltips.
- [~] **Definitions as inline tooltips (UX direction)** — owner's intuition: most glossary definitions should surface as tooltips on the labels/badges where they're used. DONE so far: reusable `InfoTip.jsx` primitive + `lib/definitions.js` (one source of truth, shared with the glossary: `facetHint` + `termDef`); wired into `FacetFilters` so every filter pill explains itself on hover (category def when idle, selected-term def when active) across both Tools + Guides. `StatusBadge` already covers approval badges. Tooltips are left-anchored so edge pills don't clip. STILL TODO: extend to the tag chips on tool/guide **cards** (`ToolCard` currently uses native `title=`) and **detail pages** (`ToolDetailPage` `TagCard`s, `GuidePage`), and consider capability tags. Glossary stays the canonical fallback.
- [x] **Global search** — command-palette (`GlobalSearch.jsx` + `lib/searchIndex.js`): ⌘/Ctrl-K or nav trigger, searches across tools · guides · capabilities · About AI/AI Safety/Teaching sections, grouped + ranked results (title hits win), full keyboard nav. Mobile: trigger pinned top-right.
- [ ] **About page (pre-launch, critical path)** — the remaining half of the unofficial-launch requirement: what this is, who made it, how tools are vetted, the CEWA-source/disclaimer in long form. Footer already carries the short disclaimer. See THREADS.md "Unofficial-site disclaimer needed".
- [ ] Confirm tool `access` (cost) + `cewaProvided` ("in the CEWA stack") against an authoritative CEWA source, then fill the fields for all tools (only ~8 seeded as placeholders). Optional once trusted: add an "Availability" filter facet (free / in your toolkit) and an "Already in your toolkit" rail — kept off the card deliberately; lives on the tool detail page for now.
- [ ] Tool detail pages (`/tools/:toolId`) — replace placeholder with full guide; each role bucket + pedagogy tag gets its own section explaining why this tool fits that context and how to use it that way
- [ ] Explainer pages (`/explainer/:category`) — replace placeholders for uses / roles / pedagogies with real content
- [ ] Relevance ranking in tool data — so the collapsed card's "strongest" use/role/pedagogy is real, not just authored-array-order placeholder
- [ ] Complete remaining content across all 5 existing tracks
- [x] Status explainer footer on tools section — done as the site-wide footer CEWA legend (see above)
- [x] Tooltips on all status badges — `StatusBadge` already ships hover/focus tooltips (`showTip`); footer legend now gives the always-visible key too
- [ ] Verify all block types render correctly in SectionPage (text, heading, list, risk, pedagogy-note)
- [ ] Mobile nav testing
- [ ] Deploy — investigate Azure Static Web Apps as CEWA-compliant hosting option

## Later (Phase 2 — requires backend)
- [ ] Click tracking for tool popularity (Plausible Analytics as interim static solution)
- [ ] Full pedagogy rating system on tool cards (stars per framework — deferred, use badges for now)
- [ ] Surface "most popular" and "highest rated" rows in discovery layer
- [ ] Save/bookmark tools feature
- [ ] Backend API (Node/Express) — only when content becomes dynamic

## Deferred
- [ ] School policy section (explicitly deferred)
- [ ] User accounts / personalisation
- [x] Search across all content — done (no backend needed; static client-side index over all JSON content). See `lib/searchIndex.js`.
