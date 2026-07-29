# Delivery Rubric — the scoring instrument

The benchmark's engine. This is the **score** (the task layer — F/F/S on an artefact); the **review** is the tool layer and lives elsewhere (see `tool-review-architecture.md`, DECISIONS → 2026-07-24 session 4).

Status: **Function and Form are red-penned and owner-ruled (2026-07-29, session 6), then stress-tested and owner-agreed (2026-07-29, session 7). Aggregation and the overall bands are ruled (session 7). Substance is untouched** — its sub-criteria are still the agent-drafted 2026-07-23 list and must not be treated as settled.

Rationale for every ruling lives in `DECISIONS.md`. This file is the instrument itself — what you actually score with.

**This file is the *outputs* score only.** It measures one exemplar artefact from one task. The tool card also carries a separate **tool recommendation**, which is editorial and is *not* produced by this instrument — see `tool-review-architecture.md` → "What the tool card carries".

---

## What the score answers

> **How well did it do the job you asked of it.**

Delivery only. Pedagogy lives in the prompt, never in the score (07-23). The rationale is **predictability**, not neutrality: bring your intent, and the score tells you how faithfully this tool will execute it.

## The three buckets

| Bucket | Question | Status |
|---|---|---|
| **Function** | Does it perform as meant? | **Ruled 2026-07-29** — `Brief` · `Purpose` |
| **Form** | Does it reach the senses right? | **Ruled 2026-07-29** — `Polish` · `Format` |
| **Substance** | Is the material correct — and any good? | **Not yet red-penned** |

Card labels are nouns; the meaning sits in the question beneath. Same dual register as ACME (`A · Audience` over *Who am I teaching?*).

---

## The overall score

**How it aggregates (OWNER CALL, 07-29 session 7): the mean.** *"Whatever it is it needs to be simple and intuitive. Average (mean) fits."* The overall is a number on the card; the detail breaks it into the three buckets, and the buckets break into criteria. Progressive disclosure — the same pattern as everywhere else on the site.

**Two levels, so the buckets are the weighting** *(agent-proposed, consistent with the ruling, not separately ruled)*. Each bucket = the mean of its criteria; the overall = the mean of the three buckets. **Not** a flat mean across all criteria — if Substance red-pens to five criteria, a flat mean hands it ~55% of the score and leaves Form on ~22%, giving majority control of the number to the bucket 07-23 ruled is **a guard, not a discriminator**. Rolling up per bucket first holds each bucket at a third regardless of how many criteria it ends up with.

Consequence worth keeping: **bucket size doesn't affect bucket weight.** Substance can be red-penned on the merits without watching the arithmetic.

### The bands

| | | |
|---|---|---|
| **3.5 – 4** | glowing reference | *owner* |
| **3.0 – 3.5** | use straight away | *owner* |
| **2 – 3** | do some work | *owner* |
| **1 – 2** | do a lot of work | *owner* |
| **0 – 1** | **start over** | ⚠️ *agent-drafted — owner asked the question, did not rule the answer* |

The overall is a continuous mean, so it takes **bands (ranges)**, not the five discrete rungs the criteria use.

**Uneven band widths are deliberate** — 1.0 wide at the bottom, 0.5 at the top. The difference between "some work" and "a lot of work" is coarse; the difference between usable and outstanding is worth measuring finely. **4s are hard to get by construction** (owner's intent): a mean punishes any single weak spot, so 3.5+ needs every bucket near-perfect. No extra rule required.

**Rung 0–1 must be a boundary in kind**, like every other 0 in the instrument: at 1–2 the artefact at least saved you the blank page, at 0–1 there is nothing to carry forward and starting over is faster.

*Agent framing, not ruled:* the ladder reads as one register if you take it as **what the output is worth to you** — worth nothing → worth salvaging → worth editing → worth using → worth telling people about. This matters because the top band changes vocabulary: the work ladder **runs out of headroom at 3.0** (there is nothing above "no work required"), so 3.5–4 had to speak about recommendation instead.

### The bands police themselves — this is what a "cap" is

**OWNER CALL, 07-29 session 7.** A cap is not an exception bolted onto the maths; the band labels carry meaning, so **the overall cannot claim a band that a component flatly contradicts.** If 3.0–3.5 means *use straight away*, an artefact with wrong content cannot sit there, whatever the mean computes — it isn't usable, so the band would be lying.

This is the honest form of the 07-23 ruling that substance failures *"must bite hard"*. Under a plain mean they don't: accuracy as one of five Substance criteria is ~6.7% of the overall, so a worksheet full of wrong answers loses about a quarter of a point.

*Agent generalisation, not ruled:* the rule isn't specific to accuracy. `Purpose` at 1 contradicts *use straight away* just as flatly, and a mean of 3.2 is reachable with Purpose at 1. One sentence covers both — **the headline can't promise what the details deny.**

---

## Function

### Brief — *did you get what you asked for?*

The artefact matches the specification given: format, extent, structure, and the things the prompt explicitly asked to be included.

| | |
|---|---|
| **0** | ignored the brief; not the thing you asked for |
| **1** | missed most of what was specified |
| **2** | missed some of what was specified |
| **3** | delivered everything specified |
| **4** | *outstanding — see Open items* |

> ⚠️ **Scale incomplete.** Rung 4 was originally "delivered everything specified, plus unrequested additions that improved it." That is above-and-beyond, which the owner ruled on 2026-07-29 is **a separate metric, not a rung**. Purpose and Polish were re-spaced to fill the gap; Brief was not. It currently tops out at 3.

Unrequested additions cut both ways (07-26) — a good addition that breaks a stated requirement still scores the failure here.

### Purpose — *can you actually use it?*

The artefact works as the thing it's meant to be, and each labelled part does the job its label claims.

| | |
|---|---|
| **0** | unsalvageable |
| **1** | major edits |
| **2** | minor edits |
| **3** | a tweak or two |
| **4** | hand it out untouched |

**Unit: edit distance** — the artefact's distance from usable.

**Counterfactual by construction (owner, 07-29):** *if it were possible to edit, how much would you need to change?* The measure is the amount of change required, never the cost of making it. This factors editability out — otherwise a re-openable file earns credit over a flat one regardless of quality, which is scoring the format rather than the output.

**Scoring procedure: enumerate the edits.** List what you would have to change, then rate the size of that list. This is what stops component failures washing out into an impression — a labelled part that doesn't do its job appears on the list because fixing it is one of the edits. It also makes scoring recognition rather than deliberation, which is the author-throughput constraint (07-24).

---

## Form

Form is the **vessel**, not the payload: is it well-rendered and perceivable. Substance is whether the thing depicted is any good.

Form catches everything that makes an artefact **worse to receive without making it unusable**. That territory vanishes if Form folds into Function, because Function's scale is usability — an artefact can be fully usable and still be visually incoherent.

### Polish — *is it well made?*

Do the elements belong to one designed thing, or are they parts bolted together. Unity is the observable mechanism; appeal is what it produces at the top of the scale.

| | | *diagnostic* |
|---|---|---|
| **0** | no design attempted | raw output dropped on a page |
| **1** | amateur | elements bolted together |
| **2** | competent | tidy, but assembled rather than designed |
| **3** | skilled | one designed thing |
| **4** | professional | nothing on it is unconsidered |

Rung 0 is a boundary, not a degree: **nothing was attempted** (raw output, unformatted, dropped on a page) is a different state from a bad attempt.

Anchor 4 to **purposeful**, not slick — every choice serving the reader it's for. Otherwise heavy styling beats restraint, and a great-looking Year 2 sheet gets confused with a great-looking Year 11 one.

**Why the diagnostic column exists here too** *(agent-proposed 07-29 session 7, owner agreed with the finding)*: `amateur → professional` silently imports a comparison class — professional *for a Year 7 worksheet* is not professional *for a graphic designer* — and the anchor that fixes it was sitting in prose below the ladder, where a scorer reading only the rungs never meets it. Polish is, by the 07-23 note, the most contestable point in the whole rubric, and it was the only one of the four scales with no second column. The diagnostic column carries the unity mechanism, which is what turns a taste judgement into an inspection.

### Format — *does the format work the way you'd actually use it?*

How the format interacts with the person using it: how you move through it, what it demands of you (flipping, stapling, zooming, scrubbing), whether its affordances match the use. Attention direction is one part of this, not the whole of it.

| | | *diagnostic* |
|---|---|---|
| **0** | wrong format for the job | it blocks you; you can't get at the content |
| **1** | crude | you fight it throughout |
| **2** | workable | you work around it in places |
| **3** | well suited | it stays out of your way |
| **4** | tailored to how it's used | it works for you |

Rung 0 is again a boundary: **the wrong format entirely** (a wall poster delivered as a four-page document), not a bad job within the right one.

The positive column is what publishes. The diagnostic column is what you score with — it names what to look for.

**Seam with Purpose:** Purpose measures what you'd *change* about the artefact. Format measures what it costs you to *operate* it. A four-page handout can need no edits at all and still make you staple, flip and lose your place.

**Seam with Brief** *(added 07-29 session 7 — the finding was owner-agreed, the wording is agent-drafted)*. This is the collision that actually fires, because format requirements are exactly what prompts most often state: *"single sided, one page"* against a four-page output is a Brief miss **and** a Format cost, and no-double-counting (07-23) forbids both.

> **Brief scores compliance with what was stated. Format scores fitness regardless of what was stated.** A stated-and-broken format requirement is scored in Brief only; Format then asks whether the thing the tool did instead actually works.

They are genuinely different criteria, and the proof is that they diverge: a tool that ignores *"one page"* and returns two pages with proper working space **fails Brief and scores 4 on Format**. This also lines Form up with the 07-26 visible/invisible model, which until now only informed Function.

**Seam with Polish** *(agent-proposed, not ruled)*: visual hierarchy has a face in both — a heading the same size as body text is incoherent design *and* makes you hunt. The **thumbnail test** separates them: Polish flaws are visible at a glance, before you read anything; Format flaws only appear when you *use* it. That matches the diagnostic column, which is written in use-time language throughout.

**Grounding:** attention direction has a real cross-mode science — gestalt grouping, salience and hierarchy, the signalling and coherence principles from multimedia learning research. One framework, not one per mode. **But hold the line:** judge whether the artefact communicates *its own* structure, not whether that structure suits the learner. The first is communication and belongs here; the second is a teaching decision and belongs in the brief.

---

## Rules that govern the scales

**Every scale measures excellence of its own descriptor (owner, 07-29).** 0 → 4 runs floor to excellent *within the thing being measured*. Nothing reaches outside itself.

**Above-and-beyond is a separate metric, not a rung (owner, 07-29).** It sits alongside the scales. The mechanism remains parked (see Open items).

**Rungs must describe a relationship, not a feature.** Relational words travel across modes; feature words are mode-bound. *Amateur→professional* describes the maker's relationship to the work. *Unsalvageable→hand it out untouched* describes yours to the artefact. *Missed some→delivered everything* describes the artefact's to the brief. "Plain" and "considered" described properties of a page, and stalled.

**One register per ladder.** All rungs on a scale describe the same thing at different strengths — no switching vocabulary halfway up.

**Rung 0 is a boundary, not a degree.** Every 0 must name a state distinct in kind from rung 1 — *unsalvageable* vs *edits*, *nothing attempted* vs *a bad attempt*, *wrong format* vs *badly done*. Otherwise 0 and 1 collapse and 0 goes dead.

**Descriptor bar (07-24):** a reader can look at the published artefact and see why it got a 2.

**Criteria must generalise across artefact type (07-24)** — a real face in a worksheet *and* a video *and* an image *and* an assessment *and* a lesson plan. One face only means it is a manifestation, and it folds. The criteria stay fixed; the task decides which faces become visible.

**A *rung* may be unreachable for an artefact type, and that's harmless** *(checked 07-29 session 7)*. An image generator can't produce "no design attempted" — there's no raw-unformatted state — so Polish effectively runs 1–4 for images and 0–4 for worksheets. This looks like a defect and isn't: **comparability lives within a task** (07-24) and a task fixes the artefact type, so every tool being scored is on the same effective scale. The rule applies to *criteria*, not to individual rungs.

**Uneven criterion importance within a task is real, and small enough to live with** *(quantified 07-29 session 7)*. Polish matters enormously on a poster and barely on a lesson plan a teacher writes over and bins. Under the two-level mean, Polish is **one sixth** of the overall, so scoring 1 instead of 3 on it moves the overall by 0.33 on a 0–4 scale — about 8% of the range. The 07-24 ruling dissolved *cross-task* weighting; this is the within-task half, and it needs a number rather than a mechanism. **`N/A` is the only lever**, reserved for a criterion with *no face at all* on that artefact type — never one that merely matters less. A criterion marked N/A drops out of its bucket's mean.

---

## What was cut from Function and Form, and why

| Cut | Reason |
|---|---|
| `works/runs` | Rung 0 of Purpose — a file that won't open is unsalvageable. Not its own line. |
| `usable (room to work)` | Folds into Purpose. If students can't do the work on it, it can't be used. And on a pure information handout the face doesn't appear at all — it's the worksheet manifestation of usability, not a criterion. |
| `editable` | Manifestation (07-24); enters via an exemplar prompt. Also factored out of Purpose by the counterfactual framing. |
| `technical integrity` | Undefined on 07-24. Its real content (severed headings, doubled numbering, wrong extent) is covered by Brief and Format. |
| `interactivity` | No face in three of five artefact types. |
| `export / getting it out` | Tool layer, not task layer (07-24). |
| `aesthetic` as its own item | The ceiling of Polish, not a criterion (07-23). |
| `conventions` as its own item | Absorbed into Polish/Format as an open judgement. Kept as a *criterion* it would require mapping conventions per mode, which is the unbounded version that stalls. |
| `student friendly` as a label | Fails the artefact-type test (lesson plans, parent emails and marking rubrics aren't student-facing) and crosses the pedagogy line. |

---

## Open items

1. **Brief's rung 4** — the scale tops out at 3 after above-and-beyond was stripped. Needs re-spacing the way Purpose and Polish were. **Now has a second consequence (07-29 session 7): the overall can never reach 4.** Function is capped at 3.5, so a flawless artefact maxes at **3.83**. It doesn't break the bands (3.83 is comfortably *glowing reference*), but the card never shows a full score. This makes the debt structural rather than tidy-up.
2. **The above-and-beyond mechanism** — still parked (07-26). Options live: score-bound bonus points; non-score-bound badges; capped rank plus uncapped accumulator. Dead: ordered-set tiers. *Argument on the table (agent, not ruled): a floorless quality — one that can be present or absent but never bad — is badge-shaped rather than scale-shaped.*
3. **Substance** — not red-penned. Its 07-23 list (`accuracy · alignment to brief · completeness · sequence · craft`) remains agent-drafted and unreviewed. **Carry in from session 7:** the *"simple and intuitive"* constraint (owner) now sits on the non-compensatory question. An arithmetic cap — *"everything averages, except accuracy, which overrides"* — is an exception, and the band-consistency rule above is the simpler form of the same bite. If Substance must bite harder still, the likely place is **in the rungs** (a 0 that's easy to hit and hard to climb off), not in the maths.
4. **`Format` is a working name**, kept "for now" (owner, 07-29). Rejected on the way: *user design* and *UX* (jargon, and the site refuses jargon walls), *Experience* (a superset word — it reads as the parent of the other three), *Fit* (collides with "fit for purpose", and Purpose is its neighbour). **Stronger reason to replace it, found session 7:** on 07-24 the owner killed scoring the file container (*"scoring a tool for choosing PDF would just be scoring PDF"*), and the word "Format" points straight at the container. The criterion means the artefact's *shape* — four pages, needs stapling, no chapters, too small to project — not its file type.
5. **Distribution watch** — rung 3 on Format is neutral, so artefacts may bunch there.
6. **The 3.5 band boundary is the noisiest line in the instrument** *(agent, session 7)*. At single-shot `n=1`, 3.48 and 3.52 are the same artefact and get very different words (*use straight away* vs *glowing reference*). Everywhere else banding blurs a difference; here it sharpens one. Probable answer: the **review** carries the "glowing" verdict in prose and the band follows it, rather than the band generating the verdict.
7. **The overall bands speak in `Purpose`'s register** *(raised session 7, owner did not rule)*. *Start over → use straight away* is nearly word-for-word *unsalvageable → hand it out untouched*, so the headline and one of its own inputs use the same voice and will sometimes contradict each other on one card — Purpose 4 under an overall of 2.6, because the artefact was beautifully usable and not what was asked for. Three ways out on the table: **accept it** (the overall is the whole-delivery version of the same question, and the contradiction tells you *why* to edit); **move Purpose's register** (it's the newer and more specific of the two); **move the overall's register** to readiness (agent argued against — mushier).
8. **The 0–1 band label is agent-drafted.** The owner set the other four and asked what 0–1 should be; *"start over"* is the agent's answer and was never ruled.
