import React from 'react';
import { SHOW_APPROVAL_STATUS } from '../config';

/* Tool approval status — single source of truth for label and tooltip text. */
export const STATUS = {
  approved:    { label: 'Approved',     tip: 'Reviewed and approved for use on school-managed devices.' },
  conditional: { label: 'Conditional',  tip: 'Approved with specific conditions — check the notes before using.' },
  review:      { label: 'Under Review', tip: 'Currently being evaluated — avoid on school devices until cleared.' },
  restricted:  { label: 'Not Approved', tip: 'Explicitly blocked on school-managed devices. Avoid on school networks.' },
  unreviewed:  { label: 'Unreviewed',   tip: 'Not independently reviewed — use professional judgement.' },
};

const CSS = `
.lmn-status{ position:relative; display:inline-flex; }
.lmn-status__pill{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  font-size:var(--text-xs); line-height:1; white-space:nowrap;
  padding:.42em .7em .42em .6em; border-radius:var(--radius-pill);
  border:1px solid transparent; cursor:default;
}
.lmn-status__dot{ width:.55em; height:.55em; border-radius:50%; flex:none; }
.lmn-status--approved .lmn-status__pill{ background:var(--status-approved-bg); color:var(--status-approved-fg); }
.lmn-status--approved .lmn-status__dot{ background:var(--status-approved-dot); }
.lmn-status--pilot .lmn-status__pill{ background:var(--status-pilot-bg); color:var(--status-pilot-fg); }
.lmn-status--pilot .lmn-status__dot{ background:var(--status-pilot-dot); }
.lmn-status--review .lmn-status__pill{ background:var(--status-review-bg); color:var(--status-review-fg); }
.lmn-status--review .lmn-status__dot{ background:var(--status-review-dot); }
.lmn-status--conditional .lmn-status__pill{ background:var(--status-conditional-bg); color:var(--status-conditional-fg); }
.lmn-status--conditional .lmn-status__dot{ background:var(--status-conditional-dot); }
.lmn-status--restricted .lmn-status__pill{ background:var(--status-restricted-bg); color:var(--status-restricted-fg); }
.lmn-status--restricted .lmn-status__dot{ background:var(--status-restricted-dot); }
.lmn-status--unreviewed .lmn-status__pill{ background:var(--status-unreviewed-bg); color:var(--status-unreviewed-fg); }
.lmn-status--unreviewed .lmn-status__dot{ background:var(--status-unreviewed-dot); }

.lmn-status__tip{
  position:absolute; bottom:calc(100% + 9px); left:50%; transform:translateX(-50%) translateY(4px);
  width:max-content; max-width:230px; z-index:30;
  background:var(--pine-800); color:#fff; text-align:left;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-regular);
  line-height:1.45; padding:.6em .75em; border-radius:var(--radius-sm);
  box-shadow:var(--shadow-lg);
  opacity:0; pointer-events:none; transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.lmn-status__tip strong{ display:block; font-weight:var(--weight-semibold); margin-bottom:2px; }
.lmn-status__tip::after{ content:""; position:absolute; top:100%; left:50%; transform:translateX(-50%);
  border:5px solid transparent; border-top-color:var(--pine-800); }
/* Hover or keyboard focus only — :focus-visible (not :focus-within) so a mouse
   click on the badge doesn't leave the tooltip stuck open after the cursor leaves. */
.lmn-status:hover .lmn-status__tip, .lmn-status:focus-visible .lmn-status__tip{ opacity:1; transform:translateX(-50%) translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-status-css')) {
  const s = document.createElement('style'); s.id = 'lmn-status-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function StatusBadge({ status = 'unreviewed', showTip = true, className = '', ...rest }) {
  // Approval layer hidden for the public build (see config.js). Renders nothing.
  if (!SHOW_APPROVAL_STATUS) return null;
  const cfg = STATUS[status] || STATUS.unreviewed;
  return (
    <span className={['lmn-status', `lmn-status--${status}`, className].filter(Boolean).join(' ')} tabIndex={showTip ? 0 : undefined} {...rest}>
      <span className="lmn-status__pill">
        <span className="lmn-status__dot" />
        {cfg.label}
      </span>
      {showTip && (
        <span className="lmn-status__tip" role="tooltip">
          <strong>{cfg.label}</strong>{cfg.tip}
        </span>
      )}
    </span>
  );
}
