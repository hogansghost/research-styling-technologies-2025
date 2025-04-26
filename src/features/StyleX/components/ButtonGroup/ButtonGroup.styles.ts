import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../../../themes/tokens.stylex';

export const styles = stylex.create({
  buttonGroup: {
    display: 'flex',
    alignItems: 'stretch',
    gap: spacing.medium,
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
});
