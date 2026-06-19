import { Link, useParams } from 'react-router-dom';
import toolsData from '../content/tools.json';
import { StatusBadge } from '../lumen/StatusBadge';

const { tools, meta } = toolsData;

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

export default function ToolDetailPage() {
  const { toolId } = useParams();
  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', marginBottom: 'var(--space-3)' }}>
          Tool not found
        </h1>
        <Link to="/tools" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>← Back to the tools library</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720 }}>
      <div className="breadcrumbs text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
        <ul>
          <li><Link to="/tools">AI Tools</Link></li>
          <li>{tool.name}</li>
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', flexShrink: 0, background: 'var(--pine-50)', border: '1px solid var(--pine-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 24, color: 'var(--pine-700)' }}>
          {tool.logo ? <img src={tool.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : tool.name.trim()[0]}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.1 }}>
            {tool.name}
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 4 }}>{tool.vendor}</p>
        </div>
        <StatusBadge status={cewaStatusMap[tool.cewaStatus] || 'unreviewed'} />
      </div>

      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
        {tool.description}
      </p>

      <div style={{ padding: 'var(--space-5)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-6)' }}>
        <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Full guide in development</p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
          A complete guide for {tool.name} — setup, classroom examples, approval conditions, risks, and pedagogy deep-dives — is being written. For now, the notes below summarise the essentials.
        </p>
        {tool.notes && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginTop: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-subtle)' }}>
            {tool.notes}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
        <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.55em 1.15em', textDecoration: 'none' }}>
          Visit {tool.name} ↗
        </a>
        <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>← Back to library</Link>
      </div>
    </div>
  );
}
