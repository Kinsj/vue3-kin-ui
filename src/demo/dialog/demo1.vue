<demo>常规使用</demo>
<template>
<div style="position: relative; z-index: 1;">
  <Button @click="toggle">toggle</Button>
  <Dialog 
    v-model:visible="x" 
    :closeOnClickOverlay="false" 
    :onOk="close => close()"
  >
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
import {Dialog, Button} from 'vue3-kin-ui'

export default {
  components: {
    Button,
    Dialog
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }

    return {
      x,
      toggle,
    }
  }
}
</script>
