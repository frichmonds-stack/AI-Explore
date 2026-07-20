# Open Threads

## 🔴 Blocking
- **GitHub push auth failing again (2026-07-20)** — `git push` to the feature branch rejected with "Invalid username or token. Password authentication is not supported." Same symptom as the 2026-07-01 thread (resolved below at the time) but the stored credential has since gone stale/been revoked — token expiry or a rotated credential are the likely causes. Blocks the current Publish Close: commit `1c7ab6b` (dedupe refactor + homepage coming-soon card) is committed locally on `claude/amazing-carson-5zucgf` but **not pushed, not merged to `main`, not live**. Fix needs the owner to re-authenticate the `osxkeychain`-stored GitHub credential (new personal access token, or re-run whatever login flow set it up originally) — not something an agent can do without entering credentials, which is out of bounds. Once fixed, re-run the Publish Close push+merge steps in `close-out.md`.

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
