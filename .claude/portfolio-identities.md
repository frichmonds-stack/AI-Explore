# Portfolio Identities

Permanent Work Queue identities for Pigeon Hole items selected for cross-project visibility in Notion. Reuse these keys even when titles or scope wording change; fold overlapping detail into the existing identity rather than opening a second row for the same workstream.

Key format is exactly three lowercase kebab-case segments — `<project-id>:<area>:<item>`. The first segment is always `ai-explore`, the committed `project_id` in `.ai-efficiency.toml`, even though the Notion project is displayed as **Pigeon Hole** (`project_name`). Those two differ by design: `project_id` is the durable identity, `project_name` is the dashboard label. Do not "fix" either one to match the other.

| Canonical work or thread | Sync Key |
|---|---|
| Build the review data model (populate the scaffolding) | `ai-explore:reviews:data-model-build` |
| Write the Substance scales | `ai-explore:rubric:substance-scales` |
| Choose the exemplar task suite | `ai-explore:reviews:task-suite` |
| Author the site's explanatory spine | `ai-explore:content:explanatory-spine` |
| Guides → Articles rework | `ai-explore:articles:guides-rework` |
| Safety gate — pure gate, or gate with tiers | `ai-explore:decision:safety-gate-form` |
| Reasoning effort as a scoring confound | `ai-explore:decision:effort-confound` |

## Deliberate folding

- **Benchmark foundations** is folded into `ai-explore:content:explanatory-spine` rather than given its own key: `BACKLOG.md` already records it as a section of the spine, not standalone work.
- **Red-pen the `Function / Form / Substance` sub-criteria** is folded into `ai-explore:rubric:substance-scales`. Function and Form are settled; the only outstanding part of that workstream is Substance's scales, and a row per bucket would fragment one piece of work into three.

## Rules

Before adding an identity, compare the existing Pigeon Hole rows in the Work Queue **by meaning**. Adopt an equivalent row's key. Never derive a replacement key just because a title changed. If the Work Queue cannot be reached, leave delivery pending for identity reconciliation rather than inventing a key.

Only work chosen for portfolio visibility belongs here. Most of `BACKLOG.md` and `THREADS.md` stays in this repo and never reaches Notion — the repository is technical truth, Notion is a curated portfolio summary.
