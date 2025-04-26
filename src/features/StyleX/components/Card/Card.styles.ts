import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '../../../../themes/tokens.stylex';

export const styles = stylex.create({
  card: {
    borderRadius: '8px',
    backgroundColor: colors.contentBackgroundPrimary,
    textAlign: 'start',
    boxShadow: '0 3px 8px -2px rgba(0, 0, 0, 0.12), 0 6px 14px -4px rgba(0, 0, 0, 0.1)',
  },
  cardHeader: {
    padding: spacing.medium,
  },
  cardBody: {
    padding: spacing.medium,
  },
});
