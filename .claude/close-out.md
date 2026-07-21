# Modes & Close-Out Procedure

## Mode Gate

| Owner command | Allowed action |
|---|---|
| `Plan only` / discussion | Inspect, read, propose; no repo changes. |
| `execute now` / "implement / fix / go ahead" | Implement the currently discussed batch; no commit or push. |
| `Normal Close` | Checks + docs + continuity + final report; no commit or push. |
| `Publish Close` | Normal Close work, then confidentiality pass, commit, push, **merge to `main` (deploys live)**, report. |
| `Commit` / `Push` | Only that named git step, for approved completed work. |

Rules:
- Default after session start is planning/discussion mode.
- Vague approval (`ok`, `sounds good`, "what next?") is **not** implementation approval.
- `execute now` covers only the currently discussed batch — no silent scope expansion.
- If the owner just says "close out" without specifying, ask which close — don't assume Publish.

## Close-out checklist (both modes)

1. Run the best available checks for what changed — `npm run build` is the default gate (it also exercises the pre-render across all content routes); browser-preview verification for visible UI changes.
2. Update the docs the work actually touched — classify each update and write it to its **canonical destination only**, short pointers elsewhere:

| Update type | Canonical location |
|---|---|
| Present-tense project snapshot | `current-state.md` (only when verified state changed) |
| Priorities / concrete next work | `BACKLOG.md` |
| New or resolved open decision | `THREADS.md` |
| Durable decision + rationale | `DECISIONS.md` |
| Dated session summary | `session-log.md` |
| Owner-collaboration facts | `owner-context.md` |
| Architecture / conventions / routing | `CLAUDE.md` or `task-map.md` |
| Content model rules | `frontend/src/content/schema.md` |
| Deploy steps | `deploy.md` |

   It's fine to report "continuity: no update required" when nothing material changed.

   **Before moving on, re-read the session's discussion turns, not just the diff.** The routing table above is easy to satisfy from `git diff` alone — which silently misses decisions reached in conversation that produced little or no code, and misses them worst in a long session that later gets consumed by an unrelated problem (a failing push, a broken tool), because by close-out time the diff is the only thing still in view. Ask explicitly: *what did the owner rule on today that isn't visible in the diff?* Anything with a stated rationale belongs in `DECISIONS.md`, marked **OWNER CALL** where the owner actually ruled and flagged as proposal where it was AI elaboration they didn't examine (see `owner-context.md`). A shipped artefact whose reasoning is unrecorded is a half-finished close.
   *Why this is here: the 2026-07-20 premise design (four questions and a stance, the three-ring scope model, the deferral ruling) passed through a Publish Close unrecorded — only the homepage card it produced was written down. It survived by chance, recovered from a transcript a day later.*
3. Add a dated entry to `session-log.md` for meaningful implementation, decision, or handoff milestones (not for trivial sessions). If the log exceeds ~150 lines, archive older entries to `session-log-archive.md` and leave a pointer.

## Publish Close only

```bash
# Stage specific files — never use git add -A blindly
git add <files>

# Commit — plain English, what changed and why
git commit -m "descriptive message"

# Push to feature branch
git push -u origin claude/amazing-carson-5zucgf

# Publish = merge to main (this is what deploys the live site)
git checkout main && git pull origin main
git merge claude/amazing-carson-5zucgf && git push origin main
git checkout claude/amazing-carson-5zucgf
```

- **`main` = production** (Cloudflare Pages builds it; live at `pigeon-hole-87j.pages.dev`). Never push *directly* to `main` — it only changes via the merge step above, under an explicit `Publish Close`. Feature-branch pushes produce preview deploys only.
- Rationale (recorded 2026-07-15): all code is AI-written and the owner is non-technical, so the live site must never change as a side effect — only by a deliberate, owner-named publish step.
- **Confidentiality pass before commit:** no CEWA internal-sourced approval data, no internal wording, in anything staged or in `dist/` (see `owner-context.md` confidentiality gate).
- If push fails with 403: retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s).
- Cloudflare Pages deploys from the branch — verify the deploy when the change should go live and timing allows (see `deploy.md`).

## Final report — every close

State explicitly:

- files changed
- docs updated (or "no update required")
- checks run, their results, and **what they prove in product terms** — how the owner can verify without reading code
- commit + push status, and deploy/live verification status
- assumptions, uncertainties, and manual review still needed

**Never claim GitHub is updated or the site is live unless it was actually pushed and verified.** If not done, say exactly what remains.
