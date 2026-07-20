# Backlog

Priority: top = next up. `[ ]` open · `[~]` in progress. Completed work is in **Done** at the foot.

## Now
_Launch gate (2026-07-13): ship when there are **≥5 solid tool reviews + 2 articles** (one = the review-methodology piece). See DECISIONS → Strategy 2026-07-13._
_**At launch, also:** delete the `noindex` block in `frontend/public/_headers` (site is invisible to search engines until this is removed) and swap `SITE_URL` to the custom domain._
- [ ] **Benchmark foundations** (new 2026-07-13; see DECISIONS → benchmark) — in order: (1) draft the **core premise + principles + bias declaration** page (strawman for owner to argue with); (2) **rubric criteria descriptors** (6 criteria, 0–4, teacher-natural language, sourced); (3) **prompt pack v1** (9 versioned best-practice prompts, learning area + band pinned) + applicability matrix. Feeds directly into the 5 launch reviews and the methodology article.
- [~] **Tool decision-support depth** — deepen tool profiles per the DRAFT spec [`tool-review-architecture.md`](tool-review-architecture.md): richer schema (studentUse, privacy, recommendedUses, avoidWhen, limitations, review dates, sources), surfaced on `ToolDetailPage`, with unknowns shown as unknowns. First worked example: Microsoft Copilot (mark approval **unreviewed** until sourced). *Card signals + review spine await owner sign-off.*
- [~] **Guides → Articles rework** — scaffold built (`articles.json`, `ArticlesPage`/`ArticlePage`, routes, search-indexed, `usePageMeta`; footer link). TODO: (a) write real articles (2 placeholders) — first two: the **review-methodology piece** (launch-gate anchor) and an **"AI implementation in schools"** piece (leadership wedge — see DECISIONS 2026-07-13); (b) repoint nav **Explore → `/articles`** once there's content (one-liner in `Layout.jsx`; deferred to avoid an empty front door); (c) reconcile homepage (still leads with Guides); (d) decide fate of task-walkthrough guides + legacy `explore` research.
- [ ] **Rebrand follow-through** (name = **Pigeon Hole**, chosen 2026-07-15; UI/meta renamed) — remaining: domain purchase (`.com.au`/`.au` need an ABN; consider `pigeonhole.education`), trademark + social-handle check (note existing brands: The Pigeonhole (UK books), Pigeonhole Live (Q&A app)), decide on repo rename (`AI-Explore` → ?), update Cloudflare project/`SITE_URL` when the custom domain lands.
- [ ] **Logo mark** (deferred by owner 2026-07-15 — "later problem") — wordmark-only branding for now; AI-generated marks rejected, likely needs a human designer. Regenerate `og-default.png` from `frontend/scripts/og-card.html` when a mark lands.
- [~] **Definitions as inline tooltips** — done: `InfoTip` + `lib/definitions.js`, wired into `FacetFilters` (both filter bars). TODO: extend to tag chips on tool/guide **cards** (`ToolCard` uses native `title=`) and detail pages; glossary stays the fallback.
- [ ] **Finish role → domain migration** — filter/glossary/tooltips use **Domain** (parent of Work type), but legacy `roles` still drives card chips, tool-detail role sections, `ExplainerPage` `ROLE_DATA`. Decide: fully replace `roles` with `domains`, or keep `roles` for detail narrative + domains for filtering.

## Next
- [ ] **Rename `useCatLabel` → `catLabel`** (`frontend/src/lib/taxonomy.js`) — plain lookup function, not a hook, but its `use*` name trips ESLint's `rules-of-hooks` at 6 call sites (CapabilitiesPage, CapabilityPage, GuidePage ×2, HomePage, TrackPage). Pure rename, no logic change; touches `lib/taxonomy.js`, `lib/searchIndex.js`, and the 6 pages above plus `GuidesPage`. Deferred from the 2026-07-20 dedupe refactor — logged now, fix later.
- [ ] Confirm tool `access` (cost) + `cewaProvided` against an authoritative CEWA source, then fill for all tools (~8 seeded as placeholders). Optional: an "Availability" facet + "already in your toolkit" rail.
- [ ] Relevance ranking in tool data — so a card's "strongest" use/role/pedagogy is real, not authored-array order.
- [ ] Write the full guide library across use-categories and bands (4 samples exist).
- [ ] Build "How AI Works" sections (session, memory, token, model, use cases) in the `foundations` track.
- [ ] Complete remaining content across the existing tracks; decide fate of legacy `practice` track (mine → retire).
- [ ] Verify all block types render in `SectionPage` (text, heading, list, risk, pedagogy-note).
- [ ] Explainer pages (`/explainer/:category`) — confirm uses/roles/pedagogies content is real (roles/pedagogies look built; audit).

## Later (Phase 2 — needs a backend)
- [ ] Anonymous "Was this useful? / My school uses this" pulse widget per tool — Cloudflare Worker + KV, IP rate-limited, shown as social proof not a score (step 2 of the ratings sequence, DECISIONS 2026-07-13).
- [ ] Verified-educator ratings (school-email magic link, no full accounts) — only when traffic proves demand (step 3 of the ratings sequence).
- [ ] Click tracking for popularity (Plausible as interim static option).
- [ ] Full pedagogy rating system on tool cards (stars per framework — badges for now).
- [ ] "Most popular" / "highest rated" rows in the discovery layer.
- [ ] Backend API (Node/Express) — only when content becomes dynamic.

## Deferred
- [ ] School policy section — partially revived: implementation-in-schools article theme (see Now) carries the near-term version; a dedicated section/"For leaders" pillar stays deferred until the theme proves demand.
- [ ] User accounts / personalisation.

## Done (archive — terse)
- Dedupe refactor + guards (2026-07-20) — extracted `lib/cewa.js`, `lib/taxonomy.js`, `lumen/Eyebrow.jsx`, `lumen/useFacetState.js`; added ESLint (`npm run lint`); CLAUDE.md reuse-first rules + route table fix. Plan + full report at `plans/dedupe-refactor.md`. Found and fixed 2 pre-existing `cewaStatusMap` reference bugs in the process. Flagged but not fixed: `useCatLabel` naming collides with React's hook convention (6 files), 2 pre-existing `set-state-in-effect` lint findings, 3 fast-refresh warnings — all pre-existing, non-trivial, left for owner triage.
- Social cards complete (2026-07-15) — typographic `og-default.png` (source: `frontend/scripts/og-card.html`, render via headless Chrome), `SITE_URL` set, absolute OG tags verified live.
- Deployed live (2026-07-15) — Cloudflare Pages `pigeon-hole` project, `pigeon-hole-87j.pages.dev`; pre-launch `noindex` header; `main` = production branch model.
- Rebrand to **Pigeon Hole** (2026-07-15) — nav/footer/titles/OG/share text; follow-through items in Now.
- About page (`/about`) — shipped in 0687661.
- Save & Share — bookmarks (`useBookmarks`, localStorage) + `SaveButton`/`ShareButton` (tracking-free intent URLs), `/saved`, nav count.
- SEO architecture — BrowserRouter + `scripts/prerender.mjs` (per-route static HTML + OG) + SPA configs + `usePageMeta` across pages. Host = Cloudflare Pages.
- Global search — `GlobalSearch` + `lib/searchIndex.js` (⌘K, all content types, ranked).
- Glossary page (`/glossary`) — CEWA legend + all categorisations; one source of truth.
- Footer + unofficial/CEWA disclaimer (`SiteFooter`).
- Domain → Work-type filter hierarchy; full pedagogy labels; year-level ranges.
- Learn hub (`/learn`: About AI · AI Capabilities · AI Safety); `capabilities.json` + pages.
- Deep `pedagogies` track (4-part structure) + framework alignment + `/pedagogies/:id` deep-links.
- Guides frame — `guides.json`, `GuidesPage`/`GuidePage`, work-first nav + homepage.
- Tools library — `tools.json`, spotlight cards, `ToolCard`/`ToolSpotlight`, status badges + tooltips.
- `DraftNotice` AI-draft reminder on generated content.
- Lumen design system integrated; Vite migration; GitHub push auth resolved.
