import * as stylex from '@stylexjs/stylex';
import { ButtonGroupProps } from './ButtonGroup.model';
import { styles } from './ButtonGroup.styles';

export const ButtonGroup = ({ children, alignment = 'end' }: ButtonGroupProps) => (
  <div
    {...stylex.props(
      styles.buttonGroup,
      alignment === 'start' && styles.justifyStart,
      alignment === 'center' && styles.justifyCenter,
      alignment === 'end' && styles.justifyEnd,
    )}
  >
    {children}
  </div>
);
