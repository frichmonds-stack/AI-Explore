import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour family. @default 'neutral' */
  tone?: 'neutral' | 'primary' | 'accent' | 'ochre' | 'success' | 'warning' | 'danger' | 'info';
  /** Fill style. `soft` = tinted bg (default), `solid` = full colour, `outline` = hairline. */
  variant?: 'soft' | 'solid' | 'outline';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small categorical label (counts, categories, meta). For CEWA approval state use `StatusBadge`. */
export function Badge(props: BadgeProps): JSX.Element;
