<script setup>
import AttributeBindings from './AttributeBindings.vue'
import ConditionalsAndLoops from './ConditionalsAndLoops.vue'

defineProps({
  msg: String,
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <hr />
  <AttributeBindings title="Attribute Bindings" />
  <hr />
  <ConditionalsAndLoops title="Conditionals and Loops" />
  <p class="read-the-docs">Click on the Vue logo to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
