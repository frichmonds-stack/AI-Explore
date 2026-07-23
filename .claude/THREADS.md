# Open Threads

## 🔴 Blocking
- *(none)*

## 🟡 Unresolved
- **CEWA benched for the foreseeable future** (owner call 2026-07-23; see DECISIONS → Strategy 2026-07-23) — the CEWA *angle* is off the table, not merely paused: do not treat approval/badges as a live or near-term feature, and **do not lean on CEWA as the site's authority/trust mechanism** (that role now belongs to the owner-authored explanatory spine). Historical detail retained: the approval statuses were internal-sourced (no public version found), so the whole approval layer is switched OFF (`config.js` `SHOW_APPROVAL_STATUS=false`; see DECISIONS 2026-07-01); the internal values remain in git *history* (private repo) — scrub history before making the repo public. *If* it were ever revived it would need a confirmed public source OR CEWA authorisation, then flip the flag + repopulate — but that is not expected soon. Supersedes the old `access`/`cewaProvided` placeholder + Nurture-AI-pilot threads.
- **Lumen tweaks** — direction approved but specific tweaks needed. To be worked through when integrating into frontend.
- **Content completeness** — audited 2026-07-21 (`plans/content-audit-2026-07-21.md`): structurally clean, but thin by volume in `foundations` (4 sections) and `risks` (5) next to `pedagogies` (8). The remaining thread is *writing more*, not fixing anything.

## 🟢 Resolved
- ~~Block types in SectionPage~~ — resolved 2026-07-21: all 7 block types render, and all 206 authored blocks across the 5 track files validate with 0 problems. Evidence in `plans/content-audit-2026-07-21.md`.
- ~~GitHub push auth failing again (2026-07-20)~~ — resolved 2026-07-21: the owner re-authenticated with a personal access token on 2026-07-20 (the token goes in the *password* field — GitHub no longer accepts account passwords). Pushes to both the feature branch and `main` succeeded today with no prompt, so the credential is stored and holding. **If it recurs:** it's token expiry — a new PAT with `repo` scope, entered at the password prompt, is the fix, and an agent cannot do it.
- ~~GitHub push auth failing (401)~~ — resolved 2026-07-01: `git push` to the feature branch succeeded (commits 482ed58 / e530490). Credentials now working; no longer blocking.
- ~~Hosting decision (CEWA tenant)~~ — resolved 2026-06-25: launching as a **personal project** on a static host (Netlify/Vercel/Cloudflare/GitHub Pages), no CEWA IT dependency. See DECISIONS.md → Infrastructure. (New downstream thread: unofficial-site disclaimer, above.)
- ~~CRA + Tailwind v4 styling broken~~ — migrated to Vite, DaisyUI rendering correctly.
- ~~Git repo not initialised~~ — repo at `frichmonds-stack/AI-Explore`, pushed to GitHub.
- ~~CLAUDE.md too heavy~~ — slimmed down, procedures split into `.claude/` directory.
- ~~No design system~~ — Lumen design system created by Claude Design, direction approved.
- ~~No planning docs~~ — BACKLOG.md, DECISIONS.md, THREADS.md, project-context.md all in place.
