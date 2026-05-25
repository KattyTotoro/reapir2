// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  srcDir: 'app/',
  
  
  app: {
    head: {
      title: 'РемонтБытСервис — Мастер бытовой техники',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Профессиональный ремонт бытовой техники на дому. Быстро, качественно, с гарантией.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      phone: '+7 (999) 123-45-67',
      email: 'master@rembyt.ru',
      address: 'г. Москва, ул. Примерная, д. 15'
    }
  },
})
