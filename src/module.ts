import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    addPlugin: true
  },
  setup (options, nuxt) {
    // 1. Logging cheesy thing
    if (new Date().getHours() === 15) {
      console.warn("It's apero time you fool! What are you starting?!")
    }

    // 2. Updating Nuxt config
    nuxt.options.ssr = false

    // 3.1. Creating a resolver to resolve paths consistently
    const { resolve } = createResolver(import.meta.url)

    // 3.2. Injecting a stylesheet into app using this module
    nuxt.options.css.push(resolve('./runtime/style.css'))

    // 3.3. Injecting a plugin into app using this module
    const plugin = resolve('./runtime/plugin.ts')
    nuxt.options.build.transpile.push(plugin)
    addPlugin(plugin)
  }
})
