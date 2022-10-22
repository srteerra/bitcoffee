/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use-strict";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";

import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/style.scss";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  store,
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");

// Vue.config.productionTip = false

// On resize change
window.addEventListener("resize", () => {
  store.commit("WINDOW_WIDTH");
});
