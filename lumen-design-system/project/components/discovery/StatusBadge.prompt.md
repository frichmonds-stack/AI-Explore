CEWA approval status pill — the canonical signal of whether a tool is cleared for classroom use. Colour-coded dot + label, with a hover/focus tooltip explaining the state.

```jsx
<StatusBadge status="approved" />
<StatusBadge status="pilot" />
<StatusBadge status="review" />
<StatusBadge status="restricted" />
<StatusBadge status="unreviewed" showTip={false} />
```

Statuses: `approved` (green) · `pilot` (teal) · `review` (amber) · `restricted` (red) · `unreviewed` (neutral). Import `STATUS` for the label/tooltip copy when building legends or filters.
