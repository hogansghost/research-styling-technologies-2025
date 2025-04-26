import { globalCss } from '@pigment-css/react';

// https://github.com/mui/pigment-css/blob/master/README.md#creating-global-styles
// The globalCss function should to be called at the top level of your JavaScript file, usually from the entry point of the application.
// Calling inside a function or a component will not work as expected. Also, the extraction of global styles will always take place regardless of conditional rendering.

globalCss`
  body {
    margin: 0;
    padding: 0;
  }
`;
