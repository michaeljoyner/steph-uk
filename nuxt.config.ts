// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [
        {href: 'https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Inter&display=swap', rel: 'stylesheet'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "anonymous"},
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      ]
    }
  }

  
  
})
