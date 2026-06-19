Styled native `<select>` with a custom chevron — for sort and filter dropdowns in the directory.

```jsx
<Select label="Sort by" options={['Most popular','A–Z','Recently added']} />
<Select pill size="sm" options={[{value:'all',label:'All subjects'}]} />
```

Props: `label · options · pill · size`. Pass `<option>` children instead of `options` if you need groups.
