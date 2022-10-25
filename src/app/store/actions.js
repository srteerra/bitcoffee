/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { client } from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const provider = window.ethereum;
let ethereum = window.ethereum;

const net = await web3.eth.net.getId();

const artifact = require("../../../build/contracts/Bitcoffee.json");
const artifact_crowdfunding = require("../../../build/contracts/CrowdFund.json");
const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
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
  async activeCampaigns({ commit, getters, dispatch }, payload) {
    if (provider) {
      console.log("camps:", payload);
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding.abi,
        artifact_crowdfunding.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const campaigns = await tokenContract.methods
        .campaigns(payload.campaign)
        .call();

      console.log(campaigns);
    } else {
      console.log("install a wallet");
    }
  },
  async activeCampaignsRIF({ commit, getters, dispatch }, payload) {
    if (provider) {
      console.log("camps:", payload);
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding_rif.abi,
        artifact_crowdfunding_rif.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const campaigns = await tokenContract.methods
        .campaigns(payload.campaign)
        .call();

      console.log(campaigns);
    } else {
      console.log("install a wallet");
    }
  },
  async approveSpender({ commit, getters, dispatch }) {
    if (provider) {
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact.abi,
        artifact.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const approval = await tokenContract.methods
        .approve(artifact_crowdfunding.networks[net].address, 100000)
        .send({ from: ethereum.selectedAddress });

      approval;
    } else {
      console.log("install a wallet");
    }
  },
  async approveSpenderRIF({ commit, getters, dispatch }) {
    if (provider) {
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact.abi,
        "0x19f64674d8a5b4e652319f5e239efd3bc969a1fe"
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const approval = await tokenContract.methods
        .approve(
          artifact_crowdfunding_rif.networks[net].address,
          "50000000000000000000"
        )
        .send({ from: ethereum.selectedAddress });

      approval;
    } else {
      console.log("install a wallet");
    }
  },
  async pledgeCampaign({ commit, getters, dispatch }, payload) {
    if (provider) {
      console.log("pledge:", payload.campaign);
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding.abi,
        artifact_crowdfunding.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const campaigns = await tokenContract.methods
        .pledge(payload.campaign, payload.amount)
        .send({ from: ethereum.selectedAddress });

      campaigns;
    } else {
      console.log("install a wallet");
    }
  },
  async pledgeCampaignRIF({ commit, getters, dispatch }, payload) {
    if (provider) {
      console.log("pledge:", payload.campaign);
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding_rif.abi,
        artifact_crowdfunding_rif.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const campaigns = await tokenContract.methods
        .pledge(payload.campaign, "50000000000000000000")
        .send({ from: ethereum.selectedAddress });

      campaigns;
    } else {
      console.log("install a wallet");
    }
  },
  async launchGoal({ commit, getters, dispatch }, payload) {
    if (provider) {
      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding.abi,
        artifact_crowdfunding.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      var date = new Date().getTime() / 1000;
      console.log(date);

      const launch = await tokenContract.methods
        .launch(100000, 1665503568, 1665503768)
        .send({ from: ethereum.selectedAddress });

      console.log(tokenContract);
      launch;
    } else {
      console.log("install a wallet");
    }
  },
  async launchGoalRIF({ commit, getters, dispatch }, payload) {
    if (provider) {
      console.log(payload.amount);
      console.log(payload.category);
      console.log(payload.startDate);
      console.log(payload.endDate);
      const amountRIF = web3.utils.toWei(payload.amount, "ether");
      console.log(amountRIF);

      const net = await web3.eth.net.getId();
      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding_rif.abi,
        artifact_crowdfunding_rif.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      var date = new Date().getTime() / 1000;
      console.log(date);

      const launch = await tokenContract.methods
        .launch(
          amountRIF,
          payload.startDate,
          payload.endDate,
          payload.title,
          payload.desc,
          payload.category
        )
        .send({ from: ethereum.selectedAddress });

      console.log(tokenContract);
      launch;
    } else {
      console.log("install a wallet");
    }
  },
  async updateBalance({ commit }) {
    if (provider) {
      const net = await web3.eth.net.getId();
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
      var adjustedBalance = (await balanceTSY) / Math.pow(10, 3);
      commit("SET_BALANCE", {
        balanceRSK: balanceRSK,
        balanceTSY: adjustedBalance,
      });
    } else {
      console.log("install a wallet");
    }
  },
  async getCreatorPage({ commit, getters }, payload) {
    if (provider) {
      commit("LOADING_DATA", true);
      console.log(payload.user);
      const query =
        '*[_type == "users" && userName == $user] {userName, userAddress, userSite, userTitle, userDesc, userSubtitle, userAvatar, userBg}';
      const params = { user: payload.user };

      client
        .fetch(query, params)
        .then((users) => {
          console.log(users);
          if (users.length > 0) {
            users.forEach(async (user) => {
              console.log(`${user.userName} (${user.userAddress})`);
              commit("SET_CREATOR_USERNAME", { name: user.userName });
              commit("SET_CREATOR_SITE", { site: user.userSite });
              commit("SET_CREATOR_DESC", { desc: user.userDesc });
              commit("SET_CREATOR_TITLE", { title: user.userTitle });
              commit("SET_CREATOR_SUBTITLE", {
                subtitle: user.userSubtitle,
              });

              if (user.userAvatar == undefined) {
                client
                  .fetch(
                    '*[_type == "assets" && assetName == "DefaultAvatar"] {assetProvider}'
                  )
                  .then((assets) => {
                    if (assets.length > 0) {
                      commit("SET_CREATOR_AVATAR", {
                        avatar: builder
                          .image(assets[0].assetProvider.asset._ref)
                          .url(),
                      });
                    } else {
                      console.log("Avatar not found");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                commit("SET_CREATOR_AVATAR", {
                  avatar: builder.image(user.userAvatar).url(),
                });
              }

              if (user.userBg == undefined) {
                client
                  .fetch(
                    '*[_type == "assets" && assetName == "DefaultBackground"] {assetProvider}'
                  )
                  .then((assets) => {
                    if (assets.length > 0) {
                      commit("SET_CREATOR_BACKGROUND", {
                        bg: builder
                          .image(assets[0].assetProvider.asset._ref)
                          .url(),
                      });
                    } else {
                      console.log("Background not found");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                commit("SET_CREATOR_BACKGROUND", {
                  bg: builder.image(user.userBg).url(),
                });
              }
              commit("CREATOR_FOUND", { status: true });
              commit("LOADING_DATA", false);
            });
          } else {
            console.log("Creator not found");
            commit("CREATOR_FOUND", { status: false });
            commit("LOADING_DATA", false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("install a wallet");
    }
  },
  async sendSingleDonation({ dispatch, commit }, payload) {
    if (provider) {
      let from = ethereum.selectedAddress;

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

      const query =
        '*[_type == "users" && userName == $user] {userName, userAddress}';
      const params = { user: payload.creator };

      client
        .fetch(query, params)
        .then((users) => {
          console.log(users);
          if (users.length > 0) {
            users.forEach((user) => {
              console.log(`${user.userName} (${user.userAddress})`);
              commit("TRANSACTION_WAIT");
              tokenContract.methods
                .transfer(user.userAddress, amount)
                .send({
                  from,
                })
                .on("transactionHash", (hash) => {
                  console.log(hash);
                  commit("DONATION_MAIN_STEPPER_NEXT");
                  commit("SET_TRANSACTION_HASH", { hash: hash });
                })
                .on("receipt", (receipt) => {
                  // Receipt
                  console.log(receipt);
                  commit("TRANSACTION_WAIT");
                  commit("DONATION_MAIN_STEPPER_NEXT");
                  dispatch("updateBalance");
                  dispatch("addNotification", {
                    type: "success",
                    message: "Successful transaction!",
                  });
                })
                .catch((err) => {
                  if (err.code === 4001) {
                    console.log("Request denied.");
                    commit("TRANSACTION_WAIT");
                    commit("DONATION_MAIN_STEPPER_INITIAL");
                    dispatch("addNotification", {
                      type: "danger",
                      message: "Request denied.",
                    });
                  }
                });
            });
          } else {
            dispatch("addNotification", {
              type: "danger",
              message: "Error with the address.",
            });
          }
        })
        .catch((err) => {
          dispatch("addNotification", {
            type: "danger",
            message: err,
          });
        });
    } else {
      console.log("install a wallet");
    }
  },
  async connect_wallet({ commit, dispatch }) {
    if (provider) {
      commit("CONNECT_BUTTON", true); // Button disabled
      commit("LOADING_DATA_WAIT", true); // Loading data on

      if (ethereum) {
        ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1f" }], // chainId must be in hexadecimal numbers
          })
          .then((res) => {
            console.log(res);
            ethereum
              .request({ method: "eth_requestAccounts" })
              .then((provider) => {
                if (provider) {
                  commit("CURRENT_ADDRESS", ethereum.selectedAddress);

                  commit("IS_CONNECTED", true);
                  commit("DISCONNECT_BUTTON", false); // Disconnect button enabled on nav
                  commit("LOADING_DATA_WAIT", false); // Loading data off

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
                          userTitle: "",
                          userSite: "",
                          userSubtitle: "",
                          userDesc: "",
                        };

                        client.createIfNotExists(userDoc);

                        client
                          .getDocument(ethereum.selectedAddress)
                          .then((users) => {
                            console.log(`${users.userName}`);
                            commit("SET_USERNAME", { name: users.userName });
                            commit("SET_USER_TITLE", {
                              title: users.userTitle,
                            });
                            commit("SET_USER_SITE", { site: users.userSite });
                            commit("SET_USER_SUBTITLE", {
                              subtitle: users.userSubtitle,
                            });
                            commit("SET_USER_DESC", { desc: users.userDesc });

                            if (users.userAvatar == undefined) {
                              commit("SET_AVATAR", { avatar: undefined });
                            } else {
                              commit("SET_AVATAR", {
                                avatar: builder.image(users.userAvatar).url(),
                              });
                            }

                            if (users.userBg == undefined) {
                              commit("SET_BACKGROUND", { bg: undefined });
                            } else {
                              commit("SET_BACKGROUND", {
                                bg: builder.image(users.userBg).url(),
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
                          userTitle: "",
                          userSite: "",
                          userSubtitle: "",
                          userDesc: "",
                        };

                        client.createIfNotExists(userDoc);

                        client
                          .getDocument(ethereum.selectedAddress)
                          .then((users) => {
                            console.log(`${users.userName}`);
                            commit("SET_USERNAME", { name: users.userName });
                            commit("SET_USER_TITLE", {
                              title: users.userTitle,
                            });
                            commit("SET_USER_SITE", { site: users.userSite });
                            commit("SET_USER_SUBTITLE", {
                              subtitle: users.userSubtitle,
                            });
                            commit("SET_USER_DESC", { desc: users.userDesc });

                            if (users.userAvatar == undefined) {
                              commit("SET_AVATAR", { avatar: undefined });
                            } else {
                              commit("SET_AVATAR", {
                                avatar: builder.image(users.userAvatar).url(),
                              });
                            }

                            if (users.userBg == undefined) {
                              commit("SET_BACKGROUND", { bg: undefined });
                            } else {
                              commit("SET_BACKGROUND", {
                                bg: builder.image(users.userBg).url(),
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
                  commit("LOADING_DATA_WAIT", false); // Loading data off
                } else if (err.code === -32002) {
                  console.log("Request still in progress.");
                  dispatch("addNotification", {
                    type: "danger",
                    message: "Metamask is already processing.",
                  });
                  commit("CONNECT_BUTTON", false); // Button enabled
                  commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
                  commit("LOADING_DATA_WAIT", false); // Loading data off
                } else {
                  console.error(err);
                  dispatch("addNotification", {
                    type: "danger",
                    message: err,
                  });
                  commit("CONNECT_BUTTON", false); // Button enabled
                  commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
                  commit("LOADING_DATA_WAIT", false); // Loading data off
                }
              });
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
              commit("LOADING_DATA_WAIT", false); // Loading data off
            } else if (err.code === -32002) {
              console.log("Request still in progress.");
              dispatch("addNotification", {
                type: "danger",
                message: "Metamask is already processing.",
              });
              commit("CONNECT_BUTTON", false); // Button enabled
              commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
              commit("LOADING_DATA_WAIT", false); // Loading data off
            } else {
              console.error(err);
              dispatch("addNotification", {
                type: "danger",
                message: err,
              });
              commit("CONNECT_BUTTON", false); // Button enabled
              commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
              commit("LOADING_DATA_WAIT", false); // Loading data off
            }
          });
      } else {
        console.log("Please install a wallet!");
        commit("SHOW_INSTALL_METAMASK");
        commit("CONNECT_BUTTON", false); // Button enabled
        commit("DISCONNECT_BUTTON", true); // Disconnect button disabled on nav
        commit("LOADING_DATA_WAIT", false); // Loading data off
      }
    } else {
      console.log("install a wallet");
    }
  },
  async updateAccount({ commit, getters, dispatch }, payload) {
    if (provider) {
      commit("LOADING_DATA_WAIT");
      if (payload.avatar) {
        client.assets
          .upload("image", payload.avatar)
          .then((imageAsset) => {
            // Here you can decide what to do with the returned asset document.
            // If you want to set a specific asset field you can to the following:
            return client
              .patch(getters.getAddress)
              .set({
                userAvatar: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: imageAsset._id,
                  },
                },
              })
              .commit()
              .then((res) => {
                console.log(res);
                commit("SET_AVATAR", {
                  avatar: builder.image(res.userAvatar).url(),
                });
              });
          })
          .then(() => {
            console.log("Done!");
          });
      }

      if (payload.bg) {
        client.assets
          .upload("image", payload.bg)
          .then((imageAsset) => {
            // Here you can decide what to do with the returned asset document.
            // If you want to set a specific asset field you can to the following:
            return client
              .patch(getters.getAddress)
              .set({
                userBg: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: imageAsset._id,
                  },
                },
              })
              .commit()
              .then((res) => {
                console.log(res);
                console.log(builder.image(res.userBg).url());
                commit("SET_BACKGROUND", {
                  bg: builder.image(res.userBg).url(),
                });
              });
          })
          .then(() => {
            console.log("Done!");
          });
      }

      const query =
        '*[_type == "users" && userName == $user] {userName, userAddress}';
      const params = { user: payload.name ?? payload.oldName };

      client.fetch(query, params).then((users) => {
        let nUser;
        let nSite;
        let nTitle;
        let nSubitle;
        let nDesc;

        if (!payload.name) {
          nUser = getters.getUsername;
        } else {
          nUser = payload.name;
        }

        if (!payload.title) {
          nTitle = getters.getUserTitle;
        } else {
          nTitle = payload.title;
        }

        if (!payload.site) {
          nSite = getters.getUserSite;
        } else {
          nSite = payload.site;
        }

        if (!payload.sub) {
          nSubitle = getters.getUserSubtitle;
        } else {
          nSubitle = payload.sub;
        }

        if (!payload.desc) {
          nDesc = getters.getUserDescription;
        } else {
          nDesc = payload.desc;
        }

        if (users.length === 0) {
          console.log("Not used");
          client
            .patch(getters.getAddress) // Document ID to patch
            .set({
              userName: nUser,
              userSite: nSite,
              userTitle: nTitle,
              userSubtitle: nSubitle,
              userDesc: nDesc,
            })
            .commit()
            .then((updatedAcc) => {
              console.log("Hurray, the acc is updated! New document:");
              console.log(updatedAcc);
              console.log(updatedAcc.userName);
              console.log(updatedAcc.userSubtitle);
              commit("SET_USERNAME", { name: updatedAcc.userName });
              commit("SET_USER_SITE", { site: updatedAcc.userSite });
              commit("SET_USER_TITLE", { title: updatedAcc.userTitle });
              commit("SET_USER_SUBTITLE", {
                subtitle: updatedAcc.userSubtitle,
              });
              commit("SET_USER_DESC", { desc: updatedAcc.userDesc });
              commit("LOADING_DATA_WAIT");
              commit("SHOW_EDIT_PROFILE");
              dispatch("addNotification", {
                type: "success",
                message: "Profile updated!",
              });
            })
            .catch((err) => {
              console.error("Oh no, the update failed: ", err.message);
              commit("LOADING_DATA_WAIT");
              commit("SHOW_EDIT_PROFILE");
              dispatch("addNotification", {
                type: "danger",
                message: "Oh no, the update failed.",
              });
            });
        } else {
          console.log("Used");
          client
            .patch(getters.getAddress) // Document ID to patch
            .set({
              userName: getters.getUsername,
              userSite: nSite,
              userTitle: nTitle,
              userSubtitle: nSubitle,
              userDesc: nDesc,
            })
            .commit()
            .then((updatedAcc) => {
              console.log("Hurray, the acc is updated! New document:");
              console.log(updatedAcc);
              console.log(updatedAcc.userName);
              console.log(updatedAcc.userSubtitle);
              commit("SET_USERNAME", { name: updatedAcc.userName });
              commit("SET_USER_SITE", { site: updatedAcc.userSite });
              commit("SET_USER_TITLE", { title: updatedAcc.userTitle });
              commit("SET_USER_SUBTITLE", {
                subtitle: updatedAcc.userSubtitle,
              });
              commit("SET_USER_DESC", { desc: updatedAcc.userDesc });
              commit("LOADING_DATA_WAIT");
              commit("SHOW_EDIT_PROFILE");
              dispatch("addNotification", {
                type: "success",
                message: "Profile updated!",
              });
            })
            .catch((err) => {
              console.error("Oh no, the update failed: ", err.message);
              commit("LOADING_DATA_WAIT");
              commit("SHOW_EDIT_PROFILE");
              dispatch("addNotification", {
                type: "danger",
                message: "Oh no, the update failed.",
              });
            });
        }
      });
    } else {
      console.log("install a wallet");
    }
  },
  async changeNetwork() {
    if (provider) {
      ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1f" }], // chainId must be in hexadecimal numbers
      });
    } else {
      console.log("install a wallet");
    }
  },
  async addNotification({ commit }, payload) {
    commit("PUSH_NOTIFICATION", payload);
  },
  async removeNotification({ commit }, notification) {
    commit("REMOVE_NOTIFICATION", notification);
  },
};
