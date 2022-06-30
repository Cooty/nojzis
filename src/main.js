import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./components/App.vue";
import "./styles/main.scss";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
