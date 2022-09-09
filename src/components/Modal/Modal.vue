<script setup>
import { ref } from 'vue'
import ModalChild from './ModalChild.vue'

const showModal = ref(false)
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <ModalChild :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </ModalChild>
  </Teleport>
</template>
