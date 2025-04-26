import { extendTheme, pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [
    react(),
    styleX(),
    pigment({
      theme: extendTheme({}),
    }),
  ],
});
