import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour/intent. @default 'info' */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'pine';
  /** Bold title line above the message. */
  title?: string;
  /** Show a dismiss × and call this on click. */
  onClose?: () => void;
  /** Override the default leading icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Inline message banner — guidance, approval notes, warnings. DaisyUI-alert flavoured. */
export function Alert(props: AlertProps): JSX.Element;
