# Task Map

Route work to the smallest relevant set of files and docs. Don't read everything by default — start with `CLAUDE.md`, `current-state.md`, and `git status --short`, then pick one route below.

## Routes

### Content (tracks, guides, articles, capabilities, glossary)
- Files: `frontend/src/content/*.json`, `frontend/src/content/schema.md`
- Rules: never hardcode strings in components; guides/capabilities reuse `tools.json` taxonomy (one source of truth); every guide keeps its mandatory `safety` block; Australian English.
- Risks: breaking block-type rendering in `SectionPage`; inventing pedagogy/safety claims — the owner is the source of truth for judgment content.
- Checks: `npm run build` (also exercises the pre-render over all content routes); spot-check affected pages in dev.

### Tools page / filtering / taxonomy
- Files: `frontend/src/content/tools.json` (`meta` + `tools`), `ToolsPage.jsx`, `ToolDetailPage.jsx`, `frontend/src/lumen/FacetFilters.jsx`, `ToolCard.jsx`, `ToolSpotlight.jsx`
- Rules: adding a filter category means updating both JSON `meta` and the page's `facets`/`values`/`setters`; keep filters in the one-row dropdown form (no pill rows); approval layer stays off (`config.js`).
- Docs: `tool-review-architecture.md` (DRAFT) for profile-depth work.
- Checks: dev-server click-through of filters + spotlight; build.

### UI / design system
- Files: `frontend/src/lumen/` (components + `tokens/*.css`), `frontend/src/index.css`
- Canonical spec: `lumen-design-system/project/` — check there before building new UI.
- Rules: no hardcoded hex — Lumen CSS custom properties only; DaisyUI utilities for layout/content pages, token-inline CSS for Lumen components; sentence case headings.
- Checks: visual review in dev, light/dark and narrow widths where relevant.

### Routing / SEO / meta
- Files: `frontend/src/App.jsx`, `frontend/scripts/prerender.mjs`, `frontend/src/lib/usePageMeta.js`, `public/_redirects`, `vercel.json`
- Rules: a new route needs all three: the `<Route>`, a `usePageMeta` call in the page, and coverage in `prerender.mjs`.
- Checks: `npm run build` then `npm run preview`; verify the pre-rendered `index.html` for the new route.

### Deploy / publishing
- Docs: `deploy.md` (Cloudflare Pages). Commit/push only per `close-out.md` authorisation.

### Process / continuity docs
- Files: `CLAUDE.md`, `.claude/*.md`
- Rules: before writing, name the canonical destination from the routing table in `close-out.md` — one canonical file per fact, short pointers elsewhere. Update `current-state.md` only when verified state changes. Keep entries terse; link by path.
- Owner-collaboration facts (non-coder, challenge-over-validate, approval gates, confidentiality) → `owner-context.md`.

## Source-of-truth order

When information conflicts, prefer in this order:

1. Current local code and working-tree evidence
2. The task the owner has explicitly authorised in this session
3. `DECISIONS.md` (accepted decisions)
4. `current-state.md`
5. `CLAUDE.md` architecture notes and route-specific docs (`schema.md`, `deploy.md`, `tool-review-architecture.md`)
6. `THREADS.md` and `BACKLOG.md`
7. Git history and old session summaries as historical record only

Historical records never silently override current code or accepted decisions.
