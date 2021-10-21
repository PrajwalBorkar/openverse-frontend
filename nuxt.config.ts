import { defineNuxtConfig } from '@nuxt/bridge'
import pkg from './package.json'
import locales from './src/locales/scripts/valid-locales.json'
import type { MetaInfo } from 'vue-meta'
import { env } from './env'
import { dev } from './dev'

/**
 * The default metadata for the site. Can be extended and/or overwritten per page. And even in components!
 * See the Nuxt.js docs for more info.
 * {@link https://nuxtjs.org/guides/features/meta-tags-seo Nuxt.js Docs}
 */
const meta: MetaInfo['meta'] = [
  { charset: 'utf-8' },
  {
    name: 'description',
    content:
      'A new Openverse search tool for creators seeking to discover and reuse free resources with greater ease.',
  },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@creativecommons' },
  { name: 'og:title', content: 'Openverse' },
  {
    name: 'og:image',
    content: '/cclogo-shared-image.jpg',
  },
  {
    name: 'og:description',
    content:
      'Empowering the world to share through 6 simple licenses + a global community of advocates for open.',
  },
  {
    name: 'og:url',
    content: 'https://creativecommons.org',
  },
  {
    name: 'og:site_name',
    content: 'Creative Search',
  },
  {
    vmid: 'monetization',
    name: 'monetization',
    content: '$ilp.uphold.com/edR8erBDbRyq',
  },
]

if (process.env.NODE_ENV === 'production') {
  meta.push({
    httpEquiv: 'Content-Security-Policy',
    content: 'upgrade-insecure-requests',
    // This case is ugly and I have no idea why it's necessary as the error
    // seems to come from an unrelated package.
    // NuxtConfig['head']['meta'] should resolve to `any[]` so this is basically
    // an alias for that but it's the safest cast I could think of (and it resolves the error)
  })
}

// Default html head
const head = {
  title: 'Openverse',
  meta,
  link: [
    {
      rel: 'preconnect',
      href: env.apiUrl,
      crossorigin: '',
    },
    {
      rel: 'dns-prefetch',
      href: env.apiUrl,
    },
    {
      rel: 'search',
      type: 'application/opensearchdescription+xml',
      title: 'Openverse',
      href: '/opensearch.xml',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/app-icons/cc-site-icon-150x150.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/app-icons/cc-site-icon-300x300.png',
      sizes: '192x192',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      href: '/app-icons/cc-site-icon-300x300.png',
      sizes: '192x192',
    },
  ],
}

export default defineNuxtConfig({
  // eslint-disable-next-line no-undef
  version: pkg.version, // used to purge cache :)
  cache: {
    pages: ['/'],
    store: {
      type: 'memory', // 'redis' would be nice
      max: 100,
      ttl: process.env.MICROCACHE_DURATION || 60,
    },
  },
  srcDir: 'src/',
  modern: 'client',
  server: { port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8443 },
  router: {
    middleware: ['middleware'],
  },
  components: {
    dirs: [
      '~/components',
      '~/components/ContentReport',
      '~/components/Filters',
      '~/components/ImageDetails',
      '~/components/ImageGrid',
      '~/components/MediaInfo',
      '~/components/MetaSearch',
      '~/components/MediaTag',
    ],
  },
  plugins: [
    { src: '~/plugins/ab-test-init.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/url-change.js' },
    { src: '~/plugins/migration-notice.js' },
  ],
  css: [
    '~/assets/fonts.css',
    '~/styles/vocabulary.scss',
    '~/styles/global.scss',
    '~/styles/accent.scss',
  ],
  head,
  env,
  dev,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/eslint-module',
  ],
  // Load the scss variables into every component:
  // No need to import them. Since the variables will not exist in the final build,
  // this doesn't make the built files larger.
  styleResources: {
    scss: ['./styles/utilities/all.scss'],
  },
  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
    'nuxt-ssr-cache',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en',
        file: 'en.json',
      },
      ...(locales ?? []),
    ],
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    /**
     * This section is critical for the current, iframed production environment
     * {@link https://i18n.nuxtjs.org/options-reference/#detectbrowserlanguage}
     * */
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      cookieCrossOrigin: true,
      cookieSecure: true,
    },
    baseUrl: 'http://localhost:8443',
    vueI18n: '~/plugins/vue-i18n.js',
  },
  sentry: {
    dsn:
      process.env.SENTRY_DSN ||
      'https://3f3e05dbe6994c318d1bf1c8bfcf71a1@o288582.ingest.sentry.io/1525413',
    lazy: true,
  },
  tailwindcss: {
    // https://github.com/nuxt-community/tailwindcss-module/issues/114#issuecomment-698885369
    configPath: '~~/tailwind.config.js',
    // https://github.com/nuxt/framework/issues/865#issuecomment-941863883
    viewer: false,
  },
  storybook: {
    port: 6006, // standard port for Storybook
    stories: ['~/**/*.stories.@(mdx|js)'],
    addons: [
      {
        name: '@storybook/addon-essentials',
        options: {
          backgrounds: false,
          viewport: false,
          toolbars: false,
        },
      },
    ],
    parameters: {
      options: {
        storySort: {
          order: ['Introduction', ['Openverse UI']],
        },
      },
    },
  },
})
