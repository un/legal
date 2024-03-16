import { plugins } from './.nuxt/types/tailwind.config.d';
import configuredDomains from './domains.json';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],
  runtimeConfig: {
    public: {
      domains: JSON.stringify(configuredDomains)
    }
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) =>
        ['UButton', 'UIcon'].includes(c.pascalName)
      );

      globals.forEach((c) => (c.global = true));
    }
  },
  // Styling
  css: ['@/assets/css/main.css'],
  ui: {
    icons: ['heroicons', 'simple-icons', 'ph', 'mdi']
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  }
});
