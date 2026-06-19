Use-case and filter chips. Static label by default; pass `onClick`/`interactive` to make it a selectable filter, `active` for the selected state, `onRemove` for a dismissible chip.

```jsx
<Tag>Lesson planning</Tag>
<Tag interactive active>English</Tag>
<Tag onClick={...}>Assessment</Tag>
<Tag onRemove={...}>Year 7–9</Tag>
```
