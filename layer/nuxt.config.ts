export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary: '#ff0000',
            }
          }
        }
      }
    }
  }
})
