import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://masataka123.github.io',
  base: '/OpenAI-Math-Digest',
  output: 'static',
  devToolbar: { enabled: false },
  cacheDir: './.astro/astro-cache',
  trailingSlash: 'always',
  vite: {cacheDir: '.astro/vite-cache'},
});
