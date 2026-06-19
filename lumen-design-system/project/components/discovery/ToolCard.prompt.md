The flagship Lumen discovery card — one AI tool surfaced in the directory. Shows logo, name, vendor, one-line description, CEWA `StatusBadge` (with tooltip), the teacher roles it suits, and use-case tags.

```jsx
<ToolCard
  name="MagicSchool AI"
  vendor="magicschool.ai"
  description="Generate lesson plans, rubrics and differentiated resources in minutes."
  status="approved"
  featured
  roles={['Classroom teacher', 'Curriculum lead']}
  tags={['Lesson planning', 'Differentiation', 'Rubrics']}
/>
```

Use `featured` for the warm ochre-ringed treatment in the discovery layer, `popular` for the popular badge. Composes `StatusBadge`, `Tag`, and `Badge`. Designed to sit in a responsive grid (min ~320px columns).
