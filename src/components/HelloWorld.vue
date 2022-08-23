<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const isResetDisabled = false
const isSetCountHundredDisabled = true
const isButtonDisabled = [false, true]
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button :disabled="isButtonDisabled[0]" type="button" @click="count = 0">
      reset count
    </button>
    <button :disabled="isButtonDisabled[1]" type="button" @click="count = 100">
      set count 100
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="read-the-docs">Click on the Vue logo to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
