# Open Threads

## 🔴 Blocking
- **GitHub push auth failing** — `git push` returns 401 despite token being regenerated and stored via `git credential-osxkeychain store`. Commits are local only until resolved. Investigate whether managed device / org policy is interfering with keychain credential lookup.

## 🟡 Unresolved
- **Tool `access` / `cewaProvided` are placeholders** — cost tier and "in the CEWA stack" flag added to `tools.json` (detail page only). Seeded on ~8 tools; the three marked `cewaProvided` (microsoft-copilot, microsoft-reading-coach, seqta-ai-assist) and all cost tiers are best-guesses flagged in-UI as "pending CEWA confirmation". Needs an authoritative CEWA source before it can be trusted, then fill the remaining tools.
- **Unofficial-site disclaimer — footer DONE, About page pending** — launching as a personal project (see DECISIONS.md, Infrastructure); site shows CEWA approval data but is **not affiliated with CEWA**. The short disclaimer now ships in the new site footer (`SiteFooter.jsx`, snapshot date in `CEWA_AS_OF`). Still needed before going public: a long-form **About page** (what this is, who made it, how tools are vetted, the CEWA-source caveat in full).
- **Lumen tweaks** — direction approved but specific tweaks needed. To be worked through when integrating into frontend.
- **Nurture AI pilot status** — listed as Jan–Jun 2025 pilot on CEWA list. Likely expired. Shown as-is per CEWA's classification — their responsibility to update.
- **Content completeness** — most JSON files have partial content. No audit done yet.
- **Block types in SectionPage** — not confirmed all block types (`risk`, `pedagogy-note`, `list`, `heading`) render correctly.

## 🟢 Resolved
- ~~Hosting decision (CEWA tenant)~~ — resolved 2026-06-25: launching as a **personal project** on a static host (Netlify/Vercel/Cloudflare/GitHub Pages), no CEWA IT dependency. See DECISIONS.md → Infrastructure. (New downstream thread: unofficial-site disclaimer, above.)
- ~~CRA + Tailwind v4 styling broken~~ — migrated to Vite, DaisyUI rendering correctly.
- ~~Git repo not initialised~~ — repo at `frichmonds-stack/AI-Explore`, pushed to GitHub.
- ~~CLAUDE.md too heavy~~ — slimmed down, procedures split into `.claude/` directory.
- ~~No design system~~ — Lumen design system created by Claude Design, direction approved.
- ~~No planning docs~~ — BACKLOG.md, DECISIONS.md, THREADS.md, content-architecture.md all in place.
