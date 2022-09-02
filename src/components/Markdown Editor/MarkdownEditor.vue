<script setup>
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'

const input = ref('hello')

const output = computed(() => marked(input.value))

const update = debounce((e) => {
  input.value = e.target.value
}, 100)
</script>

<template>
  <h2>Markdown Editor</h2>
  <div class="editor">
    <input type="text" class="input" :value="input" @input="update" />
    <h3 class="output" v-html="output"></h3>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 30px;
    font-size: 32px;
  }

  .input {
    width: 400px;
    padding: 10px;
    border-radius: 7px;
    border: 2px solid gray;
    margin-bottom: 10px;
  }

  h3 {
    padding-left: 10px;
  }
</style>
