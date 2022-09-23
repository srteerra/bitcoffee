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
};
