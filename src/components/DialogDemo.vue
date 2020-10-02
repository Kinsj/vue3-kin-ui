<template>
<div>Dialog 示例</div>
<h1>示例1</h1>
<div style="position: relative; z-index: 1;">
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :onOk="close => close()">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</div>
<h1>示例2</h1>
<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
import openDialog from '../lib/openDialog'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }

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
      x,
      toggle,
      showDialog
    }
  }
}
</script>
