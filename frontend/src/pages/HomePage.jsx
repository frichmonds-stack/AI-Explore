import { Link } from 'react-router-dom';
import { Button } from '../lumen/Button';
import { StatusBadge } from '../lumen/StatusBadge';
import toolsData from '../content/tools.json';

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

const popularTools = toolsData.tools
  .filter(t => t.popular && t.cewaStatus !== 'not-approved')
  .slice(0, 6);

const tracks = [
  {
    id: 'foundations',
    label: 'AI Foundations',
    description: 'What AI is, how it works, what it can do — and where it falls short. No technical background needed.',
    icon: '🔍',
    badge: 'Start here',
    badgeClass: 'badge-primary',
  },
  {
    id: 'risks',
    label: 'Risks & Responsibility',
    description: 'The risks AI poses to children\'s cognitive and social development, and how to navigate them responsibly.',
    icon: '⚠️',
    badge: 'Important',
    badgeClass: 'badge-warning',
  },
  {
    id: 'practice',
    label: 'AI in Your Practice',
    description: 'Practical applications across admin, classroom, curriculum, and assessment — filtered through what serves learning.',
    icon: '📋',
    badge: null,
    badgeClass: '',
  },
  {
    id: 'pedagogies',
    label: 'Pedagogies & AI',
    description: 'How established teaching approaches — constructivism, Socratic method, UDL — interact with AI tools.',
    icon: '📚',
    badge: null,
    badgeClass: '',
  },
  {
    id: 'explore',
    label: 'Explore Further',
    description: 'Deeper reading, tool guides, and curated research for those who want to go further.',
    icon: '🔭',
    badge: 'Optional',
    badgeClass: 'badge-ghost',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="py-16 text-center">
        <div className="max-w-2xl mx-auto">

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-tight)', marginBottom: 'var(--space-4)' }}>
            AI for Teachers
          </h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', marginBottom: 'var(--space-2)' }}>
            Find the right AI tools for your classroom — and understand how to use them well.
          </p>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginBottom: 'var(--space-8)' }}>
            Explore a curated library of AI tools for teaching, admin, and curriculum, with practical guides to help you use them confidently.
          </p>
          <Button as={Link} to="/tools" variant="primary" size="lg">
            Explore AI Tools
          </Button>
        </div>
      </div>

      {/* Popular tools carousel */}
      <div style={{ marginBottom: 'var(--space-10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
          <p className="lumen-eyebrow">Popular tools</p>
          <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>
        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: 'var(--space-3)',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}>
          {popularTools.map(tool => (
            <Link
              key={tool.id}
              to="/tools"
              style={{
                flex: '0 0 200px',
                scrollSnapAlign: 'start',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4)',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                transition: 'var(--transition-hover)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0,
                  background: 'var(--pine-50)', border: '1px solid var(--pine-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden',
                  fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
                  fontSize: '18px', color: 'var(--pine-700)',
                }}>
                  {tool.logo
                    ? <img src={tool.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : tool.name[0]
                  }
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {tool.name}
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
                    {tool.vendor}
                  </p>
                </div>
              </div>
              <StatusBadge status={cewaStatusMap[tool.cewaStatus] || 'unreviewed'} showTip={false} />
            </Link>
          ))}
        </div>
      </div>

      {/* Track cards */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', margin: 'var(--space-8) 0 var(--space-6)' }}>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        <span className="lumen-eyebrow">Learning Tracks</span>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <Link
            key={track.id}
            to={`/${track.id}`}
            style={{
              display: 'block',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-hover)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
              <span style={{ fontSize: '1.5rem' }}>{track.icon}</span>
              {track.badge && (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-2xs)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-label)',
                  textTransform: 'uppercase',
                  padding: '0.25em 0.65em',
                  borderRadius: 'var(--radius-pill)',
                  background: track.id === 'risks' ? 'var(--warning-100)' : track.id === 'explore' ? 'var(--paper-200)' : 'var(--pine-50)',
                  color: track.id === 'risks' ? 'var(--warning-700)' : track.id === 'explore' ? 'var(--text-muted)' : 'var(--pine-700)',
                }}>
                  {track.badge}
                </span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-2)' }}>
              {track.label}
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              {track.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Framing note */}
      <div style={{
        marginTop: 'var(--space-10)',
        padding: 'var(--space-5)',
        background: 'var(--info-100)',
        border: '1px solid var(--info-600)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, color: 'var(--info-700)', marginTop: '0.1em' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--info-700)', lineHeight: 'var(--leading-relaxed)' }}>
          <strong>Our approach:</strong> This resource aims to be balanced and fair. AI is neither celebrated uncritically nor dismissed.
          Where risks exist — especially to children — they are named clearly and early, not buried at the end.
        </p>
      </div>
    </div>
  );
}
