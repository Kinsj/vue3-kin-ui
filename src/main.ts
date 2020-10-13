import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import Demo from './components/Demo.vue';
import './lib/svg.js'
import 'github-markdown-css'
import './assets/svg'
// prism-风格: coy,dark,funky,okaidia,solarizedlight,tomorrow,twilight
import 'prismjs/themes/prism-coy.css' 
import 'vue3-kin-ui/dist/lib/kin.css'

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Demo", Demo)