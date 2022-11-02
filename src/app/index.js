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

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

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

if (window.ethereum) {
  const ethereum = window.ethereum;

  // On Acc change
  ethereum.on("accountsChanged", async function (accounts) {
    if (store.state.isconnected) {
      window.location.reload();
    }
  });

  ethereum.on("disconnect", (error) => {
    console.log(error);
  });

  // On Chain change
  ethereum.on("chainChanged", (_chainId) => {
    console.log(_chainId);
    if (_chainId === "0x1f") {
      try {
        store.dispatch("updateBalance");
        store.commit("SET_NET", parseInt(_chainId, 16));
      } catch (error) {
        console.log(error);
      }
    } else {
      window.location.reload();
    }
  });
} else {
  console.log("install a wallet");
}
