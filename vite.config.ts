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
        // @ts-expect-error types?
        spacing: {
          unit: 8,
        },
      }),
    }),
    checker({
      typescript: true,
    }),
  ],
});
