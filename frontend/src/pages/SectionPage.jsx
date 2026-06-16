import { Link, useParams } from 'react-router-dom';
import tracks from '../content';
import SectionBlock from '../components/SectionBlock';

export default function SectionPage({ trackId }) {
  const { sectionId } = useParams();
  const track = tracks[trackId];
  const section = track?.sections.find((s) => s.id === sectionId);

  if (!track || !section) {
    return (
      <div className="alert alert-error">
        Section not found. <Link to={`/${trackId}`} className="link">Back to track</Link>
      </div>
    );
  }

  const currentIndex = track.sections.findIndex((s) => s.id === sectionId);
  const prev = track.sections[currentIndex - 1];
  const next = track.sections[currentIndex + 1];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/${trackId}`}>{track.title}</Link></li>
          <li>{section.title}</li>
        </ul>
      </div>

      {/* Section header */}
      <h1 className="text-3xl font-bold text-base-content mb-2">{section.title}</h1>
      {section.summary && (
        <p className="text-base text-base-content/60 mb-8 max-w-2xl">{section.summary}</p>
      )}

      <div className="divider"></div>

      {/* Content blocks */}
      <div className="max-w-2xl">
        {section.blocks?.map((block, i) => (
          <SectionBlock key={i} block={block} />
        ))}
      </div>

      {/* Prev / Next navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-base-300">
        <div>
          {prev && (
            <Link to={`/${trackId}/${prev.id}`} className="btn btn-ghost btn-sm gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prev.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={`/${trackId}/${next.id}`} className="btn btn-ghost btn-sm gap-2">
              {next.title}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
          {!next && (
            <Link to={`/${trackId}`} className="btn btn-primary btn-sm">
              Back to {track.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
