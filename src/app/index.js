/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use-strict";
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import { client } from "../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import detectEthereumProvider from "@metamask/detect-provider";
// import $ from "jquery";
import AOS from "aos";

import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/style.scss";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);
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

// On resize change
window.addEventListener("resize", () => {
  store.commit("WINDOW_WIDTH");
});

// On Acc change
ethereum.on("accountsChanged", function (accounts) {
  console.log(accounts);
  if (accounts.length > 0) {
    store.commit("CURRENT_ADDRESS", accounts[0]);
    store.dispatch("updateBalance");

    const query =
      '*[_type == "users" && userAddress == $add] {userName, userAddress}';
    const params = { add: accounts[0] };

    client
      .fetch(query, params)
      .then((users) => {
        console.log(users);
        if (users.length > 0) {
          client.getDocument(accounts[0]).then((users) => {
            console.log(`${users.userName}`);
            store.commit("SET_USERNAME", { name: users.userName });
            store.commit("SET_USER_TITLE", { title: users.userTitle });
            store.commit("SET_USER_SITE", { site: users.userSite });
            store.commit("SET_USER_SUBTITLE", {
              subtitle: users.userSubtitle,
            });
            store.commit("SET_USER_DESC", { desc: users.userDesc });

            if (users.userAvatar == undefined) {
              store.commit("SET_AVATAR", { avatar: undefined });
            } else {
              store.commit("SET_AVATAR", {
                avatar: builder.image(users.userAvatar).url(),
              });
            }

            if (users.userBg == undefined) {
              store.commit("SET_BACKGROUND", { bg: undefined });
            } else {
              store.commit("SET_BACKGROUND", {
                bg: builder.image(users.userBg).url(),
              });
            }
          });
        } else {
          // Name not available
          console.log("cam232");
          const ran = Math.floor(Math.random() * 10001);

          var userDoc = {
            _type: "users",
            _id: accounts[0],
            userName: "Unnamed" + ran,
            userAddress: accounts[0],
            userTitle: "",
            userSite: "",
            userSubtitle: "",
            userDesc: "",
          };

          client.createIfNotExists(userDoc);

          client.getDocument(accounts[0]).then((users) => {
            console.log(`${users.userName}`);
            store.commit("SET_USERNAME", { name: users.userName });
            store.commit("SET_USER_TITLE", { title: users.userTitle });
            store.commit("SET_USER_SITE", { site: users.userSite });
            store.commit("SET_USER_SUBTITLE", {
              subtitle: users.userSubtitle,
            });
            store.commit("SET_USER_DESC", { desc: users.userDesc });

            if (users.userAvatar == undefined) {
              store.commit("SET_AVATAR", { avatar: undefined });
            } else {
              store.commit("SET_AVATAR", {
                avatar: builder.image(users.userAvatar).url(),
              });
            }

            if (users.userBg == undefined) {
              store.commit("SET_BACKGROUND", { bg: undefined });
            } else {
              store.commit("SET_BACKGROUND", {
                bg: builder.image(users.userBg).url(),
              });
            }
          });
        }
        store.dispatch("addNotification", {
          type: "warning",
          message: "Account changed.",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    window.location.reload();
  }
});

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
