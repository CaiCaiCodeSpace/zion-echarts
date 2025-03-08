export interface ChartDataItem {
  name: string;
  value: number;
}

export interface ChartConfig {
  title?: string;
  colors?: string[];
  radius?: [string, string];
  center?: [string, string];
  showLabel?: boolean;
  labelPosition?: 'inside' | 'outside';
  showLegend?: boolean;
  legendPosition?: 'left' | 'right' | 'top' | 'bottom';
} 