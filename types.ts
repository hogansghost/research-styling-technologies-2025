import type { ExtendTheme } from '@pigment-css/react/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeTokens {}

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: 'light' | 'dark';
      tokens: ThemeTokens;
      spacing: {
        unit: number;
      };
    }>;
  }
}
