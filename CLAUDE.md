# AI-Explore — Claude Working Context

## Session Start
Always run before doing any work:
```bash
git fetch origin claude/amazing-carson-5zucgf
git pull origin claude/amazing-carson-5zucgf
git status
git log --oneline -5
```

## Branch
`claude/amazing-carson-5zucgf` — never push to `main`.

## Tech Stack
| Layer | Choice | Notes |
|---|---|---|
| Frontend | React + Vite | `/frontend` |
| Routing | React Router v7 | Client-side, all routes in `frontend/src/App.js` |
| UI | DaisyUI + Tailwind CSS | Always use DaisyUI components — no custom from scratch |
| Content | JSON in `/frontend/src/content/` | One file per track; never hardcode strings in components |
| Backend | Node/Express (planned, not built) | All content is static for now |

## Key Conventions
- DaisyUI first: `btn`, `card`, `alert`, `badge`, `collapse`, `drawer`, `navbar`
- Long-form content: use `prose` class (`@tailwindcss/typography`)
- `RiskCallout` → `alert alert-warning` (child development risks)
- `PedagogyNote` → `alert alert-info` (links AI use to teaching theory)
- Content schema: `/frontend/src/content/schema.md`
- No tests required — exploratory/content project

## Routes (all in `frontend/src/App.js`)
| Path | Component |
|---|---|
| `/` | `HomePage` |
| `/:track` | `TrackPage` |
| `/:track/:sectionId` | `SectionPage` |
| `*` | `NotFoundPage` |

Tracks: `foundations` · `risks` · `practice` · `pedagogies` · `explore`

## Dev
```bash
cd frontend && npm start
# Runs at http://localhost:5173
```

## Procedures
- Close-out: `.claude/close-out.md`
- Project background (purpose, audience, content architecture): `.claude/project-context.md`

## Planning
- Backlog: `.claude/BACKLOG.md`
- Decisions log: `.claude/DECISIONS.md`
- Open threads: `.claude/THREADS.md`
- Content & display architecture: `.claude/content-architecture.md`
