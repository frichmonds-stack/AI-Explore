# Content Schema

Each content file is a JSON object representing a **track** (a top-level learning area).

## Track

```json
{
  "id": "string",          // matches the route segment (e.g. "foundations")
  "title": "string",       // display title
  "description": "string", // shown on the track landing page
  "sections": [Section]
}
```

## Section

```json
{
  "id": "string",          // used in URL (e.g. "what-is-ai")
  "title": "string",
  "summary": "string",     // one-line description shown in the section list
  "tags": ["string"],      // optional: badge labels shown on track page
  "blocks": [Block]
}
```

## Block types

### text
```json
{ "type": "text", "content": "string" }
```

### heading
```json
{ "type": "heading", "content": "string" }
```

### list
```json
{ "type": "list", "items": ["string"] }
```

### risk
Renders as a prominent warning callout (DaisyUI alert-warning).
```json
{ "type": "risk", "title": "string", "content": "string" }
```

### pedagogy
Renders as an info callout linking to teaching theory (DaisyUI alert-info).
```json
{ "type": "pedagogy", "title": "string", "content": "string" }
```

### quote
```json
{ "type": "quote", "content": "string", "source": "string (optional)" }
```

### callout
Neutral callout box for notes, tips, or framing (DaisyUI alert-neutral).
```json
{ "type": "callout", "title": "string (optional)", "content": "string" }
```

---

# Guides (`guides.json`)

Guides are the **work-first** content type — short, task-shaped walkthroughs rendered by `GuidesPage` (hub) and `GuidePage` (detail). They reuse the taxonomy in `tools.json` (`useCategories`, `pedagogyFrameworks`, `roles`, `bands`, `subjects`) so there is one source of truth; only `difficulties` is guide-specific and lives in `guides.json` `meta`.

```json
{
  "id": "string",              // route segment, e.g. "differentiate-a-reading-task"
  "title": "string",
  "summary": "string",         // one line, shown on cards
  "useCategory": "string",     // ONE useCategories id from tools.json (the job)
  "roles": ["string"],         // role labels from tools.json meta.roles
  "bands": ["string"],         // band ids from tools.json meta.bands
  "subjects": ["string"],
  "time": "string",            // e.g. "10 minutes"
  "difficulty": "string",      // a difficulties id: starter | confident | advanced
  "tools": ["string"],         // tools.json ids — rendered with their approval badge (when enabled)
  "pedagogies": ["string"],    // pedagogyFrameworks ids
  "featured": true,            // surfaces in the "Start here" rail + homepage
  "outcome": "string",         // what the teacher ends up with
  "concept": { "label": "string", "trackId": "string", "sectionId": "string" }, // links to a Foundations section
  "steps": [
    { "title": "string", "detail": "string", "prompt": "string (optional, copy-paste)", "tip": "string (optional)" }
  ],
  "safety": { "title": "string", "content": "string" },        // MANDATORY — child-safety-first block
  "pedagogyNote": { "framework": "string", "content": "string" }, // framework = a pedagogyFrameworks id
  "verify": ["string"],        // "check before you use it" checklist
  "next": ["string"]           // related guide ids — the "Explore next" rail (missing ids are filtered out)
}
```

**Conventions**
- `safety` is required on every guide — it's the child-safety-first commitment made concrete. Don't author a guide without it.
- `tools` ids must exist in `tools.json`; the guide inherits each tool's approval badge (hidden while the approval layer is off — see `config.js`).
- `next` ids that don't resolve are silently dropped, so it's safe to reference guides not yet written.
- One `useCategory` per guide (the primary job); use `roles`/`pedagogies` arrays for breadth.
