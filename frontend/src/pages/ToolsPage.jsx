import { useState, useMemo, useEffect, useRef } from 'react';
import { ToolCard } from '../lumen/ToolCard';
import { ToolSpotlight } from '../lumen/ToolSpotlight';
import { StatusBadge } from '../lumen/StatusBadge';
import { FacetFilters } from '../lumen/FacetFilters';
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

function StatusFooter() {
  const statuses = [
    ['approved',    'Cleared for use on CEWA school devices and networks.'],
    ['conditional', 'Approved for CEWA use — specific conditions apply. Read them before using.'],
    ['review',      'Under CEWA evaluation. Avoid on school devices until a decision is published.'],
    ['restricted',  'Explicitly blocked on CEWA devices. Do not use on school networks.'],
    ['unreviewed',  'Not yet assessed by CEWA. Suitable for personal devices; professional judgement required.'],
  ];
  return (
    <div style={{
      marginTop: 'var(--space-12)',
      padding: 'var(--space-5)',
      background: 'var(--paper-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)',
        marginBottom: 'var(--space-3)',
      }}>About CEWA device status</p>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
        CEWA assesses tools against its approved software list. Status applies to school-managed devices and networks.
        Tools used on personal devices remain at the teacher's professional discretion.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {statuses.map(([s, desc]) => (
          <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
            <StatusBadge status={s} showTip={false} />
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5, paddingTop: 2 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsPage() {
  const [useCategory, setUseCategory] = useState(ALL);
  const [band, setBand] = useState(ALL);
  const [subject, setSubject] = useState(ALL);
  const [role, setRole] = useState(ALL);
  const [pedagogy, setPedagogy] = useState(ALL);
  const [cewaStatus, setCewaStatus] = useState(ALL);

  const values = { useCategory, band, subject, role, pedagogy, cewaStatus };
  const setters = {
    useCategory: setUseCategory, band: setBand, subject: setSubject,
    role: setRole, pedagogy: setPedagogy, cewaStatus: setCewaStatus,
  };
  const setFacet = (key, val) => setters[key](val);
  const clearAll = () => Object.values(setters).forEach((s) => s(ALL));

  // One compact dropdown row instead of six stacked pill rows.
  const facets = [
    { key: 'useCategory', label: 'Work type',  options: meta.useCategories },
    { key: 'role',        label: 'Work area',  options: meta.roles.map((r) => ({ id: r, label: r })) },
    { key: 'band',        label: 'Year level', options: meta.bands, allLabel: 'Any age' },
    { key: 'subject',     label: 'Subject',    options: meta.subjects.map((s) => ({ id: s, label: s })) },
    { key: 'pedagogy',    label: 'Pedagogy',   options: meta.pedagogyFrameworks.map((p) => ({ id: p.id, label: p.shortLabel || p.label })) },
    { key: 'cewaStatus',  label: 'Approval',   options: meta.cewaStatuses },
  ];

  // Spotlight: no tool selected on load — appears on first card click.
  const [selectedId, setSelectedId] = useState(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const expandScrollY = useRef(0);
  const suppressMinimiseUntil = useRef(0);

  const markExpanded = () => {
    expandScrollY.current = window.scrollY;
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

  // If the selected tool is filtered out, follow to the first visible tool.
  // Guard: only runs after a tool has been selected (selectedId !== null).
  useEffect(() => {
    if (!selectedId || filtered.length === 0) return;
    if (!filtered.some((t) => t.id === selectedId)) setSelectedId(filtered[0].id);
  }, [filtered, selectedId]);

  const selectTool = (id) => {
    setSelectedId(id);
    setSpotlightOpen(true);
    markExpanded();
  };

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

  const activeFilters = Object.values(values).filter((f) => f !== ALL).length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)',
          marginBottom: 'var(--space-2)',
        }}>AI Tools Library</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-3)' }}>
          Find the right tool for your teaching
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: 'var(--leading-relaxed)' }}>
          Browse by what you need to do. Click any tool to see how it fits your classroom.
        </p>
      </div>

      {/* Spotlight — invitation hint before first selection; full panel after */}
      {!selectedTool ? (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          padding: 'var(--space-4) var(--space-5)',
          background: 'color-mix(in srgb, var(--pine-50) 70%, transparent)',
          border: '1px dashed var(--pine-200)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--space-6)',
        }}>
          <span style={{ fontSize: 16, opacity: 0.45, lineHeight: 1 }}>↓</span>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
            textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: 0,
          }}>Click any tool below to see details here</p>
        </div>
      ) : (
        <ToolSpotlight
          tool={selectedTool}
          meta={meta}
          status={statusOf(selectedTool)}
          open={spotlightOpen}
          onToggle={() => {
            setSpotlightOpen((o) => {
              const next = !o;
              if (next) markExpanded();
              return next;
            });
          }}
        />
      )}

      {/* Filters — one compact dropdown row, options hidden until opened */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <FacetFilters
          facets={facets}
          values={values}
          onChange={setFacet}
          onClear={clearAll}
          resultCount={filtered.length}
          resultNoun="tool"
        />
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 'var(--space-10) 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--space-2)' }}>No tools match these filters.</p>
          <p style={{ fontSize: 'var(--text-sm)' }}>Try removing one or more filters.</p>
        </div>
      )}

      {/* Featured */}
      {featured.length > 0 && (
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase', color: 'var(--pine-600)', fontWeight: 'var(--weight-medium)', margin: 0,
            }}>Featured</p>
            <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <ToolGrid items={featured} selectedId={selectedId} onSelect={selectTool} />
        </div>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <div>
          {featured.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
                textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', margin: 0,
              }}>All tools</p>
              <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
            </div>
          )}
          <ToolGrid items={rest} selectedId={selectedId} onSelect={selectTool} />
        </div>
      )}

      <StatusFooter />
    </div>
  );
}
