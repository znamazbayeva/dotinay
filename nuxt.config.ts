// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
      head: {
          link: [{ rel: 'icon', type: 'image/png', href: '/image.png' }]
      }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt',
  ],
  pages: true,
  // auto import components
  components: true,
  // server side rendering mode
  ssr: true,
})
