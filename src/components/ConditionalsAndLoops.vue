<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

const show = ref(true)
const list = ref([1, 2, 3])
</script>

<template>
  <h2>{{ title }}</h2>
  <main>
    <div class="btn-container">
      <button @click="show = !show">toggle list</button>
      <button @click="list.push(list.length + 1)">push number</button>
      <button @click="list.pop()">pop number</button>
      <button @click="list.reverse()">reverse list</button>
    </div>

    <ul v-if="show && list.length">
      <li v-for="item of list">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">list is not empty, but hidden.</p>
    <p v-else>list is empty.</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-transform: capitalize;
  gap: 1rem;
}
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

button {
  width: 170px;
}

ul {
  width: fit-content;
  margin: 0;
}
</style>
