<template>
  <div>
    <h1>Button 组件</h1>
    <Demo :src="ButtonDemo1"/>
    <Demo :src="ButtonDemo2"/>
    <Demo :src="ButtonDemo3"/>
    <Demo :src="ButtonDemo4"/>
    <Demo :src="ButtonDemo5"/>
  </div>
</template>
<script lang="ts">
import ButtonDemo1 from "../demo/button/demo1.vue";
import ButtonDemo2 from "../demo/button/demo2.vue";
import ButtonDemo3 from "../demo/button/demo3.vue";
import ButtonDemo4 from "../demo/button/demo4.vue";
import ButtonDemo5 from "../demo/button/demo5.vue";
export default {
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    };
  },
};
</script>
