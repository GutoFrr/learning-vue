<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<template>
  <h2>{{ title }}</h2>

  <h3>text input</h3>
  <input v-model="text" /> {{ text }}

  <h3>checkbox</h3>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">checked: {{ checked }}</label>

  <!--
    multiple checkboxes can bind to the same
    array v-model value
  -->
  <h3>multi checkbox</h3>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <p>
    checked names: <span>{{ checkedNames }}</span>
  </p>

  <h3>radio</h3>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <br />
  <p>picked: {{ picked }}</p>

  <h3>select</h3>
  <select v-model="selected">
    <option disabled value="">please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>selected: {{ selected }}</p>

  <h3>multi select</h3>
  <select v-model="multiSelected" multiple class="multi-select">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>selected: {{ multiSelected }}</p>
</template>

<style scoped>
  .multi-select {
    width: 100px;
  }
</style>
