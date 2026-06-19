import * as React from 'react';
import type { CewaStatus } from './StatusBadge';

/**
 * The flagship Lumen card: an AI tool surfaced for discovery — logo, name, one-line
 * description, CEWA status badge, the teacher roles it suits, and use-case tags.
 * @startingPoint section="Discovery" subtitle="Flagship AI-tool directory card with CEWA status" viewport="700x300"
 */
export interface ToolCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Tool name, e.g. "MagicSchool AI". */
  name: string;
  /** Vendor / maker line, shown in mono under the name. */
  vendor?: string;
  /** One-line description of what the tool does. */
  description?: string;
  /** Logo image URL; falls back to the first initial on a pine tile. */
  logo?: string;
  /** CEWA approval status (drives the badge + tooltip). @default 'unreviewed' */
  status?: CewaStatus;
  /** Teacher roles the tool suits, e.g. ['Classroom teacher','Leadership']. */
  roles?: string[];
  /** Use-case tags, e.g. ['Lesson planning','Feedback']. */
  tags?: string[];
  /** Ochre-ringed featured treatment + badge. */
  featured?: boolean;
  /** Show a "Popular" badge. */
  popular?: boolean;
  /** Hover-lift + pointer. @default true */
  interactive?: boolean;
  /** Show the "View details →" footer. @default true */
  showFooter?: boolean;
}

/** The flagship Lumen discovery card for an AI tool. */
export function ToolCard(props: ToolCardProps): JSX.Element;
