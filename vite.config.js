import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public', // 🔥 Tai būtina, kad public failai būtų nukopijuoti į dist/
  ssr: {
    // CommonJS package: bundle it so Node can use its named exports when prerendering
    noExternal: ['react-helmet-async'],
  },
});
