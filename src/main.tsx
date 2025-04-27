import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { CSSModules } from './features/CSSModules/CSSModules';
import { PigmentCSS } from './features/PigmentCSS/PigmentCSS';
import { GlobalStyles } from './features/StyledComponents/global/styles';
import { StyledComponents } from './features/StyledComponents/StyledComponents';
import { StyleX } from './features/StyleX/StyleX';
import { Tailwind } from './features/Tailwind/Tailwind';
import { ExampleWrapper } from './layout/ExampleWrapper/ExampleWrapper';
import { muiTheme } from './themes/mui.theme';
import { scTheme } from './themes/sc.theme';

import './index.css';
import './tailwind-output.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ExampleWrapper>
        <ExampleWrapper.Section title="StyleX">
          <StyleX />
        </ExampleWrapper.Section>

        <ExampleWrapper.Section title="Styled Components">
          <SCThemeProvider theme={scTheme}>
            <GlobalStyles />

            <StyledComponents />
          </SCThemeProvider>
        </ExampleWrapper.Section>

        <ExampleWrapper.Section title="Pigment CSS">
          <PigmentCSS />
        </ExampleWrapper.Section>

        <ExampleWrapper.Section title="CSS Modules">
          <CSSModules />
        </ExampleWrapper.Section>

        <ExampleWrapper.Section title="Tailwind">
          <Tailwind />
        </ExampleWrapper.Section>
      </ExampleWrapper>
    </MuiThemeProvider>
  </React.StrictMode>,
);
