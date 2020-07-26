// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/index.css";

import Vuex from "vuex";
import Notifications from "vue-notification/dist/ssr";
// import Echo from "laravel-echo";
// import io from "socket.io-client";

import HeadertLayout from "~/layouts/Header.vue";
import { store } from "~/store";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });

  Vue.component("Layout", HeadertLayout);
  Vue.use(Notifications);
  Vue.use(Vuex);
  appOptions.store = store;
  appOptions.store.dispatch("autoLogin");

  // Vue.prototype.$echo = new Echo({
  //   broadcaster: "socket.io",
  //   host: "localhost:6001",
  //   client: io
  // });
}
