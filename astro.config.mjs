import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  compressHTML: false,
  experimental: {},
  build: {
    inlineStylesheets: `never`
  },
  output: "hybrid",
  adapter: netlify()
});