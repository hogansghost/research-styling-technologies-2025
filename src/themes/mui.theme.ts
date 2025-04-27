// @ts-nocheck
// Cannot be bothered to type the MUI stuff.
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: '2px dotted orange',
          borderRadius: '8px',
          padding: '8px 16px',
          '&.Mui-focused': {
            borderColor: 'red',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#FBFBFB',
      main: '#4285F0',
      dark: '#1F70F3',
      contrastText: '#FBFBFB',
    },
    secondary: {
      light: '#FBFBFB',
      main: '#333333',
      dark: '#222222',
      contrastText: '#FBFBFB',
    },
    accent: {
      light: '#FBFBFB',
      main: '#3C3C3C',
      dark: '#3C3C3C',
      hover: '#0075fe2e',
      selected: '#C3DBFF',
      contrastText: '#FBFBFB',
    },
    textPrimary: {
      light: '#FBFBFB',
      main: '#333333',
      dark: '#333333',
      contrastText: '#FBFBFB',
    },
    textSecondary: {
      light: '#FBFBFB',
      main: '#3C3C3C',
      dark: '#3C3C3C',
      contrastText: '#FBFBFB',
    },
    success: {
      main: '#0F9D58',
      contrastText: '#FBFBFB',
    },
    error: {
      main: '#D73F45',
      contrastText: '#FBFBFB',
    },
    warning: {
      main: '#E3984C',
      contrastText: '#FBFBFB',
    },
    disabled: '#a4a4a4',
    iconDisabled: '#0000008a',
    shades: {
      white: '#FFFFFF',
      lightest: '#EBEBEB',
      lighter: '#D7D7D7',
      light: '#C1C1C1',
      dark: '#a4a4a4',
      darker: '#565656',
      darkest: '#3C3C3C',
      black: '#000000',
    },
  },
});

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent: {
      main: string;
      light: string;
      dark: string;
      hover: string;
      selected: string;
      contrastText: string;
    };
    textPrimary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };

    textSecondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    disabled: string;
    iconDisabled: string;
    shades: {
      white: string;
      lightest: string;
      lighter: string;
      light: string;
      dark: string;
      darker: string;
      darkest: string;
      black: string;
    };
  }

  interface PaletteOptions {
    accent: {
      main: string;
      light: string;
      dark: string;
      hover: string;
      selected: string;
      contrastText: string;
    };
    textPrimary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };

    textSecondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    disabled: string;
    iconDisabled: string;
    shades: {
      white: string;
      lightest: string;
      lighter: string;
      light: string;
      dark: string;
      darker: string;
      darkest: string;
      black: string;
    };
  }
}
