import * as stylex from '@stylexjs/stylex';
import { ButtonProps } from './Button.model';
import { styles } from './Button.styles';

export const Button = ({ children, size = 'medium', isDisabled, ...props }: ButtonProps) => (
  <button {...stylex.props(styles.button, styles[size])} type="button" disabled={isDisabled} {...props}>
    {children}
  </button>
);
