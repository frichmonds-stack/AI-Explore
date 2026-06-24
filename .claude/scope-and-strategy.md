# Scope & Strategy — work as the hook, pedagogy as the destination

_Authored 2026-06-22. Supersedes the education-led **homepage**, not the education-led **mission**: the five existing tracks and the Tools library are retained and re-slotted, not discarded._

## The guiding principle (clarified 2026-06-22)

> "I didn't want to change the focus; it still should be **pedagogy first**. BUT I know people will come in looking for **work first**, because everyone is concerned about getting the next job done efficiently. **The site should pull them towards greatness.**" — the brief, in the owner's words.

Read carefully, because it is the whole strategy:

- **Pedagogy is the focus and the destination.** The reason the site exists is to make educators *better at their craft*, not merely faster at their tasks. That never changed.
- **Work is the hook, not the ceiling.** People arrive in efficiency mode ("help me get tonight's job done"). Meeting them there is how we earn the right to talk about craft. A site that opens by lecturing on learning theory loses them at the door.
- **The site's real job is the _pull_** — from "get this done fast" to "do this *well*." Every work surface must bend toward greatness and never dead-end at efficiency.

The test for any guide, tool page, or feature: **does it leave the educator a little more thoughtful about their practice than when they arrived?** A guide that only saves time has failed. A guide that saves time *and* nudges toward better teaching has done its job.

Do not read "first" as "most important." Read it as "first encountered." Work-first **entry**; pedagogy-first **soul**.

## The brief, distilled

1. A **friendly-first AI explorer** — the feeling is "always another interesting thing to find", never a course to complete.
2. **Lead with the work** — getting the actual job done is the entry point that earns attention. The hook, not the ceiling.
3. **Teach in the flow** — understanding AI is offered at the moment of need, not gated in front of the work.
4. **Pedagogy is the gravity** — every work surface pulls toward better teaching; sound learning theory is the destination, surfaced as the payoff.
5. **Child safety first** — proactive, surfaced everywhere, never traded away for speed.
6. Keep the **CEWA approval badges**.
7. Audience: **K–12 educators broadly** (not CEWA-only).
8. **Evolve** the existing site (Lumen, Tools, content as raw material).

## The core strategic shift

The site was **education-led at the door**: the homepage opened on "AI Foundations — start here", which asks for commitment before it offers value. The shift is to **lead with value** — the front door is "what are you trying to do?" — and then use that goodwill to pull people toward the craft. Nothing is demoted; the *order of encounter* changes so pedagogy is the reward for engaging, not the toll to enter.

This re-sequences, but does not re-rank, what exists:

| Role in the journey | Pillar | Built from | Status |
|---|---|---|---|
| **Hook / entry** | **Guides** (NEW) + **Tools** | `practice` track + Tools library | Guides is the new entry layer; Tools stays |
| **North star / destination** | **Teach well** | `pedagogies` track | The point of the whole site; every guide pulls here |
| **Guard-rail (everywhere)** | **Use it safely** | `risks` track | Child-safety-first, on every guide/tool, never traded for speed |
| The AI behind the work | **Learn AI** | `foundations` track | Plain-language, only as deep as the job needs |
| Onward thread | **Explore** | `explore` track | Every page ends with "where next" |

## The missing piece: Guides

Tools answer _"what could I use?"_. They do not answer _"how do I get this done well, safely — and become a better teacher in the process?"_ **Guides** are the hook that carries the pull: short, task-shaped walkthroughs ("Differentiate a reading task in ten minutes", "Write report comments that sound like you") that *start* at efficiency and *end* at craft.

Every guide is built to carry all six principles at once — and the structure deliberately **ends on the pedagogy**, so the last thing a teacher reads is not a checklist but the craft the task was really about:

- **Work as the hook** — a concrete outcome, numbered steps, copy-paste prompts.
- **Pedagogy as the payoff** — a mandatory `pedagogyNote`, placed as the closing elevation, tying the task to a framework (Bloom's, UDL, Cognitive Load…) and pulling onward into the Teach-well track.
- **Child safety first** — a mandatory `safety` block on _every_ guide; you cannot author one without it.
- **Pertinent learning** — inline links to the Foundations concept the step depends on.
- **CEWA-aware** — guides link to real tools and inherit their approval badges.
- **Exploratory** — a `next` list of related guides/tools so there's always a thread to pull.

See `frontend/src/content/schema.md` for the guide content model.

## The "exploratory" feel — how it's engineered

Exploration is a UX property, not a page. It is produced by:

- A **discovery homepage** that leads with featured guides and popular tools (Spotify-browse, not a syllabus).
- **Job-to-be-done entry** (`/guides`) filterable by role, year band, and subject — driven entirely from data.
- **"Explore next" rails** at the foot of every guide, tool, and concept — always a curated onward step.
- **Cross-links between layers** — a guide → its tools → their pedagogy → the foundations concept behind it, and back.

## Scope of _this_ build (the content frame)

In scope now — the scaffold content gets poured into:

- Strategy doc (this file).
- `guides.json` content model + representative sample guides.
- `GuidesPage` (the "Do the work" hub) and `GuidePage` (detail) with full data-driven rendering.
- Routes (`/guides`, `/guides/:guideId`) and a **work-first navigation reorder**.
- A **rebuilt, work-first homepage** with discovery rails.
- Schema, backlog, decisions, and CLAUDE.md updates.

Explicitly out of scope now (tracked in BACKLOG): writing the full guide library, completing the five tracks' content, backend, accounts, search, ratings.

## Audience note

Broadened from CEWA teachers to **K–12 educators generally**, but the **CEWA badges stay** as the worked example of "is this safe/approved to use?". For non-CEWA readers they read as a model of the diligence to apply; the footer explainer already frames status as guidance, not gospel.
