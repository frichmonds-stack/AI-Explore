---
name: lumen-design
description: Use this skill to generate well-branded interfaces and assets for Lumen, the Catholic Education Western Australia (CEWA) AI-literacy platform for teachers — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

# Lumen design skill

Lumen is CEWA's professional-learning platform that helps K–12 teachers understand and use AI well. Its flagship feature is an AI Tools Directory where every tool carries a CEWA approval status.

**Read `readme.md` first** — it holds the brand story, CONTENT FUNDAMENTALS (voice & copy rules), VISUAL FOUNDATIONS (colour, type, shadows, motion, layout) and ICONOGRAPHY. Then explore the other files:

- `styles.css` — the single stylesheet to link. It `@import`s everything in `tokens/`.
- `tokens/` — design tokens (colours, type, spacing, elevation, motion). Always style with these CSS custom properties; never hard-code hexes.
- `assets/` — the Lumen logo mark + app tile (SVG).
- `guidelines/` — foundation specimen cards (colours, type, spacing, brand).
- `components/` — React UI primitives. Bundled to `_ds_bundle.js`, exposed on `window.LumenDesignSystem_e93e62` (e.g. `Button`, `Badge`, `StatusBadge`, `ToolCard`, `Navbar`, `Input`, `Tabs`). Each component folder has a `.prompt.md` with usage.
- `ui_kits/lumen/` — a full interactive recreation of the platform (Home → AI Tools directory → Tool detail). Great reference for composing the components.

## How to work
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets and tokens you need out into static HTML files the user can open. Link `styles.css`, load `_ds_bundle.js`, and mount components from `window.LumenDesignSystem_e93e62`. Use Lucide icons (CDN) and the Lumen mark.
- **Production code**: read the rules here to become an expert in the brand; reuse the token names and component APIs.

## Non-negotiables
- Warm, calm, plain-spoken voice. Sentence case. Australian English. No emoji.
- Pine green is the anchor; clay is a sparing warm accent; ochre is a tiny highlight. Not corporate blue.
- CEWA approval status is communicated only via `StatusBadge` (approved / pilot / review / restricted / unreviewed) — colour plus a text label, never colour alone.
- Soft warm shadows, generous rounding (cards 16px, buttons/badges pill), unhurried motion (no bounce).

If the user invokes this skill without guidance, ask what they want to build or design, ask a few focused questions, then act as an expert Lumen designer — outputting HTML artifacts or production code as needed.
