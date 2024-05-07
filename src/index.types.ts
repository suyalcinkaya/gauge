import type { SVGProps } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface GaugeProps extends SVGProps<SVGSVGElement> {
  value: number;
  size?: Size | number | string;
  gapPercent?: number;
  strokeWidth?: number;
  variant?: 'ascending' | 'descending';
  showValue?: boolean;
  showAnimation?: boolean;
  primary?: string | { [key: number]: string };
  secondary?: string | { [key: number]: string };
}
