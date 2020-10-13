<demo>常规使用</demo>
<template>
  <div>
    <Tabs>
      <Tab title="导航一">内容1</Tab>
      <Tab title="第二个导航" selected>内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import {Tabs, Tab} from 'vue3-kin-ui'
export default {
  components: {
    Tabs,
    Tab
  }
}
</script>
