import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin by my-module!')

  return {
    provide: {
      myModule: {
        format: (data) => {
          // Format data...
          return data
        }
      }
    }
  }
})
