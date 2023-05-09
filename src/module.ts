import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'
import { addCustomTab } from '@nuxt/devtools-kit'
import { setupDevToolsUI } from './devtools'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable Nuxt Devtools integration
   *
   * @default true
   */
  devtools: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    devtools: true
  },
  setup (options, nuxt) {
    // Assets demo
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push(resolver.resolve('./runtime/style.css'))

    const plugin = resolver.resolve('./runtime/plugin.ts')
    nuxt.options.build.transpile.push(plugin)
    addPlugin(plugin)

    addImportsDir(resolver.resolve('./runtime/imports'))

    // Devtools demo
    addCustomTab({
      name: 'my-module-wordle',
      title: 'My Module Wordle',
      icon: 'carbon:edt-loop',
      view: {
        type: 'iframe',
        src: 'https://www.nytimes.com/games/wordle/index.html'
      }
    })

    // From the devtools starter
    if (options.devtools)
      setupDevToolsUI(nuxt, resolver)
  }
})
