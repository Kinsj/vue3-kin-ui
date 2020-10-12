<template>
<article class="markdown-body" v-html="md">
</article>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const md = ref('');
    import(props.path).then(res => {
      md.value = res.default
    })

    return {
      md
    }
  }
}
</script>
