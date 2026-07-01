import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import guidesData from '../content/guides.json';
import toolsData from '../content/tools.json';
import { StatusBadge } from '../lumen/StatusBadge';
import { DraftNotice, needsReview } from '../lumen/DraftNotice';
import { usePageMeta } from '../lib/usePageMeta';
import { SaveButton } from '../lumen/SaveButton';
import { ShareButton } from '../lumen/ShareButton';

const { guides } = guidesData;
const { tools, meta } = toolsData;
const { difficulties } = guidesData.meta;

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;
const diffLabel = (id) => difficulties.find((d) => d.id === id)?.label || id;
const pedLabel = (id) => meta.pedagogyFrameworks.find((p) => p.id === id)?.label || id;

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', margin: 0,
    }}>{children}</p>
  );
}

function PromptBlock({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      });
    }
  };
  return (
    <div style={{
      background: 'var(--pine-800)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--ochre-300, #e3c98a)' }}>
          Prompt to copy
        </span>
        <button onClick={copy} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
          color: 'var(--pine-800)', background: '#fff', border: 'none', borderRadius: 'var(--radius-pill)',
          padding: '.3em .8em', cursor: 'pointer',
        }}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#fff', lineHeight: 'var(--leading-relaxed)', margin: 0, whiteSpace: 'pre-wrap' }}>
        {text}
      </p>
    </div>
  );
}

export default function GuidePage() {
  const { guideId } = useParams();
  const guide = guides.find((g) => g.id === guideId);

  usePageMeta(guide ? { title: guide.title, description: guide.summary, type: 'article' } : { title: 'Guide not found' });

  if (!guide) {
    return (
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', marginBottom: 'var(--space-3)' }}>
          Guide not found
        </h1>
        <Link to="/guides" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)' }}>
          ← Back to guides
        </Link>
      </div>
    );
  }

  const guideTools = (guide.tools || []).map((id) => tools.find((t) => t.id === id)).filter(Boolean);
  const nextGuides = (guide.next || []).map((id) => guides.find((g) => g.id === id)).filter(Boolean);

  return (
    <div style={{ maxWidth: 760 }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        <Link to="/guides" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>Guides</Link>
        <span>›</span>
        <span>{guide.title}</span>
      </nav>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
          color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.3em .8em',
        }}>{useCatLabel(guide.useCategory)}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
          {guide.time} · {diffLabel(guide.difficulty)}
        </span>
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.1, marginBottom: 'var(--space-3)' }}>
        {guide.title}
      </h1>
      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
        {guide.summary}
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <SaveButton type="guide" id={guide.id} />
        <ShareButton title={`${guide.title} — AI for Teachers`} text={guide.summary} />
      </div>

      {needsReview(guide) && <DraftNotice />}

      {/* What you'll end up with */}
      {guide.outcome && (
        <div style={{
          padding: 'var(--space-4)', background: 'var(--paper-50)', borderLeft: '3px solid var(--pine-400)',
          borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-7)',
        }}>
          <SectionLabel>What you'll end up with</SectionLabel>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 'var(--space-2) 0 0' }}>
            {guide.outcome}
          </p>
        </div>
      )}

      {/* Tools you can use (with CEWA badges) */}
      {guideTools.length > 0 && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Tools you can use</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
            {guideTools.map((t) => (
              <Link key={t.id} to={`/tools/${t.id}`} style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-4)', textDecoration: 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)', flexShrink: 0, overflow: 'hidden',
                  background: 'var(--pine-50)', border: '1px solid var(--pine-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', color: 'var(--pine-700)',
                }}>
                  {t.logo ? <img src={t.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : t.name[0]}
                </div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{t.name}</span>
                <StatusBadge status={cewaStatusMap[t.cewaStatus] || 'unreviewed'} showTip={false} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Steps */}
      {(guide.steps || []).length > 0 && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Step by step</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
            {guide.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <div style={{
                  width: 30, height: 30, flexShrink: 0, borderRadius: '50%',
                  background: 'var(--pine-600)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)',
                }}>{i + 1}</div>
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', margin: 0 }}>
                    {step.title}
                  </h3>
                  {step.detail && (
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{step.detail}</p>
                  )}
                  {step.prompt && <PromptBlock text={step.prompt} />}
                  {step.tip && (
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                      Tip: {step.tip}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Child safety — mandatory, prominent */}
      {guide.safety && (
        <div style={{
          marginBottom: 'var(--space-8)', padding: 'var(--space-5)',
          background: 'var(--warning-100)', border: '1px solid var(--warning-600)', borderRadius: 'var(--radius-md)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
            textTransform: 'uppercase', color: 'var(--warning-700)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
          }}>Child safety first</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--warning-700)', margin: '0 0 var(--space-2)' }}>
            {guide.safety.title}
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--warning-700)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            {guide.safety.content}
          </p>
        </div>
      )}

      {/* Verify before you use it */}
      {(guide.verify || []).length > 0 && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <SectionLabel>Check before you use it</SectionLabel>
          <ul style={{ margin: 'var(--space-3) 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {guide.verify.map((v, i) => (
              <li key={i} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                <span aria-hidden style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-semibold)' }}>✓</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learn the concept behind it */}
      {guide.concept && (
        <Link to={`/${guide.concept.trackId}/${guide.concept.sectionId}`} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
          padding: 'var(--space-4) var(--space-5)', marginBottom: 'var(--space-8)',
          background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
        }}>
          <div>
            <SectionLabel>Understand the AI behind this</SectionLabel>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-display)' }}>
              {guide.concept.label}
            </p>
          </div>
          <span style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-semibold)', flexShrink: 0 }}>→</span>
        </Link>
      )}

      {/* The craft behind it — the closing elevation. A guide ends on the teaching,
          not on a checklist: efficiency was the hook, this is the point. */}
      {guide.pedagogyNote && (
        <div style={{
          marginBottom: 'var(--space-8)', padding: 'var(--space-6)',
          background: 'linear-gradient(160deg, var(--pine-700), var(--pine-800))', borderRadius: 'var(--radius-lg)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
            textTransform: 'uppercase', color: 'var(--ochre-300, #e3c98a)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
          }}>The craft behind it · {pedLabel(guide.pedagogyNote.framework)}</p>
          <p style={{ fontSize: 'var(--text-md)', color: '#fff', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            {guide.pedagogyNote.content}
          </p>
          <Link to={`/pedagogies/${guide.pedagogyNote.framework}`} style={{ display: 'inline-block', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: '#fff', fontWeight: 'var(--weight-semibold)' }}>
            This is the point — explore teaching well with AI →
          </Link>
        </div>
      )}

      {/* Explore next */}
      {nextGuides.length > 0 && (
        <div style={{ paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: 0 }}>
              Explore next
            </p>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nextGuides.map((g) => (
              <Link key={g.id} to={`/guides/${g.id}`} style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                padding: 'var(--space-4)', background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', textDecoration: 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{useCatLabel(g.useCategory)} · {g.time}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', lineHeight: 1.2 }}>{g.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
        <Link to="/guides" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>
          ← Back to all guides
        </Link>
      </div>
    </div>
  );
}
