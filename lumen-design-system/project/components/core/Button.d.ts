import * as React from 'react';

/**
 * Primary action control for Lumen. Pill-shaped, warm shadow lift on hover.
 * @startingPoint section="Core" subtitle="Pill buttons — primary, accent, secondary, ghost" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = pine fill (default CTA), `accent` = clay fill (warm emphasis),
   *  `secondary` = outlined, `ghost` = text-only. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** Control height / padding. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to full container width. */
  block?: boolean;
  /** Render as a different element, e.g. `as="a"` for a link button. @default 'button' */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/** Primary action control for Lumen. Pill-shaped, warm shadow lift on hover. */
export function Button(props: ButtonProps): JSX.Element;
