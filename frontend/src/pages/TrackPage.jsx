import { Link } from 'react-router-dom';
import tracks from '../content';
import toolsData from '../content/tools.json';

const useCatLabel = (id) => toolsData.meta.useCategories.find((u) => u.id === id)?.label || id;

const pillStyle = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
  color: '#fff', background: 'var(--pine-600)', border: '1px solid var(--pine-600)',
  borderRadius: 'var(--radius-pill)', padding: '.34em .8em', whiteSpace: 'nowrap',
};
const eyebrowStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)',
};

export default function TrackPage({ trackId }) {
  const track = tracks[trackId];

  if (!track) {
    return <div className="alert alert-error">Track not found.</div>;
  }

  return (
    <div>
      {/* Track header */}
      <div className="mb-10">
        <div className="breadcrumbs text-sm mb-2">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>{track.title}</li>
          </ul>
        </div>
        <h1 className="text-3xl font-bold text-base-content mb-3">{track.title}</h1>
        <p className="text-base text-base-content/70 max-w-2xl">{track.description}</p>
      </div>

      {/* Section list */}
      <div className="flex flex-col gap-4">
        {track.sections.map((section, index) => (
          <Link
            key={section.id}
            to={`/${trackId}/${section.id}`}
            className="card bg-base-200 hover:bg-base-300 transition-colors"
          >
            <div className="card-body flex-row items-start gap-4 py-4">
              <div className="text-2xl font-bold text-primary opacity-30 w-8 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-base-content">{section.title}</h2>
                <p className="text-sm text-base-content/60 mt-1">{section.summary}</p>
                {section.workTypes?.length > 0 ? (
                  <div style={{ marginTop: 'var(--space-3)' }}>
                    <span style={eyebrowStyle}>Most useful for</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                      {section.workTypes.map((id) => (
                        <span key={id} style={pillStyle}>{useCatLabel(id)}</span>
                      ))}
                    </div>
                  </div>
                ) : section.tags?.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                    {section.tags.map((tag) => (
                      <span key={tag} style={pillStyle}>{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/40 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
