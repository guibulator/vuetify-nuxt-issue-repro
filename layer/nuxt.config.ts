export default defineNuxtConfig({
    modules: ['vuetify-nuxt-module'],
    vuetify:{
      vuetifyOptions: {
        icons: {
          defaultSet: 'mdi',
          sets: [{
            name: 'mdi',
            cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
          }]
        }
    }
  }
})
