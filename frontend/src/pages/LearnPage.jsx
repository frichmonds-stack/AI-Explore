import { Link } from 'react-router-dom';
import { DraftNotice } from '../lumen/DraftNotice';
import { usePageMeta } from '../lib/usePageMeta';

const areas = [
  {
    to: '/foundations',
    icon: '🔍',
    title: 'About AI',
    description: 'The plain-language essentials — what AI actually is, how it works, and why it gets things confidently wrong. No technical background needed.',
  },
  {
    to: '/learn/capabilities',
    icon: '🧩',
    title: 'AI Capabilities',
    description: 'What AI can actually do — text, images, data, tutoring and more — grouped by capability, each tagged with its real uses in the classroom and the tools that do it.',
  },
  {
    to: '/risks',
    icon: '🛡️',
    title: 'AI Safety',
    description: 'Child safety first: the risks to development, data and equity, and the judgement of when AI genuinely serves learning.',
  },
  {
    to: '/glossary',
    icon: '📖',
    title: 'Glossary',
    description: 'Plain-language definitions for the approval badges and the categories used to tag and filter tools and guides across the site.',
  },
];

export default function LearnPage() {
  usePageMeta({ title: 'Learn', description: 'Understand the AI behind your work — what it is, what it can do, and how to keep students safe.' });
  return (
    <div>
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: '0 0 var(--space-2)',
        }}>Learn</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          Understand the AI behind your work
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: 640, lineHeight: 'var(--leading-relaxed)' }}>
          Just enough to use AI well and safely in teaching — what it is, what it can do, and how to keep students safe.
        </p>
      </div>

      <DraftNotice />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            style={{
              display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)',
              textDecoration: 'none', height: '100%', transition: 'var(--transition-hover)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--pine-200)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
          >
            <span style={{ fontSize: '1.6rem' }}>{a.icon}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
              {a.title}
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {a.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
