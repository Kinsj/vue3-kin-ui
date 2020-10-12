<demo>openDialog 快捷使用</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import openDialog from '../../lib/openDialog'
import {
  ref
} from 'vue'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: 'dialog',
        content: 'cancel直接关闭dialog, ok延时1秒关闭dialog',
        onOk: close => {
          alert('1秒后关闭dialog')
          setTimeout(close, 1000)
        }
      });
    }

    return {
      showDialog
    }
  }
}
</script>
