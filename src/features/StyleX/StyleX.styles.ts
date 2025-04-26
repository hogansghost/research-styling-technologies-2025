import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '../../themes/tokens.stylex';

export const styles = stylex.create({
  cardContent: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridAutoRows: 'min-content',
    gap: '32px',
  },
  section: {
    padding: spacing.medium,
    borderRadius: '16px',
    backgroundColor: colors.contentBackgroundSecondary,
  },
  placeholderWrappingGrid: {
    display: 'grid',
    gap: '32px',
    gridAutoRows: 'min-content',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media screen and (min-width: 1024px)': 'repeat(2, minmax(150px, 1fr))',
    },
  },
  placeholderCardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gridAutoRows: 'min-content',
    gap: '16px',
  },
});
