// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/index.css";

import Vuex from "vuex";
import axios from "axios";

import HeadertLayout from "~/layouts/Header.vue";
import { store } from "~/store";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", HeadertLayout);
  Vue.use(Vuex);
  appOptions.store = store;
  appOptions.store.dispatch("autoLogin");
}
