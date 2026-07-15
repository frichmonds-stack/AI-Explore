# Session Log

Dated, append-at-top chronological record of meaningful sessions: what happened, what was decided, what's next. Keep entries terse — detail belongs in the canonical docs (see `close-out.md` routing table). When this file exceeds ~150 lines, move older entries to `session-log-archive.md` and leave a pointer.

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
