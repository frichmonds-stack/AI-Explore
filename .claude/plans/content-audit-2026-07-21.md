# Content & render audit — 2026-07-21

Closes two BACKLOG "verify" items: *block types render in `SectionPage`* and *explainer pages — confirm content is real*. **Report only — no content was changed.** Actionable items are logged in `BACKLOG.md`; this file holds the evidence.

Method: a structural validator over all five track JSON files (checking every block against the fields `SectionBlock.jsx` actually reads), plus a read of every renderer and a live check in the dev server.

---

## 1. Block types — clean

All 7 schema block types (`text`, `heading`, `list`, `risk`, `pedagogy`, `quote`, `callout`) are handled by [`SectionBlock.jsx`](../frontend/src/components/SectionBlock.jsx). **No unknown types, no missing required fields, no empty sections, no missing summaries — 0 problems across 206 blocks.**

| Track | Title | Sections | Blocks | ~Words | Types used |
|---|---|---|---|---|---|
| foundations | About AI | 4 | 34 | 915 | all but `quote` |
| risks | AI Safety | 5 | 39 | 1315 | all but `quote` |
| pedagogies | Teaching | 8 | 87 | 3318 | all but `quote` |
| practice | *(legacy)* | 4 | 29 | 1040 | all but `quote` |
| explore | *(legacy)* | 2 | 17 | 530 | text/heading/list/callout |

`quote` is rendered but **never used in any track** — it is only used in `articles.json`, by a different renderer. See finding 2.

The earlier note in `current-state.md` ("not all block types confirmed to render") is resolved: they all render, and every authored block is well-formed. The remaining content gap is **volume, not correctness** — `foundations` (4 sections) and `risks` (5) are thin relative to `pedagogies` (8 sections, 3.3k words).

## 2. `quote` has two incompatible shapes — silent data loss risk

`ArticlePage.jsx` carries **its own duplicate block renderer** (lines 18–48), separate from `SectionBlock.jsx`. The two disagree on the same block type name:

| | `SectionBlock` (tracks) | `ArticlePage` (articles) |
|---|---|---|
| quote attribution field | `block.source` | `block.attribution` |
| callout title | rendered | **ignored** |
| `default:` case | renders nothing | renders as `text` |

`schema.md` documents `source`; `articles.json` uses `attribution`. Each side is internally consistent, so nothing is broken *today* — but moving a quote between a track section and an article silently drops the attribution, and a `callout` with a title silently loses its title in articles. This is exactly the duplication failure mode CLAUDE.md warns about.

**Suggested fix (needs a decision, not just a patch):** either converge on one renderer with per-surface styling, or keep two renderers and rename the article block types so the collision is visible. Logged in BACKLOG.

## 3. Explainer pages — content is real, metadata is missing

All three `/explainer/:category` routes (`uses`, `roles`, `pedagogies`) have **substantive, human-quality content** — no stubs. `uses` and `pedagogies` are driven from `tools.json` `meta` (correct, one source of truth). Two issues:

- **`ROLE_DATA` is hardcoded in the page** (~40 lines of prose in `ExplainerPage.jsx`), against the "never hardcode strings in components" rule. The 6 ids currently match `meta.roles` exactly — verified, no drift — but nothing enforces that, so a role added to `tools.json` would appear on cards with no explainer entry. This overlaps the existing *role → domain migration* backlog item; fold it in rather than fixing twice.
- **The explainer routes have no metadata at all.** `ExplainerPage` is the only real page missing `usePageMeta`, *and* `/explainer/*` is absent from `scripts/prerender.mjs`. Verified live: `/explainer/roles` renders the heading "AI across your roles" but serves `<title>Pigeon Hole — practical AI help for teachers</title>` and the generic homepage description. Both the crawler path and the client-nav path are affected, so this is a genuine hole in the SEO architecture that's otherwise complete site-wide.

  `NotFoundPage` also lacks `usePageMeta` — lower stakes, but a 404 titled as the homepage is untidy.

  Fix is small but requires writing 3 titles/descriptions (content), so it's left for the owner rather than guessed at.

## 4. `sample-curated-link` article has an empty body

The second placeholder article has 0 blocks. It renders without crashing, but it's an empty page on a live route. Expected to disappear when the real articles are written (already on BACKLOG) — noted so it isn't forgotten.

---

## What was NOT audited

- Prose quality / factual accuracy of track content — structural audit only.
- `tools.json` and `capabilities.json` field completeness — separate concern, partly covered by the existing CEWA-confirmation backlog item.
- Whether the legacy `practice` / `explore` tracks should survive — an owner decision already on BACKLOG.
