# Project Context & Strategy

The *why* behind the project. Decisions live in [`DECISIONS.md`](DECISIONS.md);
this holds purpose, audience, and the strategic frame that shapes them.

## Purpose
A decision-support + AI-literacy resource for K–12 teachers: helps non-technical
educators decide **whether, when and how** to use AI responsibly and with
pedagogical intent — and understand what AI is, what it can't do, and its risks
to children. A read-and-explore resource: no quizzes, no progress gates, browse
at your own pace.

## Audience
- K–12 classroom teachers, no technical background; time-poor → content must be scannable.
- Broadened from CEWA-only to **K–12 educators generally**.
- **CEWA approval layer is HIDDEN** (the source data was internal/non-public — see DECISIONS). Switched off via `config.js` `SHOW_APPROVAL_STATUS`; reinstate only with an authorised/public source. Do not re-add CEWA wording or statuses.

## Strategy — work is the hook, pedagogy is the destination
Owner's brief (2026-06-22): *"It should still be pedagogy first, BUT people come
in looking for work first… the site should pull them towards greatness."*

- **Pedagogy is the focus and destination** — the site exists to make teachers better at their craft, not just faster.
- **Work is the hook, not the ceiling** — teachers arrive in efficiency mode; meeting them there earns the right to talk about craft. Opening with learning theory loses them at the door.
- **The real job is the _pull_** — every work surface must bend from "get it done fast" toward "do it well," and never dead-end at efficiency.
- Read "work-first" as *first encountered*, not *most important*. Work-first **entry**; pedagogy-first **soul**. **Do not re-demote pedagogy to a sidebar.**
- **Child safety first** — proactive, surfaced everywhere, never traded for speed.

**The test for any feature:** does it leave the educator a little more thoughtful
about their practice than when they arrived? Efficiency is the bait; craft is the catch.

## Content philosophy
- Balanced — AI neither hyped nor demonised.
- **Risks first, not last** — child-development concerns surfaced throughout.
- Evidence-based (Willingham, Vygotsky, Deci & Ryan; frameworks: Bloom's, UDL, Cognitive Load, DOK, Differentiation, Visible Learning).
- Plain language, Australian English.
- **Uncertainty shown as uncertainty** — never fabricate approval/policy; unreviewed content is flagged (`DraftNotice`), sourced where claimed.

## How it's structured now (post-pivot)
Nav is four uniform labels; full IA in [`CLAUDE.md`](../CLAUDE.md).
- **Explore** (currently `/guides`; the Articles section at `/articles` is the intended future home) — the hook.
- **Tools** — browsable library, each with CEWA status; deepening toward full decision-support reviews (see [`tool-review-architecture.md`](tool-review-architecture.md)).
- **Teaching** (`pedagogies`) — the craft; the destination every work surface pulls toward.
- **Learn** hub — About AI (`foundations`) · AI Capabilities (`capabilities.json`) · AI Safety (`risks`).
- Plus **Guides**, **Glossary**, **Saved**. Legacy `practice`/`explore` tracks retained as raw material, not in nav.

The exploratory feel is a UX property, not a page: discovery homepage rails,
job-to-be-done filtering, "explore next" links, and cross-links between layers
(guide → its tools → their pedagogy → the foundations concept behind it).
