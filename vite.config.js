import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public', // 🔥 Tai būtina, kad public failai būtų nukopijuoti į dist/
  build: {
    // Used by scripts/prerender.mjs to find each page's CSS and JS chunks
    manifest: true,
  },
  ssr: {
    // CommonJS package: bundle it so Node can use its named exports when prerendering
    noExternal: ['react-helmet-async'],
  },
});
