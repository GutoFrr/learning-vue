<script setup>
import Essentials from './Essentials.vue'

defineProps({
  msg: String,
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <Essentials />
  <p class="read-the-docs">Click on the Vue logo to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
