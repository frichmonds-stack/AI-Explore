import { Link } from 'react-router-dom';
import capabilitiesData from '../content/capabilities.json';
import toolsData from '../content/tools.json';
import { DraftNotice } from '../lumen/DraftNotice';
import { usePageMeta } from '../lib/usePageMeta';

const { capabilities } = capabilitiesData;
const { meta } = toolsData;

const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;

const badgeStyle = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
  color: '#fff', background: 'var(--pine-600)', border: '1px solid var(--pine-600)',
  borderRadius: 'var(--radius-pill)', padding: '.34em .8em', whiteSpace: 'nowrap',
};

export default function CapabilitiesPage() {
  usePageMeta({ title: 'AI Capabilities', description: 'What AI can actually do, grouped by capability, with the tools that do it.' });
  return (
    <div>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        <Link to="/learn" style={{ color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)' }}>Learn</Link>
        <span>›</span>
        <span>AI Capabilities</span>
      </nav>

      <div style={{ marginBottom: 'var(--space-7)' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
        }}>AI Capabilities</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          What AI can actually do
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 640, lineHeight: 'var(--leading-relaxed)' }}>
          Grouped by what the AI does. Each capability shows where it helps in the classroom and the tools that can do it.
        </p>
      </div>

      <DraftNotice />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ alignItems: 'stretch' }}>
        {capabilities.map((cap) => (
          <Link
            key={cap.id}
            to={`/learn/capabilities/${cap.id}`}
            style={{
              display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)',
              textDecoration: 'none', height: '100%', transition: 'var(--transition-hover)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--pine-200)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: '1.5rem' }}>{cap.icon}</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
                {cap.name}
              </h2>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {cap.summary}
            </p>
            {cap.eduUses?.length > 0 && (
              <div style={{ marginTop: 'auto' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
                  textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
                }}>In the classroom</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {cap.eduUses.map((id) => (
                    <span key={id} style={badgeStyle}>{useCatLabel(id)}</span>
                  ))}
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
