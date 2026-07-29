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

## What the tool card carries — the ratings (2026-07-29, session 7)

> Newer than section 1 below and takes precedence over it where they disagree.
> Section 1 predates the benchmark's two-layer model entirely.

**OWNER CALL — the tool card carries two ratings, not one.** An **overall rating of the tool** and an **outputs rating**. The delivery rubric produces the *outputs* rating only; the tool rating is a separate object.

This is the 07-24 two-layer seam made visible on a card. It also walks into the 07-24 finding that **nothing survived as a tool score** (scoring needs an artefact; the tool layer has none). The resolution is that **the two ratings have different warrants**:

| Signal | Warrant | Form |
|---|---|---|
| **Outputs rating** | **measured** — rubric, buckets, mean; evidence is the artefact and a reader can check it | a **number** |
| **Tool recommendation** | **judged** — the owner's view; evidence is *the review prose*, not a rubric | a **badge** |
| **Likes** *(when built)* | **popular** — teachers | a **count** |

Three warrants, three visual shapes, so they can't be blended in a reader's head. *Agent framing, accepted in use:* measured things should look measured and judged things should look judged. It doesn't breach the 07-24 descriptor bar, because the tool rating never claims to be derived — 07-23 already ruled the benchmark **is the owner's take on the tool**, and the review is the argument.

**What the tool rating is made of:** exactly the things that never yielded an artefact to score — cost and access, safety, how much work it takes to drive, speed, breadth of application, consistency.

**OWNER CALL — the recommendation is binary: recommend / not.** Reached after the owner floated an **A–E** grade and moved off it. Agent objection that carried: A–E is the Australian school achievement scale, so to a K–12 audience it reads as *criterion-referenced measurement* — the exact opposite of an editorial verdict, and it would look **more** derived than the number it's meant to contrast with. Also: a letter is the one form in the instrument carrying no descriptor at all, and "E" is a materially harsher public claim about a named product than "wouldn't bother". Secondary argument, agent, accepted in use: **an editorial verdict should have fewer levels than the measured score** — you can defend recommend/not, you cannot defend a B from a C.

**Positive-only** *(agent-proposed; the owner removed the only argument against it, not separately ruled)*. Recommended, or no badge — absence isn't an accusation. The counter-precedent was the Prohibited-bucket ruling (DECISIONS → Design: not-approved tools get a *visible* bucket), and **the owner retired it: *"not approved is CEWA linked. There is no such classification outside of CEWA."*** CEWA is benched, so the precedent doesn't transfer.

**Where negatives legitimately live:**
- **The safety gate** (07-24) — the owner's take plus hard exclusion. Safety excludes; taste only praises.
- **Third-party safeguarding status** — *owner, 07-29: "unless it's from ST4S or whatever the digital safeguarding group is."* This is a **citation, not a judgement** — the site reports an assessment body's finding rather than making a claim — which is why it may carry a negative when the badge cannot. Publishable because the **source is public**; the line that matters is public-source vs internal-source, not positive vs negative (the same line 07-24 drew ruling evidence public). Lives in the **disclose** slot. See BACKLOG → "Mine third-party safeguarding statuses". **Not a rebuilt CEWA badge** and must never be presented as one.

**Likes — flagged, not objected to.** The one signal the owner can't produce alone, answering a real gap (*do teachers actually use this*). Two cautions: it's a **project, not a component** — the site is static with `localStorage` bookmarks and no accounts, so likes means a backend and identity (already on BACKLOG → Later as the pulse widget / ratings sequence); and it must stay a **count** that never touches the score or the badge. A popularity number that contradicts the owner's verdict is interesting; one blended *into* the verdict destroys what the site is for.

**Still open — what the outputs rating shows when a tool has been scored on several tasks.** The score is per-task (07-24), so a tool with six tasks has six scores. *Agent proposal, not ruled:* a **tally into the overall bands** ("usable straight away on 4 of 6 tasks"), because a count needs no commensurability between a worksheet and a parent email, handles per-tool applicability honestly through a varying denominator, and stays credible at small n where a mean would be false precision. **Near-term this is moot** — the pilot has one task, so the honest card is one score with the task named on it (*Y7 fractions worksheet — 3.2*), deferring the question until there is a second task to aggregate.

## 1. Card — core triage signals
Keep to ~5. A card is for *open or skip*, nothing more. (Provisional set —
**owner to confirm/adjust**; predates the ratings section above and the CEWA
benching — signal 2 is dead as written.)

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
