import Vue from "vue";
import App from "./app.vue";


import "../src/assets/styles/style.css";
import "../src/assets/styles/style.styl";
import "../src/assets/styles/global.styl";

import "../src/assets/images/07b23.jpg";

const root = document.createElement("div")
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)