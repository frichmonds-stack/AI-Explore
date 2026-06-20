import { useState, useMemo, useEffect, useRef } from 'react';
import { ToolCard } from '../lumen/ToolCard';
import { ToolSpotlight } from '../lumen/ToolSpotlight';
import { StatusBadge } from '../lumen/StatusBadge';
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
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)',
      }}>{label}</span>
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
  const [filtersExpanded, setFiltersExpanded] = useState(false);

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

  const secondaryActive = [band, subject, role, pedagogy, cewaStatus].filter(f => f !== ALL).length;
  const activeFilters = (useCategory !== ALL ? 1 : 0) + secondaryActive;

  // Auto-expand secondary filters if any are active so the active pill stays visible.
  useEffect(() => {
    if (secondaryActive > 0) setFiltersExpanded(true);
  }, [secondaryActive]);

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

      {/* Filters */}
      <div style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)',
        marginBottom: 'var(--space-8)',
      }}>
        {/* Primary filter — always visible */}
        <FilterBar label="What you need" options={meta.useCategories} value={useCategory} onChange={setUseCategory} />

        {/* Secondary filters — collapsible */}
        {filtersExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-5)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-subtle)' }}>
            <FilterBar label="Year band" options={meta.bands} value={band} onChange={setBand} />
            <FilterBar label="Subject" options={meta.subjects.map(s => ({ id: s, label: s }))} value={subject} onChange={setSubject} />
            <FilterBar label="Teaching role" options={meta.roles.map(r => ({ id: r, label: r }))} value={role} onChange={setRole} />
            <FilterBar label="Pedagogical approach" options={meta.pedagogyFrameworks} value={pedagogy} onChange={setPedagogy} />
            <FilterBar label="CEWA status" options={meta.cewaStatuses} value={cewaStatus} onChange={setCewaStatus} />
          </div>
        )}

        {/* Toggle row */}
        <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => setFiltersExpanded((v) => !v)}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
              color: 'var(--pine-700)', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: 'var(--space-1)',
            }}
          >
            {filtersExpanded
              ? 'Hide filters ▲'
              : `More filters${secondaryActive > 0 ? ` (${secondaryActive} active)` : ''} ▼`}
          </button>
          {activeFilters > 0 && (
            <button
              onClick={() => { setUseCategory(ALL); setBand(ALL); setSubject(ALL); setRole(ALL); setPedagogy(ALL); setCewaStatus(ALL); }}
              style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-5)' }}>
        {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
        {activeFilters > 0 ? ' matching your filters' : ''}
      </p>

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
