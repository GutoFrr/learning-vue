<script setup>
import PolyGraph from './PolyGraph.vue'
import { ref, reactive } from 'vue'

const newLabel = ref('')
const stats = reactive([
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 },
])

const add = (e) => {
  e.preventDefault()
  if (!newLabel.value) return
  stats.push({
    label: newLabel.value,
    value: 100,
  })
  newLabel.value = ''
}

const remove = (stat) => {
  if (stats.length > 3) {
    stats.splice(stats.indexOf(stat), 1)
  } else {
    alert("Can't delete more!")
  }
}
</script>

<template>
  <h2>SVG Graph</h2>
  <div class="main-container">
    <span>
      <svg width="200" height="200">
        <PolyGraph :stats="stats" />
      </svg>

      <!-- controls -->
      <div v-for="stat in stats">
        <label>{{ stat.label }}</label>
        <input type="range" v-model="stat.value" min="0" max="100" />
        <span>{{ stat.value }}</span>
        <button @click="remove(stat)" class="remove">X</button>
      </div>

      <form id="add">
        <input name="newlabel" v-model="newLabel" />
        <button @click="add">Add a Stat</button>
      </form>
    </span>

    <pre>{{ stats }}</pre>
  </div>
</template>

<style>
.main-container {
  display: flex;
  justify-content: space-around;
}

polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}
</style>
