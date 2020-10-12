import { createWebHashHistory, createRouter } from "vue-router";
import { h } from 'vue'
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import MarkDown from "./components/MarkDown.vue";
import Intro from "./markdown/intro.md"
import GetStarted from "./markdown/get-started.md"
import Install from "./markdown/install.md"

const md = content => h(
  MarkDown,
  {
    content, key: content
  }
)

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: md(Intro) },
        { path: "get-started", component: md(GetStarted) },
        { path: "install", component: md(Install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
