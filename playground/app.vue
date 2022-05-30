<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
const nuxt = useNuxtApp()
nuxt.$myModule && console.log(nuxt.$myModule)
</script>
