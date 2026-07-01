// Global search index — one flat, searchable record set built from every
// content source (tools, guides, capabilities, and the nav tracks). Built once
// at module load; the data is static JSON so there's nothing to invalidate.

import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';
import capabilitiesData from '../content/capabilities.json';
import articlesData from '../content/articles.json';
import tracks from '../content/index.js';

// Only the tracks that appear in nav are surfaced in search — `practice` and
// `explore` are retained raw material, deliberately kept out of the way.
const SEARCHABLE_TRACKS = ['foundations', 'risks', 'pedagogies'];

const { meta } = toolsData;
const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;
const pedagogyLabel = (id) => meta.pedagogyFrameworks.find((p) => p.id === id)?.shortLabel || id;

// Pull every string value out of a nested block so section copy is searchable
// without coupling to specific block shapes (text/heading/list/risk/...).
function harvestStrings(node, out, depth = 0) {
  if (depth > 6 || node == null) return;
  if (typeof node === 'string') { out.push(node); return; }
  if (Array.isArray(node)) { node.forEach((n) => harvestStrings(n, out, depth + 1)); return; }
  if (typeof node === 'object') { Object.values(node).forEach((v) => harvestStrings(v, out, depth + 1)); }
}

function buildIndex() {
  const records = [];

  // Tools
  toolsData.tools.forEach((t) => {
    records.push({
      type: 'Tool',
      id: t.id,
      title: t.name,
      subtitle: t.vendor,
      summary: t.description,
      to: `/tools/${t.id}`,
      cewaStatus: t.cewaStatus,
      keywords: [
        ...(t.useCategories || []).map(useCatLabel),
        ...(t.roles || []),
        ...(t.subjects || []),
        ...(t.pedagogies || []).map(pedagogyLabel),
        t.notes || '',
      ].join(' '),
    });
  });

  // Guides
  guidesData.guides.forEach((g) => {
    records.push({
      type: 'Guide',
      id: g.id,
      title: g.title,
      subtitle: useCatLabel(g.useCategory),
      summary: g.summary,
      to: `/guides/${g.id}`,
      keywords: [
        g.outcome || '',
        ...(g.roles || []),
        ...(g.subjects || []),
        ...(g.pedagogies || []).map(pedagogyLabel),
        g.time || '',
      ].join(' '),
    });
  });

  // AI capabilities
  capabilitiesData.capabilities.forEach((c) => {
    records.push({
      type: 'Capability',
      id: c.id,
      title: c.name,
      subtitle: 'AI capability',
      summary: c.summary,
      to: `/learn/capabilities/${c.id}`,
      keywords: [c.what || '', ...(c.eduUses || []).map(useCatLabel)].join(' '),
    });
  });

  // Articles (curated reading). Authored pieces open on-site; curated links open out.
  (articlesData.articles || []).forEach((a) => {
    const topic = articlesData.meta.topics.find((t) => t.id === a.topic)?.label || a.topic;
    records.push({
      type: 'Article',
      id: a.id,
      title: a.title,
      subtitle: topic,
      summary: a.dek,
      to: a.kind === 'link' && a.sourceUrl && !a.body ? a.sourceUrl : `/articles/${a.id}`,
      external: a.kind === 'link' && !a.body,
      keywords: [a.author || '', a.source || ''].join(' '),
    });
  });

  // Track sections (About AI · AI Safety · Teaching)
  SEARCHABLE_TRACKS.forEach((trackId) => {
    const track = tracks[trackId];
    if (!track) return;
    (track.sections || []).forEach((s) => {
      const body = [];
      harvestStrings(s.blocks, body);
      records.push({
        type: track.title,
        id: `${trackId}-${s.id}`,
        title: s.title,
        subtitle: track.title,
        summary: s.summary || body[0] || '',
        to: `/${trackId}/${s.id}`,
        keywords: [...(s.tags || []), body.join(' ')].join(' '),
      });
    });
  });

  // Pre-compute a lowercased haystack per record for fast matching.
  return records.map((r) => ({
    ...r,
    _haystack: `${r.title} ${r.subtitle} ${r.summary} ${r.keywords}`.toLowerCase(),
    _title: (r.title || '').toLowerCase(),
  }));
}

const INDEX = buildIndex();

/**
 * Rank records against a query. AND semantics: every token must appear
 * somewhere. Matches in the title score highest, then subtitle, then body.
 */
export function search(query, limit = 24) {
  const q = (query || '').trim().toLowerCase();
  if (q.length < 2) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = [];
  for (const r of INDEX) {
    let score = 0;
    let allMatch = true;
    for (const tok of tokens) {
      if (!r._haystack.includes(tok)) { allMatch = false; break; }
      if (r._title.includes(tok)) score += 10;
      else score += 3;
      if (r._title.startsWith(tok)) score += 5;
    }
    if (!allMatch) continue;
    // Whole-phrase title hit is the strongest signal.
    if (r._title.includes(q)) score += 12;
    scored.push({ record: r, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.record);
}

export default search;
