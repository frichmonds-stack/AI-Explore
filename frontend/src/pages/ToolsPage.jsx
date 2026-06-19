import { useState, useMemo, useEffect, useRef } from 'react';
import { ToolCard } from '../lumen/ToolCard';
import { ToolSpotlight } from '../lumen/ToolSpotlight';
import toolsData from '../content/tools.json';

const { tools, meta } = toolsData;

const ALL = 'all';

const cewaStatusMap = {
  'approved': 'approved',
  'approved-conditions': 'conditional',
  'under-review': 'review',
  'not-approved': 'restricted',
  'not-reviewed': 'unreviewed',
};
const statusOf = (t) => cewaStatusMap[t.cewaStatus] || 'unreviewed';

function FilterBar({ label, options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span className="lumen-eyebrow">{label}</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        <button
          onClick={() => onChange(ALL)}
          style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
            padding: '.3em .8em', borderRadius: 'var(--radius-pill)', border: '1px solid',
            cursor: 'pointer', transition: 'var(--transition-base)',
            background: value === ALL ? 'var(--pine-600)' : 'var(--surface-card)',
            borderColor: value === ALL ? 'var(--pine-600)' : 'var(--border-strong)',
            color: value === ALL ? '#fff' : 'var(--text-body)',
          }}
        >All</button>
        {options.map((opt) => {
          const id = opt.id || opt;
          const lbl = opt.label || opt;
          const active = value === id;
          return (
            <button
              key={id}
              onClick={() => onChange(active ? ALL : id)}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
                padding: '.3em .8em', borderRadius: 'var(--radius-pill)', border: '1px solid',
                cursor: 'pointer', transition: 'var(--transition-base)',
                background: active ? 'var(--pine-600)' : 'var(--surface-card)',
                borderColor: active ? 'var(--pine-600)' : 'var(--border-strong)',
                color: active ? '#fff' : 'var(--text-body)',
              }}
            >{lbl}</button>
          );
        })}
      </div>
    </div>
  );
}

function ToolGrid({ items, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ alignItems: 'start' }}>
      {items.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          meta={meta}
          status={statusOf(tool)}
          selected={selectedId === tool.id}
          onSelect={() => onSelect(tool.id)}
        />
      ))}
    </div>
  );
}

const firstFeatured = tools.find((t) => t.featured) || tools[0];

export default function ToolsPage() {
  const [useCategory, setUseCategory] = useState(ALL);
  const [band, setBand] = useState(ALL);
  const [subject, setSubject] = useState(ALL);
  const [role, setRole] = useState(ALL);
  const [pedagogy, setPedagogy] = useState(ALL);
  const [cewaStatus, setCewaStatus] = useState(ALL);

  const [selectedId, setSelectedId] = useState(firstFeatured?.id ?? null);
  const [spotlightOpen, setSpotlightOpen] = useState(true);
  const expandScrollY = useRef(0);
  // Ignore scroll-to-minimise briefly after a deliberate expand, so the
  // browser's focus-scroll (from clicking a card button) can't instantly
  // collapse the panel it just opened.
  const suppressMinimiseUntil = useRef(0);

  const markExpanded = () => {
    expandScrollY.current = window.scrollY;
    // Expanding grows the (in-flow, sticky) panel above the scroll position, so
    // scroll-anchoring bumps scrollY to keep the grid visually stable. Suppress
    // minimise until the expand animation + anchoring settle, then re-baseline to
    // the adjusted position so only genuine user scrolling minimises.
    suppressMinimiseUntil.current = Date.now() + 420;
    setTimeout(() => { expandScrollY.current = window.scrollY; }, 400);
  };

  const filtered = useMemo(() => tools.filter((t) => {
    if (useCategory !== ALL && !(t.useCategories || []).includes(useCategory)) return false;
    if (band !== ALL && !t.bands.includes(band)) return false;
    if (subject !== ALL && !t.subjects.includes(subject)) return false;
    if (role !== ALL && !t.roles.includes(role)) return false;
    if (pedagogy !== ALL && !t.pedagogies.includes(pedagogy)) return false;
    if (cewaStatus !== ALL && t.cewaStatus !== cewaStatus) return false;
    return true;
  }), [useCategory, band, subject, role, pedagogy, cewaStatus]);

  const featured = filtered.filter((t) => t.featured);
  const rest = filtered.filter((t) => !t.featured);

  // Keep the spotlight in sync with the filtered grid: if the selected tool is
  // filtered out, follow on to the first visible tool (never leave it empty).
  useEffect(() => {
    if (filtered.length === 0) return;
    if (!filtered.some((t) => t.id === selectedId)) setSelectedId(filtered[0].id);
  }, [filtered, selectedId]);

  const selectTool = (id) => {
    setSelectedId(id);
    setSpotlightOpen(true);
    markExpanded();
  };

  // Minimise on scroll; clicking a card (or the bar) re-expands.
  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < suppressMinimiseUntil.current) return;
      if (spotlightOpen && Math.abs(window.scrollY - expandScrollY.current) > 48) {
        setSpotlightOpen(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [spotlightOpen]);

  const selectedTool = filtered.find((t) => t.id === selectedId)
    || tools.find((t) => t.id === selectedId)
    || null;

  const activeFilters = [useCategory, band, subject, role, pedagogy, cewaStatus].filter(f => f !== ALL).length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>AI Tools Library</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          Find the right tool for your teaching
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: '640px' }}>
          Browse by what you teach, who you teach, and how you teach. Pick any tool to see how it fits your classroom.
        </p>
      </div>

      {/* Persistent spotlight */}
      <ToolSpotlight
        tool={selectedTool}
        meta={meta}
        status={selectedTool ? statusOf(selectedTool) : 'unreviewed'}
        open={spotlightOpen}
        onToggle={() => {
          setSpotlightOpen((o) => {
            const next = !o;
            if (next) markExpanded();
            return next;
          });
        }}
      />

      {/* Filters */}
      <div style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
        marginBottom: 'var(--space-8)',
      }}>
        <FilterBar label="What you need" options={meta.useCategories} value={useCategory} onChange={setUseCategory} />
        <FilterBar label="Year band" options={meta.bands} value={band} onChange={setBand} />
        <FilterBar label="Subject" options={meta.subjects.map(s => ({ id: s, label: s }))} value={subject} onChange={setSubject} />
        <FilterBar label="Teaching role" options={meta.roles.map(r => ({ id: r, label: r }))} value={role} onChange={setRole} />
        <FilterBar label="Pedagogical approach" options={meta.pedagogyFrameworks} value={pedagogy} onChange={setPedagogy} />
        <FilterBar label="CEWA status" options={meta.cewaStatuses} value={cewaStatus} onChange={setCewaStatus} />
      </div>

      {/* Results count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
          {activeFilters > 0 ? ` matching your filters` : ''}
        </p>
        {activeFilters > 0 && (
          <button
            onClick={() => { setUseCategory(ALL); setBand(ALL); setSubject(ALL); setRole(ALL); setPedagogy(ALL); setCewaStatus(ALL); }}
            style={{ fontSize: 'var(--text-sm)', color: 'var(--pine-600)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)' }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 'var(--space-10) 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--space-2)' }}>No tools match these filters.</p>
          <p style={{ fontSize: 'var(--text-sm)' }}>Try removing one or more filters.</p>
        </div>
      )}

      {/* Featured */}
      {featured.length > 0 && (
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Featured</p>
          <ToolGrid items={featured} selectedId={selectedId} onSelect={selectTool} />
        </div>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <div>
          {featured.length > 0 && (
            <p className="lumen-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>All tools</p>
          )}
          <ToolGrid items={rest} selectedId={selectedId} onSelect={selectTool} />
        </div>
      )}
    </div>
  );
}
