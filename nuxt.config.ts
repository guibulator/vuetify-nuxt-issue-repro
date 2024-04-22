// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends:[["./layer", {install:false}]],
  devtools: { enabled: true }
})
