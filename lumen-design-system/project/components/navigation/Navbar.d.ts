import * as React from 'react';

export interface NavLink {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Sticky top navigation with the Lumen halo mark + wordmark, links, and a right slot.
 * Translucent paper background with blur.
 * @startingPoint section="Navigation" subtitle="App top bar with Lumen brand lockup" viewport="900x80"
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Primary nav links. */
  links?: NavLink[];
  /** Right-aligned slot — search, buttons, avatar. */
  right?: React.ReactNode;
  /** Brand link target. @default '#' */
  brandHref?: string;
  /** Wordmark text. @default 'Lumen' */
  wordmark?: string;
}

/** Sticky top navigation with the Lumen brand lockup, links, and a right slot. */
export function Navbar(props: NavbarProps): JSX.Element;

/** The standalone Lumen halo mark (SVG), inherits token colours. */
export function LumenMark(props: { size?: number }): JSX.Element;
