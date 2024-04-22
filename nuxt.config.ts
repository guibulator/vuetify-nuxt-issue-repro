// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [["./layer", { install: false }]],
  devtools: { enabled: true },
  // Override the red color from the base layer not working
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary: '#000000',
            }
          }
        }
      }
    }
  }
})
