Sticky top bar carrying the Lumen brand lockup, primary links, and a right-hand slot (search, buttons, avatar). Translucent paper background with blur.

```jsx
<Navbar
  links={[
    {label:'Home', href:'#', active:true},
    {label:'AI Tools', href:'#'},
    {label:'Learning tracks', href:'#'},
  ]}
  right={<><Button variant="ghost" size="sm">Sign in</Button><Avatar name="Jane T"/></>}
/>
```

`LumenMark` is exported separately if you need the mark on its own. Links take `{label, href, active, onClick}`.
