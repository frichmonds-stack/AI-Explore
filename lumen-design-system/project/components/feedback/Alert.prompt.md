Inline message banner for guidance, approval notes and warnings. Soft tinted background with a matching icon.

```jsx
<Alert tone="pine" title="New to AI tools?">Start with the Foundations track.</Alert>
<Alert tone="warning" title="Check before you share">Not approved for student-facing use.</Alert>
<Alert tone="success" onClose={...}>Saved to your collection.</Alert>
```

Tones: `info · success · warning · danger · pine`. Optional `title`, `onClose`, custom `icon`.
