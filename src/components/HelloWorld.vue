<script setup>
import AttributeBindings from './AttributeBindings.vue'
import ConditionalsAndLoops from './ConditionalsAndLoops.vue'
import FormBindings from './FormBindings.vue'
import SingleComponent from './SingleComponent.vue'

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
  <hr />
  <FormBindings title="Form Bindings" />
  <hr />
  <SingleComponent title="Single Component" />
  <p class="read-the-docs">Click on the Vue logo to learn more</p>
</template>

<style>
.read-the-docs {
  color: #888;
}

* {
  text-transform: capitalize;
}
</style>
