/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use-strict";
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
// import { client } from "../lib/sanityClient";
// import imageUrlBuilder from "@sanity/image-url";
import detectEthereumProvider from "@metamask/detect-provider";
import $ from "jquery";
import AOS from "aos";

import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/style.scss";

// Get a pre-configured url-builder from your sanity client
// const builder = imageUrlBuilder(client);
const provider = await detectEthereumProvider();
const ethereum = window.ethereum;

console.log("providers:", ethereum);
console.log("provider:", provider);

// const web3 = require("web3")
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

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

// // On resize change
// window.addEventListener("resize", () => {
//   store.commit("WINDOW_WIDTH");
// });

// // On Acc change
// ethereum.on("accountsChanged", function (accounts) {
//   console.log(accounts);
//   if (accounts.length > 0) {
//     store.dispatch("setAcc", accounts[0]);
//     const userDoc = {
//       _type: "users",
//       _id: store.getters.getAddress,
//       userName: "Unnamed",
//       userAddress: store.getters.getAddress,
//       userTrees: 0,
//       userCountry: "Undefined",
//     };

//     client.createIfNotExists(userDoc);
//     client.getDocument(store.getters.getAddress).then((users) => {
//       console.log(`${users.userName}`);
//       store.commit("SET_PLANTED_TREES", { amount: users.userTrees });
//       store.commit("SET_USER_COUNTRY", { country: users.userCountry });
//       store.commit("SET_USERNAME", { name: users.userName });
//       if (users.userAvatar == undefined) {
//         store.commit("SET_AVATAR", { avatar: undefined });
//       } else {
//         store.commit("SET_AVATAR", {
//           avatar: builder.image(users.userAvatar).url(),
//         });
//       }
//     });
//     store.dispatch("addNotification", {
//       type: "warning",
//       message: "Account changed.",
//     });
//   } else {
//     window.location.reload();
//   }
// });

// ethereum.on("disconnect", (error) => {
//   console.log(error);
// });

// // On Chain change
// ethereum.on("chainChanged", (_chainId) => {
//   console.log(_chainId);
//   if (_chainId === "0x38") {
//     try {
//       store.dispatch("updateBalance");
//       store.commit("SET_NET", parseInt(_chainId, 16));
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     console.log("change your chain");
//     store.commit("CLEAR_BALANCE");
//     store.commit("SET_NET", parseInt(_chainId, 16));
//   }
//   // window.location.reload()
// });
