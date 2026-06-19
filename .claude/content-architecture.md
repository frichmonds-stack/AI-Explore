# Content Architecture

## Strategic context
This is being built as a **working prototype** deliberately — not just a spec or wireframe. The prototype:
1. Demonstrates the product vision to stakeholders
2. Makes the case for proper hosting (vs forcing into SharePoint)
3. Opens the conversation: not "can we build this" but "how do we get this to all CEWA teachers"

Hosting is unresolved — SharePoint is the path of least resistance (inside CEWA tenant, no IT approval needed) but constrains the design. Azure Static Web Apps is the preferred alternative — Microsoft infrastructure, likely already approved, hosts the React app properly. An IT conversation is needed before going to production.

---

## Design system — Lumen
Claude Design produced a full design system named **Lumen** ("light" — Catholic education resonance, learning as illumination).

**Location:** `lumen-design-system/project/`

**Key decisions:**
- Primary: Pine `#2A5E4A` (eucalyptus green — deliberately not corporate blue)
- Accent: Clay `#C25E3C` (warm terracotta)
- Highlight: Ochre `#D0A23F` (muted gold, used sparingly)
- Background: Paper `#FBF8F2` (warm cream, never stark white)
- Fonts: Newsreader (display serif) · Hanken Grotesk (UI sans) · IBM Plex Mono (labels/tags)
- Icons: Lucide (stroke, not fill)

**Components built:** Button, Badge, Tag, Card, Avatar, Input, Select, Checkbox, Alert, Tooltip, Navbar, Tabs, StatusBadge, ToolCard

**UI kit:** Interactive click-through at `lumen-design-system/project/ui_kits/lumen/index.html` — Home, Directory, ToolDetail screens. Needs tweaks but direction approved.

**Integration plan:** Lumen's CSS tokens (`tokens/`) replace/supplement the current Tailwind/DaisyUI theme. Lumen components are adapted into React components in `frontend/src/components/`.

---

## Display philosophy
The experience should feel like **Spotify's browse screen** — content surfaced invitingly, discovery natural, always a clear path to more.

**Key principle:** The friendly discovery layer should guide, not limit. Teachers can always tell when they're being restricted vs guided. The path to more should be obvious and never feel like escaping a walled garden.

**Two modes:**
- **Discovery layer** — warm, curated, "here's what's relevant for you." Rows by role/task, featured tools surfaced, feels worth exploring. Leads with tool value, not compliance status.
- **Power layer** — full catalogue with filters, dropdowns, status filters, bucket filters. For teachers who know what they want. Accessed naturally, not hidden.

**Not reviewed tools** don't need to be hidden — they just don't lead the discovery layer.

**Future:** Click tracking for popularity, ratings system (requires backend — Phase 2).

---

## Tools section architecture

### Primary grouping: Teacher role/responsibility
Teachers think in tasks, not AI capabilities.

| Bucket | Covers |
|---|---|
| **Administration** | Reports, communications, scheduling, documentation, data |
| **Classroom** | Delivery, engagement, student support, differentiation, accessibility |
| **Curriculum** | Lesson planning, resource creation, unit design, standards alignment |
| **Assessment** | Task design, rubrics, feedback, marking, AI detection |
| **Professional Learning** | Research, CPD, presentations, reflection |
| **Creativity & Media** | Images, video, audio, music, visual resources |
| **Prohibited** | Tools explicitly blocked on CEWA devices — visible so teachers know what to avoid |

Tools are tagged against multiple buckets.

### CEWA status system

| Status | Meaning | Teacher action |
|---|---|---|
| **Approved** | Cleared for use on CEWA devices | Use freely |
| **Approved with Conditions** | Usable with specific restrictions | Check the condition shown |
| **Under Review** | CEWA assessment in progress | Avoid for now |
| **Not Approved** | Explicitly blocked on CEWA devices | Do not use on CEWA devices |
| **Not Reviewed** | Not on CEWA list | Personal devices only — check with your school's digital team |

### Status explainer UI
- **Tooltips** on every status badge — one-liner on hover/tap
- **Footer callout** on the tools section — full status explanation + what the CEWA review process means
- Split to dedicated page later if needed

---

## AI Capability → Education Task mapping
Used to write tool card descriptions, not for organising buckets.

| AI Capability | Education Tasks |
|---|---|
| Text generation | Reports, parent comms, lesson plans, rubrics, assessment tasks, feedback |
| Summarisation | Condense research, distil meeting notes, create study guides |
| Question answering | Research topics, explain concepts, worked examples |
| Content analysis | Feedback on writing, AI detection, assessment data analysis |
| Differentiation / rewriting | Rewrite at reading levels, EAL/D versions, scaffold materials |
| Image generation | Visual resources, illustrations, stimulus materials |
| Presentation generation | Slide decks, learning materials, PD presentations |
| Video generation | Explainer videos, course intros, student-facing content |
| Voice / audio generation | Narrate resources, text-to-speech for accessibility |
| Music generation | Creative arts stimulus, background music |
| Translation | EAL/D support, parent comms, multilingual resources |
| Transcription | Meeting notes, student verbal responses |
| Code / automation | Admin automation, data analysis |
| Accessibility | Reading support, screen reader optimisation |

---

## New content sections planned

### 1. How AI Works (expands AI Foundations track)
Non-technical essentials — what teachers most need to know for practical use:
- What is a session?
- How does memory work?
- What is a token?
- What is a model?
- How do models differ?
- What can AI be used for? (with education/work examples)

### 2. AI Tools Directory (new section in AI in Your Practice track)
Flagship feature. Full tool catalogue with discovery layer + power layer. See tools architecture above.
