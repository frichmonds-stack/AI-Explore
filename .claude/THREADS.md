# Open Threads

## 🔴 Blocking
_(none)_

## 🟡 Unresolved
- **CEWA approval data — hidden, needs authorisation to reinstate** — the approval statuses were internal-sourced (no public version found), so the whole approval layer is switched OFF (`config.js` `SHOW_APPROVAL_STATUS=false`; see DECISIONS 2026-07-01). To bring it back: confirm a public source OR get CEWA authorisation, then flip the flag + repopulate. Also: the internal values remain in git *history* (private repo) — scrub history before making the repo public. Supersedes the old `access`/`cewaProvided` placeholder + Nurture-AI-pilot threads.
- **Lumen tweaks** — direction approved but specific tweaks needed. To be worked through when integrating into frontend.
- **Content completeness** — most JSON files have partial content. No audit done yet.
- **Block types in SectionPage** — not confirmed all block types (`risk`, `pedagogy-note`, `list`, `heading`) render correctly.

## 🟢 Resolved
- ~~GitHub push auth failing (401)~~ — resolved 2026-07-01: `git push` to the feature branch succeeded (commits 482ed58 / e530490). Credentials now working; no longer blocking.
- ~~Hosting decision (CEWA tenant)~~ — resolved 2026-06-25: launching as a **personal project** on a static host (Netlify/Vercel/Cloudflare/GitHub Pages), no CEWA IT dependency. See DECISIONS.md → Infrastructure. (New downstream thread: unofficial-site disclaimer, above.)
- ~~CRA + Tailwind v4 styling broken~~ — migrated to Vite, DaisyUI rendering correctly.
- ~~Git repo not initialised~~ — repo at `frichmonds-stack/AI-Explore`, pushed to GitHub.
- ~~CLAUDE.md too heavy~~ — slimmed down, procedures split into `.claude/` directory.
- ~~No design system~~ — Lumen design system created by Claude Design, direction approved.
- ~~No planning docs~~ — BACKLOG.md, DECISIONS.md, THREADS.md, project-context.md all in place.
