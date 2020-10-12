<template>
  <div class="layout">
    <Topnav
      toggleMenuButtonVisible
      class="nav"
    />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: #02bcb0;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;

  > h2 {
    margin-top: 1em;
    margin-bottom: 20px;
    padding-left: 26px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    &:first-child {
      margin-top: 0;
    }
  }

  > ol {
    > li {
      padding: 4px 0;
      > a {
        font-size: 16px;
        line-height: 22px;
        display: block;
        padding: 0.5em 0 0.5em 40px;
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      .router-link-active {
        background: #e7f9f8;
        color: #02bcb0;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
