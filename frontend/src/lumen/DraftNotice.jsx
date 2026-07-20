
/*
 * DraftNotice — a consistent, editorial "this was AI-generated and needs a human
 * review/rewrite" reminder. Two forms:
 *   <DraftNotice />            full banner (top of a content page)
 *   <DraftNotice variant="badge" />   small inline pill (on cards in a list)
 *
 * Deliberately styled as a process/editorial note (dashed ochre), distinct from
 * the red RiskCallout and the blue PedagogyNote so it never reads as content.
 *
 * needsReview(item) — show the notice unless the item is explicitly marked
 * reviewStatus: 'human-reviewed'. So all AI-drafted content shows it by default,
 * and the reminder simply disappears once a human signs off on a piece.
 */
export const needsReview = (item) => !item || item.reviewStatus !== 'human-reviewed';

const CSS = `
.lmn-draft{
  display:flex; align-items:flex-start; gap:var(--space-3);
  padding:var(--space-3) var(--space-4); margin-bottom:var(--space-6);
  background:color-mix(in srgb, var(--ochre-400, #d0a23f) 12%, var(--surface-page));
  border:1px dashed var(--ochre-400, #d0a23f); border-radius:var(--radius-md);
}
.lmn-draft__tag{
  flex:none; font-family:var(--font-mono); font-size:var(--text-2xs);
  letter-spacing:var(--tracking-label); text-transform:uppercase; font-weight:var(--weight-medium);
  color:#fff; background:var(--ochre-600, #a87f24); border-radius:var(--radius-pill);
  padding:.34em .7em; margin-top:1px;
}
.lmn-draft__text{
  margin:0; font-size:var(--text-sm); line-height:var(--leading-relaxed);
  color:var(--text-body);
}
.lmn-draft__badge{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-label);
  text-transform:uppercase; font-weight:var(--weight-medium);
  color:var(--ochre-700, #8a6d1f); background:transparent;
  border:1px dashed var(--ochre-400, #d0a23f); border-radius:var(--radius-pill); padding:.26em .6em;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-draft-css')) {
  const s = document.createElement('style'); s.id = 'lmn-draft-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function DraftNotice({ variant = 'banner', note }) {
  if (variant === 'badge') {
    return <span className="lmn-draft__badge" title="AI-generated — needs human review">AI draft</span>;
  }
  return (
    <div className="lmn-draft" role="note">
      <span className="lmn-draft__tag">AI-generated draft</span>
      <p className="lmn-draft__text">
        {note || 'Drafted by AI — needs a human review and rewrite before it’s classroom-ready.'}
      </p>
    </div>
  );
}
