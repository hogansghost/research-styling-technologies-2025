export type ButtonAlignments = 'start' | 'center' | 'end';

export interface ButtonGroupProps {
  children: React.ReactNode;
  alignment?: ButtonAlignments;
}
