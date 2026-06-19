Dark pine tooltip shown on hover and keyboard focus. Wrap any trigger element.

```jsx
<Tooltip content="Reviewed and approved for CEWA schools.">
  <StatusBadge status="approved" showTip={false} />
</Tooltip>
<Tooltip content="Saved tools live here" placement="bottom"><button>★</button></Tooltip>
```

Props: `content`, `placement` (top/bottom).
