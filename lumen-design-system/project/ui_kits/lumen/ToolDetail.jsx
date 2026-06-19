/* Lumen UI kit — single Tool detail. window.ToolDetail */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;

  const STATUS_ALERT = {
    approved: { tone: 'success', title: 'Approved for CEWA schools' },
    pilot: { tone: 'info', title: 'Approved for a guided pilot' },
    review: { tone: 'warning', title: 'Currently under review' },
    restricted: { tone: 'danger', title: 'Not approved for student-facing use' },
    unreviewed: { tone: 'pine', title: 'Not yet reviewed' },
  };

  window.ToolDetail = function ToolDetail({ toolId, onBack, onOpenTool }) {
    const DS = window.LumenDesignSystem_e93e62;
    const { StatusBadge, Tooltip, Button, Tag, Alert, Badge } = DS;
    const data = window.LUMEN_DATA;
    const t = data.tools.find((x) => x.id === toolId) || data.tools[0];
    const sa = STATUS_ALERT[t.status];
    const related = data.tools.filter((x) => x.id !== t.id && x.subject === t.subject).slice(0, 3);

    return h('div', { className: 'kit-page' },
      h('div', { className: 'kit-container detail-wrap' },
        h('button', { className: 'back-link', onClick: onBack },
          h(I.ArrowLeft, { width: 16, height: 16 }), 'Back to directory'),

        h('div', { className: 'detail-grid' },
          /* main column */
          h('div', null,
            h('div', { className: 'detail-header' },
              h('div', { className: 'detail-logo' }, t.name.trim()[0]),
              h('div', { className: 'detail-titles' },
                h('h1', null, t.name),
                h('div', { className: 'detail-vendor' }, t.vendor),
                h('div', { className: 'detail-status-row' },
                  h(StatusBadge, { status: t.status }),
                  t.featured && h(Badge, { tone: 'ochre', dot: true }, 'Featured'),
                  t.popular && !t.featured && h(Badge, { tone: 'primary' }, 'Popular')
                )
              )
            ),

            h(Alert, { tone: sa.tone, title: sa.title },
              t.notes[0]),

            h('p', { className: 'detail-lead', style: { marginTop: 'var(--space-6)' } }, t.long),

            h('div', { className: 'detail-block' },
              h('h3', null, 'Who it suits'),
              h('div', { className: 'roles-row' },
                t.roles.map((r) => h('span', { className: 'role-chip', key: r },
                  h(I.Users, { width: 13, height: 13 }), r)))
            ),

            h('div', { className: 'detail-block' },
              h('h3', null, 'Use cases'),
              h('div', { className: 'roles-row' }, t.tags.map((tag) => h(Tag, { key: tag }, tag)))
            ),

            h('div', { className: 'detail-block' },
              h('h3', null, 'Good to know'),
              h('ul', { className: 'notes-list' },
                t.notes.map((n, i) => h('li', { key: i },
                  h(I.Check, { width: 16, height: 16 }), n)))
            )
          ),

          /* aside */
          h('aside', { className: 'detail-aside' },
            h('div', { className: 'aside-card' },
              h('div', { className: 'aside-actions' },
                h(Button, { variant: 'primary', block: true, as: 'a', href: 'https://' + t.vendor, target: '_blank', rel: 'noreferrer' },
                  'Visit website ', h(I.ExternalLink, { width: 16, height: 16, style: { marginLeft: 4 } })),
                h(Button, { variant: 'secondary', block: true },
                  h(I.Bookmark, { width: 16, height: 16, style: { marginRight: 6 } }), 'Save to collection')
              )
            ),
            h('div', { className: 'aside-card' },
              h('h3', null, 'At a glance'),
              h('div', { className: 'aside-row' }, h('span', { className: 'k' }, 'Status'),
                h('span', { className: 'v' }, h(StatusBadge, { status: t.status, showTip: false }))),
              h('div', { className: 'aside-row' }, h('span', { className: 'k' }, 'Subject'), h('span', { className: 'v' }, t.subject)),
              h('div', { className: 'aside-row' }, h('span', { className: 'k' }, 'Category'), h('span', { className: 'v' }, t.category)),
              h('div', { className: 'aside-row' }, h('span', { className: 'k' }, 'Made by'), h('span', { className: 'v' }, t.vendor))
            ),
            related.length > 0 && h('div', { className: 'aside-card' },
              h('h3', null, 'Similar tools'),
              h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' } },
                related.map((r) => h('a', { key: r.id, href: '#', onClick: (e) => { e.preventDefault(); onOpenTool(r.id); },
                  style: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' } },
                  h('span', { style: { width: 34, height: 34, flex: 'none', borderRadius: 9, background: 'var(--pine-50)', border: '1px solid var(--pine-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--pine-700)' } }, r.name.trim()[0]),
                  h('span', { style: { minWidth: 0 } },
                    h('span', { style: { display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' } }, r.name),
                    h('span', { style: { display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' } }, r.category)))))
            )
          )
        )
      )
    );
  };
})();
