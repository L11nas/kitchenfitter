import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public', // 🔥 Tai būtina, kad public failai būtų nukopijuoti į dist/
});
