/* Lumen UI kit — inline Lucide icons as React components. window.LucideIcon.
   Paths copied from lucide.dev (ISC). Outline, 2px, round caps. */
(function () {
  const React = window.React;
  const S = (paths, vb = '24') => (props) => React.createElement(
    'svg',
    Object.assign({ width: 20, height: 20, viewBox: `0 0 24 24`, fill: 'none', stroke: 'currentColor',
      strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }, props),
    paths.map((d, i) => React.createElement('path', { key: i, d }))
  );
  const C = (children) => (props) => React.createElement(
    'svg',
    Object.assign({ width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }, props),
    children
  );
  const h = React.createElement;

  window.LucideIcon = {
    Search: C([h('circle', { key: 'c', cx: 11, cy: 11, r: 8 }), h('path', { key: 'p', d: 'm21 21-4.3-4.3' })]),
    ArrowRight: S(['M5 12h14', 'm12 5 7 7-7 7']),
    ArrowLeft: S(['M19 12H5', 'm12 19-7-7 7-7']),
    Sparkles: S(['M9.94 14.66A3.5 3.5 0 0 0 7.34 12 3.5 3.5 0 0 0 9.94 9.34 3.5 3.5 0 0 0 12.6 12a3.5 3.5 0 0 0-2.66 2.66z', 'M18 5l.9 2.1L21 8l-2.1.9L18 11l-.9-2.1L15 8l2.1-.9z', 'M5 17l.6 1.4L7 19l-1.4.6L5 21l-.6-1.4L3 19l1.4-.6z']),
    BookOpen: S(['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z']),
    Shield: S(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z']),
    Scale: S(['m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'M7 21h10', 'M12 3v18', 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2']),
    Compass: C([h('circle', { key: 'c', cx: 12, cy: 12, r: 10 }), h('path', { key: 'p', d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z' })]),
    GraduationCap: S(['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5']),
    Bookmark: C([h('path', { key: 'p', d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' })]),
    ExternalLink: S(['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6']),
    SlidersHorizontal: S(['M10 5H3', 'M21 5h-7', 'M14 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0', 'M7 12H3', 'M21 12h-9', 'M9 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0', 'M11 19H3', 'M21 19h-5', 'M16 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0']),
    Check: S(['M20 6 9 17l-5-5']),
    Users: S(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
    Info: C([h('circle', { key: 'c', cx: 12, cy: 12, r: 10 }), h('path', { key: 'a', d: 'M12 16v-4' }), h('path', { key: 'b', d: 'M12 8h.01' })]),
    Clock: C([h('circle', { key: 'c', cx: 12, cy: 12, r: 10 }), h('path', { key: 'p', d: 'M12 6v6l4 2' })]),
    Star: C([h('path', { key: 'p', d: 'M11.5 3.2a.5.5 0 0 1 .9 0l2.1 4.3 4.7.7a.5.5 0 0 1 .3.9l-3.4 3.3.8 4.7a.5.5 0 0 1-.7.5L12 16.9l-4.2 2.2a.5.5 0 0 1-.7-.5l.8-4.7L4.3 9.6a.5.5 0 0 1 .3-.9l4.7-.7z' })]),
  };
  // alias by track tone usage
  window.LucideIcon.Heart = window.LucideIcon.Star;
})();
