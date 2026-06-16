import { Link } from 'react-router-dom';

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
      <div className="hero py-16">
        <div className="hero-content text-center max-w-2xl">
          <div>
            <h1 className="text-4xl font-bold text-base-content mb-4">
              AI for Teachers
            </h1>
            <p className="text-lg text-base-content/70 mb-2">
              A professional development resource for K–12 educators
            </p>
            <p className="text-base text-base-content/60 mb-8">
              This is a read-and-explore resource. There are no quizzes or progress requirements —
              browse at your own pace, dip in and out, and take what's useful for your context.
            </p>
            <Link to="/foundations" className="btn btn-primary btn-lg">
              Begin with AI Foundations
            </Link>
          </div>
        </div>
      </div>

      {/* Track cards */}
      <div className="divider">Learning Tracks</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tracks.map((track) => (
          <Link key={track.id} to={`/${track.id}`} className="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer">
            <div className="card-body">
              <div className="flex items-start justify-between">
                <span className="text-2xl">{track.icon}</span>
                {track.badge && (
                  <span className={`badge ${track.badgeClass}`}>{track.badge}</span>
                )}
              </div>
              <h2 className="card-title text-base-content mt-2">{track.label}</h2>
              <p className="text-sm text-base-content/70">{track.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Framing note */}
      <div className="alert alert-neutral mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="text-sm">
            <strong>Our approach:</strong> This resource aims to be balanced and fair. AI is neither celebrated uncritically nor dismissed.
            Where risks exist — especially to children — they are named clearly and early, not buried at the end.
          </p>
        </div>
      </div>
    </div>
  );
}
