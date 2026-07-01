import { Link } from 'react-router-dom';
import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';
import glossary from '../content/glossary.json';
import { StatusBadge } from '../lumen/StatusBadge';
import { usePageMeta } from '../lib/usePageMeta';

// CEWA status id (tools.json) → StatusBadge display variant.
const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

// Where each group's `source` reads from, kept in one place.
const SOURCES = {
  cewaStatuses: toolsData.meta.cewaStatuses,
  domains: toolsData.meta.domains,
  useCategories: toolsData.meta.useCategories,
  pedagogyFrameworks: toolsData.meta.pedagogyFrameworks,
  bands: toolsData.meta.bands,
  accessTiers: toolsData.meta.accessTiers,
  difficulties: guidesData.meta.difficulties,
};

// Normalise the various source shapes into one { id, term, def, meta, to } row.
function normalise(group) {
  const list = group.source ? (SOURCES[group.source] || []) : (group.terms || []);
  return list.map((item) => {
    switch (group.source) {
      case 'cewaStatuses':
        return { id: item.id, term: item.label, def: item.description, badge: cewaStatusMap[item.id] };
      case 'pedagogyFrameworks':
        return { id: item.id, term: item.label, def: item.description, meta: item.author ? `After ${item.author}` : null, to: `/pedagogies/${item.id}` };
      case 'bands':
        return { id: item.id, term: item.label, def: `Years ${item.years}.` };
      case 'domains':
      case 'useCategories':
      case 'accessTiers':
      case 'difficulties':
        return { id: item.id, term: item.label, def: item.description };
      default: // inline terms (roles, subjects)
        return { id: item.term, term: item.term, def: item.def };
    }
  });
}

function Kicker({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase', color: 'var(--text-muted)',
    }}>{children}</span>
  );
}

export default function GlossaryPage() {
  usePageMeta({ title: 'Glossary', description: glossary.intro });
  return (
    <div>
      <div style={{ marginBottom: 'var(--space-7)' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
        }}>Reference</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          Glossary
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 660, lineHeight: 'var(--leading-relaxed)' }}>
          {glossary.intro}
        </p>
      </div>

      {/* Placeholder framing — this page is a temporary home pending inline tooltips. */}
      <div className="alert alert-info" style={{ marginBottom: 'var(--space-8)', fontSize: 'var(--text-sm)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.1rem', height: '1.1rem', flexShrink: 0 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{glossary.placeholderNote}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-9)' }}>
        {glossary.groups.map((group) => {
          const rows = normalise(group);
          return (
            <section key={group.id} id={group.id} style={{ scrollMarginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
                  {group.label}
                </h2>
                {group.facet && <Kicker>Filter: {group.facet}</Kicker>}
              </div>
              {group.intro && (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)', maxWidth: 660 }}>
                  {group.intro}
                </p>
              )}

              <dl style={{
                display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) 1fr', gap: 'var(--space-3) var(--space-5)',
                margin: 0, alignItems: 'baseline',
              }} className="lmn-glossary-dl">
                {rows.map((row) => (
                  <div key={row.id} style={{ display: 'contents' }}>
                    <dt style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {row.badge ? (
                        <StatusBadge status={row.badge} showTip={false} />
                      ) : row.to ? (
                        <Link to={row.to} style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--pine-700)', textDecoration: 'none' }}>
                          {row.term} →
                        </Link>
                      ) : (
                        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>
                          {row.term}
                        </span>
                      )}
                      {row.meta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{row.meta}</span>}
                    </dt>
                    <dd style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                      {row.def}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>
    </div>
  );
}
