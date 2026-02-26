import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  outDir: 'docs',
  integrations: [tailwind()],
  site: 'https://zulayb.github.io/zbarrero-web/',
  base: '/zbarrero-web/',
});