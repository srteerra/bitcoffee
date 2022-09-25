/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";
import { client } from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
console.log(Web3.givenProvider);

const ethereum = window.ethereum;

const net = await web3.eth.net.getId();

const artifact = require("../../../build/contracts/Thosony.json");
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
      artifact.networks[net].address
    );

    const balanceRSK = await web3.eth.getBalance(ethereum.selectedAddress);
    const balanceTSY = await tokenContract.methods
      .balanceOf(ethereum.selectedAddress)
      .call();

    console.log(balanceRSK);
    console.log(balanceTSY);
    commit("SET_BALANCE", { balanceRSK: balanceRSK, balanceTSY: balanceTSY });
  },
  async getCreatorPage({ commit }, payload) {
    console.log(payload.user);
    const query =
      '*[_type == "users" && userName == $user] {userName, userAddress}';
    const params = { user: payload.user };

    client
      .fetch(query, params)
      .then((users) => {
        console.log(users);
        if (users.length > 0) {
          users.forEach((user) => {
            console.log(`${user.userName} (${user.userAddress})`);
            commit("SET_CREATOR_USERNAME", { name: user.userName });
            if (user.userAvatar == undefined) {
              commit("SET_CREATOR_AVATAR", { avatar: undefined });
            } else {
              commit("SET_CREATOR_AVATAR", {
                avatar: builder.image(user.userAvatar).url(),
              });
            }
            commit("CREATOR_FOUND", { status: true });
          });
        } else {
          console.log("Creator not found");
          commit("CREATOR_FOUND", { status: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async sendDonation({ commit }, payload) {
    let from = ethereum.selectedAddress;
    let to = "0xa1324A30D08F064a8A0c54C26151C68e9D3E06fc";

    const ab = tokenContract.methods
      .decimals()
      .call()
      .then((res) => {
        console.log("decimals: ", res);

        return res;
      });

    let decimals = web3.utils.toBN(await ab);
    var value = (payload.amount * 10 ** decimals).toString();
    let amount = web3.utils.toBN(value);

    if (Number(amount <= 0)) {
      alert("Invalid amount");
      return;
    }

    tokenContract.methods.transfer(to, amount).send({
      from,
    });
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

            const query =
              '*[_type == "users" && userName == $user] {userName, userAddress}';
            const params = { user: "Unnamed" };

            client
              .fetch(query, params)
              .then((users) => {
                console.log(users);
                if (users.length === 0) {
                  // Name available
                  var userDoc = {
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
                } else {
                  // Name not available
                  console.log("Name not available");
                  const ran = Math.floor(Math.random() * 10001);

                  var userDoc = {
                    _type: "users",
                    _id: ethereum.selectedAddress,
                    userName: "Unnamed" + ran,
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
                console.log(err);
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
