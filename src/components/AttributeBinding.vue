<script setup>
import { ref } from 'vue'

const count = ref(0)
const isButtonDisabled = [false, true]
</script>

<template>
  <div class="card btn-container">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button :disabled="isButtonDisabled[0]" type="button" @click="count = 0">
      reset count
    </button>
    <button :disabled="isButtonDisabled[1]" type="button" @click="count = 100">
      set count 100
    </button>
  </div>
</template>

<style scoped>
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
</style>
