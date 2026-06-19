# Backlog

Priority order: top = next up.

## Now
- [x] Fix GitHub push authentication
- [x] Integrate Lumen design system into frontend (tokens, fonts, component patterns)
- [ ] Build AI Tools Library — data, tool cards, status badges, discovery layer + power layer
- [ ] Build How AI Works sections (session, memory, token, model, use cases) in Foundations track

## Now
- [x] Spotlight tool cards — calm selector cards + persistent sticky spotlight panel (auto-selects first featured, expands on click, minimises on scroll). Replaced the original in-grid FLIP morph, which felt janky.

## Next
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
