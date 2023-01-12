<template>
  <div class="greetings">
    <RocketForm :msg="`124952`" />
  </div>
  </template>

<script setup lang="ts">
import { defineProps } from "vue";
import RocketForm from "@rocket/rocket-form";
defineProps<{ msg: string }>();
</script>



<style lang="scss" scoped>

</style>