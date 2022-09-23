/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

// // Get a pre-configured url-builder from your sanity client
// const builder = imageUrlBuilder(client);

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
console.log(Web3.givenProvider);

const ethereum = window.ethereum;

const net = await web3.eth.net.getId();
let tokenContract;

// let tokenContract = new web3.eth.Contract(artifact.abi, artifact.networks[netID].address)

export const actions = {
  async switchBlankBg(context) {
    context.commit("SWITCH_BLANK");
  },
  async showaddressToDonate(context) {
    context.commit("SHOW_ADDRESS_TO_DONATE");
  },
  async exportDonatorData(context, payload) {
    context.commit("DONATOR_DATA", payload);
  },
  async noWalletNotiShow(context) {
    context.commit("SHOW_NOWALLET_NOTIFICATION");
  },
  async showinstallMetaModal(context) {
    context.commit("SHOW_INSTALL_METAMASK");
  },
  async disconnectAcc() {
    window.location.reload();
  },
  async updateBalance({ commit }) {
    tokenContract = new web3.eth.Contract(
      artifact.abi,
      artifact.networks[networkId].address
    );

    const balanceRSK = await web3.eth.getBalance(from);
    const balanceTSY = await tokenContract.methods.balanceOf(from).call();

    commit("SET_BALANCE", { balanceRSK: balanceRSK, balanceTSY: balanceTSY });
  },
  async connect_wallet({ commit, dispatch }) {
    commit("CONNECT_BUTTON", true); // Button disabled
    commit("LOADING_DATA", true); // Loading data on

    if (ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((provider) => {
          if (provider) {
            commit("CURRENT_ADDRESS", ethereum.selectedAddress);

            commit("IS_CONNECTED", true);
            commit("DISCONNECT_BUTTON", false); // Disconnect button enabled on nav
            commit("LOADING_DATA", false); // Loading data off

            console.log(net);
            commit("SET_NET", net);

            dispatch("updateBalance");

            const userDoc = {
              _type: "users",
              _id: ethereum.selectedAddress,
              userName: "Unnamed",
              userAddress: ethereum.selectedAddress,
            };

            client.createIfNotExists(userDoc);
            client.getDocument(ethereum.selectedAddress).then((users) => {
              console.log(`${users.userName}`);
              commit("SET_USERNAME", { name: users.userName });
              if (users.userAvatar == undefined) {
                commit("SET_AVATAR", { avatar: undefined });
              } else {
                commit("SET_AVATAR", {
                  avatar: builder.image(users.userAvatar).url(),
                });
              }
            });
          }
        })
        .catch((err) => {
          if (err.code === 4001) {
            console.log("Request denied.");
            dispatch("addNotification", {
              type: "danger",
              message: "Request denied.",
            });
            commit("CONNECT_BUTTON", false); // Button enabled
            commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
            commit("LOADING_DATA", false); // Loading data off
          } else if (err.code === -32002) {
            console.log("Request still in progress.");
            dispatch("addNotification", {
              type: "danger",
              message: "Metamask is already processing.",
            });
            commit("CONNECT_BUTTON", false); // Button enabled
            commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
            commit("LOADING_DATA", false); // Loading data off
          } else {
            console.error(err);
            dispatch("addNotification", {
              type: "danger",
              message: err,
            });
            commit("CONNECT_BUTTON", false); // Button enabled
            commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
            commit("LOADING_DATA", false); // Loading data off
          }
        });
    } else {
      console.log("Please install a wallet!");
      commit("SHOW_INSTALL_METAMASK");
      commit("CONNECT_BUTTON", false); // Button enabled
      commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
      commit("LOADING_DATA", false); // Loading data off
    }
  },
  async addNotification({ commit }, payload) {
    commit("PUSH_NOTIFICATION", payload);
  },
  async removeNotification({ commit }, notification) {
    commit("REMOVE_NOTIFICATION", notification);
  },
};
