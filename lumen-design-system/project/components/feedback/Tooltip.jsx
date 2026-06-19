import React from 'react';

const CSS = `
.lmn-tip{ position:relative; display:inline-flex; }
.lmn-tip__pop{
  position:absolute; z-index:40; width:max-content; max-width:240px;
  background:var(--pine-800); color:#fff;
  font-family:var(--font-sans); font-size:var(--text-xs); line-height:1.45; text-align:left;
  padding:.55em .7em; border-radius:var(--radius-sm); box-shadow:var(--shadow-lg);
  opacity:0; pointer-events:none; transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.lmn-tip__pop::after{ content:""; position:absolute; border:5px solid transparent; }
/* top (default) */
.lmn-tip--top .lmn-tip__pop{ bottom:calc(100% + 8px); left:50%; transform:translateX(-50%) translateY(4px); }
.lmn-tip--top .lmn-tip__pop::after{ top:100%; left:50%; transform:translateX(-50%); border-top-color:var(--pine-800); }
.lmn-tip--bottom .lmn-tip__pop{ top:calc(100% + 8px); left:50%; transform:translateX(-50%) translateY(-4px); }
.lmn-tip--bottom .lmn-tip__pop::after{ bottom:100%; left:50%; transform:translateX(-50%); border-bottom-color:var(--pine-800); }
.lmn-tip:hover .lmn-tip__pop, .lmn-tip:focus-within .lmn-tip__pop{ opacity:1; transform:translateX(-50%) translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tip-css')) {
  const s = document.createElement('style'); s.id = 'lmn-tip-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tooltip({ content, placement = 'top', className = '', children, ...rest }) {
  return (
    <span className={['lmn-tip', `lmn-tip--${placement}`, className].filter(Boolean).join(' ')} tabIndex={0} {...rest}>
      {children}
      <span className="lmn-tip__pop" role="tooltip">{content}</span>
    </span>
  );
}
