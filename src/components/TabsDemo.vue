<template>
  <div>
    <Tabs>
      <Tab title="导航一">内容1</Tab>
      <Tab title="第二个导航" selected>内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {
    Tabs,
    Tab
  }
}
</script>
