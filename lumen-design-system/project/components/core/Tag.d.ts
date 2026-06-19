import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Selected state (filter chips). */
  active?: boolean;
  /** Render as an interactive button even without onClick. */
  interactive?: boolean;
  /** Show a trailing × and call this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  as?: 'span' | 'button' | 'a';
  children?: React.ReactNode;
}

/** Use-case / filter chip. Static by default; becomes a button when `onClick`/`interactive` is set. */
export function Tag(props: TagProps): JSX.Element;
