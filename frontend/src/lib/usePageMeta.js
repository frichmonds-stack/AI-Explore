import { useEffect } from 'react';

// Per-page metadata (SEO + social share) for a client-rendered SPA.
//
// Sets document.title and the description / Open Graph / Twitter meta tags as
// each page mounts, then restores the site defaults on unmount. This is the
// "tier 1" fix — it helps JS-executing crawlers (e.g. Google) and gives every
// route real metadata. Non-JS crawlers that build social cards still only see
// index.html until the site moves to pre-rendered HTML (see BACKLOG: SEO).

const SITE_NAME = 'Pigeon Hole';
const DEFAULT_DESCRIPTION = 'Practical, classroom-ready help for teaching with AI — start with the work, grow the craft, keep children safe.';

// Create-or-update a <meta> tag keyed by name= or property=.
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * @param {object} opts
 * @param {string} opts.title       Page title (site name is appended).
 * @param {string} [opts.description]
 * @param {string} [opts.image]     Absolute URL to a share image.
 * @param {'website'|'article'} [opts.type]
 */
export function usePageMeta({ title, description, image, type = 'website' } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — practical AI help for teachers`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }

    return () => {
      // Restore site defaults when leaving the page.
      document.title = `${SITE_NAME} — practical AI help for teachers`;
      setMeta('name', 'description', DEFAULT_DESCRIPTION);
    };
  }, [title, description, image, type]);
}

export default usePageMeta;
