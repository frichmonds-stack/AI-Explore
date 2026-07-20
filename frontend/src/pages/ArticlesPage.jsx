import { useState } from 'react';
import { Link } from 'react-router-dom';
import articlesData from '../content/articles.json';
import { DraftNotice, needsReview } from '../lumen/DraftNotice';
import { FacetFilters } from '../lumen/FacetFilters';
import { usePageMeta } from '../lib/usePageMeta';
import { Eyebrow } from '../lumen/Eyebrow';

const { articles, meta } = articlesData;
const ALL = 'all';

const topicLabel = (id) => meta.topics.find((t) => t.id === id)?.label || id;

// "2026-07-01" → "1 Jul 2026" (Australian order). Undated items sort last.
function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Newest first; drives the "recently added" feel for free.
const byDateDesc = (a, b) => (b.date || '').localeCompare(a.date || '');

function Kicker({ children }) {
  return <Eyebrow style={{ margin: '0 0 var(--space-2)' }}>{children}</Eyebrow>;
}

function ArticleCard({ article }) {
  const external = article.kind === 'link';
  const draft = needsReview(article);
  const inner = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.3em .7em' }}>
          {topicLabel(article.topic)}
        </span>
        {article.date && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{formatDate(article.date)}</span>}
        {article.readingTime && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>· {article.readingTime}</span>}
        {draft && <DraftNotice variant="badge" />}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', lineHeight: 1.25, margin: 0 }}>
        {article.title} {external && <span aria-hidden="true" style={{ color: 'var(--text-muted)', fontWeight: 'var(--weight-regular)' }}>↗</span>}
      </h3>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{article.dek}</p>
      {(article.author || article.source) && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', margin: 0 }}>
          {external ? `Source: ${article.source || 'external'}` : `By ${article.author}`}
        </p>
      )}
    </>
  );

  const cardStyle = {
    display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
    background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)',
    textDecoration: 'none', transition: 'var(--transition-hover)', height: '100%',
  };
  const hoverIn = (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; };
  const hoverOut = (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; };

  return external ? (
    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{inner}</a>
  ) : (
    <Link to={`/articles/${article.id}`} style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{inner}</Link>
  );
}

export default function ArticlesPage() {
  usePageMeta({ title: 'Articles', description: 'Curated reading on teaching with AI — practical pieces, perspectives, and what’s new, chosen to be worth a busy teacher’s time.' });
  const [topic, setTopic] = useState(ALL);

  const facets = [
    { key: 'topic', label: 'Topic', options: meta.topics.map((t) => ({ id: t.id, label: t.label })) },
  ];
  const filtered = articles.filter((a) => topic === ALL || a.topic === topic).sort(byDateDesc);

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Kicker>Explore</Kicker>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          Reading worth your time
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 640, lineHeight: 'var(--leading-relaxed)' }}>
          Short, thought-provoking pieces on teaching with AI — the craft, the cautions, and what’s new. Curated, not endless.
        </p>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <FacetFilters
          facets={facets}
          values={{ topic }}
          onChange={(k, v) => setTopic(v)}
          onClear={() => setTopic(ALL)}
          resultCount={filtered.length}
          resultNoun="article"
        />
      </div>

      {filtered.length === 0 ? (
        <div style={{ padding: 'var(--space-9) var(--space-5)', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)' }}>
          No articles here yet. Check back soon.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ alignItems: 'stretch' }}>
          {filtered.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      )}
    </div>
  );
}
