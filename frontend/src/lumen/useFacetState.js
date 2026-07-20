import { useState } from 'react';
import toolsData from '../content/tools.json';

const { meta } = toolsData;

export const ALL = 'all';

// Shared facet state for ToolsPage/GuidesPage: values keyed by facet, plus
// the domain -> work type narrowing rule (choosing a domain scopes the work
// type options to it, and clears a work type that no longer belongs).
export function useFacetState(keys) {
  const [values, setValues] = useState(() => Object.fromEntries(keys.map((k) => [k, ALL])));

  const setFacet = (key, val) => {
    setValues((prev) => {
      const next = { ...prev, [key]: val };
      if (key === 'domain' && val !== ALL) {
        const d = meta.domains.find((x) => x.id === val);
        if (next.useCategory && next.useCategory !== ALL && d && !d.useCategories.includes(next.useCategory)) {
          next.useCategory = ALL;
        }
      }
      return next;
    });
  };

  const clearAll = () => setValues(Object.fromEntries(keys.map((k) => [k, ALL])));

  const activeDomain = meta.domains.find((d) => d.id === values.domain);
  const workTypeOptions = activeDomain
    ? meta.useCategories.filter((u) => activeDomain.useCategories.includes(u.id))
    : meta.useCategories;

  return { values, setFacet, clearAll, workTypeOptions };
}
