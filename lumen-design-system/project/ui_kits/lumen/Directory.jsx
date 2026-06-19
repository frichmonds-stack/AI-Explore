/* Lumen UI kit — AI Tools Directory. window.Directory */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;

  function toolProps(t, onOpenTool) {
    return { key: t.id, name: t.name, vendor: t.vendor, description: t.desc, status: t.status,
      featured: t.featured, popular: t.popular, roles: t.roles, tags: t.tags.slice(0, 3),
      onClick: () => onOpenTool(t.id) };
  }

  window.Directory = function Directory({ onOpenTool }) {
    const DS = window.LumenDesignSystem_e93e62;
    const { ToolCard, Input, Select, Checkbox, Tabs, Tag, Button } = DS;
    const data = window.LUMEN_DATA;
    const [tab, setTab] = React.useState('featured');
    const [query, setQuery] = React.useState('');
    const [sort, setSort] = React.useState('Most popular');
    const [statuses, setStatuses] = React.useState({});
    const [subject, setSubject] = React.useState('All subjects');

    const toggleStatus = (k) => setStatuses((s) => ({ ...s, [k]: !s[k] }));
    const activeStatuses = Object.keys(statuses).filter((k) => statuses[k]);

    let list = data.tools.filter((t) => {
      if (query && !(t.name + ' ' + t.desc + ' ' + t.tags.join(' ')).toLowerCase().includes(query.toLowerCase())) return false;
      if (activeStatuses.length && !activeStatuses.includes(t.status)) return false;
      if (subject !== 'All subjects' && t.subject !== subject && t.subject !== 'All subjects') return false;
      return true;
    });
    const rank = { approved: 0, pilot: 1, review: 2, restricted: 3 };
    if (sort === 'A–Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'By status') list = [...list].sort((a, b) => rank[a.status] - rank[b.status]);
    else list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

    const featured = data.tools.filter((t) => t.featured);
    const popular = data.tools.filter((t) => !t.featured);

    const statusCount = (k) => data.tools.filter((t) => t.status === k).length;

    return h('div', { className: 'kit-page' },
      h('div', { className: 'kit-container' },
        /* header */
        h('div', { className: 'dir-head' },
          h('div', { className: 'section-eyebrow' }, 'AI Tools Directory'),
          h('div', { className: 'section-title', style: { fontSize: 'var(--text-3xl)' } }, 'Find a tool you can trust'),
          h('div', { className: 'section-sub', style: { fontSize: 'var(--text-md)' } },
            'Every tool carries a CEWA approval status, the teacher roles it suits, and what it\u2019s good for. Browse the warm picks, or filter the full catalogue.'),
          h('div', { className: 'dir-toolbar' },
            h('div', { className: 'grow' },
              h(Input, { pill: true, placeholder: 'Search tools, e.g. \u201cfeedback\u201d or \u201clesson planning\u201d',
                icon: h(I.Search, { width: 18, height: 18 }), value: query,
                onChange: (e) => { setQuery(e.target.value); if (e.target.value && tab !== 'browse') setTab('browse'); } })
            ),
            h(Select, { pill: true, options: ['Most popular', 'By status', 'A\u2013Z'], value: sort, onChange: (e) => setSort(e.target.value), style: { minWidth: 160 } })
          ),
          h('div', { style: { marginTop: 'var(--space-5)' } },
            h(Tabs, { variant: 'pill', value: tab, onChange: setTab,
              items: [{ value: 'featured', label: 'Featured' }, { value: 'browse', label: 'Browse all', count: data.tools.length }] })
          )
        ),

        /* FEATURED view */
        tab === 'featured' && h('div', { style: { paddingBottom: 'var(--space-9)' } },
          h('section', { className: 'section', style: { paddingTop: 'var(--space-5)' } },
            h('div', { className: 'section-head' },
              h('div', null,
                h('div', { className: 'section-eyebrow' }, h('span', { style: { color: 'var(--ochre-600)' } }, '\u2726 Featured')),
                h('div', { className: 'section-title' }, 'Editors\u2019 picks')),
            ),
            h('div', { className: 'rail' }, featured.map((t) => h(ToolCard, toolProps(t, onOpenTool)))),
          ),
          h('section', { className: 'section', style: { paddingTop: 0 } },
            h('div', { className: 'section-head' },
              h('div', null, h('div', { className: 'section-title', style: { fontSize: 'var(--text-xl)' } }, 'More in the directory')),
              h('a', { className: 'section-link', href: '#', onClick: (e) => { e.preventDefault(); setTab('browse'); } },
                'See all ', data.tools.length, ' tools ', h(I.ArrowRight, { width: 16, height: 16 }))),
            h('div', { className: 'tools-grid' }, popular.map((t) => h(ToolCard, toolProps(t, onOpenTool))))
          )
        ),

        /* BROWSE view */
        tab === 'browse' && h('div', { className: 'dir-layout' },
          /* sidebar */
          h('aside', { className: 'dir-sidebar' },
            h('div', { className: 'filter-card' },
              h('div', { className: 'filter-group' },
                h('div', { className: 'filter-title' }, 'CEWA status'),
                h('div', { className: 'filter-list' },
                  data.statusFilters.map((s) => h(Checkbox, { key: s.key, label: s.label, count: statusCount(s.key),
                    checked: !!statuses[s.key], onChange: () => toggleStatus(s.key) })))
              ),
              h('div', { className: 'filter-group' },
                h('div', { className: 'filter-title' }, 'Subject'),
                h(Select, { options: data.subjects, value: subject, onChange: (e) => setSubject(e.target.value), size: 'sm' })
              ),
              h('div', { className: 'filter-group' },
                h('div', { className: 'filter-title' }, 'Use case'),
                h('div', { className: 'chip-wrap' },
                  data.categories.slice(0, 6).map((c) => h(Tag, { key: c, interactive: true,
                    onClick: () => setQuery(c) }, c)))
              )
            )
          ),
          /* main */
          h('div', { className: 'dir-main' },
            h('div', { className: 'dir-result-meta' },
              h('div', { className: 'dir-count' }, h('b', null, list.length), ' tool', list.length === 1 ? '' : 's',
                (activeStatuses.length || subject !== 'All subjects' || query) ? ' match your filters' : ' in the catalogue'),
              (activeStatuses.length || subject !== 'All subjects' || query) &&
                h(Button, { variant: 'ghost', size: 'sm', onClick: () => { setStatuses({}); setSubject('All subjects'); setQuery(''); } }, 'Clear all')
            ),
            list.length === 0
              ? h('div', { className: 'dir-empty' }, h('div', { style: { fontSize: 'var(--text-lg)', color: 'var(--text-strong)', fontFamily: 'var(--font-display)', marginBottom: 6 } }, 'No tools match those filters yet'), 'Try widening your search or clearing a filter.')
              : h('div', { className: 'tools-grid' }, list.map((t) => h(ToolCard, toolProps(t, onOpenTool))))
          )
        )
      )
    );
  };
})();
