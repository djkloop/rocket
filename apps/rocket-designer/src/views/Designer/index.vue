<script lang="ts" setup>
import RocketForm from '@rocket/rocket-form';

</script>

<template>
  <a-layout style="height: calc(100vh - 10px)">
    <a-layout-header text-red>Header</a-layout-header>
    <a-layout>
      <a-layout-sider style="width: 300px;">Sider</a-layout-sider>
      <a-layout-content>
        <RocketForm msg="12" />
      </a-layout-content>
      <a-layout-sider style="width: 300px;">Sider</a-layout-sider>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>