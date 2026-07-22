# Current State

Compact present-tense snapshot for session handoff. Update **only when the verified project state actually changes** — architecture facts live in `CLAUDE.md`, priorities in `BACKLOG.md`, open decisions in `THREADS.md`. Don't duplicate them here; say where we are.

Last updated: 2026-07-22

## Deployment

- **LIVE** at `https://pigeon-hole-87j.pages.dev` (Cloudflare Pages project `pigeon-hole`; see `deploy.md`). First deployed 2026-07-15.
- Branch model: `main` = production (owner flipping Cloudflare's production branch to `main` after the 2026-07-15 merge); feature branch pushes = preview deploys.
- Pre-launch **`noindex`** is active (`frontend/public/_headers`, `X-Robots-Tag: noindex`) — **must be deleted at launch** (on BACKLOG launch gate).
- Social cards **complete**: `SITE_URL` set (Cloudflare, 2026-07-15), production branch = `main`, absolute OG tags verified live, typographic `og-default.png` shipped (regenerate from `frontend/scripts/og-card.html`). Logo mark deferred — wordmark-only branding for now.

## Brand

- Site renamed **Pigeon Hole** (2026-07-15; was "AI for Teachers" / repo "AI Explore"). Bird-family link to owner's other product, Budgie. Nav/footer/titles/OG updated. Domain purchase, trademark/handle checks, and repo rename still open (BACKLOG).

## What's live in the codebase

- Pages: Home, Guides (+detail), Articles (+detail, scaffolded — 2 placeholder articles), Tools (+detail), Explainer, Learn hub (+Capabilities index/detail), Glossary, Saved, About, Track/Section pages, 404.
- The CEWA approval layer is switched **OFF** (`frontend/src/config.js` → `SHOW_APPROVAL_STATUS = false`) because the statuses were internal-sourced. Data remains in `tools.json`; don't surface it without owner authorisation (see THREADS).
- Save & Share shipped: `useBookmarks` (localStorage), `SaveButton`/`ShareButton`, `/saved`, nav count.
- Global search (⌘K) indexes all content types via `lib/searchIndex.js`.

## Active workstream

- Guides → Articles rework: scaffold done; real articles, nav repoint (Explore → `/articles`), and homepage reconciliation still pending.
- Tool decision-support depth (richer tool profiles) is in progress per the DRAFT `tool-review-architecture.md` — card signals + review spine await owner sign-off.
- **The teacher improvement model is COMPLETE (2026-07-22); benchmark work is now next.** Two objects, cleanly separated: the improvement model is a continuous loop of `Stage · Context · Catalyst`, and the **AI output benchmark** scores delivery only (pedagogy lives in the prompt, never in the score). The model settled as **`ACME`** — a dual-register design (the site's progressive-disclosure pattern): a memorable label per letter plus a plain teacher-facing question:
  - **A · Audience** — Who am I teaching?
  - **C · Content** — What am I teaching?
  - **M · Method** — How will I teach it so it sticks?
  - **E · Evidence** — How is learning evident?

  Agent = teacher (asks all four), object = learner. Loop runs A→C→M→E→A; Evidence feeds next turn's Audience. Each stage draws on `Context` (situational, improves this turn) and `Catalysts` (developmental, improve every future turn). "Depth" = a quality bar on the content behind each letter (new, provocative ideas at both minutiae and macro scale), not an architecture choice. All four of the model's open items are now closed. See DECISIONS → the two "model is complete" / stage-naming 2026-07-22 entries and the two 2026-07-21 entries.

## Known gaps / risks

- Track content audited 2026-07-21 (`plans/content-audit-2026-07-21.md`): **structurally clean** — all 7 block types render, all 206 blocks well-formed. The gap is **volume, not correctness**: `foundations` (4 sections) and `risks` (5) are thin next to `pedagogies` (8).
- `/explainer/*` serves no page metadata (no `usePageMeta`, not prerendered) — the one hole in an otherwise complete SEO setup. On BACKLOG.

## Immediate handoff

1. Follow the Session Start protocol in `CLAUDE.md` (git sync + read this file).
2. Route the task via `task-map.md`; read only what the task needs.
3. Default to discussion/planning until the owner explicitly authorises changes.
