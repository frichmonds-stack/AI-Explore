import * as React from 'react';

export type CewaStatus = 'approved' | 'pilot' | 'review' | 'restricted' | 'unreviewed';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** CEWA approval state. @default 'unreviewed' */
  status?: CewaStatus;
  /** Show the explanatory tooltip on hover/focus. @default true */
  showTip?: boolean;
}

/**
 * CEWA approval status pill with a colour-coded dot and an explanatory tooltip.
 * The canonical way to communicate whether a tool is cleared for classroom use.
 */
export function StatusBadge(props: StatusBadgeProps): JSX.Element;

/** Status label + tooltip copy, keyed by status. Reuse for legends/filters. */
export const STATUS: Record<CewaStatus, { label: string; tip: string }>;
