// Definition lookups for the labels/badges used across the site — the data
// behind both the Glossary page and the inline tooltips. One source of truth:
// resolves from tools.json meta + guides difficulties + the inline terms in
// glossary.json, so a definition is written in exactly one place.

import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';
import glossary from '../content/glossary.json';

const { meta } = toolsData;

// Filter/facet key (as passed by ToolsPage/GuidesPage) → glossary group id.
const FACET_TO_GROUP = {
  domain: 'domain',
  useCategory: 'work-type',
  role: 'work-area',
  band: 'year-level',
  subject: 'subject',
  pedagogy: 'pedagogy',
  cewaStatus: 'approval',
  difficulty: 'difficulty',
  access: 'availability',
};

const groupById = (id) => glossary.groups.find((g) => g.id === id);
const inlineTermDef = (groupId, label) =>
  groupById(groupId)?.terms?.find((t) => t.term === label)?.def || null;

/** Category-level definition for a facet (the intro shown for the whole group). */
export function facetHint(facetKey) {
  const group = groupById(FACET_TO_GROUP[facetKey]);
  return group?.intro || null;
}

/** Per-term definition: the meaning of a single option within a facet. */
export function termDef(facetKey, id) {
  if (id == null) return null;
  switch (facetKey) {
    case 'domain':
      return meta.domains.find((d) => d.id === id)?.description || null;
    case 'useCategory':
      return meta.useCategories.find((u) => u.id === id)?.description || null;
    case 'pedagogy':
      return meta.pedagogyFrameworks.find((p) => p.id === id)?.description || null;
    case 'cewaStatus':
      return meta.cewaStatuses.find((c) => c.id === id)?.description || null;
    case 'band': {
      const b = meta.bands.find((x) => x.id === id);
      return b ? `Years ${b.years}.` : null;
    }
    case 'difficulty':
      return guidesData.meta.difficulties.find((d) => d.id === id)?.description || null;
    case 'access':
      return meta.accessTiers.find((a) => a.id === id)?.description || null;
    case 'role': // option id is the role label itself
      return inlineTermDef('work-area', id);
    case 'subject': // option id is the subject label itself
      return inlineTermDef('subject', id);
    default:
      return null;
  }
}
