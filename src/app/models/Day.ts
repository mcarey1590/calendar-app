export interface Day {
  date: number;
  iso: string;
  index: number;
  type: 'current' | 'previous' | 'next';
}
