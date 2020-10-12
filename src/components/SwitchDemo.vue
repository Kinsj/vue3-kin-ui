<template>
  <div>
    <h1>Switch 组件</h1>
    <component :is="SwitchDemo1" />
    <component :is="SwitchDemo2" />
  </div>
</template>
<script lang="ts">
import SwitchDemo1 from "../demo/switch/demo1.vue";
import SwitchDemo2 from "../demo/switch/demo2.vue";
import { ref } from "vue";
export default {
  setup() {
    const bool = ref(false);
    return { SwitchDemo1, SwitchDemo2 };
  },
};
</script>
