import * as React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip content (string or node). */
  content: React.ReactNode;
  /** @default 'top' */
  placement?: 'top' | 'bottom';
  /** The trigger element(s). */
  children: React.ReactNode;
}

/** Pine-dark hover/focus tooltip. Wrap any trigger; appears on hover and keyboard focus. */
export function Tooltip(props: TooltipProps): JSX.Element;
