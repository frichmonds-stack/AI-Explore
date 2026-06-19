# Lumen — Design System

**Lumen** is the brand and design system for a professional-learning web platform that helps **K–12 teachers at Catholic Education Western Australia (CEWA)** understand and use AI well. Its flagship feature is an **AI Tools Directory** with CEWA approval status on every tool.

> *Lumen* — Latin for *light*. The name carries the Catholic-education resonance of learning as illumination, while reading warm, calm and modern. Tagline: **"Light on AI for the classroom."**

The experience should feel like a **well-made magazine** crossed with a **quality online-course platform** — and browse like **Spotify**: content surfaced invitingly, discovery natural, always a clear path to more. Trustworthy and calm, but modern and worth exploring.

---

## Sources & provenance

This system was **created from scratch** — no codebase, Figma, or existing brand was provided. Name, logo, palette, type and components are all original to this engagement. There is no upstream repo or design file to reference. If CEWA has existing brand guidelines, fonts, or photography, share them and this system should be reconciled against them.

**Substitutions to be aware of**
- **Fonts** are loaded from the **Google Fonts CDN** (Newsreader, Hanken Grotesk, IBM Plex Mono) — no local binaries are shipped. For offline/production use, self-host the `.woff2` files and replace the `@import`s in `tokens/fonts.css` with `@font-face` rules.
- **Icons** use **Lucide** (CDN) — see ICONOGRAPHY. No custom icon set was provided.
- **Imagery** (hero photos, tool logos) uses placeholders/initials — no real photography was supplied. Replace tool logos with real vendor marks and hero art with CEWA classroom photography.

---

## Brand at a glance

- **Name:** Lumen · **Mark:** a halo of light around a warm focal point (illumination + focus)
- **Primary (Pine `#2A5E4A`):** eucalyptus green — calm, grounded growth; a Western-Australian, *for-educators* feel, deliberately **not** corporate blue
- **Accent (Clay `#C25E3C`):** warm terracotta — approachable, human; used sparingly
- **Highlight (Ochre `#D0A23F`):** muted gold — tiny sparks (featured, awards)
- **Neutrals (Paper):** warm cream canvas `#FBF8F2`, warm ink text
- **Type:** Newsreader (editorial serif display) · Hanken Grotesk (humanist UI sans) · IBM Plex Mono (labels)

---

## CONTENT FUNDAMENTALS — how Lumen writes

**Voice:** a knowledgeable, calm colleague — the teacher down the hall who's done the reading. Warm and professional, never corporate, never childish, never hyped.

- **Person:** speak to the reader as **"you"**; the platform/organisation is **"we"**. *"We've reviewed these so you don't have to."*
- **Casing:** **Sentence case** for headings, buttons and labels (e.g. "Browse AI tools", not "Browse AI Tools"). UPPERCASE is reserved for mono eyebrows/kickers with wide tracking. Proper nouns keep their casing ("CEWA Approved").
- **Tone:** plain language first. Explain, don't lecture. Practical over theoretical. Reassuring about caution without fear-mongering. *"Not approved for student-facing use yet"* — clear, not alarmist.
- **Sentence length:** short and confident. One idea per sentence. Lead with the useful part.
- **Australian English:** *organise, recognise, programme→program (tech), Year 7* (not Grade 7), *maths* (not math).
- **Emoji:** **none.** Warmth comes from colour, type and copy — not emoji.
- **Numbers/stats:** only when genuinely useful (tool counts, "reviewed quarterly"). No decorative data.

**Example copy**
- Hero: *"Bringing light to AI in the classroom."* / *"Confident, calm guidance for AI in Catholic education."*
- Tool blurb: *"Generate lesson plans, rubrics and differentiated resources in minutes."*
- Status help: *"Reviewed and approved for use in CEWA schools."*
- Empty state: *"No tools match those filters yet — try widening your search."*
- CTA verbs: *Browse · Explore · Start · Save · Suggest a tool* (inviting, low-pressure).

---

## VISUAL FOUNDATIONS

**Overall feel.** Warm editorial calm. Generous white(paper)space, soft shadows, rounded-but-restrained corners. Nothing buzzes or shouts. Light, not heavy; considered, not clinical.

- **Colour usage.** Pine is the anchor (≈ one dominant colour per view). Clay is the warm spark for *one* primary moment (a featured CTA, a highlight) — never a second primary. Ochre appears in tiny doses only. Most surfaces are paper/white with ink text; saturated colour is earned, not default. Status colours (green/amber/teal/red/neutral) are functional and consistent — only ever used for CEWA approval state, never decoration.
- **Backgrounds.** Primary canvas is **paper-50 `#FBF8F2`** (warm cream, never stark white). Hero/section banners use a **deep pine gradient** (`pine-700 → pine-800`, ~160°) with ochre eyebrow text. No busy patterns, no noise textures, no mesh gradients. Full-bleed photography is welcome in heroes (warm-toned classroom imagery) — currently placeholdered.
- **Type.** Newsreader 600 (with occasional *italic* in pine/ochre for a single emphasised word) for display; Hanken Grotesk 400/600/700 for everything UI; IBM Plex Mono uppercased at 0.12em tracking for eyebrows, tags and metadata. Headlines track tight (−0.02em); body line-height 1.5–1.65.
- **Cards.** White surface, **16px** radius (`--radius-lg`), **1px** hairline border (`--border-subtle`), **soft shadow** (`--shadow-sm`). Featured cards get an **ochre 1px ring** rather than a heavier shadow. No coloured left-border accents.
- **Borders.** Hairline, warm (`paper-300`). Used to define cards and separate sections; never heavy or dark.
- **Shadows.** Warm-tinted (rgba of `40,32,20`), **never pure black**. Five-step ramp + a pine-tinted lift for primary CTAs. Shadows are soft and low; elevation is gentle.
- **Corner radii.** 8 (sm) → 12 (inputs) → 16 (cards) → 24 (panels) → 32 (hero) → pill (badges, buttons, chips). Buttons and badges are **fully pill-shaped**.
- **Hover states.** Surfaces **lift 1–3px** with a deeper soft shadow and a faint pine border tint. Buttons darken one step (+ pine shadow on primary). Links/ghost buttons gain a soft pine-50 wash. Tags wash to pine-50. Calm, quick (120–200ms).
- **Press states.** Return to `translateY(0)` with a smaller shadow and the next-darker colour step. No aggressive scaling.
- **Focus.** A 3px pine ring (`--ring-focus`); red ring (`--ring-danger`) on invalid fields. Always visible for keyboard users.
- **Motion.** Unhurried easing (`cubic-bezier(0.32,0.08,0.24,1)`), 120–320ms. Gentle fades and 1–3px translations. **No bounce, no spring, no infinite loops.** Respect `prefers-reduced-motion`.
- **Transparency & blur.** The sticky navbar uses a translucent paper background with `backdrop-filter: blur` + saturation. Otherwise surfaces are opaque. Tooltips/overlays are solid pine-800.
- **Imagery vibe.** Warm, natural light; real classrooms and people, not stock-slick. Avoid cold blue tints. Tool logos sit on pine-50 tiles or show the vendor mark.
- **Layout.** Max content width ~1200px, 24px gutters. Sticky top navbar. Discovery views lead with featured/popular rails, then a filterable catalogue. Comfortable density — airy, scannable, never cramped.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) (CDN) — clean, rounded, **1.75–2px** open strokes that match Lumen's warm-but-precise feel. Load via `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use inline `<svg>` copied from lucide.dev. *(Substitution: no brand icon set was provided; Lucide is the closest match in stroke weight and friendliness. Swap if CEWA standardises on another set.)*
- **Stroke, not fill.** Use outline icons at `stroke-width:2`, `stroke-linecap:round`. Colour by context: `--text-muted` inline, `--color-primary` when active.
- **Sizes:** 16px (inline with text), 18–20px (buttons/inputs), 24px (nav/section).
- **The Lumen mark** (`assets/lumen-mark.svg`, `assets/lumen-icon-tile.svg`) is brand, not a UI icon — don't substitute Lucide for it. It's also exported from code as `LumenMark` (in `Navbar.jsx`).
- **Status dots** are the one place colour-coding carries meaning — paired with a text label, never colour alone (accessibility).
- **Emoji & unicode-as-icon:** not used. The chevron in `Select` (`▾`) is the only decorative glyph; everything else is Lucide or the brand mark.

---

## Index — what's in this project

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/` — `lumen-mark.svg`, `lumen-icon-tile.svg`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab

**Components** (`components/<group>/` — each has `.jsx`, `.d.ts`, `.prompt.md`, + one `@dsCard` HTML). Namespace: **`window.LumenDesignSystem_e93e62`**.
- `core/` — **Button**, **Badge**, **Tag**, **Card**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**
- `feedback/` — **Alert**, **Tooltip**
- `navigation/` — **Navbar** (+ `LumenMark`), **Tabs**
- `discovery/` — **StatusBadge** (+ `STATUS` map) and **ToolCard** *(the flagship)*

**UI kit** (`ui_kits/lumen/`)
- `index.html` — interactive click-through of the platform (Home → AI Tools directory → Tool detail)
- `Home.jsx`, `Directory.jsx`, `ToolDetail.jsx`, `data.js`

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Claude Agent Skill.

---

## Using the system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, ToolCard, StatusBadge, Navbar } = window.LumenDesignSystem_e93e62;
</script>
```

Build with the CSS custom properties (never hard-coded hexes), keep colour earned and copy plain, and let discovery feel like browsing.
