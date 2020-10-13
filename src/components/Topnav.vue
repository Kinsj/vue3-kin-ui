<template>
  <div class="topnav">
    <div class="logo"><router-link to="/"><img src="/img/logo.png" alt=""></router-link></div>
    <span class="toggleAside" :class="{'close': menuVisible}" @click="toggleMenu" >
      <svg class="icon">
        <use :xlink:href="`#i-${menuVisible ? 'close' : 'menu'}`"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu, menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    img {
      height: 30px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    font-size: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translate(0, -50%);
    display: none;
    color: #333;
    transition: all .3s ease;
    &.close {
      transform: translate(160px, -50%);
    }
  }
  @media (max-width: 500px) {
    background: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
    position: relative;
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
