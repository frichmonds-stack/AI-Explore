Controlled tab strip for switching directory views or tool-detail sections. Underline style by default; `pill` for a segmented control.

```jsx
<Tabs value={tab} onChange={setTab}
  items={[{value:'all',label:'All tools',count:142},{value:'fav',label:'Saved',count:6}]} />
<Tabs variant="pill" value={view} onChange={setView} items={['Featured','Browse all']} />
```
