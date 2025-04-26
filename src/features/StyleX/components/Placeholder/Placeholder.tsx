import * as stylex from '@stylexjs/stylex';
import { PlaceholderProps } from './Placeholder.model';
import { styles } from './Placeholder.styles';

export const Placeholder = ({ variant = 'primary' }: PlaceholderProps) => (
  <div
    {...stylex.props(
      styles.placeholder,
      variant === 'primary' && styles.variantPrimary,
      variant === 'secondary' && styles.variantSecondary,
    )}
  >
    I am a Placeholder
  </div>
);
