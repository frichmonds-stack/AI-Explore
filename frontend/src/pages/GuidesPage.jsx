import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import guidesData from '../content/guides.json';
import toolsData from '../content/tools.json';
import { FacetFilters } from '../lumen/FacetFilters';
import { useFacetState, ALL } from '../lumen/useFacetState';
import { DraftNotice, needsReview } from '../lumen/DraftNotice';
import { usePageMeta } from '../lib/usePageMeta';
import { useCatLabel, diffLabel } from '../lib/taxonomy';
import { Eyebrow } from '../lumen/Eyebrow';

const { guides } = guidesData;
const { meta } = toolsData;
const { difficulties } = guidesData.meta;

function GuideCard({ guide }) {
  return (
    <Link
      to={`/guides/${guide.id}`}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none', height: '100%', transition: 'var(--transition-hover)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--pine-200)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
          color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.3em .7em',
        }}>{useCatLabel(guide.useCategory)}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
          {guide.time} · {diffLabel(guide.difficulty)}
        </span>
        {needsReview(guide) && <DraftNotice variant="badge" />}
      </div>

      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', lineHeight: 1.2, marginBottom: 'var(--space-2)' }}>
          {guide.title}
        </h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
          {guide.summary}
        </p>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        {(guide.roles || []).slice(0, 2).map((r) => (
          <span key={r} style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
            color: 'var(--text-muted)', background: 'transparent', border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-pill)', padding: '.28em .7em',
          }}>{r}</span>
        ))}
      </div>
    </Link>
  );
}

export default function GuidesPage() {
  usePageMeta({ title: 'Guides', description: 'Short, classroom-ready walkthroughs for getting real work done with AI — safely and pedagogically.' });
  const { values, setFacet, clearAll, workTypeOptions } = useFacetState(
    ['domain', 'useCategory', 'band', 'pedagogy', 'difficulty']
  );
  const { domain, useCategory, band, pedagogy, difficulty } = values;

  // Compact, scannable facets — domain leads, then the work type it narrows.
  const facets = [
    { key: 'domain',      label: 'Domain',     options: meta.domains.map((d) => ({ id: d.id, label: d.label })) },
    { key: 'useCategory', label: 'Work type',  options: workTypeOptions },
    { key: 'band',        label: 'Year level', options: meta.bands.map((b) => ({ id: b.id, label: `${b.label} (${b.years})` })), allLabel: 'Any age' },
    { key: 'pedagogy',    label: 'Pedagogy',   options: meta.pedagogyFrameworks.map((p) => ({ id: p.id, label: p.label })) },
    { key: 'difficulty',  label: 'Difficulty', options: difficulties },
  ];

  const filtered = useMemo(() => guides.filter((g) => {
    if (domain !== ALL) {
      const d = meta.domains.find((x) => x.id === domain);
      if (!d || !d.useCategories.includes(g.useCategory)) return false;
    }
    if (useCategory !== ALL && g.useCategory !== useCategory) return false;
    if (band !== ALL && !(g.bands || []).includes(band)) return false;
    if (pedagogy !== ALL && !(g.pedagogies || []).includes(pedagogy)) return false;
    if (difficulty !== ALL && g.difficulty !== difficulty) return false;
    return true;
  }), [domain, useCategory, band, pedagogy, difficulty]);

  const featured = filtered.filter((g) => g.featured);
  const rest = filtered.filter((g) => !g.featured);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Eyebrow tone="pine">Explore</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 'var(--space-2) 0 var(--space-3)' }}>
          What's new and worth a read in education AI
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 640, lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
          Thought-provoking pieces and practical how-tos on teaching with AI.
        </p>
        <DraftNotice note="These starters are AI-drafted placeholders — everything here is meant to be human-written, so each needs a rewrite and review before publishing." />
      </div>

      {/* Filters — one compact dropdown row, options hidden until opened */}
      <div style={{ marginBottom: 'var(--space-7)' }}>
        <FacetFilters
          facets={facets}
          values={values}
          onChange={setFacet}
          onClear={clearAll}
          resultCount={filtered.length}
          resultNoun="guide"
        />
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 'var(--space-10) 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--space-2)' }}>No guides match these filters yet.</p>
          <p style={{ fontSize: 'var(--text-sm)' }}>Try removing one, or browse the <Link to="/tools" style={{ color: 'var(--pine-600)' }}>tools library</Link>.</p>
        </div>
      )}

      {featured.length > 0 && (
        <div style={{ marginBottom: 'var(--space-9)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <Eyebrow tone="pine">Start here</Eyebrow>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ alignItems: 'stretch' }}>
            {featured.map((g) => <GuideCard key={g.id} guide={g} />)}
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div>
          {featured.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <Eyebrow>More guides</Eyebrow>
              <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ alignItems: 'stretch' }}>
            {rest.map((g) => <GuideCard key={g.id} guide={g} />)}
          </div>
        </div>
      )}

      {/* Exploratory bridge to tools */}
      <div style={{
        marginTop: 'var(--space-12)', padding: 'var(--space-5)',
        background: 'color-mix(in srgb, var(--pine-50) 70%, transparent)',
        border: '1px dashed var(--pine-200)', borderRadius: 'var(--radius-lg)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
      }}>
        <div>
          <Eyebrow tone="pine">Keep exploring</Eyebrow>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)', margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)' }}>
            Looking for the right tool, not the task?
          </p>
        </div>
        <Link to="/tools" style={{
          fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: '#fff',
          background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.55em 1.15em', textDecoration: 'none',
        }}>Browse the tools library →</Link>
      </div>
    </div>
  );
}
