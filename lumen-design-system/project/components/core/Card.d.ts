import * as React from 'react';

/**
 * Warm white surface with soft shadow and 16px radius — the base container for content.
 * @startingPoint section="Core" subtitle="Surface container with soft warm shadow" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Inner padding. `none` (default) lets you control layout; sm/md/lg apply token padding. */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Resting shadow. @default 'sm' */
  elevation?: 'flat' | 'sm' | 'raised';
  /** Adds hover lift + pointer; use for whole-card links. */
  interactive?: boolean;
  as?: 'div' | 'a' | 'article' | 'section';
  children?: React.ReactNode;
}

/** Warm white surface with soft shadow and 16px radius — the base container for content. */
export function Card(props: CardProps): JSX.Element;
