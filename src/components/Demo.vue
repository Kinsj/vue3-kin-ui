<template>
  <div class="demo">
    <h2>{{src.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="src" />
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="codeVisible=false">隐藏代码</Button>
      <Button v-else @click="codeVisible=true">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre
        v-if="src" 
        v-html="sourceCode"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import {
  computed,
  ref
} from 'vue'

const Prism = (window as any).Prism

export default {
  props: {
    src: {
      type: Object,
      require: true
    }
  },
  setup(props) {
    const codeVisible = ref(false)
    const sourceCode = computed(() => {
      return Prism.highlight(props.src.__sourceCode, Prism.languages.html, 'html')
    })
    return {
      sourceCode,
      codeVisible
    }
  },
  components: {
    Button
  },
}
</script>
<style lang="scss">
$border-color: #d9d9d9;

.demo {
  margin: 16px 0 32px;

  >h2 {
    font-size: 16px;
    padding: 20px 16px;
    background: #e7f9f8;
    color: #000;
    font-weight: 600;
  }

  &-component {
    padding: 16px;
    background: #f9f9f9;
  }

  &-actions {
    padding: 8px 16px;
    background: #f9f9f9;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    background: #f9f9f9;
    overflow-x: auto;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
