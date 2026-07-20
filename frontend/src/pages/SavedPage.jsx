import { Link } from 'react-router-dom';
import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';
import articlesData from '../content/articles.json';
import { useBookmarks } from '../lib/useBookmarks';
import { SaveButton } from '../lumen/SaveButton';
import { usePageMeta } from '../lib/usePageMeta';
import { Eyebrow } from '../lumen/Eyebrow';

const { tools } = toolsData;
const { guides } = guidesData;
const { articles } = articlesData;

// Resolve a saved key back to a display row, in the order the user saved them.
function resolve(saved) {
  const groups = { tool: [], guide: [], article: [] };
  saved.forEach((key) => {
    const [type, id] = key.split(':');
    if (type === 'tool') {
      const t = tools.find((x) => x.id === id);
      if (t) groups.tool.push({ type, id, title: t.name, sub: t.vendor, to: `/tools/${id}` });
    } else if (type === 'guide') {
      const g = guides.find((x) => x.id === id);
      if (g) groups.guide.push({ type, id, title: g.title, sub: g.summary, to: `/guides/${id}` });
    } else if (type === 'article') {
      const a = articles.find((x) => x.id === id);
      if (a) groups.article.push({ type, id, title: a.title, sub: a.dek, to: `/articles/${id}` });
    }
  });
  return groups;
}

const SECTIONS = [
  { key: 'tool', label: 'Tools' },
  { key: 'guide', label: 'Guides' },
  { key: 'article', label: 'Articles' },
];

function Row({ item }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)', padding: 'var(--space-4)',
    }}>
      <Link to={item.to} style={{ textDecoration: 'none', minWidth: 0 }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', margin: 0 }}>{item.title}</p>
        {item.sub && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 460 }}>{item.sub}</p>}
      </Link>
      <SaveButton type={item.type} id={item.id} iconOnly />
    </div>
  );
}

export default function SavedPage() {
  usePageMeta({ title: 'Saved', description: 'Your saved tools, guides and articles — kept on this device.' });
  const { saved, clear } = useBookmarks();
  const groups = resolve(saved);
  const total = groups.tool.length + groups.guide.length + groups.article.length;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <div>
          <Eyebrow style={{ margin: '0 0 var(--space-2)' }}>Your shortlist</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', margin: 0 }}>
            Saved
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-2)', maxWidth: 560 }}>
            Kept on this device only — no account needed.
          </p>
        </div>
        {total > 0 && (
          <button type="button" onClick={clear} style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)',
            background: 'none', border: 'none', cursor: 'pointer', padding: 'var(--space-2)', whiteSpace: 'nowrap',
          }}>Clear all</button>
        )}
      </div>

      {total === 0 ? (
        <div style={{ padding: 'var(--space-9) var(--space-5)', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)' }}>
          <p style={{ marginBottom: 'var(--space-3)' }}>Nothing saved yet.</p>
          <p style={{ fontSize: 'var(--text-sm)' }}>Look for the <strong>Save</strong> button on tools, guides and articles to build your shortlist.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          {SECTIONS.map(({ key, label }) => groups[key].length > 0 && (
            <section key={key}>
              <Eyebrow style={{ margin: '0 0 var(--space-3)' }}>{label} · {groups[key].length}</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {groups[key].map((item) => <Row key={`${item.type}:${item.id}`} item={item} />)}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
