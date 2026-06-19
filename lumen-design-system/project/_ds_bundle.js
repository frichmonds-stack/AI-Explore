/* @ds-bundle: {"format":3,"namespace":"LumenDesignSystem_e93e62","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"STATUS","sourcePath":"components/discovery/StatusBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/discovery/StatusBadge.jsx"},{"name":"ToolCard","sourcePath":"components/discovery/ToolCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"LumenMark","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"89535c208b09","components/core/Badge.jsx":"74148d015263","components/core/Button.jsx":"72a54e5a9d46","components/core/Card.jsx":"2d97310f98ab","components/core/Tag.jsx":"5a490fe1af17","components/discovery/StatusBadge.jsx":"2451eeed0fec","components/discovery/ToolCard.jsx":"19e00aab1791","components/feedback/Alert.jsx":"20238a2cb4a7","components/feedback/Tooltip.jsx":"20a5099b6035","components/forms/Checkbox.jsx":"25997020031a","components/forms/Input.jsx":"ae4e178d5cba","components/forms/Select.jsx":"882a96cec134","components/navigation/Navbar.jsx":"c0975d43559b","components/navigation/Tabs.jsx":"aa3280bcadd9","ui_kits/lumen/Directory.jsx":"f60410cea101","ui_kits/lumen/Home.jsx":"32b2604dcbbb","ui_kits/lumen/ToolDetail.jsx":"c6c28de39e25","ui_kits/lumen/data.js":"904873c92a33","ui_kits/lumen/icons.js":"ed747671274b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LumenDesignSystem_e93e62 = window.LumenDesignSystem_e93e62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-avatar{
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:50%; overflow:hidden; flex:none;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  background:var(--pine-100); color:var(--pine-700);
  border:1px solid rgba(40,32,20,.06);
}
.lmn-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.lmn-avatar--xs{ width:24px; height:24px; font-size:10px; }
.lmn-avatar--sm{ width:32px; height:32px; font-size:12px; }
.lmn-avatar--md{ width:44px; height:44px; font-size:15px; }
.lmn-avatar--lg{ width:64px; height:64px; font-size:22px; }
.lmn-avatar--square{ border-radius:var(--radius-md); }
.lmn-avatar--clay{ background:var(--clay-100); color:var(--clay-700); }
.lmn-avatar--ochre{ background:var(--ochre-100); color:var(--ochre-600); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  shape = 'circle',
  tone = 'pine',
  className = '',
  ...rest
}) {
  const cls = ['lmn-avatar', `lmn-avatar--${size}`, shape === 'square' ? 'lmn-avatar--square' : '', tone === 'clay' ? 'lmn-avatar--clay' : '', tone === 'ochre' ? 'lmn-avatar--ochre' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-badge{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  font-size:var(--text-xs); line-height:1;
  padding:.3em .65em; border-radius:var(--radius-pill);
  border:1px solid transparent; white-space:nowrap;
}
.lmn-badge--dot::before{ content:""; width:.5em; height:.5em; border-radius:50%; background:currentColor; opacity:.9; }

.lmn-badge--neutral{ background:var(--surface-raised); color:var(--text-body); }
.lmn-badge--primary{ background:var(--pine-100); color:var(--pine-700); }
.lmn-badge--accent{ background:var(--clay-100); color:var(--clay-700); }
.lmn-badge--ochre{ background:var(--ochre-100); color:var(--ochre-600); }
.lmn-badge--success{ background:var(--success-100); color:var(--success-700); }
.lmn-badge--warning{ background:var(--warning-100); color:var(--warning-700); }
.lmn-badge--danger{ background:var(--danger-100); color:var(--danger-700); }
.lmn-badge--info{ background:var(--info-100); color:var(--info-700); }

/* solid */
.lmn-badge--solid.lmn-badge--primary{ background:var(--pine-600); color:#fff; }
.lmn-badge--solid.lmn-badge--accent{ background:var(--clay-500); color:#fff; }
.lmn-badge--solid.lmn-badge--success{ background:var(--success-600); color:#fff; }

/* outline */
.lmn-badge--outline{ background:transparent; border-color:var(--border-strong); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-badge-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['lmn-badge', `lmn-badge--${tone}`, variant === 'solid' ? 'lmn-badge--solid' : '', variant === 'outline' ? 'lmn-badge--outline' : '', dot ? 'lmn-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject Button styles once per session. */
const CSS = `
.lmn-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  border:1px solid transparent; border-radius:var(--radius-pill);
  cursor:pointer; white-space:nowrap; text-decoration:none;
  transition:var(--transition-hover); user-select:none;
}
.lmn-btn:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lmn-btn[disabled]{ cursor:not-allowed; opacity:.5; box-shadow:none; }

/* sizes */
.lmn-btn--sm{ font-size:var(--text-sm); padding:.4rem .9rem; }
.lmn-btn--md{ font-size:var(--text-base); padding:.6rem 1.25rem; }
.lmn-btn--lg{ font-size:var(--text-md); padding:.8rem 1.6rem; }

/* primary */
.lmn-btn--primary{ background:var(--color-primary); color:var(--color-primary-on); }
.lmn-btn--primary:hover:not([disabled]){ background:var(--color-primary-hover); box-shadow:var(--shadow-pine); transform:translateY(-1px); }
.lmn-btn--primary:active:not([disabled]){ background:var(--color-primary-active); transform:translateY(0); box-shadow:var(--shadow-xs); }

/* accent */
.lmn-btn--accent{ background:var(--color-accent); color:var(--color-accent-on); }
.lmn-btn--accent:hover:not([disabled]){ background:var(--color-accent-hover); transform:translateY(-1px); box-shadow:var(--shadow-md); }
.lmn-btn--accent:active:not([disabled]){ transform:translateY(0); }

/* secondary (outline) */
.lmn-btn--secondary{ background:var(--surface-card); color:var(--text-strong); border-color:var(--border-strong); }
.lmn-btn--secondary:hover:not([disabled]){ background:var(--surface-sunken); border-color:var(--pine-300); }
.lmn-btn--secondary:active:not([disabled]){ background:var(--surface-raised); }

/* ghost */
.lmn-btn--ghost{ background:transparent; color:var(--color-primary); }
.lmn-btn--ghost:hover:not([disabled]){ background:var(--color-primary-soft); }

.lmn-btn--block{ width:100%; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-btn-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['lmn-btn', `lmn-btn--${variant}`, `lmn-btn--${size}`, block ? 'lmn-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-card{
  background:var(--surface-card);
  border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-sm);
  overflow:hidden;
}
.lmn-card--flat{ box-shadow:none; }
.lmn-card--raised{ box-shadow:var(--shadow-md); }
.lmn-card--pad-sm{ padding:var(--space-4); }
.lmn-card--pad-md{ padding:var(--space-5); }
.lmn-card--pad-lg{ padding:var(--space-6); }
.lmn-card--interactive{ cursor:pointer; transition:var(--transition-hover); }
.lmn-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--pine-200); }
.lmn-card--interactive:active{ transform:translateY(-1px); box-shadow:var(--shadow-md); }
.lmn-card:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-card-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  pad = 'none',
  elevation = 'sm',
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['lmn-card', elevation === 'flat' ? 'lmn-card--flat' : '', elevation === 'raised' ? 'lmn-card--raised' : '', pad !== 'none' ? `lmn-card--pad-${pad}` : '', interactive ? 'lmn-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  color:var(--text-body); background:var(--surface-sunken);
  border:1px solid var(--border-subtle); border-radius:var(--radius-pill);
  padding:.32em .8em; line-height:1.2; white-space:nowrap;
  transition:var(--transition-base);
}
button.lmn-tag, a.lmn-tag{ cursor:pointer; }
button.lmn-tag:hover, a.lmn-tag:hover{ background:var(--pine-50); border-color:var(--pine-200); color:var(--pine-700); text-decoration:none; }
.lmn-tag--active{ background:var(--pine-600); border-color:var(--pine-600); color:#fff; }
.lmn-tag--active:hover{ background:var(--pine-700) !important; border-color:var(--pine-700) !important; color:#fff !important; }
.lmn-tag__x{ display:inline-flex; margin-right:-.15em; opacity:.6; font-size:1.1em; line-height:1; }
.lmn-tag__x:hover{ opacity:1; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tag-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  active = false,
  onRemove,
  interactive,
  as,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (interactive || rest.onClick ? 'button' : 'span');
  const cls = ['lmn-tag', active ? 'lmn-tag--active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "lmn-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/discovery/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CEWA tool-approval status. The single source of truth for status meaning. */
const STATUS = {
  approved: {
    label: 'CEWA Approved',
    tip: 'Reviewed and approved for use in CEWA schools.'
  },
  pilot: {
    label: 'Pilot',
    tip: 'Approved for classroom pilots with teacher guidance.'
  },
  review: {
    label: 'Under Review',
    tip: 'Currently being evaluated by the CEWA AI team.'
  },
  restricted: {
    label: 'Not Approved',
    tip: 'Not approved for student-facing use at this time.'
  },
  unreviewed: {
    label: 'Not Yet Reviewed',
    tip: 'No CEWA assessment yet — apply professional judgement.'
  }
};
const CSS = `
.lmn-status{ position:relative; display:inline-flex; }
.lmn-status__pill{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  font-size:var(--text-xs); line-height:1; white-space:nowrap;
  padding:.42em .7em .42em .6em; border-radius:var(--radius-pill);
  border:1px solid transparent; cursor:default;
}
.lmn-status__dot{ width:.55em; height:.55em; border-radius:50%; flex:none; }
.lmn-status--approved .lmn-status__pill{ background:var(--status-approved-bg); color:var(--status-approved-fg); }
.lmn-status--approved .lmn-status__dot{ background:var(--status-approved-dot); }
.lmn-status--pilot .lmn-status__pill{ background:var(--status-pilot-bg); color:var(--status-pilot-fg); }
.lmn-status--pilot .lmn-status__dot{ background:var(--status-pilot-dot); }
.lmn-status--review .lmn-status__pill{ background:var(--status-review-bg); color:var(--status-review-fg); }
.lmn-status--review .lmn-status__dot{ background:var(--status-review-dot); }
.lmn-status--restricted .lmn-status__pill{ background:var(--status-restricted-bg); color:var(--status-restricted-fg); }
.lmn-status--restricted .lmn-status__dot{ background:var(--status-restricted-dot); }
.lmn-status--unreviewed .lmn-status__pill{ background:var(--status-unreviewed-bg); color:var(--status-unreviewed-fg); }
.lmn-status--unreviewed .lmn-status__dot{ background:var(--status-unreviewed-dot); }

.lmn-status__tip{
  position:absolute; bottom:calc(100% + 9px); left:50%; transform:translateX(-50%) translateY(4px);
  width:max-content; max-width:230px; z-index:30;
  background:var(--pine-800); color:#fff; text-align:left;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-regular);
  line-height:1.45; padding:.6em .75em; border-radius:var(--radius-sm);
  box-shadow:var(--shadow-lg);
  opacity:0; pointer-events:none; transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.lmn-status__tip strong{ display:block; font-weight:var(--weight-semibold); margin-bottom:2px; }
.lmn-status__tip::after{ content:""; position:absolute; top:100%; left:50%; transform:translateX(-50%);
  border:5px solid transparent; border-top-color:var(--pine-800); }
.lmn-status:hover .lmn-status__tip, .lmn-status:focus-within .lmn-status__tip{ opacity:1; transform:translateX(-50%) translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-status-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-status-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function StatusBadge({
  status = 'unreviewed',
  showTip = true,
  className = '',
  ...rest
}) {
  const cfg = STATUS[status] || STATUS.unreviewed;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['lmn-status', `lmn-status--${status}`, className].filter(Boolean).join(' '),
    tabIndex: showTip ? 0 : undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lmn-status__pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lmn-status__dot"
  }), cfg.label), showTip && /*#__PURE__*/React.createElement("span", {
    className: "lmn-status__tip",
    role: "tooltip"
  }, /*#__PURE__*/React.createElement("strong", null, cfg.label), cfg.tip));
}
Object.assign(__ds_scope, { STATUS, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/discovery/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/discovery/ToolCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-tool{
  position:relative; display:flex; flex-direction:column; gap:var(--space-4);
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);
  padding:var(--space-5); transition:var(--transition-hover);
  height:100%;
}
.lmn-tool--interactive{ cursor:pointer; }
.lmn-tool--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--pine-200); }
.lmn-tool--featured{ border-color:var(--ochre-200); box-shadow:0 0 0 1px var(--ochre-200), var(--shadow-sm); }

.lmn-tool__head{ display:flex; align-items:flex-start; gap:var(--space-3); }
.lmn-tool__logo{
  width:48px; height:48px; flex:none; border-radius:var(--radius-md);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:22px;
  color:var(--pine-700); background:var(--pine-50); border:1px solid var(--pine-100);
  overflow:hidden;
}
.lmn-tool__logo img{ width:100%; height:100%; object-fit:cover; }
.lmn-tool__titles{ flex:1; min-width:0; }
.lmn-tool__name{
  font-family:var(--font-display); font-weight:var(--weight-semibold);
  font-size:var(--text-lg); line-height:1.15; color:var(--text-strong);
  display:flex; align-items:center; gap:.5em; flex-wrap:wrap;
}
.lmn-tool__vendor{ font-size:var(--text-xs); color:var(--text-muted); margin-top:3px; font-family:var(--font-mono); letter-spacing:.04em; }
.lmn-tool__desc{ font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-relaxed); margin:0; }

.lmn-tool__meta{ display:flex; flex-direction:column; gap:var(--space-3); margin-top:auto; }
.lmn-tool__roles{ display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
.lmn-tool__roleslabel{ font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--text-faint); }
.lmn-tool__role{
  font-size:var(--text-xs); font-weight:var(--weight-medium); color:var(--pine-700);
  background:var(--pine-50); border-radius:var(--radius-sm); padding:.2em .5em;
}
.lmn-tool__tags{ display:flex; flex-wrap:wrap; gap:6px; }
.lmn-tool__foot{
  display:flex; align-items:center; justify-content:space-between;
  border-top:1px solid var(--border-subtle); padding-top:var(--space-3); margin-top:2px;
}
.lmn-tool__more{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:var(--color-primary); display:inline-flex; align-items:center; gap:.3em;
  opacity:.55; transition:opacity var(--dur-base), transform var(--dur-base);
}
.lmn-tool--interactive:hover .lmn-tool__more{ opacity:1; transform:translateX(2px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tool-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-tool-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ToolCard({
  name,
  vendor,
  description,
  logo,
  status = 'unreviewed',
  roles = [],
  tags = [],
  featured = false,
  popular = false,
  interactive = true,
  showFooter = true,
  className = '',
  ...rest
}) {
  const cls = ['lmn-tool', interactive ? 'lmn-tool--interactive' : '', featured ? 'lmn-tool--featured' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("article", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__logo"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: ""
  }) : name ? name.trim()[0] : '·'), /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__titles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__name"
  }, name, featured && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ochre",
    dot: true
  }, "Featured"), popular && !featured && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "primary"
  }, "Popular")), vendor && /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__vendor"
  }, vendor)), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), description && /*#__PURE__*/React.createElement("p", {
    className: "lmn-tool__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__meta"
  }, roles.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__roles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lmn-tool__roleslabel"
  }, "Suits"), roles.map(r => /*#__PURE__*/React.createElement("span", {
    className: "lmn-tool__role",
    key: r
  }, r))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), showFooter && /*#__PURE__*/React.createElement("div", {
    className: "lmn-tool__foot"
  }, popular && featured ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "primary"
  }, "Popular") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "lmn-tool__more"
  }, "View details \u2192"))));
}
Object.assign(__ds_scope, { ToolCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/discovery/ToolCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-alert{
  display:flex; gap:.75em; align-items:flex-start;
  border-radius:var(--radius-md); padding:var(--space-4);
  border:1px solid transparent; font-family:var(--font-sans);
}
.lmn-alert__icon{ flex:none; margin-top:1px; display:inline-flex; }
.lmn-alert__body{ flex:1; min-width:0; }
.lmn-alert__title{ font-weight:var(--weight-semibold); color:var(--text-strong); font-size:var(--text-sm); margin-bottom:2px; }
.lmn-alert__msg{ font-size:var(--text-sm); color:var(--text-body); line-height:var(--leading-normal); }
.lmn-alert__close{ flex:none; background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:18px; line-height:1; padding:2px; border-radius:4px; }
.lmn-alert__close:hover{ color:var(--text-strong); background:rgba(40,32,20,.06); }

.lmn-alert--info{ background:var(--info-100); border-color:color-mix(in srgb, var(--info-600) 22%, transparent); }
.lmn-alert--info .lmn-alert__icon{ color:var(--info-700); }
.lmn-alert--success{ background:var(--success-100); border-color:color-mix(in srgb, var(--success-600) 22%, transparent); }
.lmn-alert--success .lmn-alert__icon{ color:var(--success-700); }
.lmn-alert--warning{ background:var(--warning-100); border-color:color-mix(in srgb, var(--warning-600) 26%, transparent); }
.lmn-alert--warning .lmn-alert__icon{ color:var(--warning-700); }
.lmn-alert--danger{ background:var(--danger-100); border-color:color-mix(in srgb, var(--danger-600) 24%, transparent); }
.lmn-alert--danger .lmn-alert__icon{ color:var(--danger-700); }
.lmn-alert--pine{ background:var(--pine-50); border-color:var(--pine-200); }
.lmn-alert--pine .lmn-alert__icon{ color:var(--pine-600); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-alert-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-alert-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v4h1M12 2a10 10 0 100 20 10 10 0 000-20z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
  }),
  pine: /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v4h1M12 2a10 10 0 100 20 10 10 0 000-20z"
  })
};
function Alert({
  tone = 'info',
  title,
  onClose,
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: ['lmn-alert', `lmn-alert--${tone}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lmn-alert__icon"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone] || ICONS.info)), /*#__PURE__*/React.createElement("div", {
    className: "lmn-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "lmn-alert__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "lmn-alert__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "lmn-alert__close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-tip{ position:relative; display:inline-flex; }
.lmn-tip__pop{
  position:absolute; z-index:40; width:max-content; max-width:240px;
  background:var(--pine-800); color:#fff;
  font-family:var(--font-sans); font-size:var(--text-xs); line-height:1.45; text-align:left;
  padding:.55em .7em; border-radius:var(--radius-sm); box-shadow:var(--shadow-lg);
  opacity:0; pointer-events:none; transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.lmn-tip__pop::after{ content:""; position:absolute; border:5px solid transparent; }
/* top (default) */
.lmn-tip--top .lmn-tip__pop{ bottom:calc(100% + 8px); left:50%; transform:translateX(-50%) translateY(4px); }
.lmn-tip--top .lmn-tip__pop::after{ top:100%; left:50%; transform:translateX(-50%); border-top-color:var(--pine-800); }
.lmn-tip--bottom .lmn-tip__pop{ top:calc(100% + 8px); left:50%; transform:translateX(-50%) translateY(-4px); }
.lmn-tip--bottom .lmn-tip__pop::after{ bottom:100%; left:50%; transform:translateX(-50%); border-bottom-color:var(--pine-800); }
.lmn-tip:hover .lmn-tip__pop, .lmn-tip:focus-within .lmn-tip__pop{ opacity:1; transform:translateX(-50%) translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tip-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  content,
  placement = 'top',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['lmn-tip', `lmn-tip--${placement}`, className].filter(Boolean).join(' '),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "lmn-tip__pop",
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-check{ display:inline-flex; align-items:center; gap:.6em; cursor:pointer; font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body); user-select:none; }
.lmn-check input{ position:absolute; opacity:0; width:0; height:0; }
.lmn-check__box{
  width:20px; height:20px; flex:none; border-radius:6px;
  border:1.5px solid var(--border-strong); background:var(--surface-card);
  display:inline-flex; align-items:center; justify-content:center;
  transition:var(--transition-base); color:#fff;
}
.lmn-check__box svg{ width:13px; height:13px; opacity:0; transform:scale(.6); transition:var(--transition-base); }
.lmn-check:hover .lmn-check__box{ border-color:var(--pine-400); }
.lmn-check input:checked + .lmn-check__box{ background:var(--pine-600); border-color:var(--pine-600); }
.lmn-check input:checked + .lmn-check__box svg{ opacity:1; transform:scale(1); }
.lmn-check input:focus-visible + .lmn-check__box{ box-shadow:var(--ring-focus); }
.lmn-check__count{ margin-left:auto; color:var(--text-faint); font-family:var(--font-mono); font-size:var(--text-xs); }
.lmn-check--round .lmn-check__box{ border-radius:50%; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-check-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  count,
  round = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['lmn-check', round ? 'lmn-check--round' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lmn-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.5 3.5L13 4.5",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label), count != null && /*#__PURE__*/React.createElement("span", {
    className: "lmn-check__count"
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-field{ display:flex; flex-direction:column; gap:6px; }
.lmn-field__label{ font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.lmn-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.lmn-field__err{ font-size:var(--text-xs); color:var(--danger-700); }

.lmn-input{
  display:flex; align-items:center; gap:.55em;
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); padding:0 .85em; height:44px;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.lmn-input:hover{ border-color:var(--pine-300); }
.lmn-input:focus-within{ border-color:var(--border-focus); box-shadow:var(--ring-focus); }
.lmn-input--invalid{ border-color:var(--danger-600); }
.lmn-input--invalid:focus-within{ box-shadow:var(--ring-danger); }
.lmn-input--pill{ border-radius:var(--radius-pill); }
.lmn-input--sm{ height:36px; font-size:var(--text-sm); }
.lmn-input input{
  flex:1; min-width:0; border:none; outline:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-strong);
}
.lmn-input input::placeholder{ color:var(--text-faint); }
.lmn-input__icon{ display:inline-flex; color:var(--text-muted); flex:none; }
.lmn-input[disabled], .lmn-input--disabled{ background:var(--surface-sunken); opacity:.65; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-input-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  icon,
  trailing,
  pill = false,
  size = 'md',
  disabled = false,
  className = '',
  id,
  ...rest
}) {
  const inputId = id || (label ? `lmn-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['lmn-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lmn-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: ['lmn-input', pill ? 'lmn-input--pill' : '', size === 'sm' ? 'lmn-input--sm' : '', error ? 'lmn-input--invalid' : '', disabled ? 'lmn-input--disabled' : ''].filter(Boolean).join(' ')
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "lmn-input__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    className: "lmn-input__icon"
  }, trailing)), error ? /*#__PURE__*/React.createElement("span", {
    className: "lmn-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "lmn-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-select{ display:flex; flex-direction:column; gap:6px; }
.lmn-select__label{ font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.lmn-select__wrap{ position:relative; display:flex; }
.lmn-select select{
  appearance:none; -webkit-appearance:none; width:100%;
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); height:44px; padding:0 2.4em 0 .85em;
  cursor:pointer; transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.lmn-select select:hover{ border-color:var(--pine-300); }
.lmn-select select:focus-visible{ outline:none; border-color:var(--border-focus); box-shadow:var(--ring-focus); }
.lmn-select--pill select{ border-radius:var(--radius-pill); padding-left:1.1em; }
.lmn-select--sm select{ height:36px; font-size:var(--text-sm); }
.lmn-select__chev{
  position:absolute; right:.85em; top:50%; transform:translateY(-50%);
  pointer-events:none; color:var(--text-muted); font-size:.7em;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-select-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  pill = false,
  size = 'md',
  className = '',
  id,
  children,
  ...rest
}) {
  const selId = id || (label ? `lmn-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['lmn-select', pill ? 'lmn-select--pill' : '', size === 'sm' ? 'lmn-select--sm' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lmn-select__label",
    htmlFor: selId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "lmn-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId
  }, rest), children || options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    className: "lmn-select__chev",
    "aria-hidden": "true"
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-nav{
  display:flex; align-items:center; gap:var(--space-5);
  height:64px; padding:0 var(--space-5);
  background:color-mix(in srgb, var(--surface-page) 86%, transparent);
  backdrop-filter:saturate(1.4) blur(10px); -webkit-backdrop-filter:saturate(1.4) blur(10px);
  border-bottom:1px solid var(--border-subtle);
}
.lmn-nav__brand{ display:inline-flex; align-items:center; gap:.55em; text-decoration:none; flex:none; }
.lmn-nav__brand:hover{ text-decoration:none; }
.lmn-nav__word{ font-family:var(--font-display); font-weight:var(--weight-semibold); font-size:1.45rem; color:var(--text-strong); letter-spacing:-.01em; }
.lmn-nav__links{ display:flex; align-items:center; gap:2px; margin-left:var(--space-3); }
.lmn-nav__link{
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  color:var(--text-body); padding:.5em .8em; border-radius:var(--radius-sm);
  text-decoration:none; transition:var(--transition-base);
}
.lmn-nav__link:hover{ background:var(--surface-raised); color:var(--text-strong); text-decoration:none; }
.lmn-nav__link--active{ color:var(--pine-700); background:var(--pine-50); font-weight:var(--weight-semibold); }
.lmn-nav__spacer{ flex:1; }
.lmn-nav__right{ display:flex; align-items:center; gap:var(--space-3); flex:none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-nav-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-nav-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Self-contained Lumen halo mark. */
function LumenMark({
  size = 30
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: "30",
    stroke: "var(--pine-600)",
    strokeWidth: "7",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "135 53",
    transform: "rotate(-58 48 48)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: "10.5",
    fill: "var(--clay-500)"
  }));
}
function Navbar({
  links = [],
  right,
  brandHref = '#',
  wordmark = 'Lumen',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['lmn-nav', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "lmn-nav__brand",
    href: brandHref
  }, /*#__PURE__*/React.createElement(LumenMark, null), /*#__PURE__*/React.createElement("span", {
    className: "lmn-nav__word"
  }, wordmark)), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lmn-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: l.onClick,
    className: ['lmn-nav__link', l.active ? 'lmn-nav__link--active' : ''].filter(Boolean).join(' ')
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    className: "lmn-nav__spacer"
  }), right && /*#__PURE__*/React.createElement("div", {
    className: "lmn-nav__right"
  }, right));
}
Object.assign(__ds_scope, { LumenMark, Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.lmn-tabs{ display:flex; gap:4px; border-bottom:1px solid var(--border-subtle); }
.lmn-tabs__tab{
  position:relative; font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  color:var(--text-muted); background:none; border:none; cursor:pointer;
  padding:.7em .9em; border-radius:var(--radius-sm) var(--radius-sm) 0 0;
  transition:color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.lmn-tabs__tab:hover{ color:var(--text-strong); background:var(--surface-sunken); }
.lmn-tabs__tab--active{ color:var(--pine-700); }
.lmn-tabs__tab--active::after{
  content:""; position:absolute; left:.9em; right:.9em; bottom:-1px; height:2.5px;
  background:var(--pine-600); border-radius:2px;
}
.lmn-tabs__count{ font-family:var(--font-mono); font-size:11px; color:var(--text-faint); margin-left:.45em; }
.lmn-tabs--pill{ border:none; gap:6px; }
.lmn-tabs--pill .lmn-tabs__tab{ border-radius:var(--radius-pill); padding:.5em 1em; }
.lmn-tabs--pill .lmn-tabs__tab--active{ background:var(--pine-600); color:#fff; }
.lmn-tabs--pill .lmn-tabs__tab--active::after{ display:none; }
.lmn-tabs--pill .lmn-tabs__tab--active .lmn-tabs__count{ color:rgba(255,255,255,.7); }
`;
if (typeof document !== 'undefined' && !document.getElementById('lmn-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'lmn-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['lmn-tabs', variant === 'pill' ? 'lmn-tabs--pill' : '', className].filter(Boolean).join(' ')
  }, rest), items.map(it => {
    const val = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? undefined : it.count;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": active,
      className: ['lmn-tabs__tab', active ? 'lmn-tabs__tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(val)
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      className: "lmn-tabs__count"
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumen/Directory.jsx
try { (() => {
/* Lumen UI kit — AI Tools Directory. window.Directory */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;
  function toolProps(t, onOpenTool) {
    return {
      key: t.id,
      name: t.name,
      vendor: t.vendor,
      description: t.desc,
      status: t.status,
      featured: t.featured,
      popular: t.popular,
      roles: t.roles,
      tags: t.tags.slice(0, 3),
      onClick: () => onOpenTool(t.id)
    };
  }
  window.Directory = function Directory({
    onOpenTool
  }) {
    const DS = window.LumenDesignSystem_e93e62;
    const {
      ToolCard,
      Input,
      Select,
      Checkbox,
      Tabs,
      Tag,
      Button
    } = DS;
    const data = window.LUMEN_DATA;
    const [tab, setTab] = React.useState('featured');
    const [query, setQuery] = React.useState('');
    const [sort, setSort] = React.useState('Most popular');
    const [statuses, setStatuses] = React.useState({});
    const [subject, setSubject] = React.useState('All subjects');
    const toggleStatus = k => setStatuses(s => ({
      ...s,
      [k]: !s[k]
    }));
    const activeStatuses = Object.keys(statuses).filter(k => statuses[k]);
    let list = data.tools.filter(t => {
      if (query && !(t.name + ' ' + t.desc + ' ' + t.tags.join(' ')).toLowerCase().includes(query.toLowerCase())) return false;
      if (activeStatuses.length && !activeStatuses.includes(t.status)) return false;
      if (subject !== 'All subjects' && t.subject !== subject && t.subject !== 'All subjects') return false;
      return true;
    });
    const rank = {
      approved: 0,
      pilot: 1,
      review: 2,
      restricted: 3
    };
    if (sort === 'A–Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name));else if (sort === 'By status') list = [...list].sort((a, b) => rank[a.status] - rank[b.status]);else list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    const featured = data.tools.filter(t => t.featured);
    const popular = data.tools.filter(t => !t.featured);
    const statusCount = k => data.tools.filter(t => t.status === k).length;
    return h('div', {
      className: 'kit-page'
    }, h('div', {
      className: 'kit-container'
    }, /* header */
    h('div', {
      className: 'dir-head'
    }, h('div', {
      className: 'section-eyebrow'
    }, 'AI Tools Directory'), h('div', {
      className: 'section-title',
      style: {
        fontSize: 'var(--text-3xl)'
      }
    }, 'Find a tool you can trust'), h('div', {
      className: 'section-sub',
      style: {
        fontSize: 'var(--text-md)'
      }
    }, 'Every tool carries a CEWA approval status, the teacher roles it suits, and what it\u2019s good for. Browse the warm picks, or filter the full catalogue.'), h('div', {
      className: 'dir-toolbar'
    }, h('div', {
      className: 'grow'
    }, h(Input, {
      pill: true,
      placeholder: 'Search tools, e.g. \u201cfeedback\u201d or \u201clesson planning\u201d',
      icon: h(I.Search, {
        width: 18,
        height: 18
      }),
      value: query,
      onChange: e => {
        setQuery(e.target.value);
        if (e.target.value && tab !== 'browse') setTab('browse');
      }
    })), h(Select, {
      pill: true,
      options: ['Most popular', 'By status', 'A\u2013Z'],
      value: sort,
      onChange: e => setSort(e.target.value),
      style: {
        minWidth: 160
      }
    })), h('div', {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, h(Tabs, {
      variant: 'pill',
      value: tab,
      onChange: setTab,
      items: [{
        value: 'featured',
        label: 'Featured'
      }, {
        value: 'browse',
        label: 'Browse all',
        count: data.tools.length
      }]
    }))), /* FEATURED view */
    tab === 'featured' && h('div', {
      style: {
        paddingBottom: 'var(--space-9)'
      }
    }, h('section', {
      className: 'section',
      style: {
        paddingTop: 'var(--space-5)'
      }
    }, h('div', {
      className: 'section-head'
    }, h('div', null, h('div', {
      className: 'section-eyebrow'
    }, h('span', {
      style: {
        color: 'var(--ochre-600)'
      }
    }, '\u2726 Featured')), h('div', {
      className: 'section-title'
    }, 'Editors\u2019 picks'))), h('div', {
      className: 'rail'
    }, featured.map(t => h(ToolCard, toolProps(t, onOpenTool))))), h('section', {
      className: 'section',
      style: {
        paddingTop: 0
      }
    }, h('div', {
      className: 'section-head'
    }, h('div', null, h('div', {
      className: 'section-title',
      style: {
        fontSize: 'var(--text-xl)'
      }
    }, 'More in the directory')), h('a', {
      className: 'section-link',
      href: '#',
      onClick: e => {
        e.preventDefault();
        setTab('browse');
      }
    }, 'See all ', data.tools.length, ' tools ', h(I.ArrowRight, {
      width: 16,
      height: 16
    }))), h('div', {
      className: 'tools-grid'
    }, popular.map(t => h(ToolCard, toolProps(t, onOpenTool)))))), /* BROWSE view */
    tab === 'browse' && h('div', {
      className: 'dir-layout'
    }, /* sidebar */
    h('aside', {
      className: 'dir-sidebar'
    }, h('div', {
      className: 'filter-card'
    }, h('div', {
      className: 'filter-group'
    }, h('div', {
      className: 'filter-title'
    }, 'CEWA status'), h('div', {
      className: 'filter-list'
    }, data.statusFilters.map(s => h(Checkbox, {
      key: s.key,
      label: s.label,
      count: statusCount(s.key),
      checked: !!statuses[s.key],
      onChange: () => toggleStatus(s.key)
    })))), h('div', {
      className: 'filter-group'
    }, h('div', {
      className: 'filter-title'
    }, 'Subject'), h(Select, {
      options: data.subjects,
      value: subject,
      onChange: e => setSubject(e.target.value),
      size: 'sm'
    })), h('div', {
      className: 'filter-group'
    }, h('div', {
      className: 'filter-title'
    }, 'Use case'), h('div', {
      className: 'chip-wrap'
    }, data.categories.slice(0, 6).map(c => h(Tag, {
      key: c,
      interactive: true,
      onClick: () => setQuery(c)
    }, c)))))), /* main */
    h('div', {
      className: 'dir-main'
    }, h('div', {
      className: 'dir-result-meta'
    }, h('div', {
      className: 'dir-count'
    }, h('b', null, list.length), ' tool', list.length === 1 ? '' : 's', activeStatuses.length || subject !== 'All subjects' || query ? ' match your filters' : ' in the catalogue'), (activeStatuses.length || subject !== 'All subjects' || query) && h(Button, {
      variant: 'ghost',
      size: 'sm',
      onClick: () => {
        setStatuses({});
        setSubject('All subjects');
        setQuery('');
      }
    }, 'Clear all')), list.length === 0 ? h('div', {
      className: 'dir-empty'
    }, h('div', {
      style: {
        fontSize: 'var(--text-lg)',
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-display)',
        marginBottom: 6
      }
    }, 'No tools match those filters yet'), 'Try widening your search or clearing a filter.') : h('div', {
      className: 'tools-grid'
    }, list.map(t => h(ToolCard, toolProps(t, onOpenTool))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumen/Directory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumen/Home.jsx
try { (() => {
/* Lumen UI kit — Home screen. window.Home */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;
  const TRACK_ICONS = {
    '01': 'BookOpen',
    '02': 'Sparkles',
    '03': 'Scale',
    '04': 'Shield',
    '05': 'GraduationCap'
  };
  function TrackCard({
    t,
    onOpen
  }) {
    const Icon = I[TRACK_ICONS[t.n]] || I.BookOpen;
    return h('a', {
      className: 'track-card',
      href: '#',
      onClick: e => {
        e.preventDefault();
        onOpen();
      }
    }, h('div', {
      className: 'track-top'
    }, h('span', {
      className: 'track-n'
    }, t.n), h('span', {
      className: 'track-icon ' + t.tone
    }, h(Icon, {
      width: 20,
      height: 20
    }))), h('div', {
      className: 'track-title'
    }, t.title), h('div', {
      className: 'track-desc'
    }, t.desc), h('div', {
      className: 'track-meta'
    }, h('span', null, t.lessons + ' lessons'), h('span', null, '·'), h('span', null, t.mins + ' min'), h('span', {
      className: 'more'
    }, h(I.ArrowRight, {
      width: 16,
      height: 16
    }))));
  }
  window.Home = function Home({
    onBrowse,
    onOpenTool,
    onOpenTrack
  }) {
    const DS = window.LumenDesignSystem_e93e62;
    const {
      Button,
      ToolCard
    } = DS;
    const data = window.LUMEN_DATA;
    const featured = data.tools.filter(t => t.featured || t.popular).slice(0, 4);
    return h('div', {
      className: 'kit-page'
    }, /* hero */
    h('section', {
      className: 'home-hero'
    }, h('div', {
      className: 'hero-inner'
    }, h('div', {
      className: 'hero-eyebrow'
    }, 'A CEWA professional learning platform'), h('h1', {
      className: 'hero-h1'
    }, 'Bringing ', h('em', null, 'light'), ' to AI in the classroom.'), h('p', {
      className: 'hero-sub'
    }, 'Calm, practical guidance for Catholic educators — short learning tracks and a directory of AI tools, each with a clear CEWA approval status.'), h('div', {
      className: 'hero-actions'
    }, h('div', {
      className: 'hero-search'
    }, h(DS.Input, {
      pill: true,
      placeholder: 'Search 140+ AI tools…',
      icon: h(I.Search, {
        width: 18,
        height: 18
      }),
      onFocus: onBrowse,
      readOnly: true,
      style: {
        cursor: 'pointer'
      }
    })), h(Button, {
      variant: 'accent',
      size: 'lg',
      onClick: onBrowse
    }, 'Browse AI tools ', h(I.ArrowRight, {
      width: 18,
      height: 18,
      style: {
        marginLeft: 4
      }
    }))), h('div', {
      className: 'hero-meta'
    }, h('span', null, h('b', null, '142'), ' tools reviewed'), h('span', null, h('b', null, '5'), ' learning tracks'), h('span', null, 'Updated quarterly by the CEWA AI team')))), h('div', {
      className: 'kit-container'
    }, /* learning tracks */
    h('section', {
      className: 'section'
    }, h('div', {
      className: 'section-head'
    }, h('div', null, h('div', {
      className: 'section-eyebrow'
    }, 'Learn at your pace'), h('div', {
      className: 'section-title'
    }, 'Start a learning track'), h('div', {
      className: 'section-sub'
    }, 'Five short, self-paced paths — from the basics to ethics, safety and assessment.'))), h('div', {
      className: 'tracks-grid'
    }, data.tracks.map(t => h(TrackCard, {
      key: t.n,
      t,
      onOpen: () => onOpenTrack(t)
    })))), /* featured tools */
    h('section', {
      className: 'section',
      style: {
        paddingTop: 0
      }
    }, h('div', {
      className: 'section-head'
    }, h('div', null, h('div', {
      className: 'section-eyebrow'
    }, 'From the directory'), h('div', {
      className: 'section-title'
    }, 'Popular with teachers'), h('div', {
      className: 'section-sub'
    }, 'A warm starting point — tools colleagues are reaching for right now.')), h('a', {
      className: 'section-link',
      href: '#',
      onClick: e => {
        e.preventDefault();
        onBrowse();
      }
    }, 'Browse all tools ', h(I.ArrowRight, {
      width: 16,
      height: 16
    }))), h('div', {
      className: 'tools-grid'
    }, featured.map(t => h(ToolCard, {
      key: t.id,
      name: t.name,
      vendor: t.vendor,
      description: t.desc,
      status: t.status,
      featured: t.featured,
      popular: t.popular,
      roles: t.roles,
      tags: t.tags.slice(0, 3),
      onClick: () => onOpenTool(t.id)
    }))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumen/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumen/ToolDetail.jsx
try { (() => {
/* Lumen UI kit — single Tool detail. window.ToolDetail */
(function () {
  const React = window.React;
  const h = React.createElement;
  const I = window.LucideIcon;
  const STATUS_ALERT = {
    approved: {
      tone: 'success',
      title: 'Approved for CEWA schools'
    },
    pilot: {
      tone: 'info',
      title: 'Approved for a guided pilot'
    },
    review: {
      tone: 'warning',
      title: 'Currently under review'
    },
    restricted: {
      tone: 'danger',
      title: 'Not approved for student-facing use'
    },
    unreviewed: {
      tone: 'pine',
      title: 'Not yet reviewed'
    }
  };
  window.ToolDetail = function ToolDetail({
    toolId,
    onBack,
    onOpenTool
  }) {
    const DS = window.LumenDesignSystem_e93e62;
    const {
      StatusBadge,
      Tooltip,
      Button,
      Tag,
      Alert,
      Badge
    } = DS;
    const data = window.LUMEN_DATA;
    const t = data.tools.find(x => x.id === toolId) || data.tools[0];
    const sa = STATUS_ALERT[t.status];
    const related = data.tools.filter(x => x.id !== t.id && x.subject === t.subject).slice(0, 3);
    return h('div', {
      className: 'kit-page'
    }, h('div', {
      className: 'kit-container detail-wrap'
    }, h('button', {
      className: 'back-link',
      onClick: onBack
    }, h(I.ArrowLeft, {
      width: 16,
      height: 16
    }), 'Back to directory'), h('div', {
      className: 'detail-grid'
    }, /* main column */
    h('div', null, h('div', {
      className: 'detail-header'
    }, h('div', {
      className: 'detail-logo'
    }, t.name.trim()[0]), h('div', {
      className: 'detail-titles'
    }, h('h1', null, t.name), h('div', {
      className: 'detail-vendor'
    }, t.vendor), h('div', {
      className: 'detail-status-row'
    }, h(StatusBadge, {
      status: t.status
    }), t.featured && h(Badge, {
      tone: 'ochre',
      dot: true
    }, 'Featured'), t.popular && !t.featured && h(Badge, {
      tone: 'primary'
    }, 'Popular')))), h(Alert, {
      tone: sa.tone,
      title: sa.title
    }, t.notes[0]), h('p', {
      className: 'detail-lead',
      style: {
        marginTop: 'var(--space-6)'
      }
    }, t.long), h('div', {
      className: 'detail-block'
    }, h('h3', null, 'Who it suits'), h('div', {
      className: 'roles-row'
    }, t.roles.map(r => h('span', {
      className: 'role-chip',
      key: r
    }, h(I.Users, {
      width: 13,
      height: 13
    }), r)))), h('div', {
      className: 'detail-block'
    }, h('h3', null, 'Use cases'), h('div', {
      className: 'roles-row'
    }, t.tags.map(tag => h(Tag, {
      key: tag
    }, tag)))), h('div', {
      className: 'detail-block'
    }, h('h3', null, 'Good to know'), h('ul', {
      className: 'notes-list'
    }, t.notes.map((n, i) => h('li', {
      key: i
    }, h(I.Check, {
      width: 16,
      height: 16
    }), n))))), /* aside */
    h('aside', {
      className: 'detail-aside'
    }, h('div', {
      className: 'aside-card'
    }, h('div', {
      className: 'aside-actions'
    }, h(Button, {
      variant: 'primary',
      block: true,
      as: 'a',
      href: 'https://' + t.vendor,
      target: '_blank',
      rel: 'noreferrer'
    }, 'Visit website ', h(I.ExternalLink, {
      width: 16,
      height: 16,
      style: {
        marginLeft: 4
      }
    })), h(Button, {
      variant: 'secondary',
      block: true
    }, h(I.Bookmark, {
      width: 16,
      height: 16,
      style: {
        marginRight: 6
      }
    }), 'Save to collection'))), h('div', {
      className: 'aside-card'
    }, h('h3', null, 'At a glance'), h('div', {
      className: 'aside-row'
    }, h('span', {
      className: 'k'
    }, 'Status'), h('span', {
      className: 'v'
    }, h(StatusBadge, {
      status: t.status,
      showTip: false
    }))), h('div', {
      className: 'aside-row'
    }, h('span', {
      className: 'k'
    }, 'Subject'), h('span', {
      className: 'v'
    }, t.subject)), h('div', {
      className: 'aside-row'
    }, h('span', {
      className: 'k'
    }, 'Category'), h('span', {
      className: 'v'
    }, t.category)), h('div', {
      className: 'aside-row'
    }, h('span', {
      className: 'k'
    }, 'Made by'), h('span', {
      className: 'v'
    }, t.vendor))), related.length > 0 && h('div', {
      className: 'aside-card'
    }, h('h3', null, 'Similar tools'), h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, related.map(r => h('a', {
      key: r.id,
      href: '#',
      onClick: e => {
        e.preventDefault();
        onOpenTool(r.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none'
      }
    }, h('span', {
      style: {
        width: 34,
        height: 34,
        flex: 'none',
        borderRadius: 9,
        background: 'var(--pine-50)',
        border: '1px solid var(--pine-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: 'var(--pine-700)'
      }
    }, r.name.trim()[0]), h('span', {
      style: {
        minWidth: 0
      }
    }, h('span', {
      style: {
        display: 'block',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, r.name), h('span', {
      style: {
        display: 'block',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, r.category))))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumen/ToolDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumen/data.js
try { (() => {
/* Lumen UI kit — sample content. Exposed as window.LUMEN_DATA. */
window.LUMEN_DATA = {
  tracks: [{
    n: '01',
    title: 'Foundations',
    lessons: 5,
    mins: 40,
    desc: 'What AI actually is, how it works, and the words you need to talk about it with confidence.',
    tone: 'pine'
  }, {
    n: '02',
    title: 'In the Classroom',
    lessons: 7,
    mins: 55,
    desc: 'Practical, classroom-ready ways to use AI for planning, resources and feedback.',
    tone: 'clay'
  }, {
    n: '03',
    title: 'Ethics & Discernment',
    lessons: 6,
    mins: 50,
    desc: 'A Catholic lens on dignity, discernment and the right use of technology.',
    tone: 'ochre'
  }, {
    n: '04',
    title: 'Safety & Privacy',
    lessons: 4,
    mins: 30,
    desc: 'Student data, safeguarding and the CEWA policies that keep everyone protected.',
    tone: 'pine'
  }, {
    n: '05',
    title: 'Assessment & Integrity',
    lessons: 5,
    mins: 45,
    desc: 'Rethinking assessment and academic integrity in a world with AI.',
    tone: 'clay'
  }],
  tools: [{
    id: 'magicschool',
    name: 'MagicSchool AI',
    vendor: 'magicschool.ai',
    status: 'approved',
    featured: true,
    popular: true,
    subject: 'All subjects',
    category: 'Planning',
    desc: 'Generate lesson plans, rubrics and differentiated resources in minutes.',
    long: 'MagicSchool brings 70+ teaching tools into one place — lesson and unit planning, rubric generation, text levelling, IEP support and more. Built for educators, with a student-safe "MagicStudent" mode and clear data controls.',
    roles: ['Classroom teacher', 'Curriculum lead'],
    tags: ['Lesson planning', 'Differentiation', 'Rubrics', 'IEP support'],
    notes: ['Student-data handling reviewed and approved for CEWA schools.', 'MagicStudent mode is age-gated and teacher-controlled.', 'Free for individual teachers; school plans available.']
  }, {
    id: 'brisk',
    name: 'Brisk Teaching',
    vendor: 'briskteaching.com',
    status: 'pilot',
    popular: true,
    subject: 'All subjects',
    category: 'Feedback',
    desc: 'A Chrome extension that gives feedback, levels texts and builds quizzes right where you work.',
    long: 'Brisk layers onto Google Docs, Slides and the web, so you can give targeted feedback, adjust reading levels and generate quizzes without leaving your workflow. Approved for a guided classroom pilot.',
    roles: ['Classroom teacher'],
    tags: ['Feedback', 'Reading levels', 'Quizzes', 'Google Workspace'],
    notes: ['Approved for guided pilots — confirm with your AI lead first.', 'Runs as a browser extension; review permissions on install.']
  }, {
    id: 'diffit',
    name: 'Diffit',
    vendor: 'diffit.me',
    status: 'approved',
    featured: true,
    subject: 'English',
    category: 'Differentiation',
    desc: 'Turn any topic, text or video into ready-to-use, level-adapted resources.',
    long: 'Diffit takes a topic, article or YouTube link and produces a reading passage at the level you choose, plus vocabulary, questions and activities — a fast on-ramp to differentiation.',
    roles: ['Classroom teacher', 'Support teacher'],
    tags: ['Differentiation', 'Reading', 'Comprehension'],
    notes: ['Approved for use across CEWA schools.', 'Always review generated passages for accuracy and tone.']
  }, {
    id: 'curipod',
    name: 'Curipod',
    vendor: 'curipod.com',
    status: 'approved',
    subject: 'All subjects',
    category: 'Engagement',
    desc: 'Build interactive lessons with polls, word clouds and open responses in one click.',
    long: 'Curipod generates interactive, discussion-rich lessons from a prompt, with live polls, drawings and open-ended responses to keep students thinking.',
    roles: ['Classroom teacher'],
    tags: ['Interactive lessons', 'Engagement', 'Formative'],
    notes: ['Approved for classroom use.', 'Student responses can be anonymous.']
  }, {
    id: 'khanmigo',
    name: 'Khanmigo',
    vendor: 'khanacademy.org',
    status: 'review',
    subject: 'Mathematics',
    category: 'Tutoring',
    desc: 'An AI tutor and teaching assistant grounded in Khan Academy content.',
    long: 'Khanmigo acts as a Socratic tutor for students and a planning aide for teachers, anchored to Khan Academy\u2019s curriculum. Currently under CEWA review for student-facing use.',
    roles: ['Classroom teacher', 'Student-facing'],
    tags: ['Tutoring', 'Maths', 'Socratic'],
    notes: ['Under review — not yet cleared for student-facing use in CEWA schools.', 'Teacher-facing planning features can be explored.']
  }, {
    id: 'twee',
    name: 'Twee',
    vendor: 'twee.com',
    status: 'approved',
    subject: 'English',
    category: 'Planning',
    desc: 'AI tools made for English teachers — texts, questions, dialogues and more.',
    long: 'Twee specialises in English language teaching: generate reading and listening texts, comprehension questions, dialogues, and discussion prompts pitched to a chosen level.',
    roles: ['Classroom teacher'],
    tags: ['English', 'Reading', 'Speaking'],
    notes: ['Approved for use.', 'Best paired with your own texts for context.']
  }, {
    id: 'canva',
    name: 'Canva Magic Studio',
    vendor: 'canva.com',
    status: 'approved',
    popular: true,
    subject: 'The Arts',
    category: 'Design',
    desc: 'Design classroom visuals, worksheets and slides with AI assistance.',
    long: 'Magic Studio adds AI design, writing and image tools to Canva for Education, which CEWA schools already license. Strong guardrails are in place for school accounts.',
    roles: ['Classroom teacher', 'Leadership'],
    tags: ['Design', 'Worksheets', 'Slides', 'Visuals'],
    notes: ['Approved via the existing Canva for Education agreement.', 'AI image features are restricted on student accounts.']
  }, {
    id: 'eduaide',
    name: 'Eduaide.ai',
    vendor: 'eduaide.ai',
    status: 'pilot',
    subject: 'All subjects',
    category: 'Planning',
    desc: 'A planning assistant with 150+ resource types and a feedback bot.',
    long: 'Eduaide helps you draft a wide range of teaching resources and refine them in a workspace, with a feedback assistant for student work. Approved for a guided pilot.',
    roles: ['Classroom teacher', 'Curriculum lead'],
    tags: ['Lesson planning', 'Resources', 'Feedback'],
    notes: ['Pilot only — coordinate with your AI lead.']
  }, {
    id: 'quizizz',
    name: 'Quizizz AI',
    vendor: 'quizizz.com',
    status: 'approved',
    subject: 'All subjects',
    category: 'Assessment',
    desc: 'Generate quizzes and lessons, then run them live or as homework.',
    long: 'Quizizz AI drafts quizzes and lessons from your content or a topic, with accommodations and reports. Widely used and approved for CEWA classrooms.',
    roles: ['Classroom teacher'],
    tags: ['Quizzes', 'Formative', 'Homework'],
    notes: ['Approved for use.', 'Review AI-generated questions before assigning.']
  }, {
    id: 'notebooklm',
    name: 'NotebookLM',
    vendor: 'google.com',
    status: 'pilot',
    subject: 'HASS',
    category: 'Research',
    desc: 'Ground an AI assistant in your own documents for summaries and study guides.',
    long: 'NotebookLM keeps the AI anchored to sources you upload, producing summaries, study guides and audio overviews with citations — useful for staff research and senior students.',
    roles: ['Classroom teacher', 'Leadership'],
    tags: ['Research', 'Summarising', 'Citations'],
    notes: ['Pilot for staff and senior, supervised use.', 'Check document sensitivity before uploading.']
  }, {
    id: 'gamma',
    name: 'Gamma',
    vendor: 'gamma.app',
    status: 'review',
    subject: 'All subjects',
    category: 'Design',
    desc: 'Turn a prompt or outline into polished slide decks and docs.',
    long: 'Gamma generates presentations, documents and webpages from a short prompt. Under review for data-handling before classroom rollout.',
    roles: ['Classroom teacher', 'Leadership'],
    tags: ['Slides', 'Presentations'],
    notes: ['Under review — staff exploration only for now.']
  }, {
    id: 'character',
    name: 'Character.AI',
    vendor: 'character.ai',
    status: 'restricted',
    subject: 'All subjects',
    category: 'Chatbot',
    desc: 'Open-ended chatbot personas — not suitable for student-facing use.',
    long: 'Character.AI lets users chat with open-ended AI personas. Content moderation is insufficient for a school setting; it is not approved for student-facing use in CEWA schools.',
    roles: ['Staff awareness'],
    tags: ['Chatbot'],
    notes: ['Not approved for student-facing use.', 'Listed so staff can recognise and advise families.']
  }],
  statusFilters: [{
    key: 'approved',
    label: 'CEWA Approved'
  }, {
    key: 'pilot',
    label: 'Pilot'
  }, {
    key: 'review',
    label: 'Under review'
  }, {
    key: 'restricted',
    label: 'Not approved'
  }],
  subjects: ['All subjects', 'English', 'Mathematics', 'HASS', 'The Arts'],
  categories: ['Planning', 'Differentiation', 'Feedback', 'Assessment', 'Engagement', 'Design', 'Research', 'Tutoring']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumen/data.js", error: String((e && e.message) || e) }); }

// ui_kits/lumen/icons.js
try { (() => {
/* Lumen UI kit — inline Lucide icons as React components. window.LucideIcon.
   Paths copied from lucide.dev (ISC). Outline, 2px, round caps. */
(function () {
  const React = window.React;
  const S = (paths, vb = '24') => props => React.createElement('svg', Object.assign({
    width: 20,
    height: 20,
    viewBox: `0 0 24 24`,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }, props), paths.map((d, i) => React.createElement('path', {
    key: i,
    d
  })));
  const C = children => props => React.createElement('svg', Object.assign({
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }, props), children);
  const h = React.createElement;
  window.LucideIcon = {
    Search: C([h('circle', {
      key: 'c',
      cx: 11,
      cy: 11,
      r: 8
    }), h('path', {
      key: 'p',
      d: 'm21 21-4.3-4.3'
    })]),
    ArrowRight: S(['M5 12h14', 'm12 5 7 7-7 7']),
    ArrowLeft: S(['M19 12H5', 'm12 19-7-7 7-7']),
    Sparkles: S(['M9.94 14.66A3.5 3.5 0 0 0 7.34 12 3.5 3.5 0 0 0 9.94 9.34 3.5 3.5 0 0 0 12.6 12a3.5 3.5 0 0 0-2.66 2.66z', 'M18 5l.9 2.1L21 8l-2.1.9L18 11l-.9-2.1L15 8l2.1-.9z', 'M5 17l.6 1.4L7 19l-1.4.6L5 21l-.6-1.4L3 19l1.4-.6z']),
    BookOpen: S(['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z']),
    Shield: S(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z']),
    Scale: S(['m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'M7 21h10', 'M12 3v18', 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2']),
    Compass: C([h('circle', {
      key: 'c',
      cx: 12,
      cy: 12,
      r: 10
    }), h('path', {
      key: 'p',
      d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z'
    })]),
    GraduationCap: S(['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5']),
    Bookmark: C([h('path', {
      key: 'p',
      d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'
    })]),
    ExternalLink: S(['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6']),
    SlidersHorizontal: S(['M10 5H3', 'M21 5h-7', 'M14 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0', 'M7 12H3', 'M21 12h-9', 'M9 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0', 'M11 19H3', 'M21 19h-5', 'M16 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0']),
    Check: S(['M20 6 9 17l-5-5']),
    Users: S(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
    Info: C([h('circle', {
      key: 'c',
      cx: 12,
      cy: 12,
      r: 10
    }), h('path', {
      key: 'a',
      d: 'M12 16v-4'
    }), h('path', {
      key: 'b',
      d: 'M12 8h.01'
    })]),
    Clock: C([h('circle', {
      key: 'c',
      cx: 12,
      cy: 12,
      r: 10
    }), h('path', {
      key: 'p',
      d: 'M12 6v6l4 2'
    })]),
    Star: C([h('path', {
      key: 'p',
      d: 'M11.5 3.2a.5.5 0 0 1 .9 0l2.1 4.3 4.7.7a.5.5 0 0 1 .3.9l-3.4 3.3.8 4.7a.5.5 0 0 1-.7.5L12 16.9l-4.2 2.2a.5.5 0 0 1-.7-.5l.8-4.7L4.3 9.6a.5.5 0 0 1 .3-.9l4.7-.7z'
    })])
  };
  // alias by track tone usage
  window.LucideIcon.Heart = window.LucideIcon.Star;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumen/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.STATUS = __ds_scope.STATUS;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.ToolCard = __ds_scope.ToolCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.LumenMark = __ds_scope.LumenMark;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
