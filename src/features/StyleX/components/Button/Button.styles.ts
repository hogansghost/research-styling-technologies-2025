import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../themes/tokens.stylex';

export const styles = stylex.create({
  button: {
    display: 'block',
    border: 0,
    color: colors.buttonPrimaryColor,
    borderRadius: '8px',
    transition: 'background-color 220ms',
    backgroundColor: {
      default: colors.buttonPrimary,
      ':disabled': 'rgb(156 163 175 / 0.9)',
      ':not([disabled]):hover': colors.buttonPrimaryAccent,
    },
    cursor: {
      ':not([disabled])': 'pointer',
    },
  },

  small: {
    padding: '8px 4px',
  },
  medium: {
    padding: '8px 16px',
  },
  large: {
    padding: '8px 32px',
  },
});
