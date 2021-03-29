import "./styles/main.scss";

import Vue from "vue";
import App from "./components/App.vue";

console.log("Hello from main");

new Vue({
    el: "#app",
    render: h => h(App)
});