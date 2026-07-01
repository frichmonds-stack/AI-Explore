import { Link, useParams } from 'react-router-dom';
import capabilitiesData from '../content/capabilities.json';
import toolsData from '../content/tools.json';
import { StatusBadge } from '../lumen/StatusBadge';
import { DraftNotice } from '../lumen/DraftNotice';

const { capabilities } = capabilitiesData;
const { tools, meta } = toolsData;

const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

const badgeStyle = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
  color: '#fff', background: 'var(--pine-600)', border: '1px solid var(--pine-600)',
  borderRadius: 'var(--radius-pill)', padding: '.34em .8em', whiteSpace: 'nowrap',
};

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', margin: 0,
    }}>{children}</p>
  );
}

export default function CapabilityPage() {
  const { capabilityId } = useParams();
  const cap = capabilities.find((c) => c.id === capabilityId);

  if (!cap) {
    return (
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', marginBottom: 'var(--space-3)' }}>
          Capability not found
        </h1>
        <Link to="/learn/capabilities" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)' }}>
          ← Back to AI capabilities
        </Link>
      </div>
    );
  }

  const capTools = (cap.tools || []).map((id) => tools.find((t) => t.id === id)).filter(Boolean);

  return (
    <div style={{ maxWidth: 760 }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        <Link to="/learn" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>Learn</Link>
        <span>›</span>
        <Link to="/learn/capabilities" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>AI Capabilities</Link>
        <span>›</span>
        <span>{cap.name}</span>
      </nav>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
        <span style={{ fontSize: '2rem' }}>{cap.icon}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0, lineHeight: 1.1 }}>
          {cap.name}
        </h1>
      </div>

      <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
        {cap.what}
      </p>

      <DraftNotice />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
        {/* Educational uses */}
        {cap.eduUses?.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <SectionLabel>Where it helps in the classroom</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {cap.eduUses.map((id) => (
                <span key={id} style={badgeStyle}>{useCatLabel(id)}</span>
              ))}
            </div>
          </div>
        )}

        {/* Tools that do this */}
        {capTools.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <SectionLabel>Tools that can do this</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {capTools.map((tool) => (
                <Link
                  key={tool.id}
                  to={`/tools/${tool.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-card)',
                    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', textDecoration: 'none',
                    transition: 'var(--transition-hover)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--pine-300)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-md)', flexShrink: 0,
                    background: 'var(--pine-50)', border: '1px solid var(--pine-100)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                    fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 16, color: 'var(--pine-700)',
                  }}>
                    {tool.logo ? <img src={tool.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : tool.name.trim()[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>
                      {tool.name}
                    </div>
                    {tool.vendor && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{tool.vendor}</div>}
                  </div>
                  <StatusBadge status={cewaStatusMap[tool.cewaStatus] || 'unreviewed'} showTip={false} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Safety note */}
        {cap.safety && (
          <div style={{
            padding: 'var(--space-4)', background: 'var(--warning-100)',
            border: '1px solid var(--warning-600)', borderRadius: 'var(--radius-md)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
          }}>
            <SectionLabel>Keep students safe</SectionLabel>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--warning-700)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {cap.safety}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
        <Link to="/learn/capabilities" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>
          ← All AI capabilities
        </Link>
      </div>
    </div>
  );
}
