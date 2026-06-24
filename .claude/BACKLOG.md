# Backlog

Priority order: top = next up.

## Now
- [x] Fix GitHub push authentication
- [x] Integrate Lumen design system into frontend (tokens, fonts, component patterns)
- [ ] Build AI Tools Library — data, tool cards, status badges, discovery layer + power layer
- [ ] Build How AI Works sections (session, memory, token, model, use cases) in Foundations track

## Now
- [x] Spotlight tool cards — calm selector cards + persistent sticky spotlight panel (auto-selects first featured, expands on click, minimises on scroll). Replaced the original in-grid FLIP morph, which felt janky.

## Now (work-first pivot — 2026-06-22)
- [x] **Learn hub revamp** — consolidated the AI-generated AI tracks into one `/learn` hub: About AI (`foundations`, retitled), AI Capabilities (NEW `capabilities.json` + `CapabilitiesPage`/`CapabilityPage`), AI Safety (`risks`, retitled, now holds the "When AI Serves Learning" section moved out of pedagogies). Nav simplified to Guides · Tools · Teaching theory · Learn. `practice` + `explore` dropped from nav (files retained).
- [ ] **Guides rework (NEXT, needs decision)** — repurpose "Guides" from task-walkthroughs into a curated **articles/reading** section (thought-provoking pieces on AI in education, authored or web-sourced). OPEN QUESTION: what happens to the existing task-walkthrough guides in `guides.json` (retire? fold the how-to into Learn?). `explore`'s "recommended research" likely folds in here.
- [ ] Decide fate of legacy `practice` track (Administration/Classroom/Curriculum/Assessment prose) — likely mine for Guides/Learn then retire.
- [x] Scope & strategy doc (`.claude/scope-and-strategy.md`)
- [x] Guides content frame — `guides.json` model, `GuidesPage` hub, `GuidePage` detail, routes, work-first nav + homepage
- [x] Deep pedagogies track — each approach restructured to a consistent shape (What it is → Core concepts → In the classroom → Where it meets AI). Sections: constructivism, cognitive-load, socratic, differentiation, udl, supports-vs-undermines. Section ids for cognitive-load/udl/differentiation deliberately match the `pedagogyFrameworks` ids in `tools.json`.
- [ ] Finish framework alignment: add deep `pedagogies` sections for the remaining `pedagogyFrameworks` ids (`blooms`, `depth-of-knowledge`, `visible-learning`) using the same 4-part structure, then deep-link tool/guide pedagogy tags to `/pedagogies/:id` instead of `/explainer/pedagogies` (only once every referenced framework has a matching section, so no dead links).
- [ ] Write the full guide library across all use-categories and bands (4 samples exist as the frame)
- [ ] Add the referenced-but-unwritten guides (`scaffold-a-writing-task`, `draft-a-parent-update`) so `next` rails fill out
- [ ] Wire the `concept` links to real Foundations sections once those are written (currently point to planned section ids)

## Next
- [ ] Confirm tool `access` (cost) + `cewaProvided` ("in the CEWA stack") against an authoritative CEWA source, then fill the fields for all tools (only ~8 seeded as placeholders). Optional once trusted: add an "Availability" filter facet (free / in your toolkit) and an "Already in your toolkit" rail — kept off the card deliberately; lives on the tool detail page for now.
- [ ] Tool detail pages (`/tools/:toolId`) — replace placeholder with full guide; each role bucket + pedagogy tag gets its own section explaining why this tool fits that context and how to use it that way
- [ ] Explainer pages (`/explainer/:category`) — replace placeholders for uses / roles / pedagogies with real content
- [ ] Relevance ranking in tool data — so the collapsed card's "strongest" use/role/pedagogy is real, not just authored-array-order placeholder
- [ ] Complete remaining content across all 5 existing tracks
- [ ] Status explainer footer on tools section
- [ ] Tooltips on all status badges
- [ ] Verify all block types render correctly in SectionPage (text, heading, list, risk, pedagogy-note)
- [ ] Mobile nav testing
- [ ] Deploy — investigate Azure Static Web Apps as CEWA-compliant hosting option

## Later (Phase 2 — requires backend)
- [ ] Click tracking for tool popularity (Plausible Analytics as interim static solution)
- [ ] Full pedagogy rating system on tool cards (stars per framework — deferred, use badges for now)
- [ ] Surface "most popular" and "highest rated" rows in discovery layer
- [ ] Save/bookmark tools feature
- [ ] Backend API (Node/Express) — only when content becomes dynamic

## Deferred
- [ ] School policy section (explicitly deferred)
- [ ] User accounts / personalisation
- [ ] Search across all content
