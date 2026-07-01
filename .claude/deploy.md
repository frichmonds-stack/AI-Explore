# Deploy

Static SPA (Vite build) + per-route pre-rendered HTML. Target host: **Cloudflare Pages** (free). Netlify/Vercel also supported.

## Build
```bash
cd frontend
SITE_URL=https://<your-domain> npm run build   # -> frontend/dist/
```
`npm run build` runs `vite build` then `scripts/prerender.mjs`, which writes a real `index.html` per route (correct `<title>` + Open Graph/Twitter tags) so social cards + non-JS crawlers work.

- **`SITE_URL`** — set it (no trailing slash) so `og:url` / `og:image` are absolute. Without it, social **images won't render** (relative URLs). Set it as a build env var on the host.
- **`public/og-default.png`** — add a 1200×630 share image (logo + tagline on the Lumen palette). Referenced by every page's `og:image`; until it exists the card shows title/description with no image.

## Cloudflare Pages
1. Connect the GitHub repo (`frichmonds-stack/AI-Explore`).
2. Build settings:
   - **Root directory:** `frontend`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Env var: `SITE_URL = https://<project>.pages.dev` (or the custom domain).
4. SPA fallback is handled by `frontend/public/_redirects` (copied to `dist/`).

## Netlify
Base `frontend`, build `npm run build`, publish `frontend/dist`. `_redirects` handles fallback. Set `SITE_URL`.

## Vercel
Root `frontend`. `vercel.json` provides the SPA rewrite. Set `SITE_URL`.

## After deploy — verify social cards
- Facebook/LinkedIn: paste a deep URL (e.g. `/tools/chatgpt`) into their post composer or the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — confirm title/description/image.
- Or `curl -A "facebookexternalhit" https://<domain>/tools/chatgpt` and check the `<meta property="og:...">` tags are present in the returned HTML.
