import { Link, useParams } from 'react-router-dom';
import articlesData from '../content/articles.json';
import { DraftNotice, needsReview } from '../lumen/DraftNotice';
import { usePageMeta } from '../lib/usePageMeta';
import { SaveButton } from '../lumen/SaveButton';
import { ShareButton } from '../lumen/ShareButton';

const { articles, meta } = articlesData;
const topicLabel = (id) => meta.topics.find((t) => t.id === id)?.label || id;

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Minimal block renderer for authored article bodies (text/heading/list/quote/callout).
function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 'var(--space-6) 0 var(--space-2)' }}>{block.content}</h2>;
    case 'list':
      return (
        <ul style={{ margin: '0 0 var(--space-4)', paddingLeft: '1.2em', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {(block.items || []).map((it, i) => (
            <li key={i} style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>{it}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote style={{ margin: 'var(--space-5) 0', paddingLeft: 'var(--space-4)', borderLeft: '3px solid var(--pine-300, var(--pine-200))' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontStyle: 'italic', color: 'var(--text-strong)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{block.content}</p>
          {block.attribution && <cite style={{ display: 'block', fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', marginTop: 'var(--space-2)' }}>— {block.attribution}</cite>}
        </blockquote>
      );
    case 'callout':
      return (
        <div className="alert alert-info" style={{ margin: 'var(--space-5) 0', fontSize: 'var(--text-sm)' }}>
          <span>{block.content}</span>
        </div>
      );
    case 'text':
    default:
      return <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-4)' }}>{block.content}</p>;
  }
}

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  usePageMeta(
    article
      ? { title: article.title, description: article.dek, type: 'article' }
      : { title: 'Article not found' }
  );

  if (!article) {
    return (
      <div style={{ padding: 'var(--space-9) 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>That article doesn’t exist (or has moved).</p>
        <Link to="/articles" style={{ color: 'var(--pine-700)', fontWeight: 'var(--weight-semibold)' }}>← All articles</Link>
      </div>
    );
  }

  const draft = needsReview(article);
  const external = article.kind === 'link' || (!article.body && article.sourceUrl);

  return (
    <article style={{ maxWidth: 720, margin: '0 auto' }}>
      <Link to="/articles" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--pine-700)', textDecoration: 'none', fontWeight: 'var(--weight-medium)' }}>
        ← All articles
      </Link>

      <div style={{ margin: 'var(--space-5) 0 var(--space-6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.3em .7em' }}>
            {topicLabel(article.topic)}
          </span>
          {article.date && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{formatDate(article.date)}</span>}
          {article.readingTime && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>· {article.readingTime}</span>}
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', lineHeight: 'var(--leading-tight)', marginBottom: 'var(--space-3)' }}>
          {article.title}
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{article.dek}</p>
        {(article.author || article.source) && (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>
            {external ? `Source: ${article.source || 'external'}` : `By ${article.author}`}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <SaveButton type="article" id={article.id} />
        <ShareButton title={`${article.title} — Pigeon Hole`} text={article.dek} />
      </div>

      {draft && <DraftNotice />}

      {external ? (
        <div style={{ padding: 'var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>This is a curated external piece.</p>
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'var(--pine-600)', color: '#fff', fontWeight: 'var(--weight-semibold)', padding: '.6em 1.2em', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
            Read at {article.source || 'the source'} ↗
          </a>
        </div>
      ) : (
        <div>
          {(article.body || []).map((block, i) => <Block key={i} block={block} />)}
        </div>
      )}
    </article>
  );
}
