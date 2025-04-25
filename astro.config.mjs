import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://siddhantlad.info',
  outDir: 'dist',
  base: '/', 
  build: {
    format: 'directory',
  },
});
