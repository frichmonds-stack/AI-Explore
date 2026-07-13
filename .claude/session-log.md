# Session Log

Dated, append-at-top chronological record of meaningful sessions: what happened, what was decided, what's next. Keep entries terse — detail belongs in the canonical docs (see `close-out.md` routing table). When this file exceeds ~150 lines, move older entries to `session-log-archive.md` and leave a pointer.

## 2026-07-13 — AI workflow ported from Budget-Tool

- Reviewed the owner's other repos for their AI workflow systems; Budget-Tool (private, Rust/Tauri) is the mature one — `AGENTS.md` router, mode gate, owner-context, canonical-destination write routing, session log with rotation, closeout procedure with honest final report.
- Ported and adapted here: `current-state.md`, `task-map.md` (routing + source-of-truth order), rewritten `close-out.md` (Mode Gate, doc-routing table, confidentiality pass, final-report contract), new `owner-context.md`, this log. `CLAUDE.md` Session Start now routes through them and defaults to discussion mode.
- Deliberately not ported: ADR directory (DECISIONS.md serves that role), per-area `ai/state/` files + INDEX.md files (overkill at this size), owner-run-only visual smoke (this is a web app — agents verify in browser preview), data-safety scan (adapted into the CEWA confidentiality pass instead).
- Recorded in DECISIONS.md → Process. Work is local, uncommitted, awaiting close instruction.
