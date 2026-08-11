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

---
---

# The review data model (2026-08-11)

> **Newest section — takes precedence over anything above it on data shape.**
> Sections above describe *what a review says*; this describes *where it is stored and how it publishes*.
> Status: **19 items, almost all OWNER CALL**, from a single red-pen session on 2026-08-11.
> **Nothing is built.** No file described here exists yet.
> When it is built, the content-model rules move to `frontend/src/content/schema.md`; this file keeps the reasoning.

## The picture, in one line

**A tool has its own page where all its scores, notes, prose and evidence appear together** — but the data is stored in pieces, because a score belongs to a *tool and a task at once*, and the owner asked to cut it by task, by tool, and by groupings not yet named.

**Storage is split. The page is not.** Owner's own check on the picture: *"A tool will have its own web page where all the scores, notes and prose live."* Yes — the split exists so the same data can also be cut the other way.

Analogy that carried: a school stores marks separately from students and subjects; the report card still shows one student's marks in one place.

## Four files, joined by id

| File | Holds | Status |
|---|---|---|
| `tools.json` | the tools (+ `applicableTasks`, new) | exists (27) |
| `tasks.json` | the educational jobs tools get reviewed on | new |
| `scores.json` | one row per artefact — the seven numbers, the notes, the evidence link | new |
| `reviews.json` | the owner's prose take per tool + the recommendation | new |

## Shapes

```json
// tasks.json — the definition of a job
{ "id": "y7-fractions-worksheet",
  "version": 1,
  "name": "Year 7 adding fractions worksheet",
  "useContext": "printed practice sheet for a Year 7 maths class",
  "prompt": "…the canonical single-shot prompt…" }

// scores.json — one row per artefact, per occasion
{ "toolId": "chatgpt",
  "taskId": "y7-fractions-worksheet",
  "taskVersion": 1,
  "vendor": "OpenAI", "model": "Sol", "effort": "high",
  "date": "2026-07-26",
  "evidence": "/evidence/y7-fractions-worksheet/chatgpt-sol-high-2026-07-26.pdf",
  "brief": 3, "purpose": 2, "polish": 3, "format": 2,
  "coverage": null, "truth": null, "craft": null,
  "notes": { "purpose": "the three worked examples are the answers to Q1, 5 and 9 — unusable without editing" } }

// reviews.json — the tool layer
{ "toolId": "chatgpt", "lastUpdated": "2026-07-26",
  "recommended": true,
  "body": [ /* existing block schema: text · heading · list · quote · callout */ ] }

// tools.json — one new field
{ "id": "chatgpt", "…": "…",
  "applicableTasks": ["y7-fractions-worksheet", "parent-email", "…"] }
```

`null` means **not scored** — no scale exists yet. It is not a zero. A zero is a real judgement at the floor of a scale (`Coverage` 0 = wrong topic, ruled 2026-08-04); an unscored criterion is blank, not bad. The three Substance fields stay null until their scales are written.

## The rulings

### Storage shape

| # | Ruling | Why |
|---|---|---|
| 1 | **Scores live in their own array, not embedded in the tool** — *OWNER CALL* | The owner asked to group by task, by tool, and by groupings not yet named. A flat row array makes every grouping a `reduce` on one dataset; embedding gives group-by-tool free and makes everything else a flattening walk, with nowhere to put the task itself. Matches the existing convention (`capabilities.json` → tool ids). |
| 2 | **Tasks get their own file** — *proposed, accepted in use* | 2026-08-04 ruled a task is *an educational job in a use context*. That context belongs to the task, not to any one tool's attempt, and `Format`/`Craft` aren't scoreable without it. Also the only sane home for the versioned prompt. |
| 3 | **Store the seven sub-criteria; the overall is derived** — *OWNER CALL* ("deriving should be cheap") | The mean-of-means rule is young and `Brief` currently caps at 3 (overall maxes at 3.83). A stored total becomes a lie in every historical row the moment either changes; derived, one resolver fix corrects all history. |
| 4 | **History survives; the card surfaces the most recent model** — *OWNER CALL* | A score is a claim about one artefact from one model version; overwriting destroys the thing the claim was about, and the artefact is ruled public. Payoff: *"ChatGPT went from 2.1 to 3.4 in eight months"* is a read no other education site offers, and only never-overwriting produces it. |
| 5 | **A different prompt is a different task; version the task, keep the id stable** — *OWNER CALL* ("if it is a different prompt, then it is a different task… we might need a way to version those") | Overturned the agent's proposal to put `promptVersion` on the score row. Agent caveat accepted: version as a **field**, not baked into the id — `…-v2` as a new id fragments group-by-task, the grouping the owner asked for first. |
| 6 | **A version bump is not a new task; the line is the educational job** | Test: if the requirement set is unchanged and only the visible/invisible split moved (07-26 model), it is a version; if the job or use context changed, it is a new task. ⚠️ **Ruling 13 made this non-load-bearing** — comparability no longer hangs on it, so it survives only as a naming convention. Do not spend time adjudicating hard cases against it. |
| 7 | **Artefacts committed to `frontend/public/evidence/`; the row holds the path** — *OWNER CALL* | `public/` is copied verbatim into the build and served by Cloudflare Pages — the mechanism `og-default.png` already uses, so no new infrastructure. Evidence is versioned beside the score citing it. **Urgency: the three pilot PDFs are currently the only copies, untracked, on a Desktop**, and nine sessions of rubric work are calibrated against them. |
| 8 | **`vendor` / `model` / `effort` are point-in-time fields on the row** — *OWNER CALL* (the owner challenged the agent's "drop the company" and won) | The agent argued vendor was derivable from `toolId`. The owner's challenge won on ruling 4's own logic: vendor is part of the occasion, and a rebrand or acquisition would silently re-attribute every historical row. `effort` earns its place because a high-effort run against a default run is not a fair comparison, and the reader deserves that disclosure. A **filename** keeps the full `Company - Model - Effort` triple because it travels out of context; a **field** should not duplicate what it joins to. |
| 9 | **Tasks freeze nothing; the version bump does that work** | Two entities, two rules: the task is a *definition* (changes deliberately, via a version), the score row is an *occasion* (freezes what was true that day). |

### Notes and reviews

| # | Ruling | Why |
|---|---|---|
| 10 | **Notes per criterion on the row, *and* prose reviews on the tool page** — *OWNER CALL* ("notes referencing across tools but then also have prose reviews on the tool page") | The agent proposed notes-only, warning that both means duplication drift. The owner ruled both, with a boundary: notes are *per-artefact observations* keyed by criterion; prose *argues across rows* and carries the recommendation. **Test: if a sentence sits equally well in either, it is a note.** |
| 11 | **Notes are stored but not rendered; the publish decision is deferred** — *OWNER CALL* ("private for now; can change later") | The agent recommended public-once-a-review-exists. The owner deferred entirely. ⚠️ **Conditional:** notes are committed to git. THREADS records the repo as **private**, so they are not exposed today — but this must be revisited before the repo is ever made public, alongside the CEWA-history scrub already flagged there. |
| 12 | **Notes are an open field: no minimum, no maximum, dot points fine** — *OWNER CALL* | Kills the agent's *required below 3* threshold, and the owner's reason kills it in **both** directions: *"Criterion below 3 doesn't make sense as i may also want to point out how good something is."* Display consequence: the cross-tool comparison puts notes on one criterion side by side, so uneven lengths are a truncate-and-expand problem at render time, never a constraint on what gets written. |

### Comparison and publication

| # | Ruling | Why |
|---|---|---|
| 13 | **Prompt versions are disclosed, not enforced. Comparison uses the latest information available at the time.** — *OWNER CALL, arrived at in two steps* | First: *"every new prompt should be different; keep comparison as high fidelity as possible"* → the comparison unit is `(taskId, taskVersion)`. Then amended, decisively: *"across tools we dont necessarily have to have the same version prompt… otherwise it would be a huge amount of work to block progress."* **Convergence on the latest prompt is a goal, not a gate.** The tool page shows which version produced each score. The agent argued for deferring the comparison view until versions converged and was overruled on pragmatism. **Known accepted cost:** a side-by-side where one tool ran v1 and another v2 will partly read as a tool difference when some of the gap is a brief difference. |
| 14 | **Nothing publishes until a tool is fully reviewed. Entry ≠ publication.** — *OWNER CALL* | Stricter than all three options the agent tabled (which were about partial *scores*; the owner moved the gate to the *tool*). Data can be entered into `scores.json` and PDFs committed without anything rendering — so this does **not** block getting the pilot off the Desktop, only displaying it. **This is what finally gives "≥5 solid tool reviews" in the launch gate a definition.** |
| 18 | **Applicable tasks are declared per tool; publish only when all are complete** — *OWNER CALL in substance* ("before we post, we'd have to do the relevant task per tool… only post it once that tool has been fully completed") | Recorded as *declared* because "the relevant task per tool" presupposes a list. Without a stored list, "fully reviewed" is decided by whoever last looked, so the gate can be met by forgetting a task rather than doing it. Also gives the honest coverage line for free (*scored on 3 of 5 applicable tasks*) — the 07-26 two-piles distinction made visible. The list should be **editable downward without shame**. |
| 19 | **Accept the full review bill for now; reassess at the second or third tool** — *OWNER CALL* ("if we get to the 2nd or 3rd one and feel like its not feasible to keep waiting then we can change later") | The agent flagged that 14 + 18 make the launch gate much more expensive, and proposed shrinking each tool's applicable set. **The owner rejected the framing outright: the count cannot be predetermined — it depends on the tool.** (Consistent with 07-24: applicability is per-tool.) So there is no global number and no target; the bill is whatever each tool's honest set adds up to. ⏱ **Checkpoint to honour: at tool 2 or 3, assess feasibility.** |

### Display

| # | Ruling | Why |
|---|---|---|
| 15 | **The card carries one overall number; the tool page carries a recurring results structure, identical across all tool pages** — *OWNER CALL* | The agent argued for a **tally** on the card (*"use straight away on 3 of 5 jobs"*) over a cross-task mean, on the grounds that a worksheet and a parent email aren't commensurable. The owner's split resolves rather than overrules it: the number is scanned on the card, the nuance is read on the page. The tally is a **page** element. |
| 16 | **Overall = mean** — *OWNER CALL* | Confirms the 07-29 mean-of-means aggregation extends across tasks. *(Agent note: the commensurability objection above is recorded as raised and not sustained.)* |
| 17 | **Tool page order: header (icon · overview details · scores overview) → prose review → task outputs with their scores and notes** — *OWNER CALL* | Owner's own sketch. Within the task-outputs section, results are organised **by task** with the criteria nested inside (agent-proposed, unopposed): a task is the unit a teacher recognises, `Format` is the instrument's vocabulary and not theirs, and the artefact sits next to the score that judged it. The by-criterion cut is what a **task page** is for. ⚠️ Ruling 11 means the notes slot is built but not rendered — don't design the layout around something that isn't there. |

### Sub-rulings (agent-proposed, unopposed, **not** separately ruled)

- **The review body reuses the existing block schema** (`text · heading · list · quote · callout`) rather than a review-specific format — `SectionBlock` renders it, the search index walks it, `prose` styling is wired. The live `quote`-block double-renderer bug is proof of what a second format costs.
- **Reviews carry `lastUpdated` but are not versioned.** A score is a measurement (overwriting destroys evidence); a review is editorial (rewriting it is keeping it honest). Review history is archive noise.
- **The card's overall is the mean of the tool's task scores.** Ruling 16 confirms *mean*; that it means mean-across-tasks is the agent's reading.

## Still open

- [ ] **Are the notes public?** Deferred by ruling 11. Holds while the repo is private (THREADS); must be revisited before the repo is ever made public.
- [ ] **A task page** (`/tasks/:taskId`) comparing tools on one job — the group-by-task cut the split storage buys, and the natural home for the by-criterion view. Not discussed as a route.
- [ ] **What the tally on the tool page looks like** — ruling 15 puts it on the page but its form was never designed.
- [ ] **Where the authoring happens.** No upload form exists; adding evidence means putting a file in a folder and committing. This is the BACKLOG → Next "review-authoring aid", still blocked on the Substance scales.
- [ ] **Check the Canva "4 pages against single sided" markdown.** Owner clarified 2026-08-11 that *single sided* constrains the **worksheet**, and a separate answer sheet does not breach it — so part of that pilot markdown may have scored an (unrequested) answer key as a worksheet defect. **The v2 prompt must state this explicitly; the tools did not infer it.**
- [ ] **`effort` as a confound** (long-standing, THREADS) — the field now exists on the row, which makes the confound visible but does not resolve the standing rule.


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
