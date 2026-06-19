import * as React from 'react';

export interface TabItem { value: string; label: string; count?: number; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs as strings or {value,label,count}. */
  items: Array<string | TabItem>;
  /** Currently selected value. */
  value: string;
  /** Called with the new value. */
  onChange?: (value: string) => void;
  /** `underline` (default) or `pill` segmented style. */
  variant?: 'underline' | 'pill';
}

/** Controlled tab strip — underline or pill style, with optional per-tab counts. */
export function Tabs(props: TabsProps): JSX.Element;
