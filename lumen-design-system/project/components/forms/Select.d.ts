import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Label above the control. */
  label?: string;
  /** Options as strings or {value,label}. Or pass <option> children directly. */
  options?: Array<string | SelectOption>;
  /** Fully rounded (matches pill search/filter bars). */
  pill?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

/** Styled native select with a custom chevron — used for sort/filter dropdowns. */
export function Select(props: SelectProps): JSX.Element;
