<template>
  <div>
    <h1>Dialog 组件</h1>
    <Demo :src="DialogDemo1"/>
    <Demo :src="DialogDemo2"/>
  </div>
</template>
<script lang="ts">
import DialogDemo1 from "../demo/dialog/demo1.vue";
import DialogDemo2 from "../demo/dialog/demo2.vue";
export default {
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
};
</script>
