# Current State

Compact present-tense snapshot for session handoff. Update **only when the verified project state actually changes** — architecture facts live in `CLAUDE.md`, priorities in `BACKLOG.md`, open decisions in `THREADS.md`. Don't duplicate them here; say where we are.

Last updated: 2026-07-13

## Deployment

- Host: Cloudflare Pages (see `deploy.md`). BrowserRouter + build-time pre-render for SEO.
- Latest pushed commit: `0687661` (Hide CEWA/approval layer; add About page; consolidate docs).
- `SITE_URL` env var and `public/og-default.png` still **not** set up — social cards have no image.

## What's live in the codebase

- Pages: Home, Guides (+detail), Articles (+detail, scaffolded — 2 placeholder articles), Tools (+detail), Explainer, Learn hub (+Capabilities index/detail), Glossary, Saved, About, Track/Section pages, 404.
- The CEWA approval layer is switched **OFF** (`frontend/src/config.js` → `SHOW_APPROVAL_STATUS = false`) because the statuses were internal-sourced. Data remains in `tools.json`; don't surface it without owner authorisation (see THREADS).
- Save & Share shipped: `useBookmarks` (localStorage), `SaveButton`/`ShareButton`, `/saved`, nav count.
- Global search (⌘K) indexes all content types via `lib/searchIndex.js`.

## Active workstream

- Guides → Articles rework: scaffold done; real articles, nav repoint (Explore → `/articles`), and homepage reconciliation still pending.
- Tool decision-support depth (richer tool profiles) is in progress per the DRAFT `tool-review-architecture.md` — card signals + review spine await owner sign-off.

## Known gaps / risks

- BACKLOG "Now" items partially stale after the 0687661 commit (About page shipped; approval-related items superseded by the config flag) — reconcile when next touched.
- Content is partial across most track JSON files; no audit yet.
- Not all block types confirmed to render in `SectionPage`.

## Immediate handoff

1. Follow the Session Start protocol in `CLAUDE.md` (git sync + read this file).
2. Route the task via `task-map.md`; read only what the task needs.
3. Default to discussion/planning until the owner explicitly authorises changes.
