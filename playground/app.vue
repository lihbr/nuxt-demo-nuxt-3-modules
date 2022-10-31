<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'

const nuxt = useNuxtApp()
nuxt.$myModule && console.log(nuxt.$myModule)
</script>
