import * as stylex from '@stylexjs/stylex';

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
