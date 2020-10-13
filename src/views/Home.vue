<template>
<div class="bg" style="background-image: url(./img/bg.jpg)">
  <div class="text">
    <h1>Kin UI</h1>
    <h2>一套基于 Vue 3.0 + TypeScript 开发的</h2>
    <h2>UI 组件库</h2>
    <p class="actions">
      <Button level="main"><router-link to="/doc">开始使用</router-link></Button>
      <Button><a href="https://github.com"><svg class="icon">
        <use xlink:href="#i-github"></use>
      </svg> GitHub</a></Button>
    </p>
  </div>
  <img class="logo" src="/img/logo.png" alt="">
  <img class="footer" src="/img/footer.png" alt="">
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  },
};
</script>

<style lang="scss" scoped>
$blue: #078ef6;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.bg {
  background: 50% / cover no-repeat ;
  min-height: 100vh;
  overflow: hidden;

  .text {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 6vw;
    > h1 {
      font-size: 50px;
      &:after {
        margin-top: 20px;
        margin-bottom: 20px;
        content: '';
        display: block;
        width: 1.2em;
        height: 3.5px;
        background: $blue;
      }
    }
    > h2 {
      font-size: 24px;
      margin-top: 10px;
      color: #515a6e;
    }
    .actions {
      margin-top: 80px;
      button {
        margin-right: 10px;
        border-radius: 20px;
        &.gulu-level-normal {
          color: $blue;
          border-color: $blue;
        }
      }
    }
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 260px;
  }
  .logo {
    height: 60px;
    margin-left: 5vw;
    margin-top: 10px;
  }
  @media (max-width: 800px) {
    background: top / contain no-repeat ;
    .logo {
      height: 50px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}
</style>
