# Session Close-Out Procedure

Before ending any session, all work must be committed and pushed.

```bash
# Stage specific files — never use git add -A blindly
git add <files>

# Commit — plain English, what changed and why
git commit -m "descriptive message"

# Push to feature branch
git push -u origin claude/amazing-carson-5zucgf
```

## Rules
- Never leave uncommitted work at session end
- Never push to `main`
- If push fails with 403: retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
