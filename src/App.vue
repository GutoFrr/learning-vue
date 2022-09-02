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
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="links">
      <a href="#/">Home</a>
      <a href="#/firstSteps">First Steps</a>
      <a href="#/markdownEditor">Markdown Editor</a>
    </div>
  </div>
  <component :is="currentView" />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.logo {
  height: 50px;
  will-change: filter;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
