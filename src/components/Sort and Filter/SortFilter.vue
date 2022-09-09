<script setup>
import { ref } from 'vue'
import DemoGrid from './Grid.vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 },
]
</script>

<template>
  <h2>Grid Sort and Filter</h2>
  <form id="search">Search <input name="query" v-model="searchQuery" /></form>
  <DemoGrid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
  ></DemoGrid>
</template>

<style scoped>
  input {
    margin-bottom: 10px;
  }
</style>