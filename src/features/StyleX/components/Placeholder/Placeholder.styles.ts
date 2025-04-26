import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../themes/tokens.stylex';

export const styles = stylex.create({
  placeholder: {
    padding: '16px',
    borderRadius: '16px',
    border: '2px dashed rgba(0, 0, 0, 0.1)',
    minHeight: '120px',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridAutoRows: 'min-content',
    alignContent: 'center',
  },
  variantPrimary: {
    backgroundColor: colors.contentBackgroundSecondary,
  },
  variantSecondary: {
    color: colors.contentBrandingColorSecondary,
    backgroundColor: colors.contentBrandingBackgroundSecondary,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
});
