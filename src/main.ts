import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

const app = createApp(App);
app.use(router).mount("#app");
console.log(app, "通过createApp创建的vue应用");
