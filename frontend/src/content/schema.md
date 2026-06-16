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
