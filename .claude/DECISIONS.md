# Decisions

## Stack
- **Vite over CRA** — CRA is deprecated and incompatible with Tailwind v4's PostCSS pipeline (`@plugin` directives pass through unprocessed). Vite handles Tailwind v4 correctly out of the box.
- **DaisyUI over shadcn** — DaisyUI uses CSS classes rather than installed React components, making it lighter on tokens and better suited to a content-heavy static site.
- **Static JSON content** — all content lives in `/frontend/src/content/*.json`. No CMS or backend needed at this stage. Easy to edit without touching components.
- **React Router v7 client-side routing** — single-page app feel with no server required. Fits static hosting.

## Design
- **Lumen design system** — created by Claude Design. Name, palette, typography, components all established. Located at `lumen-design-system/project/`. Direction approved with tweaks to come.
- **Spotify browse, not Netflix** — discovery layer surfaces tools invitingly but never limits access. The friendly layer guides, doesn't cage. Full catalogue always one natural step away.
- **Two-layer UI for tools** — discovery layer (warm, curated, role-based) + power layer (filters, full catalogue). Teachers choose their depth; neither mode is hidden.
- **Prohibited bucket** — Not Approved tools get their own visible bucket so teachers know what to avoid on CEWA devices, rather than those tools simply being absent.
- **Status tooltips + footer explainer** — CEWA status explained inline via tooltips; footer callout covers the full system. No separate explainer page for now.

## Content
- **Website, not web app** — read-and-explore resource. No quizzes, no progress tracking, no accounts.
- **AI is neutral — intentionality is the point** — core editorial philosophy. AI isn't good or bad; unfettered access without pedagogical intent is the problem (same mistake as devices + social media). The resource models purposeful, precise use.
- **Tools are the hook, pedagogy is the ambition** — tools bring teachers in, but the resource aims to move them from "what tool should I use" to "how do I teach better." Every tool links back to pedagogical practice.
- **Pedagogy badges on tool cards** — each tool carries badges for the teaching frameworks it best supports (e.g. "Strong for: Cognitive Load Theory"). Badges link through to the pedagogy section. Makes tools filterable by pedagogical approach. Full star-rating system deferred to Phase 2.
- **Every tool gets its own detail page** — route `/tools/:toolId`. Each tag on the card (role bucket, pedagogy framework) gets its own section on the detail page explaining *why* this tool suits that role or pedagogical approach and *how* to use it that way. The card is a summary; the detail page is the substance.
- **Persistent spotlight, not in-grid expansion** — tried an in-grid FLIP morph (card expands in place to full width, grid reflows) but it felt janky. Replaced with a dedicated sticky spotlight panel above the grid. Cards are calm scannable *selectors* (logo, name, vendor, secondary status, two-line synopsis, three fixed tag slots: use → role → pedagogy); clicking one drives the spotlight. No grid reflow = no jank. The spotlight auto-selects the first featured tool on load, is sticky, expands on click, and minimises to a compact bar on scroll (re-expands on next click or bar tap). Progressive disclosure: detailed setup/risks/pricing stay on the tool detail page. Implementation notes: `prevent​Default` on card mousedown stops focus-scroll; minimise-on-scroll re-baselines after the expand animation so scroll-anchoring (which bumps scrollY to keep the grid stable when the panel grows) isn't misread as a user scroll. Respects `prefers-reduced-motion`.
- **Use-category is the primary tag axis** — teachers search by the job to be done ("Lesson Planning", "Assessment & Feedback"), so `useCategories` is its own data field and the strongest (filled pine) chip on the card, distinct from role and pedagogy. Added a "What you need" filter as the first filter row.
- **Approval status: text + restrained colour, never colour alone** — visible labels are exactly `Approved / Conditional / Unreviewed / Not Approved` (plus `Under Review`), no "CEWA" in the badge text. Conditional = amber, kept visually secondary to tool name + synopsis.
- **"Strongest" tag is authored-order for now** — no relevance/ranking data exists yet, so the collapsed card shows the first array item per category as a placeholder. Real ranking is a planned data-model addition (see BACKLOG).
- **Tag / guide links point to placeholders** — `/explainer/:category` (general uses/roles/pedagogies explainers) and `/tools/:toolId` (full guide) are lightweight "in development" placeholder pages until the real content is built. Keeps interactions real and testable without inventing final content.
- **Risks first** — child development risks surfaced throughout, not buried at the end.
- **Teacher role as primary axis for tools** — buckets are Administration, Classroom, Curriculum, Assessment, Professional Learning, Creativity & Media, Prohibited. Teachers think in tasks, not AI capabilities.
- **Tools not limited to CEWA list** — full tool landscape shown with CEWA status badge on each. Teachers on personal devices can make their own call.
- **Backend deferred** — no server until content becomes dynamic or ratings/tracking needed.
- **School policy section deferred** — planned for a later phase.

## Infrastructure
- **Build as prototype first** — working prototype makes the case for proper hosting, gives stakeholders something concrete, and opens the real conversation about CEWA-wide deployment.
- **Hosting unresolved** — SharePoint is path of least resistance (inside CEWA tenant) but constrains design. Azure Static Web Apps preferred — Microsoft infrastructure, likely already CEWA-approved, hosts React properly. Needs IT conversation.
- **Branch `claude/amazing-carson-5zucgf`** — all Claude work goes here, never directly to `main`.
- **`.claude/settings.local.json` gitignored** — auto-captures approved shell commands which may include secrets.
