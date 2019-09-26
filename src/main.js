import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import VueRouter from "vue-router";

import { store } from "./store/index.js";
import { routes } from "./routes";
import "aos/dist/aos.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  store,
  el: "#app",
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
});
