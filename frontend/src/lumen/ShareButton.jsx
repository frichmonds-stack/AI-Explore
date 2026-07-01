import React, { useState, useRef, useEffect } from 'react';

// Share menu — copy link, email, X, LinkedIn. Uses the native share sheet on
// devices that support it, otherwise a small menu of plain share-INTENT URLs.
// No platform SDKs, pixels or trackers — nothing loads until the user clicks.

const CSS = `
.lmn-share{ position:relative; display:inline-flex; }
.lmn-share__btn{
  display:inline-flex; align-items:center; gap:.5em; cursor:pointer;
  font-family:var(--font-sans); font-weight:var(--weight-semibold); font-size:var(--text-sm);
  border-radius:var(--radius-pill); border:1px solid var(--border-strong);
  background:var(--surface-card); color:var(--text-body); padding:.45em .9em;
  transition:var(--transition-base); white-space:nowrap;
}
.lmn-share__btn:hover{ border-color:var(--pine-300, var(--pine-200)); color:var(--pine-700); }
.lmn-share__icon{ width:1em; height:1em; flex:none; }
.lmn-share__menu{
  position:absolute; top:calc(100% + 6px); right:0; z-index:40; min-width:190px;
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-md); box-shadow:var(--shadow-lg); padding:var(--space-2);
  display:flex; flex-direction:column; gap:2px;
}
.lmn-share__opt{
  display:flex; align-items:center; gap:.6em; text-align:left; text-decoration:none;
  font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body);
  background:transparent; border:none; cursor:pointer; padding:.5em .6em; border-radius:var(--radius-sm);
}
.lmn-share__opt:hover{ background:var(--pine-50); color:var(--pine-700); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-share-css')) {
  const s = document.createElement('style'); s.id = 'lmn-share-css'; s.textContent = CSS; document.head.appendChild(s);
}

function Icon({ path }) {
  return <svg className="lmn-share__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>;
}

export function ShareButton({ title = '', text = '', className = '' }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const onShare = async () => {
    // Prefer the OS share sheet where available (mobile).
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; } catch { /* cancelled — fall through */ }
    }
    setOpen((o) => !o);
  };

  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => {
      setCopied(true); setTimeout(() => { setCopied(false); setOpen(false); }, 1200);
    });
  };

  const enc = encodeURIComponent;
  const mailto = `mailto:?subject=${enc(title)}&body=${enc(`${text}\n\n${url}`)}`;
  const x = `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;

  return (
    <span className={['lmn-share', className].filter(Boolean).join(' ')} ref={ref}>
      <button type="button" className="lmn-share__btn" onClick={onShare} aria-haspopup="menu" aria-expanded={open}>
        <Icon path={<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></>} />
        Share
      </button>
      {open && (
        <div className="lmn-share__menu" role="menu">
          <button type="button" className="lmn-share__opt" role="menuitem" onClick={copy}>
            <Icon path={<><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>} />
            {copied ? 'Link copied' : 'Copy link'}
          </button>
          <a className="lmn-share__opt" role="menuitem" href={mailto}>
            <Icon path={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>} />
            Email
          </a>
          <a className="lmn-share__opt" role="menuitem" href={x} target="_blank" rel="noopener noreferrer">
            <Icon path={<path d="M4 4l16 16M20 4L4 20" />} />
            X (Twitter)
          </a>
          <a className="lmn-share__opt" role="menuitem" href={linkedin} target="_blank" rel="noopener noreferrer">
            <Icon path={<><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" /></>} />
            LinkedIn
          </a>
        </div>
      )}
    </span>
  );
}

export default ShareButton;
