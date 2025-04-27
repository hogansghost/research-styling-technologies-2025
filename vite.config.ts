import { extendTheme, pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [
    react(),
    styleX(),
    pigment({
      theme: extendTheme({
        spacing: {
          unit: 8,
        },
      }),
    }),
    checker({
      typescript: true,
    }),
  ],
  optimizeDeps: {
    // Pigment issue with vite https://github.com/mui/pigment-css/issues/344#issuecomment-2523024300
    include: ['prop-types', 'react-is', 'hoist-non-react-statics', 'html-react-parser'],
  },
});
