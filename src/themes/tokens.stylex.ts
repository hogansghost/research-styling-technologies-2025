import * as stylex from '@stylexjs/stylex';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tokens = {
  brandingPrimary: '#645ad2',
  brandingPrimaryAccent: '#5249b0',
  brandingSecondary: '#222141',
  statusWarning: '#ff9464',
  textPrimary: '#212427',
  textSecondary: '#9e9e9e',
  textTertiary: '#545454',
  contentPrimary: '#ffffff',
  contentSecondary: '#f6f6f6',
  contentAccentPrimary: '#e0e0e0',
  contentAccentSecondary: '#bdbdbd',
  black: '#000000',
  white: '#ffffff',
};

export const colors = stylex.defineVars({
  textDefault: '#212427',
  textLight: '#9e9e9e',
  contentBackgroundPrimary: '#ffffff',
  contentBackgroundSecondary: '#f6f6f6',
  contentBrandingBackgroundSecondary: '#222141',
  contentBrandingColorSecondary: '#ffffff',

  buttonPrimary: '#645ad2',
  buttonPrimaryAccent: '#5249b0',
  buttonPrimaryColor: '#ffffff',
});

export const spacing = stylex.defineVars({
  xsmall: '4px',
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
});
