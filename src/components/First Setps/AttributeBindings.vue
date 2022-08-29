<!--
Here we are reactively binding element attributes / properties to the state.
The :title syntax is short for v-bind:title.
-->

<script setup>
import { reactive } from 'vue'

defineProps({
  title: String,
})

const state = reactive({ count: 0 })

const increaseCount = () => {
  state.count++
}

const resetCount = () => {
  state.count = 0
}

const isButtonDisabled = [false, true]
</script>

<template>
  <h2>{{ title }}</h2>
  <div class="card btn-container">
    <button type="button" @click="increaseCount">
      count is {{ state.count }}
    </button>
    <button :disabled="isButtonDisabled[0]" type="button" @click="resetCount">
      reset count
    </button>
    <button :disabled="isButtonDisabled[1]" type="button" @click="resetCount">
      reset count
    </button>
  </div>
</template>

<style scoped>
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

button {
  text-transform: capitalize;
}
</style>
