<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="navBar">
    <div 
        class="gulu-tabs-nav-item" 
        v-for="(title, index) in titles" 
        :key="index" :class="{'active': index === activedIndex}"
        @click="checkPane(index)"
        :ref="el => {index === activedIndex && (activedRef = el)}"
    >{{title}}</div>
    <div 
      class="gulu-tabs-nav-indicator" 
      :style="`width: ${indicator.width}px; transform: translateX(${indicator.left}px)`"
    ></div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item" :is="activedTabPane" :key="activedTabPane"/>
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  reactive
} from 'vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const activedIndex = ref(0)
    const activedRef = ref < HTMLDivElement > (null)
    const navBar = ref < HTMLDivElement > (null)
    const indicator = reactive({
      width: 0,
      left: 0,
    })

    watchEffect(() => {
      indicator.width = activedRef.value?.getBoundingClientRect().width || 0
      indicator.left = activedRef.value?.getBoundingClientRect().left - navBar.value?.getBoundingClientRect().left
    })

    const tabPanes = context.slots.default();
    const titles = tabPanes.map(item => item.props.title)

    tabPanes.forEach(tab => {
      if (tab.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    activedIndex.value = tabPanes.reduce((res, item, index) => {
      return item.props.selected !== undefined ? index : res
    }, 0)

    const activedTabPane = computed(() => {
      return tabPanes[activedIndex.value]
    })
    const checkPane = index => {
      activedIndex.value = index
    }

    return {
      activedIndex,
      activedRef,
      titles,
      checkPane,
      navBar,
      indicator,
      activedTabPane,
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
