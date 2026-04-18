import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  outDir: 'dist',
  integrations: [tailwind()],
  site: 'https://zbarrero-web.pages.dev',
  base: '/',
});