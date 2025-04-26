import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ButtonSizes = 'small' | 'medium' | 'large';

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: ButtonSizes;
};
