import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text beside the box. */
  label?: string;
  /** Optional trailing count (e.g. number of tools in a filter group). */
  count?: number;
  /** Render as a round radio-style control. */
  round?: boolean;
}

/** Pine-filled checkbox for filter lists; supports a trailing result count. */
export function Checkbox(props: CheckboxProps): JSX.Element;
