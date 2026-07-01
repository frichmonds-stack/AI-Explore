import { Link } from 'react-router-dom';
import { Button } from '../lumen/Button';
import { StatusBadge } from '../lumen/StatusBadge';
import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';
import { usePageMeta } from '../lib/usePageMeta';

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};

const { meta } = toolsData;
const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;

const featuredGuides = guidesData.guides.filter((g) => g.featured).slice(0, 3);
const popularTools = toolsData.tools
  .filter((t) => t.popular && t.cewaStatus !== 'not-approved')
  .slice(0, 6);

// Pillars tell the strategy as a journey: the work is the hook (guides, tools),
// pedagogy is where it leads, with safety as the ever-present guard-rail.
const pillars = [
  { id: 'guides', label: 'Explore', icon: '🧭', description: 'Thought-provoking reads and practical how-tos on teaching with AI — what is new and worth your time.', badge: null, tone: 'pine' },
  { id: 'tools', label: 'Find a tool', icon: '🧰', description: 'A browsable library of AI tools, each carrying its CEWA approval status so you know what is cleared for school.', badge: null, tone: 'pine' },
  { id: 'pedagogies', label: 'Teaching', icon: '📚', description: 'Where the work leads: the big ideas behind good teaching, unpacked simply — what they are and what they look like in the classroom.', badge: 'Where it leads', tone: 'pine' },
  { id: 'learn', label: 'Learn about AI', icon: '🔍', description: 'Understand the AI behind your work — what it is, what it can actually do, and how to keep students safe. Only as deep as your job needs.', badge: null, tone: 'pine' },
];

function Eyebrow({ children }) {
  return <p className="lumen-eyebrow">{children}</p>;
}

export default function HomePage() {
  usePageMeta({ description: 'Practical, classroom-ready help for teaching with AI — start with the work, grow the craft, keep children safe.' });
  return (
    <div>
      {/* Hero — work-first */}
      <div className="py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>AI for educators</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-tight)', marginBottom: 'var(--space-4)' }}>
            Start with what you need to do
          </h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', marginBottom: 'var(--space-2)' }}>
            Practical, classroom-ready guides for getting real work done with AI.
          </p>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginBottom: 'var(--space-7)' }}>
            Start with the job you came to do — and let it pull you towards better teaching. Grounded in sound pedagogy; child safety first.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button as={Link} to="/guides" variant="primary" size="lg">Find a guide</Button>
            <Button as={Link} to="/tools" variant="secondary" size="lg">Browse the tools</Button>
          </div>
        </div>
      </div>

      {/* Featured guides — the flagship work-help rail */}
      <div style={{ marginBottom: 'var(--space-10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
          <Eyebrow>Guides to get you going</Eyebrow>
          <Link to="/guides" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((g) => (
            <Link key={g.id} to={`/guides/${g.id}`} style={{
              display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)',
              textDecoration: 'none', transition: 'var(--transition-hover)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: '#fff', background: 'var(--pine-600)', borderRadius: 'var(--radius-pill)', padding: '.3em .7em' }}>
                  {useCatLabel(g.useCategory)}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{g.time}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', lineHeight: 1.2, margin: 0 }}>
                {g.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{g.summary}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* The pull — guides are a doorway, not a destination */}
      <Link to="/pedagogies" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
        marginBottom: 'var(--space-10)', padding: 'var(--space-5) var(--space-6)',
        background: 'linear-gradient(160deg, var(--pine-700), var(--pine-800))',
        borderRadius: 'var(--radius-lg)', textDecoration: 'none',
      }}>
        <div style={{ maxWidth: 560 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--ochre-300, #e3c98a)', margin: '0 0 var(--space-2)' }}>
            Why these guides
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: '#fff', lineHeight: 1.25, margin: '0 0 var(--space-2)' }}>
            Every guide starts with the job — and ends with the teaching craft behind it.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.82)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            Get tonight's work done faster, then follow the thread to how it makes you a better teacher. That's the whole point.
          </p>
        </div>
        <span style={{ color: '#fff', fontWeight: 'var(--weight-semibold)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          See the teaching craft →
        </span>
      </Link>

      {/* Popular tools carousel */}
      <div style={{ marginBottom: 'var(--space-10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
          <Eyebrow>Popular tools</Eyebrow>
          <Link to="/tools" style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 'var(--space-3)', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {popularTools.map((tool) => (
            <Link key={tool.id} to={`/tools/${tool.id}`} style={{
              flex: '0 0 200px', scrollSnapAlign: 'start', background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
              boxShadow: 'var(--shadow-sm)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', transition: 'var(--transition-hover)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0, background: 'var(--pine-50)', border: '1px solid var(--pine-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: '18px', color: 'var(--pine-700)' }}>
                  {tool.logo ? <img src={tool.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : tool.name[0]}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tool.name}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{tool.vendor}</p>
                </div>
              </div>
              <StatusBadge status={cewaStatusMap[tool.cewaStatus] || 'unreviewed'} showTip={false} />
            </Link>
          ))}
        </div>
      </div>

      {/* Pillars — ways to explore, in priority order */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', margin: 'var(--space-8) 0 var(--space-6)' }}>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        <span className="lumen-eyebrow">Ways to explore</span>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <Link key={p.id} to={`/${p.id}`} style={{
            display: 'block', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)',
            transition: 'var(--transition-hover)', textDecoration: 'none',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
              <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
              {p.badge && (
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', padding: '0.25em 0.65em', borderRadius: 'var(--radius-pill)',
                  background: p.tone === 'warning' ? 'var(--warning-100)' : p.tone === 'muted' ? 'var(--paper-200)' : 'var(--pine-50)',
                  color: p.tone === 'warning' ? 'var(--warning-700)' : p.tone === 'muted' ? 'var(--text-muted)' : 'var(--pine-700)',
                }}>{p.badge}</span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-2)' }}>{p.label}</h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{p.description}</p>
          </Link>
        ))}
      </div>

      {/* Child-safety-first framing note */}
      <div style={{
        marginTop: 'var(--space-10)', padding: 'var(--space-5)', background: 'var(--warning-100)',
        border: '1px solid var(--warning-600)', borderRadius: 'var(--radius-md)',
        display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, color: 'var(--warning-700)', marginTop: '0.1em' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--warning-700)', lineHeight: 'var(--leading-relaxed)' }}>
          <strong>Child safety comes first.</strong> Every guide carries a safety check, and tools show their CEWA approval status.
          Where AI poses risks to children — to their development, their data, or their learning — we name them clearly, not at the end.
        </p>
      </div>
    </div>
  );
}
