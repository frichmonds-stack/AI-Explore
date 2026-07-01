import React from 'react';
import { useBookmark } from '../lib/useBookmarks';

// Bookmark toggle. Two sizes: a labelled button (detail pages) and a compact
// icon-only toggle (cards). Reflects saved state via a filled bookmark glyph.

const CSS = `
.lmn-save{
  display:inline-flex; align-items:center; gap:.5em; cursor:pointer;
  font-family:var(--font-sans); font-weight:var(--weight-semibold); font-size:var(--text-sm);
  border-radius:var(--radius-pill); border:1px solid var(--border-strong);
  background:var(--surface-card); color:var(--text-body);
  padding:.45em .9em; transition:var(--transition-base); white-space:nowrap;
}
.lmn-save:hover{ border-color:var(--pine-300, var(--pine-200)); color:var(--pine-700); }
.lmn-save.is-saved{ background:var(--pine-50); border-color:var(--pine-300, var(--pine-200)); color:var(--pine-700); }
.lmn-save__icon{ width:1em; height:1em; flex:none; }
.lmn-save--icon{ padding:.4em; border-radius:var(--radius-md); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-save-css')) {
  const s = document.createElement('style'); s.id = 'lmn-save-css'; s.textContent = CSS; document.head.appendChild(s);
}

function BookmarkIcon({ filled }) {
  return (
    <svg className="lmn-save__icon" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

/**
 * @param {string} type  'tool' | 'guide' | 'article'
 * @param {string} id
 * @param {boolean} [iconOnly]  compact icon toggle (for cards)
 */
export function SaveButton({ type, id, iconOnly = false, className = '', onClick, ...rest }) {
  const { saved, toggle } = useBookmark(type, id);
  const handle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
    onClick?.(e);
  };
  const label = saved ? 'Saved' : 'Save';
  return (
    <button
      type="button"
      onClick={handle}
      aria-pressed={saved}
      aria-label={saved ? 'Remove from saved' : 'Save for later'}
      title={saved ? 'Remove from saved' : 'Save for later'}
      className={['lmn-save', iconOnly ? 'lmn-save--icon' : '', saved ? 'is-saved' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <BookmarkIcon filled={saved} />
      {!iconOnly && <span>{label}</span>}
    </button>
  );
}

export default SaveButton;
