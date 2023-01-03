<template>
  <div class="greetings">
    <h1>{{ msg  }}</h1>
    <h3>
      You’ve successfully created a project with123
      <RocketForm :msg="`124952`" />
    </h3>
  </div>
  </template>

<script setup lang="ts">
import { defineProps } from "vue";
import RocketForm from "@rocket/rocket-form";
defineProps<{ msg: string }>();
</script>



<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>