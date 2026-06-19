Text input with optional label, hint and error states, plus leading/trailing icon slots. Set `pill` for the rounded directory search bar.

```jsx
<Input label="Your name" placeholder="Jane Teacher" />
<Input pill placeholder="Search AI tools…" icon={<SearchIcon/>} />
<Input label="Email" error="Enter a valid email" />
```

Props: `label · hint · error · icon · trailing · pill · size` (sm/md). Focus shows a pine ring; errors switch to a red ring.
