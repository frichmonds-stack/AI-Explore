# Delivery Rubric — the scoring instrument

The benchmark's engine. This is the **score** (the task layer — F/F/S on an artefact); the **review** is the tool layer and lives elsewhere (see `tool-review-architecture.md`, DECISIONS → 2026-07-24 session 4).

Status: **Function and Form are red-penned and owner-ruled (2026-07-29, session 6), then stress-tested and owner-agreed (2026-07-29, session 7). Aggregation and the overall bands are ruled (session 7). Substance's list is `Coverage · Truth · Craft` (2026-07-30, session 8), and its two blocking collisions are settled (2026-08-04, session 9)** — `Truth`'s headroom and the `Purpose` re-bill. **No scale is yet written for any Substance criterion**; that is the next job.

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
| **Substance** | Is the material correct — and any good? | **List ruled 2026-07-30, collisions settled 2026-08-04** — `Coverage` · `Truth` · `Craft`; scales unwritten |

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

The artefact matches the specification given: format, extent, structure, and the **structural** parts the prompt explicitly asked to be present (three worked examples, an answer key, a title block).

> **NARROWED 2026-07-30 (OWNER CALL).** `Brief` used to reach into content — "the things the prompt explicitly asked to be included" covered subject matter as well as parts. It no longer does. *"States unlike but delivers like is a content alignment issue, not a form or function alignment."* Stated **content** requirements are scored in Substance → `Coverage`; `Brief` scores stated **structure**. See "Alignment is a lens, not a criterion" below.

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

#### Purpose sees content too — and this double bill is deliberate *(OWNER CALL, 2026-08-04)*

The edit list includes **content** edits. A Substance failure therefore lands here as well as in its own criterion, and that is intended: *"perhaps we try as best not to double dip criteria but in this case i think it's useful."*

The agent's proposed fix — *score it as if the content were true* — was **rejected by the owner and is dead**: *"handing it out as if it's true removes the tension of would I need to edit this."* It asks the scorer to imagine a different artefact, which is precisely what edit distance was designed to prevent.

**What this buys: it is the bite mechanism owed since 07-23.** That ruling said substance failures must *bite hard*; session 7 could only offer band-consistency and left the question open. Wrong content now takes `Coverage` to 0 **and** drags `Purpose` down, losing ground in two of the three buckets. The bite comes from the artefact genuinely failing twice, not from an arithmetic penalty bolted on — which keeps it inside the *simple and intuitive* constraint.

**Two fences so it does not spread** *(agent-drafted from the ruling, owner did not examine the wording)*:

- **One-directional.** `Purpose` is the whole-artefact judgement and is the only criterion permitted to re-bill. Nothing re-bills *into* Substance, and the `Brief`↔`Format` exclusivity ruled in session 7 stands unchanged.
- **No-double-counting is restated, not dropped: *no criterion is billed twice at the same altitude.*** `Purpose` sits at a different altitude — the *would I hand this out* whole-artefact read — so it may include causes that are also billed individually elsewhere.

**Both still publish as separate scores (OWNER CALL, 2026-08-04).** The agent argued the correlation made them unfit to show side by side; the owner ruled otherwise. The reader is not treating them as independent evidence — they read a verdict and its cause. `Coverage` 0 beside `Purpose` 1 says *the content's wrong, which is why you can't use it*, and hiding the correlation would make the card less legible, not more honest.

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

## Substance

Substance is the **payload**, not the vessel: is the thing said or depicted actually right, and any good. It is a **guard, not a discriminator** (07-23) — you would hope it sits continuously high, and it earns its place by catching misinformation, hallucination, and content that is inaccurate or skewed.

> ⚠️ **STATUS — list ruled, collisions settled, scales unwritten.**
> Session 8 (2026-07-30) cut the agent-drafted 07-23 list of five to three and shaped `Coverage`. Session 9 (2026-08-04) settled the two collisions that were blocking the scales — `Truth`'s headroom and the `Purpose` re-bill — and **widened `Craft` by owner call**. **No scale is written for any of the three**, which is the next job. `Coverage` alone has never been directly attacked.

### Alignment is a lens, not a criterion *(OWNER CALL, 07-30)*

The 07-23 list had `alignment to brief` as a Substance item, next to Function's `Brief`. The owner's construction: *"You can have alignment to brief in both content, form and function. Perhaps it's alignment with 2 lenses which is not overlap but mutually exclusive."*

Two lenses, because Form's was already absorbed into `Brief` in session 7. The surviving pair:

> **`Brief` counts stated structure. `Coverage` judges the material against the job — regardless of what was stated.**

Mutually exclusive by construction, which is what prevents a double bill: `Brief` never looks at content, so it cannot bill a content failure that `Coverage` is already billing.

The agent's case that alignment was *dead by collision* with `Brief` was wrong, and it was killed by the rubric's own standard of proof — the divergence test that settled Brief≠Format in session 7. It diverges both ways: a worksheet delivering exactly the 12 questions and 3 worked examples asked for, every one on *like* denominators when *unlike* was specified, is near-4 on stated structure and 0 on material; six perfectly on-topic questions instead of twelve is the reverse.

*Agent caution, not ruled:* **divergence proves two things are distinct, not that either deserves a criterion.** If divergence were sufficient the list would grow without limit. The cutting is still done by the artefact-type test and by *simple and intuitive*.

### Coverage — *did it cover the ground?*

Is the material the job needed present, and is there enough of it. **Collapses the 07-23 list's `alignment to brief` and `completeness` into one scale** — they are not two axes but two points on one, sharing the unit *how much of what the job needed is actually here*.

**OWNER CALL (07-30) — wrong content is zero of the right content.** *"Well if it's the wrong content, then there is a no score on the right content."* This is what makes the collapse work: the wrong topic is not a separate kind of failure, it is the bottom of the coverage ladder. It also lands a well-formed **rung 0** in the pattern every other 0 in the instrument follows — `Format` 0 is *wrong format for the job*, `Coverage` 0 is **wrong content for the job**, each distinct in kind from a bad job within the right one.

*This dissolved an agent objection rather than surviving it:* "wrong topic" and "half the topic" provoke different responses (re-prompt vs add more), which looked like evidence of two criteria. It isn't — **re-prompt vs add more is what a 0 means everywhere in this instrument**, `Purpose` included. The objection was evidence that Coverage's 0 is well formed.

**The ground comes from the job, not the prompt and not the artefact** *(agent, follows from the ruling — not separately ruled)*. A Year 7 adding-fractions worksheet needs the three denominator types whether or not the prompt said so. This is what keeps Coverage non-circular: if it re-based on what the tool chose to deliver, a tool that picks a tiny scope and covers it thoroughly would score 4. The Brief↔Format precedent (*Format asks whether what it did instead works*) deliberately does **not** generalise here, because "does this work for a human" has a standard outside the artefact and "did it cover the ground" does not.

**Consequence worth keeping:** Coverage is the criterion that does the real work **under a loose brief** — which is the 07-26 finding (*Substance discriminates through completeness and craft, accuracy trending to table-stakes*) landing on a named criterion.

*Scale not written.*

### Truth — *is it correct?*

The guard proper: factual accuracy, no fabrication, no hallucinated citations or invented sources.

**`bias` does not join as a peer** *(agent-argued 07-30, unopposed, not ruled)*. The 07-23 owner sentence defining the guard already houses it — Substance guards against *"misinformation, hallucination, and information that is inaccurate or biased."* Biased sits alongside inaccurate inside one job, so it is a face of Truth, not a peer of it. It also carries the double-standard risk flagged on 07-23 (scoring tools for bias against a site with a declared pedagogical bias) for no structural gain.

#### The headroom problem is settled: severity ladder, and **verification distance is dead** *(2026-08-04)*

**OWNER CALL — verification is not the teacher's to do.** *"In order to verify truth, the educator must know independently, not rely on the tool. The point of the review of samples is to try and point at how truthful something is."*

This kills verification distance (*how much must I check before I trust it*), which had been the more elegant of the two candidates. The measure is **unavailable to the person it is for**: a teacher who cannot independently verify the content cannot estimate their own checking burden either. The agent's separate objection — that "how much would I check" is answered partly by the tool's reputation, which leaks the tool layer into a task-layer score (07-24) — is a second reason, not the main one.

**What it establishes is `Truth`'s job on the card:** not *how much should you check*, but **here is what we found when we checked**. The review does the verification on the teacher's behalf; the score points at the result. That is the guard doing the work the teacher cannot do for themselves, and it is why `Truth` earns a place despite accuracy trending to table-stakes (07-26).

**The severity ladder stands** (*unsalvageably wrong → major errors → minor errors → trivial slips → nothing wrong*), scored by someone who did the checking. Its known cost — that it clones edit distance and rhymes with `Purpose`'s register — is now **acceptable rather than merely tolerated**: under the 2026-08-04 `Purpose` ruling the two rhyme in *voice* while being disjoint in *what they measure*, which is the same situation the overall bands are already in and already accepted (Open item 7).

*Still not pursued:* whether a quality that can be absent but never *excellent* is badge-shaped rather than scale-shaped — the inverse of the above-and-beyond argument (Open item 2), which runs into the 07-23 *scored, not gated* ruling. The severity ladder makes this non-blocking, not wrong.

*Naming: `Truth` over `Accuracy` remains the 07-23 candidate and is still unruled — "accuracy" suggests precision and tidiness, "truth" names what is at stake when a tool fabricates.*

*Scale not written.*

### Craft — *is it any good?*

Is the material **considered and purposeful** — clear, ordered, non-generic — or hollow filler. The generic discussion question that could attach to any text; the comprehension passage that says nothing; the lesson-plan step reading "engage students in a discussion about the topic."

> **WIDENED 2026-08-04 (OWNER CALL).** *"Maybe craft can intuit sequencing, clarity of explanation, etc (the more teaching centric ideas)."* Craft was scoped to craft of the *writing*; it now also carries **clarity of explanation** and **conceptual sequencing**. Three faces of one care: is the material clear, does it build in an order that makes sense, is it non-generic.
>
> **This re-admits `sequence`, and that is consistent.** Session 8 cut it as a *peer* for having no face on images. As a **face of Craft** the objection dies — faces are allowed to be absent (Craft already goes quiet on symbolic maths). It must mean **conceptual order** — does step 2 depend on step 1, does the example come before the thing it illustrates — never spatial reading order, which `Format` and `Polish` own.
>
> **The pedagogy line holds via the seam `Format` already uses** *(agent-drafted from the ruling)*: **Craft judges the execution of the teaching choice, never the choice.** *Area models or number lines* is a teaching decision and lives in the prompt (07-23). *Is the explanation actually clear, do the steps build, does the example illustrate the thing it sits under* is whether the tool executed competently, and is scoreable without ruling on pedagogy.
>
> **Seam with `Format`** *(agent, not ruled)*: Format flaws appear when you *operate* the artefact (flipping, hunting, stapling); clarity flaws appear when you *read* it. Same shape as the thumbnail test that split Polish from Format.
>
> **Consequence:** Craft becomes the widest criterion in the instrument and the main discriminator under a loose brief — which is exactly what the 07-26 evidence predicted.

Owner's own find on 07-23, and the least obvious axis of that session. Three things attached to it that still hold:

- **The axis is named for the quality, not the proxy.** The fear was never *"it came from an AI"* — it is *"it's made from AI and it's terrible."* AI-made-and-great is fine; AI just makes terrible cheap and abundant. All detection-framed names were rejected (`Turing Test`, `Human Fidelity`, `AI Detection`) because naming it after detectability scores **disguise instead of quality**, and fooling anyone was never the goal. `Quality` was rejected as too broad — every criterion here is quality.
- **It is Substance's ceiling** — the bucket runs *correct → considered*, the same structural position aesthetic holds in Form.
- **It is the closest thing in the rubric to the pedagogy line**, held on the right side of it by scoping to *craft of the writing*, never *quality of the teaching*. A well-crafted question that is pedagogically ordinary scores full marks; that is the fidelity principle working, not a leak.

**Seam with `Truth`, on one artefact** *(agent-drafted 08-04, owner-agreed by silence — worked on the poster example)*. A photosynthesis-cycle poster with **arrows running the wrong way round the cycle is `Truth`** — the science is wrong. A **correct cycle you cannot follow is `Craft`**. Same artefact, two different failures, no double bill.

Known unevenness, accepted: craft matters little for symbolic artefacts (maths) and enormously where the words *are* the product (comprehension passages, discussion prompts, parent emails). It has a real face in all five artefact types, so it passes the generalisation test; the uneven weight is what session 7 quantified and ruled livable.

*Scale not written.*

### What the three-criterion outcome does to the arithmetic

Nothing — which is the point. Substance at three criteria against Function's and Form's two would, under a flat mean, take 43% of the overall. The **two-level mean** ruled in session 7 holds it at exactly a third regardless of count, which is what let this bucket be red-penned on the merits. The property was designed for a hypothetical five; it was needed for a real three.

---

## Rules that govern the scales

**Every scale measures excellence of its own descriptor (owner, 07-29).** 0 → 4 runs floor to excellent *within the thing being measured*. Nothing reaches outside itself.

**Above-and-beyond is a separate metric, not a rung (owner, 07-29).** It sits alongside the scales. The mechanism remains parked (see Open items).

**Rungs must describe a relationship, not a feature.** Relational words travel across modes; feature words are mode-bound. *Amateur→professional* describes the maker's relationship to the work. *Unsalvageable→hand it out untouched* describes yours to the artefact. *Missed some→delivered everything* describes the artefact's to the brief. "Plain" and "considered" described properties of a page, and stalled.

**One register per ladder.** All rungs on a scale describe the same thing at different strengths — no switching vocabulary halfway up.

**Rung 0 is a boundary, not a degree.** Every 0 must name a state distinct in kind from rung 1 — *unsalvageable* vs *edits*, *nothing attempted* vs *a bad attempt*, *wrong format* vs *badly done*. Otherwise 0 and 1 collapse and 0 goes dead.

**Descriptor bar (07-24):** a reader can look at the published artefact and see why it got a 2.

**Criteria must generalise across artefact type (07-24)** — a real face in a worksheet *and* a video *and* an image *and* an assessment *and* a lesson plan. One face only means it is a manifestation, and it folds. The criteria stay fixed; the task decides which faces become visible.

> **RESTATED 2026-08-04: the test is applied to *tasks*, and a task is an educational job in a use context — never a media type.** *"With regards to image generation, we would be reviewing based on an educational purpose, not just generate an image."* The rule was being run against bare media types, which is how session 8 cut `sequence` for having no face on "an image" — but *a poster depicting the photosynthesis cycle* obviously has a sequence, and every image task in the suite is an educational job. The cut still stands (`sequence` is a face of `Craft` now, not a peer), but it was reached by a bad route.
>
> **Media type is not irrelevant — it decides which jobs are on the table** *(owner, 08-04)*: *"we kind of have to think about how the media type might be used in an educational context."* The route runs media → what teachers commonly use that medium for → the task.
>
> **Consequence for the still-owed task list: the task must carry the use context**, because half the instrument scores against it. A wall poster read from three metres, a diagram in a printed handout and an image on a slide are three different jobs for one media type, and neither `Format` (does the shape work the way you'd use it) nor `Craft` (is it legible as a cycle) can be scored until you know which. *"Depicts the photosynthesis cycle"* is not yet a task; *"a wall poster for a Year 7 classroom"* is. This also answers `Format`'s naming debt from a new direction — the criterion was never about the file, it is the artefact's shape against the **use**, and the use comes from the task.

**A *rung* may be unreachable for an artefact type, and that's harmless** *(checked 07-29 session 7)*. An image generator can't produce "no design attempted" — there's no raw-unformatted state — so Polish effectively runs 1–4 for images and 0–4 for worksheets. This looks like a defect and isn't: **comparability lives within a task** (07-24) and a task fixes the artefact type, so every tool being scored is on the same effective scale. The rule applies to *criteria*, not to individual rungs.

**Uneven criterion importance within a task is real, and small enough to live with** *(quantified 07-29 session 7)*. Polish matters enormously on a poster and barely on a lesson plan a teacher writes over and bins. Under the two-level mean, Polish is **one sixth** of the overall, so scoring 1 instead of 3 on it moves the overall by 0.33 on a 0–4 scale — about 8% of the range. The 07-24 ruling dissolved *cross-task* weighting; this is the within-task half, and it needs a number rather than a mechanism. **`N/A` is the only lever**, reserved for a criterion with *no face at all* on that artefact type — never one that merely matters less. A criterion marked N/A drops out of its bucket's mean.

---

## What was cut, and why

### From Substance *(07-30 — agent-argued and unopposed unless marked OWNER)*

| Cut | Reason |
|---|---|
| `alignment to brief` as a Substance peer | **OWNER.** It is a *lens*, not a kind of defect — two mutually exclusive ones. Stated structure → `Brief`; material against the job → `Coverage`. |
| `completeness` as its own item | **OWNER** (via *wrong content is zero of the right content*). Same scale as alignment, sharing the unit *how much of what the job needed is here*. Merged into `Coverage`. |
| `sequence` | Cut as a peer. ⚠️ **The 07-30 reason was wrong** — "a generated image has no sequence" tested a media type, not a task, and an image task is always an educational job that can have one (see the restated artefact-type rule). **Re-admitted 08-04 as a face of `Craft`** (conceptual order), which is where it belongs; spatial reading order stays with `Format`/`Polish`. |
| `bias` as its own item | The 07-23 owner sentence defining the guard already lists *biased* alongside *inaccurate* inside one job. A face of `Truth`, not a peer. Carries the declared-bias double-standard risk for no gain. |

### From Function and Form

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
3. **Substance's three scales are unwritten** — `Coverage`, `Truth` and `Craft` each have a definition and no ladder. `Truth`'s direction is set (severity ladder). `Coverage` and `Craft` have none. **This is the next job.** *Resolved 08-04: the "must bite hard" sub-question is answered — the `Purpose` double bill is the bite, so no rung needs to be engineered to carry it and no arithmetic cap is required.*
9. ~~**`Purpose` re-bills Substance failures**~~ — **CLOSED 2026-08-04 (OWNER CALL): the double bill is permitted and useful.** See `Purpose` → "Purpose sees content too". The agent's *benefit-of-the-doubt* fix is dead. Both criteria still publish as separate scores.
4. **`Format` is a working name**, kept "for now" (owner, 07-29). Rejected on the way: *user design* and *UX* (jargon, and the site refuses jargon walls), *Experience* (a superset word — it reads as the parent of the other three), *Fit* (collides with "fit for purpose", and Purpose is its neighbour). **Stronger reason to replace it, found session 7:** on 07-24 the owner killed scoring the file container (*"scoring a tool for choosing PDF would just be scoring PDF"*), and the word "Format" points straight at the container. The criterion means the artefact's *shape* — four pages, needs stapling, no chapters, too small to project — not its file type.
5. **Distribution watch** — rung 3 on Format is neutral, so artefacts may bunch there.
6. **The 3.5 band boundary is the noisiest line in the instrument** *(agent, session 7)*. At single-shot `n=1`, 3.48 and 3.52 are the same artefact and get very different words (*use straight away* vs *glowing reference*). Everywhere else banding blurs a difference; here it sharpens one. Probable answer: the **review** carries the "glowing" verdict in prose and the band follows it, rather than the band generating the verdict.
7. **The overall bands speak in `Purpose`'s register** *(raised session 7, owner did not rule)*. *Start over → use straight away* is nearly word-for-word *unsalvageable → hand it out untouched*, so the headline and one of its own inputs use the same voice and will sometimes contradict each other on one card — Purpose 4 under an overall of 2.6, because the artefact was beautifully usable and not what was asked for. Three ways out on the table: **accept it** (the overall is the whole-delivery version of the same question, and the contradiction tells you *why* to edit); **move Purpose's register** (it's the newer and more specific of the two); **move the overall's register** to readiness (agent argued against — mushier).
8. **The 0–1 band label is agent-drafted.** The owner set the other four and asked what 0–1 should be; *"start over"* is the agent's answer and was never ruled.
