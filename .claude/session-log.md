# Session Log

Dated, append-at-top chronological record of meaningful sessions: what happened, what was decided, what's next. Keep entries terse — detail belongs in the canonical docs (see `close-out.md` routing table). When this file exceeds ~150 lines, move older entries to `session-log-archive.md` and leave a pointer.

## 2026-07-23 — Strategy discussion: arena.ai, CEWA benched, taxonomy data model (Publish Close, docs only)

Discussion session prompted by the owner asking whether to borrow from **arena.ai** (LMArena — crowdsourced blind head-to-head LLM leaderboard). No code; five owner rulings banked to `DECISIONS.md` (Strategy 2026-07-23):

1. **CEWA benched for the foreseeable future** — not a paused switch; no longer the site's authority mechanism (that's the owner-authored explanatory spine). `THREADS.md` + `current-state.md` reworded off "pending reinstatement".
2. **Rubric ≠ ACME** — ACME is the broad improvement spine; the rubric is a narrow rib ("for a given stage, which AI tools help you do it better"). Pedagogy lives in ACME, never in the score.
3. **Phased comparison** — authored rubric now (low content), sample-derived comparison later; crowd-vote/Elo explicitly out of scope. Rubric output must be *structured* because each judgement is a future comparison sample.
4. **Stage-primary / job-tagged taxonomy** — eventual data model inverts today's use-category-primary axis, for branding/soul (job = table stakes, stage = unique). Stage primary in structure; job primary at entry point ("job is the door, stage is the house").
5. **Store `job`, derive `stage`** from a central `job → stage(s)` map (capabilities.json pattern) — gives cross-stage for free at the job level; store stage only for a genuine per-tool editorial exception (deferred).

Also parked a Phase-2 backlog item: instrument filter choice (job vs stage) as a proxy for the work→pedagogy pull. Memory: `project_cewa_benched` saved. Still to rule: phase-1→2 trigger count (~15–20 tools floated).

## 2026-07-22 — Teacher improvement model COMPLETE (two Publish Closes)

Owner directed the sequence: finish the teacher improvement model, then move to benchmarking. Over one long design session, worked all four of the model's open items to closure. The model is now complete.

**Result — the `ACME` model (dual-register):**
- **A · Audience** — Who am I teaching?
- **C · Content** — What am I teaching?
- **M · Method** — How will I teach it so it sticks?
- **E · Evidence** — How is learning evident?

A continuous loop (A→C→M→E→A; Evidence feeds next turn's Audience). `ACME` is the memory hook (also = "summit", apt); the questions are the working layer teachers think with — the site's progressive-disclosure pattern applied to the model itself. Agent = teacher, object = learner throughout.

**The four items, and how each closed (all OWNER CALLs — full reasoning in DECISIONS → the two 2026-07-22 entries):**
1. **Stages named** — settled first as Who/What/How/Evidence; differentiation folded into `Who` (a class is always many learners). `Evidence`/`Review`/`Feedback` weighed — Feedback/Review collide with site vocabulary.
2. **Catalyst split** — no mechanisms-vs-domains split; "domains" retired as a term. The owner's own test dissolved it: technique-that-transfers = Catalyst, knowing-this-class = Context.
3. **Depth** — not an architecture question (agent misread the owner's word twice). Depth = a quality bar on the content behind each letter: new, provocative ideas at both minutiae and macro scale, serving novice and veteran alike.
4. **Register** — resolved as *both*: ACME labels + a question per letter.

**Late owner challenge worth recording:** "should this all be framed around the learner instead of the teacher?" Tested against the set and revealed the stages don't sit on one side — inner two (What/Method) are teacher-active, outer two (Audience/Evidence) are learner-described. Conclusion: teacher is the agent (keeps the improvement engine and Catalyst axis attached to a subject; a full learner-frame would turn a *teacher improvement* model into a generic learning-design model), questions point at the learner. This also drove the E wording from "evidence of my teaching" → "how is learning evident?" (the richest phrasing — asks the teacher to define what learning even looks like).

**Process point the owner raised, logged for future sessions:** an AI-coined term reused mid-conversation and not objected to isn't owner confirmation — silence isn't agreement. Recorded in DECISIONS and in this agent's persistent memory; it generalises past this decision.

Docs only, no frontend code touched — no build check applicable. Confidentiality pass clean.

**Late reframe (same session, second Publish Close):** heading toward the benchmark, the owner reframed the next job. It is not "the benchmark premise" — it is **authoring the site's explanatory spine** (what the site is → the stance → the bias declaration → ACME → how tools are evaluated); the benchmark methodology is a *section* of that. Two owner points banked: (1) the **two-part bias declaration** — a positional STEM-teacher lens to *disclose*, and a science-of-learning-as-a-floor conviction to *defend* (held with respect for teaching as an art) — see DECISIONS → "explanatory spine" 2026-07-22; (2) **everything currently on the site is AI-generated placeholder**, so the ACME+stance+bias work is the project's first owner-authored content and becomes the reference the rest of the site is reconciled *to*. This sets a drafting standard for the spine: owner-authored in substance, or it is just more cruft. **Next session opens on this** — starter prompt handed to the owner. Still to rule: is "the stance" a named component; the 6 delivery criteria; page structure.

## 2026-07-21 — Housekeeping while owner away: rename + content audit

- Owner left two scoped items with edit+commit authority (no push, no `main`). Both done on the feature branch.
- **`useCatLabel` → `catLabel`** — cleared the 6 ESLint `rules-of-hooks` errors; also collapsed `searchIndex.js`'s duplicate copy into shared `lib/taxonomy.js`. Lint 8 → 5 problems (remainder pre-existing and logged). Build passes, 75 routes prerendered, labels verified rendering in the browser.
- **Content & render audit** (report: `plans/content-audit-2026-07-21.md`) — structural validator over all 5 track files: 0 problems across 206 blocks, all 7 block types render, explainer content is real not stubbed. Closed both "verify" backlog items.
- Three new findings raised: `/explainer/*` serves no page metadata (no `usePageMeta` + not prerendered — a real SEO hole); `quote` blocks have two incompatible shapes across `SectionBlock` vs `ArticlePage`'s duplicate renderer; `ROLE_DATA` hardcoded in `ExplainerPage` (folded into the role→domain item).
- Nothing pushed — awaiting owner review. The metadata fix needs 3 titles/descriptions written, deliberately left rather than guessed.
- **Recovered the 2026-07-20 premise design from that session's transcript** — four questions + stance, three-ring scope model, and the owner's ruling to acknowledge-and-defer rings 2–3. It had never been written to `DECISIONS.md`; only the homepage "coming soon" card it produced was recorded. Now captured (DECISIONS → 2026-07-20) with owner calls marked and AI elaboration flagged as unruled.
- Owner's point, fairly made: the close-out procedure was supposed to prevent exactly this. Root cause — the checklist prompts for what changed *on disk*, so discussion-only decisions can pass through a Publish Close unrecorded, worst in a session later consumed by an unrelated problem (that one ended in a long push-auth fight). Added an explicit "re-read the discussion turns, not just the diff" step to `close-out.md` step 2.

## 2026-07-21 (later) — Benchmark + improvement model design session (discussion; docs only)

- Long design conversation, recorded to `DECISIONS.md` **as it happened** rather than at close-out — the new close-out step working as intended.
- **The two objects were separated properly.** The improvement model and the AI output benchmark are not one thing viewed from two sides; that 2026-07-20 line is withdrawn as false. It broke at two points under examination, and the breakages were the evidence.
- **Benchmark: scores delivery only.** Owner's reasoning — teachers hold genuinely different pedagogical positions, so a pedagogically-weighted score turns the site's declared bias into a measurement aimed at people who don't share it. Pedagogy lives in the prompt; the practitioner controls it. Judgement, integrity and safety concerns are discussed in review prose, never scored. Un-annotated outputs are fine to publish — comparability is the point.
- **Improvement model: `Stage · Context · Catalyst`,** continuous, with catalysts (coaching, observation, research) as the route by which new knowledge enters. Its only link to the benchmark is that it shapes the prompts — it is explicitly *not* a lens for reading AI output, which reversed an earlier AI proposal.
- **Repeated pattern worth noting for future sessions:** the owner corrected the same conflation (improvement model vs benchmark) three times before it stuck, and separately pre-empted the docs-not-verified problem by stating up front that the *framework* is committed while its *contents* are not. Both are recorded in the entries themselves.
- Backlogged: visualising the model as a proper design job, sequenced after the stages settle.
- **Still uncommitted and next up: the stages themselves** — everything now hangs off four questions whose wording is still AI-drafted.

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
