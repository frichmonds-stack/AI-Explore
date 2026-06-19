import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — also turns the border red. */
  error?: string;
  /** Leading icon node (e.g. a search glyph). */
  icon?: React.ReactNode;
  /** Trailing icon/affordance node. */
  trailing?: React.ReactNode;
  /** Fully rounded (use for search bars). */
  pill?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

/** Text input with optional label, hint, error, and leading/trailing icons. Set `pill` for search. */
export function Input(props: InputProps): JSX.Element;
