// const LANG = 'en_US';
// const TYPE = 'website';
// const URL = 'https://hippocrades.com';
// const SITE_NAME = 'hippocrades.com';

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-M1KERXTK1H', // TODO: Add your google analytics 4 tag here
  },

  srcDir: './src',

  runtimeConfig: {
    public: {
      yourEnv: process.env.YOUR_ENV,
    },
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  headlessui: {
    prefix: 'Headless',
  },

  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },

  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  devtools: {
    enabled: true,
  },
});
