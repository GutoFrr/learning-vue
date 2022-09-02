<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home/Home.vue'
import HelloWorld from './components/First Setps/HelloWorld.vue'
import MarkdownEditor from './components/Markdown Editor/MarkdownEditor.vue'
import NotFound from './components/NotFound/NotFound.vue'

const routes = {
  '/': Home,
  '/firstSteps': HelloWorld,
  '/markdownEditor': MarkdownEditor,
  '*': NotFound,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="navbar">
    <a href="#/">Home</a>
    <a href="#/firstSteps">First Steps</a>
    <a href="#/markdownEditor">Markdown Editor</a>
  </div>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <component :is="currentView" />
</template>

<style scoped>
.logo {
  height: 70px;
  margin: 10px;
  will-change: filter;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
