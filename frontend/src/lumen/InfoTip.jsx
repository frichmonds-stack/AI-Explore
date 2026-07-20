
/*
 * InfoTip — a small, reusable definition tooltip.
 *
 * Two forms:
 *  - <InfoTip text="…">trigger</InfoTip>  → wraps a trigger; tip on hover/focus.
 *  - <InfoTip text="…" />                 → renders a standalone ⓘ trigger.
 *
 * Shows on hover and keyboard focus; the trigger is focusable so it works
 * without a pointer. Renders nothing if there's no text.
 */

const CSS = `
.lmn-infotip{ position:relative; display:inline-flex; align-items:center; }
.lmn-infotip__trigger{
  display:inline-flex; align-items:center; justify-content:center;
  width:1em; height:1em; border-radius:50%; margin-left:.35em;
  font-family:var(--font-mono); font-size:.85em; line-height:1;
  color:var(--text-muted); border:1px solid var(--border-strong);
  cursor:help; background:transparent; flex:none;
}
.lmn-infotip__trigger:hover{ color:var(--pine-700); border-color:var(--pine-300); }
.lmn-infotip__wrap{ cursor:help; }
/* Left-anchored to the trigger (not centred) so tooltips on edge triggers —
   e.g. the first pill in the filter bar — don't clip off the viewport. */
.lmn-infotip__tip{
  position:absolute; bottom:calc(100% + 9px); left:0; transform:translateY(4px);
  width:max-content; max-width:min(280px, 78vw); z-index:60;
  background:var(--pine-800); color:#fff; text-align:left;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-regular);
  line-height:1.5; padding:.6em .75em; border-radius:var(--radius-sm);
  box-shadow:var(--shadow-lg);
  opacity:0; pointer-events:none;
  transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.lmn-infotip__tip::after{
  content:""; position:absolute; top:100%; left:1.1em;
  border:5px solid transparent; border-top-color:var(--pine-800);
}
/* Show on hover, or on *keyboard* focus only. Using :has(:focus-visible)
   rather than :focus-within means a mouse-click that focuses the wrapped
   control (e.g. opening a filter dropdown) doesn't leave the tip stuck open. */
.lmn-infotip:hover .lmn-infotip__tip,
.lmn-infotip:has(:focus-visible) .lmn-infotip__tip{ opacity:1; transform:translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-infotip-css')) {
  const s = document.createElement('style'); s.id = 'lmn-infotip-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function InfoTip({ text, children, label = 'Definition', className = '', tabIndex = 0 }) {
  if (!text) return children || null;
  return (
    <span className={['lmn-infotip', className].filter(Boolean).join(' ')}>
      {children ? (
        <span className="lmn-infotip__wrap" tabIndex={tabIndex} role="button" aria-label={label}>{children}</span>
      ) : (
        <span className="lmn-infotip__trigger" tabIndex={tabIndex} role="button" aria-label={label}>i</span>
      )}
      <span className="lmn-infotip__tip" role="tooltip">{text}</span>
    </span>
  );
}

export default InfoTip;
