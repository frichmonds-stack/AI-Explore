/* Lumen UI kit — Home screen. window.Home */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;

  const TRACK_ICONS = { '01': 'BookOpen', '02': 'Sparkles', '03': 'Scale', '04': 'Shield', '05': 'GraduationCap' };

  function TrackCard({ t, onOpen }) {
    const Icon = I[TRACK_ICONS[t.n]] || I.BookOpen;
    return h('a', { className: 'track-card', href: '#', onClick: (e) => { e.preventDefault(); onOpen(); } },
      h('div', { className: 'track-top' },
        h('span', { className: 'track-n' }, t.n),
        h('span', { className: 'track-icon ' + t.tone }, h(Icon, { width: 20, height: 20 }))
      ),
      h('div', { className: 'track-title' }, t.title),
      h('div', { className: 'track-desc' }, t.desc),
      h('div', { className: 'track-meta' },
        h('span', null, t.lessons + ' lessons'),
        h('span', null, '·'),
        h('span', null, t.mins + ' min'),
        h('span', { className: 'more' }, h(I.ArrowRight, { width: 16, height: 16 }))
      )
    );
  }

  window.Home = function Home({ onBrowse, onOpenTool, onOpenTrack }) {
    const DS = window.LumenDesignSystem_e93e62;
    const { Button, ToolCard } = DS;
    const data = window.LUMEN_DATA;
    const featured = data.tools.filter((t) => t.featured || t.popular).slice(0, 4);

    return h('div', { className: 'kit-page' },
      /* hero */
      h('section', { className: 'home-hero' },
        h('div', { className: 'hero-inner' },
          h('div', { className: 'hero-eyebrow' }, 'A CEWA professional learning platform'),
          h('h1', { className: 'hero-h1' }, 'Bringing ', h('em', null, 'light'), ' to AI in the classroom.'),
          h('p', { className: 'hero-sub' }, 'Calm, practical guidance for Catholic educators — short learning tracks and a directory of AI tools, each with a clear CEWA approval status.'),
          h('div', { className: 'hero-actions' },
            h('div', { className: 'hero-search' },
              h(DS.Input, { pill: true, placeholder: 'Search 140+ AI tools…', icon: h(I.Search, { width: 18, height: 18 }),
                onFocus: onBrowse, readOnly: true, style: { cursor: 'pointer' } })
            ),
            h(Button, { variant: 'accent', size: 'lg', onClick: onBrowse },
              'Browse AI tools ', h(I.ArrowRight, { width: 18, height: 18, style: { marginLeft: 4 } }))
          ),
          h('div', { className: 'hero-meta' },
            h('span', null, h('b', null, '142'), ' tools reviewed'),
            h('span', null, h('b', null, '5'), ' learning tracks'),
            h('span', null, 'Updated quarterly by the CEWA AI team')
          )
        )
      ),

      h('div', { className: 'kit-container' },
        /* learning tracks */
        h('section', { className: 'section' },
          h('div', { className: 'section-head' },
            h('div', null,
              h('div', { className: 'section-eyebrow' }, 'Learn at your pace'),
              h('div', { className: 'section-title' }, 'Start a learning track'),
              h('div', { className: 'section-sub' }, 'Five short, self-paced paths — from the basics to ethics, safety and assessment.')
            )
          ),
          h('div', { className: 'tracks-grid' },
            data.tracks.map((t) => h(TrackCard, { key: t.n, t, onOpen: () => onOpenTrack(t) }))
          )
        ),

        /* featured tools */
        h('section', { className: 'section', style: { paddingTop: 0 } },
          h('div', { className: 'section-head' },
            h('div', null,
              h('div', { className: 'section-eyebrow' }, 'From the directory'),
              h('div', { className: 'section-title' }, 'Popular with teachers'),
              h('div', { className: 'section-sub' }, 'A warm starting point — tools colleagues are reaching for right now.')
            ),
            h('a', { className: 'section-link', href: '#', onClick: (e) => { e.preventDefault(); onBrowse(); } },
              'Browse all tools ', h(I.ArrowRight, { width: 16, height: 16 }))
          ),
          h('div', { className: 'tools-grid' },
            featured.map((t) => h(ToolCard, {
              key: t.id, name: t.name, vendor: t.vendor, description: t.desc, status: t.status,
              featured: t.featured, popular: t.popular, roles: t.roles, tags: t.tags.slice(0, 3),
              onClick: () => onOpenTool(t.id),
            }))
          )
        )
      )
    );
  };
})();
