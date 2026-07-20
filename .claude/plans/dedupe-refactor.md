# Plan: Deduplication refactor + future guards

Written 2026-07-20 (Fable, planning session). Status: **done** (executed 2026-07-20, Sonnet).
Executor: any Claude session (owner intends Sonnet). Self-contained — read this plus `CLAUDE.md`; no other context needed.

## Ground rules for the executor

- Work on branch `claude/amazing-carson-5zucgf` only. **No commit, no push** unless the owner explicitly says `Commit` / `Push` / `Publish Close` (see `.claude/close-out.md`).
- Every step below is **behaviour-preserving**. If a step would change what any page renders, stop and report instead of improvising.
- Verification gate after each step: `cd frontend && npm run build` must pass (it also exercises the pre-render over every route). After all steps, load the site in the browser preview (`npm start`) and spot-check the pages listed in each step.
- All styling must keep using Lumen CSS variables — never hardcoded hex (existing rule).

## Step 1 — Extract `cewaStatusMap` to one module

`const cewaStatusMap = {...}` (raw CEWA status → StatusBadge display variant) is duplicated in **6 files**:
`pages/ToolsPage.jsx`, `pages/ToolDetailPage.jsx`, `pages/GuidePage.jsx`, `pages/CapabilityPage.jsx`, `pages/HomePage.jsx`, `pages/GlossaryPage.jsx`. ToolsPage also defines `statusOf(t)`.

1. Create `frontend/src/lib/cewa.js` exporting:
   - `cewaStatusMap` (the map, identical to the existing copies — verify all 6 copies are identical first; if any differs, stop and report the difference)
   - `statusOf(tool)` → `cewaStatusMap[tool.cewaStatus] || 'unreviewed'`
2. In all 6 files: delete the local map (and local `statusOf`), import from `../lib/cewa`, and replace inline `cewaStatusMap[x] || 'unreviewed'` expressions with `statusOf(...)` where a tool object is at hand.
3. Verify: build passes; spot-check `/tools`, a tool detail page, a guide detail, `/glossary`, home.

## Step 2 — Extract taxonomy label helpers

Per-page helpers all resolving ids against `tools.json` `meta` (and `guides.json` `meta.difficulties`):
`useCatLabel` in GuidesPage, GuidePage, CapabilityPage, CapabilitiesPage, HomePage; `pedLabel` in GuidePage; `diffLabel` in GuidesPage + GuidePage; plus inline `meta.X.find(...)` lookups in ToolDetailPage (useCats, peds, accessTier).

1. Create `frontend/src/lib/taxonomy.js` importing `tools.json` (and `guides.json` for difficulties) and exporting:
   - `useCatLabel(id)`, `pedLabel(id)`, `diffLabel(id)`, `bandLabel(id)` — each `meta.<list>.find(x => x.id === id)?.label || id`
   - keep exports to lookups actually used; don't invent extras.
2. Replace the local helper definitions with imports. Leave inline `.find()` calls that need the **whole object** (e.g. ToolDetailPage's `accessTier`) as they are — this step is about label lookups only.
3. Verify: build; spot-check `/guides`, a guide, `/learn/capabilities`, a capability, home.

## Step 3 — Promote `Eyebrow` into the Lumen library

`Eyebrow` is locally defined in 3 pages (`HomePage.jsx`, `GuidesPage.jsx`, `AboutPage.jsx` — GuidesPage's version has a `tone` prop) and the same uppercase-mono style block is inlined ~27 times across 12 files.

1. Create `frontend/src/lumen/Eyebrow.jsx` based on the GuidesPage version: `{ children, tone = 'muted' }`, tones at least `muted` (`--text-muted`) and `pine` (`--pine-600`). Match the file style of small Lumen components (e.g. `Tag.jsx`).
2. Delete the 3 local definitions; import from lumen.
3. Replace the inline uppercase-mono `<p style={{ fontFamily: 'var(--font-mono)', ... textTransform: 'uppercase' ... }}>` blocks across pages with `<Eyebrow>`. **Only** where the block is a plain eyebrow/kicker label; if an instance carries extra layout styling (e.g. `margin: 0` inside a flex divider row in ToolsPage), pass the minimum needed via a `style` prop on Eyebrow rather than forking the component. If an instance genuinely isn't an eyebrow, leave it and note it in the report.
4. Verify: build; visually compare every touched page against pre-change (this step touches the most files — go page by page).

## Step 4 — Shared facet-state hook

ToolsPage (lines ~79–117) and GuidesPage (~77–108) duplicate the filter wiring: per-facet `useState`, the `setFacet` domain→work-type narrowing rule, `clearAll`, and domain-scoped `workTypeOptions`.

1. Create `frontend/src/lumen/useFacetState.js` (next to `FacetFilters.jsx`): takes the facet keys and `meta`, returns `{ values, setFacet, clearAll, workTypeOptions }`, preserving exactly the current narrowing behaviour (choosing a domain clears a work type not in that domain).
2. Rewire both pages onto the hook. The `filtered` useMemo logic stays in each page (the predicates differ between tools and guides — do not merge them).
3. While there, delete the dead `activeFilters` variable in both pages (computed, never used).
4. Verify: build; on `/tools` and `/guides` exercise the filters — especially: pick a domain, pick a work type, switch to a domain that excludes that work type, confirm the work type resets to All.

## Step 5 — ESLint (guard)

No lint setup exists today (no config, no `lint` script).

1. Add flat-config ESLint with `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` (the standard Vite React set), as devDependencies in `frontend/`.
2. Add `"lint": "eslint src"` to `frontend/package.json` scripts.
3. Run it; fix only trivial findings (unused vars, etc.). If it surfaces anything non-trivial, report rather than fix.

## Step 6 — CLAUDE.md guard rules (docs)

Add to `CLAUDE.md` under Key Conventions (keep it tight, ~4 lines):

- Reuse before re-create: before defining any component or helper inside a page file, check `frontend/src/lumen/` and `frontend/src/lib/` first; if a pattern appears in a second page, promote it to a shared file instead of copying.
- Mapping/lookup logic (status maps, taxonomy label lookups) lives in `frontend/src/lib/` — never in pages. Point at `lib/cewa.js` and `lib/taxonomy.js`.
- Eyebrow/kicker labels use `lumen/Eyebrow.jsx` — no inline uppercase-mono style blocks.
- Also fix the routing doc mismatch: CLAUDE.md's route table shows `/:track` dynamic routes, but `App.jsx` enumerates the five tracks explicitly. Update the table to match the code.

## Close-out

Follow `.claude/close-out.md` Normal Close: build gate, browser verification, docs to canonical homes (this step 6 covers CLAUDE.md; add a dated `session-log.md` entry; mark this plan's status line **done**; remove the BACKLOG pointer), final report in product terms. No commit/push without an explicit owner command.
