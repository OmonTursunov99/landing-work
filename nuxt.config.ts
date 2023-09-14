// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

import { defineNuxtConfig } from "nuxt/config";
import { InputConfig } from "c12";

const inputConfig: InputConfig = {
  app: {
    head: {
      "charset": 'utf-8',
      "viewport": 'width=device-width, initial-scale=1',
      "title": "Beeline | 1.0.0",
      link: [
        { rel: 'icon', href: '/svg/logo.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap'
        },
      ]
    },
    pageTransition: true
  },
  css: [
    '@/assets/styles/global.scss',
    '@/assets/styles/fonts.scss',
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    '@nuxtjs/device'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      [ 'defineStore', 'definePiniaStore' ]
    ]
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: "prefix_except_default",
    locales: [
      {
        code: 'ru',
        iso: 'ru',
        name: "Русский",
        file: 'ru.json'
      }
    ],
    defaultLocale: 'ru',
  },
  vite: {
    plugins: [
      svgLoader(),
    ]
  },
  devServer: {
    port: import.meta.env.VITE_APP_PORT || 3000,
  },
  devtools: { enabled: true }
}
export default defineNuxtConfig(inputConfig);
