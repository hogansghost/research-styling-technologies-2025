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
import { ExampleSection } from './layout/ExampleSection/ExampleSection';
import { ExampleWrapper } from './layout/ExampleWrapper/ExampleWrapper';
import { muiTheme } from './themes/mui.theme';
import { scTheme } from './themes/sc.theme';

import './index.css';
import './tailwind-output.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ExampleWrapper>
        <ExampleSection title="StyleX">
          <StyleX />
        </ExampleSection>

        <ExampleSection title="Styled Components">
          <SCThemeProvider theme={scTheme}>
            <GlobalStyles />

            <StyledComponents />
          </SCThemeProvider>
        </ExampleSection>

        <ExampleSection title="Pigment CSS">
          <PigmentCSS />
        </ExampleSection>

        <ExampleSection title="CSS Modules">
          <CSSModules />
        </ExampleSection>

        <ExampleSection title="Tailwind">
          <Tailwind />
        </ExampleSection>
      </ExampleWrapper>
    </MuiThemeProvider>
  </React.StrictMode>,
);
