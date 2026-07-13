# Backlog

Priority: top = next up. `[ ]` open · `[~]` in progress. Completed work is in **Done** at the foot.

## Now
_Launch gate (2026-07-13): ship when there are **≥5 solid tool reviews + 2 articles** (one = the review-methodology piece). See DECISIONS → Strategy 2026-07-13._
- [ ] **Benchmark foundations** (new 2026-07-13; see DECISIONS → benchmark) — in order: (1) draft the **core premise + principles + bias declaration** page (strawman for owner to argue with); (2) **rubric criteria descriptors** (6 criteria, 0–4, teacher-natural language, sourced); (3) **prompt pack v1** (9 versioned best-practice prompts, learning area + band pinned) + applicability matrix. Feeds directly into the 5 launch reviews and the methodology article.
- [~] **Tool decision-support depth** — deepen tool profiles per the DRAFT spec [`tool-review-architecture.md`](tool-review-architecture.md): richer schema (studentUse, privacy, recommendedUses, avoidWhen, limitations, review dates, sources), surfaced on `ToolDetailPage`, with unknowns shown as unknowns. First worked example: Microsoft Copilot (mark approval **unreviewed** until sourced). *Card signals + review spine await owner sign-off.*
- [~] **Guides → Articles rework** — scaffold built (`articles.json`, `ArticlesPage`/`ArticlePage`, routes, search-indexed, `usePageMeta`; footer link). TODO: (a) write real articles (2 placeholders) — first two: the **review-methodology piece** (launch-gate anchor) and an **"AI implementation in schools"** piece (leadership wedge — see DECISIONS 2026-07-13); (b) repoint nav **Explore → `/articles`** once there's content (one-liner in `Layout.jsx`; deferred to avoid an empty front door); (c) reconcile homepage (still leads with Guides); (d) decide fate of task-walkthrough guides + legacy `explore` research.
- [ ] **About page** (pre-launch, critical path) — long-form: what this is, who made it, how tools are vetted, the CEWA-source/unofficial disclaimer. Footer already carries the short version.
- [ ] **Rebrand** — "AI for Teachers" ≈ "AI for Education" (aiforeducation.io). Shortlist (avoid AI for Education / Lumen Learning / BetterLesson): *warm* — Staffroom (top; check UK recruitment brand), Commonroom, The Commons · *strategy* — Throughline (top), The Long Way · *guidance* — Wayfinder, Northlight · *craft* — Teachcraft, Practised. When picked: domain (.com/.com.au/.ai) + trademark + handle check, then rename across UI/content/repo/docs.
- [ ] **`public/og-default.png`** (1200×630 share image) + set `SITE_URL` build env var on the host, so social cards show an image.
- [~] **Definitions as inline tooltips** — done: `InfoTip` + `lib/definitions.js`, wired into `FacetFilters` (both filter bars). TODO: extend to tag chips on tool/guide **cards** (`ToolCard` uses native `title=`) and detail pages; glossary stays the fallback.
- [ ] **Finish role → domain migration** — filter/glossary/tooltips use **Domain** (parent of Work type), but legacy `roles` still drives card chips, tool-detail role sections, `ExplainerPage` `ROLE_DATA`. Decide: fully replace `roles` with `domains`, or keep `roles` for detail narrative + domains for filtering.

## Next
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
