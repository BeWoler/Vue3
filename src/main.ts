import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "./components/UI";

const app = createApp(App);

app.component("MyButton", components.MyButton);

app.use(store).use(router).mount("#app");
