# Tool Review Architecture — working draft

> **Status: DRAFT · fluid · open to change** (started 2026-07-01)
> A working sketch, not a ratified spec. Fields, signals and structure are all
> provisional and expected to change as the owner reviews them. Nothing here is
> built yet. When something is decided, promote it to DECISIONS.md.

## Why this exists
Move the tool experience from a listing toward a **decision-support resource**:
help a teacher decide *whether, when and how* to use a tool responsibly and with
pedagogical intent. Breadth is fine **as long as there is depth** — the plan is
many honest, in-depth reviews with the best ones surfaced (the existing
"Spotify browse, not Netflix" model). Depth is universal; curation decides
what's promoted.

## The organising principle — three layers, three questions
| Layer | Question it answers | Time budget |
|---|---|---|
| **Card** | "Should I even look closer?" | ~5 seconds (triage) |
| **Detail** | "How do I use this well and safely?" | decision + application |
| **Review** | the human judgment that fills the detail | editorial substance |

The review's headline signals *are* the card; its structured fields *are* the
detail. Write once, render at both depths.

---

## 1. Card — core triage signals
Keep to ~5. A card is for *open or skip*, nothing more. (Provisional set —
**owner to confirm/adjust**.)

1. **What is it** — name + vendor + one plain-language line (the job it does)
2. **Is it cleared/safe?** — approval/review badge, or honest "Unreviewed"
3. **What's it for** — the single strongest use
4. **Can students use it?** — teacher-only / with supervision / student-safe *(new signal, not surfaced today)*
5. *(optional)* **Cost** — free / paid / in your school stack

Everything else is noise on a card; depth belongs in the detail.
> Open question: is student-use or cost the 4th signal? Both may be too much.

## 2. Detail — the adjacent things teachers search for
Grouped by the questions teachers actually ask, roughly in this order:
- **What it is / who it's for** (orientation)
- **Genuinely good for** — concrete recommended uses
- **Avoid using it for** — the honest counterweight
- **Student use** — direct use + supervision level
- **Privacy & governance** — what a school should check before enabling (where data goes, student-data cautions)
- **Pedagogical fit** — existing frameworks
- **Limitations & risks** — incl. child-development framing
- **Access & cost / in the stack**
- **Approval status + why / conditions**
- **Sources** behind claims + **review status** (last reviewed, by whom, next review)
- **"Use it well" link** → a matching guide/workflow

## 3. What a tool *review* is
The editorial layer that populates the detail. A **decision aid, not a feature list.**

**Review spine** (provisional — **owner to confirm/adjust**):
1. One-line **verdict** + who it's for
2. What it's genuinely useful for **in teaching**
3. Where it **falls short / what to avoid**
4. The **safety & privacy read** (child-first)
5. The **student-use call**
6. **Pedagogical fit**
7. A concrete **"use it well" example** (or linked guide)
8. **Bottom line** + review status

**Non-negotiable rules** (project ethos + the sound part of external feedback):
- Balanced voice — neither hype nor doom; plain, concise, Australian, non-technical
- Distinguish **verified fact vs general guidance vs unknown** — never fabricate approval
- Every time-sensitive claim ties to a **review date**; external claims show a **source**
- **Provenance** on every review: reviewer + date + sources + uncertainty flags
- **Unknowns shown as unknowns** — so partially-filled reviews read honestly, never invented

---

## Candidate schema additions (backs the detail/review)
Provisional new fields on the `tools.json` tool object. All optional; **missing =
rendered as "not yet reviewed", never hidden or invented.**
- `studentUse` — `not-suitable | with-supervision | suitable | unknown` + note
- `privacy` — data/governance considerations a school should check
- `recommendedUses` — concrete "good for" list
- `avoidWhen` — explicit "don't use it for…" list
- `limitations` — risks/limitations
- `review` — `lastReviewed`, `nextReview` / `reviewNeeded`, `reviewer`
- `sources` — evidence links, attachable to specific claims

Existing fields kept: `name, vendor, logo, description, url, cewaStatus,
access, cewaProvided, useCategories, roles, subjects, bands, pedagogies,
featured, popular, notes`.

## Open decisions (unresolved)
- [ ] Final card signal set (4th signal: student-use vs cost?)
- [ ] Exact review-spine order and section labels
- [ ] Whether `sources` attach per-claim or per-review
- [ ] How "review needed / stale" surfaces (badge? filter? on card?)
- [ ] Worked example first: Microsoft Copilot (approval → mark **unreviewed** until sourced; fixes current placeholder "Conditional")
- [ ] Relationship to existing `notes` field (fold into `recommendedUses`/`limitations`?)

## Related
- Ethos + uncertainty framing: existing `DraftNotice`, the CEWA disclaimer, THREADS "access/cewaProvided are placeholders".
- Content type it deepens: `frontend/src/content/tools.json` + `ToolDetailPage.jsx`.
