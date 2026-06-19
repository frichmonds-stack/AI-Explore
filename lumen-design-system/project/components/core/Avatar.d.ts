import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials fallback and tooltip. */
  name?: string;
  /** Image URL; falls back to initials if omitted. */
  src?: string;
  /** @default 'md' */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** @default 'circle' */
  shape?: 'circle' | 'square';
  /** Initials background tint. @default 'pine' */
  tone?: 'pine' | 'clay' | 'ochre';
}

/** Round (or squircle) avatar showing an image or two-letter initials. */
export function Avatar(props: AvatarProps): JSX.Element;
