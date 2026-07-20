const TONES = {
  muted: 'var(--text-muted)',
  pine: 'var(--pine-600)',
};

export function Eyebrow({ children, tone = 'muted', style }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        fontWeight: 'var(--weight-medium)',
        color: TONES[tone] || tone,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}
