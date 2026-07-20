# Session Log

Dated, append-at-top chronological record of meaningful sessions: what happened, what was decided, what's next. Keep entries terse — detail belongs in the canonical docs (see `close-out.md` routing table). When this file exceeds ~150 lines, move older entries to `session-log-archive.md` and leave a pointer.

## 2026-07-21 — Housekeeping while owner away: rename + content audit

- Owner left two scoped items with edit+commit authority (no push, no `main`). Both done on the feature branch.
- **`useCatLabel` → `catLabel`** — cleared the 6 ESLint `rules-of-hooks` errors; also collapsed `searchIndex.js`'s duplicate copy into shared `lib/taxonomy.js`. Lint 8 → 5 problems (remainder pre-existing and logged). Build passes, 75 routes prerendered, labels verified rendering in the browser.
- **Content & render audit** (report: `plans/content-audit-2026-07-21.md`) — structural validator over all 5 track files: 0 problems across 206 blocks, all 7 block types render, explainer content is real not stubbed. Closed both "verify" backlog items.
- Three new findings raised: `/explainer/*` serves no page metadata (no `usePageMeta` + not prerendered — a real SEO hole); `quote` blocks have two incompatible shapes across `SectionBlock` vs `ArticlePage`'s duplicate renderer; `ROLE_DATA` hardcoded in `ExplainerPage` (folded into the role→domain item).
- Nothing pushed — awaiting owner review. The metadata fix needs 3 titles/descriptions written, deliberately left rather than guessed.

## 2026-07-20 — Publish Close: dedupe refactor + homepage coming-soon card live

- Owner-authorised Publish Close covering both same-day items below: the dedupe refactor and the homepage "coming soon" 5th pillar card ("The whole job" — behaviour management, relationships, parent contact, admin — named as out of scope for the benchmark's core-teaching-loop focus for now, not silently omitted).
- Also flipped `.claude/launch.json` to `autoPort: true` so concurrent sessions' dev previews don't collide on port 5173.
- Checks: `npm run build` clean (75 routes prerendered); confidentiality pass clean (no new CEWA-internal-sourced wording in the diff — `lib/cewa.js`/`lib/taxonomy.js` only centralise pre-existing public-facing mapping logic).
- Merged `claude/amazing-carson-5zucgf` → `main`, pushed. Live once Cloudflare Pages picks up the `main` push (see `deploy.md`).

## 2026-07-20 — Dedupe refactor + guards (execute now, no commit)

- Prior session (Fable) surveyed the codebase for duplication, wrote a plan ([`plans/dedupe-refactor.md`](plans/dedupe-refactor.md)), and handed off for Sonnet to execute.
- Executed all 6 steps: extracted `lib/cewa.js` (was duplicated identically across 6 files, not 5 as first estimated — GlossaryPage had a 6th copy), `lib/taxonomy.js` (label lookups), `lumen/Eyebrow.jsx` (replaced 3 local component defs + ~30 inline uppercase-mono style blocks across ~16 files), `lumen/useFacetState.js` (shared Tools/Guides filter state + domain→work-type narrowing rule). Added ESLint (flat config, `npm run lint`) and fixed its trivial findings (unused `React` imports, unused vars). Updated CLAUDE.md with reuse-first rules and fixed a stale route-table section (said `HashRouter`/dynamic `/:track`; code is `BrowserRouter` with explicit per-track routes).
- **Found and fixed 2 real bugs introduced mid-refactor**: HomePage and GuidePage each had a leftover `cewaStatusMap[...]` reference after the local map was deleted in step 1 — would have crashed those components at runtime. Neither `npm run build` nor the pre-render script catches this class of bug (no headless browser, doesn't execute the React tree), so caught only by loading every touched page in the browser preview and checking console — all ~20 touched pages were verified this way, zero console errors at the end.
- **Not fixed, flagged for owner**: `useCatLabel` (in `lib/taxonomy.js`) is named like a React hook (`use*` prefix) but isn't one, which trips ESLint's `rules-of-hooks` in 6 call sites — pre-existing naming issue, first caught because this session added ESLint; fixing means a multi-file rename, out of scope for a "trivial fix". Also 2 pre-existing `set-state-in-effect` findings (`GlobalSearch.jsx`, `ToolsPage.jsx`) and 3 `react-refresh/only-export-components` warnings — none introduced this session, none fixed.
- Owner was concurrently hand-editing `HomePage.jsx` (added a 5th "coming soon" pillar card) during this session — left untouched, no conflict since this session's edits to that file were already complete.
- No commit/push — `execute now` scope only, per mode gate.

## 2026-07-15 — First deploy + rebrand to Pigeon Hole (Publish Close)

- **Site is live**: owner set up Cloudflare Pages (project `pigeon-hole` → `pigeon-hole-87j.pages.dev`), guided through the Workers-vs-Pages dashboard maze; deep links + per-route titles verified working in the live deploy.
- **Name decided: Pigeon Hole** — brainstormed from the Staffroom shortlist; owner picked it for the staffroom-pigeonhole meaning + bird-family link to their product Budgie. Renamed across nav/footer/titles/OG/share text; default title now carries a descriptor ("practical AI help for teachers").
- Shipped pre-launch **`noindex`** header (`public/_headers`) instead of an under-construction banner — rationale in DECISIONS.
- **Branch model changed**: `main` = production, publish = merge to main under Publish Close (supersedes "never push to main"; rationale now written down in DECISIONS/CLAUDE.md/close-out). This session's Publish Close performed the first merge; owner flips Cloudflare's production branch to `main` after it.
- Docs recalibrated: stale BACKLOG items (About page, rebrand, approval-layer) reconciled; deploy.md now records actual settings; launch gate gains "delete noindex + swap SITE_URL".
- (Later same day) Owner flipped production branch to `main`; absolute OG tags verified live. Logo attempts (AI image gen + my SVG drafts) rejected → **wordmark-only for now**, logo mark deferred to a human designer. Shipped typographic `og-default.png` (Newsreader/palette card; source `frontend/scripts/og-card.html`, rendered via headless Chrome) — social-card chain complete.
- Next: rebrand follow-through (domain/ABN, handles), benchmark foundations, block-type render check.

## 2026-07-13 (later) — Benchmark design session (discussion only, no code)

- Designed the tool benchmark with the owner: 6-criteria "excellent practice" rubric × 9 tasks (8 AC learning areas + differentiate-an-existing-task) × applicability matrix; best-practice prompts in plain teacher voice (owner call — teachers should prompt from that headspace; kills the "AI didn't know" excuse); differentiation is a task not a criterion (owner call); ECE deferred.
- Key realisation: the benchmark needs a **core premise** — a one-page stated theory of good teaching with sourced principles and an explicit bias declaration. That document is now the site's keystone; drafting order premise → criteria → prompts. Full detail in DECISIONS → benchmark section.
- Owner also flagged a first-person opinion piece. Published via Publish Close (this commit).

## 2026-07-13 — Expansion strategy session (discussion only, no code)

- Full repo/strategy review; content audit: 27 tools, 6 guides, 2 placeholder articles, 11 capabilities — architecture ahead of content.
- Owner decisions captured (DECISIONS → Strategy 2026-07-13): launch gate = ≥5 solid reviews + 2 articles (one = methodology piece); ratings sequenced (editorial → anonymous pulse widget → verified magic-link ratings), no accounts now; "AI implementation in schools" as leadership-wedge article theme.
- Broader strategy discussed (not yet backlogged as tasks): school-calendar-timed guides for SEO long-tail, shareable staffroom artefacts (staff-meeting deck, safety one-pager), newsletter, prompt library; deprioritise foundations/capabilities expansion.
- Next: launch critical path (rebrand/domain, OG image, verify About) then first reviews (Copilot worked example).

## 2026-07-13 — AI workflow ported from Budget-Tool

- Reviewed the owner's other repos for their AI workflow systems; Budget-Tool (private, Rust/Tauri) is the mature one — `AGENTS.md` router, mode gate, owner-context, canonical-destination write routing, session log with rotation, closeout procedure with honest final report.
- Ported and adapted here: `current-state.md`, `task-map.md` (routing + source-of-truth order), rewritten `close-out.md` (Mode Gate, doc-routing table, confidentiality pass, final-report contract), new `owner-context.md`, this log. `CLAUDE.md` Session Start now routes through them and defaults to discussion mode.
- Deliberately not ported: ADR directory (DECISIONS.md serves that role), per-area `ai/state/` files + INDEX.md files (overkill at this size), owner-run-only visual smoke (this is a web app — agents verify in browser preview), data-safety scan (adapted into the CEWA confidentiality pass instead).
- Recorded in DECISIONS.md → Process. Work is local, uncommitted, awaiting close instruction.
