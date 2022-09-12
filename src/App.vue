<script setup></script>

<template>
  <div class="navbar">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/first-steps">First Steps</RouterLink>
      <RouterLink to="/markdown-editor">Markdown Editor</RouterLink>
      <RouterLink to="/fetching-data">Fetching Data</RouterLink>
      <RouterLink to="/sort-filter">Sort and Filter</RouterLink>
      <RouterLink to="/tree-view">Tree View</RouterLink>
      <RouterLink to="/svg-graph">SVG Graph</RouterLink>
      <RouterLink to="/modal">Modal</RouterLink>
      <RouterLink to="*"></RouterLink>
    </div>
  </div>
  <RouterView />
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

.component {
  padding-block: 30px;
}
</style>
