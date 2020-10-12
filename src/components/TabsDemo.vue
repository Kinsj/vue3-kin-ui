<template>
  <div>
    <h1>Tabs 组件</h1>
    <Demo :src="TabsDemo1"/>
  </div>
</template>
<script lang="ts">
import TabsDemo1 from "../demo/tabs/demo1.vue";
export default {
  setup() {
    return {
      TabsDemo1,
    };
  },
};
</script>
