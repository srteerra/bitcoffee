const Web3 = require("web3");

const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
let tokenContract;

export const WINDOW_WIDTH = (state) => {
  state.windowWidth = window.innerWidth;
};

export const SET_CRYPTO_PRICE = (state, payload) => {
  state.rifPrice = payload.USD_price;
};

export const DONATION_CARD_STEPPER_NEXT = (state) => {
  state.donationCardsteps = state.donationCardsteps + 1;
};

export const DONATION_CARD_STEPPER_BACK = (state) => {
  state.donationCardsteps = state.donationCardsteps - 1;
};

export const DONATION_CARD_STEPPER_INITIAL = (state) => {
  state.donationSteps = 1;
};

export const DONATION_MAIN_STEPPER_NEXT = (state) => {
  state.donationSteps = state.donationSteps + 1;
};

export const DONATION_MAIN_STEPPER_BACK = (state) => {
  state.donationSteps = state.donationSteps - 1;
};

export const DONATION_MAIN_STEPPER_INITIAL = (state) => {
  state.donationSteps = 1;
};

export const SET_USERNAME = (state, payload) => {
  state.username = payload.name;
};

export const SET_USER_TITLE = (state, payload) => {
  state.user_title = payload.title;
};

export const SET_USER_SUBTITLE = (state, payload) => {
  state.user_subtitle = payload.subtitle;
};

export const SET_USER_DESC = (state, payload) => {
  state.user_description = payload.desc;
};

export const SET_USER_SITE = (state, payload) => {
  state.user_site = payload.site;
};

export const SET_USER_INSTAGRAM = (state, payload) => {
  state.user_instagram = payload.instagram;
};

export const SET_USER_TWITTER = (state, payload) => {
  state.user_twitter = payload.twitter;
};

export const SET_USER_TWITCH = (state, payload) => {
  state.user_twitch = payload.twitch;
};

export const SET_USER_YOUTUBE = (state, payload) => {
  state.user_youtube = payload.youtube;
};

export const SET_CREATOR_SITE = (state, payload) => {
  state.creator_site = payload.site;
};

export const SET_CREATOR_INSTAGRAM = (state, payload) => {
  state.creator_instagram = payload.instagram;
};

export const SET_CREATOR_TWITTER = (state, payload) => {
  state.creator_twitter = payload.twitter;
};

export const SET_CREATOR_TWITCH = (state, payload) => {
  state.creator_twitch = payload.twitch;
};

export const SET_CREATOR_YOUTUBE = (state, payload) => {
  state.creator_youtube = payload.youtube;
};

export const SET_CREATOR_ADDRESS = (state, payload) => {
  state.creator_address = payload.address;
};

export const SET_CREATOR_TITLE = (state, payload) => {
  state.creator_title = payload.title;
};

export const SET_CREATOR_SUBTITLE = (state, payload) => {
  state.creator_subtitle = payload.subtitle;
};

export const SET_CREATOR_DESC = (state, payload) => {
  state.creator_description = payload.desc;
};

export const CREATOR_FOUND = (state, payload) => {
  state.creatorFound = payload.status;
};

export const SET_CREATOR_USERNAME = (state, payload) => {
  state.creator_username = payload.name;
};

export const SET_CREATOR_AVATAR = (state, payload) => {
  if (payload.avatar == undefined) {
    state.creator_avatar =
      "https://ipfs.io/ipfs/QmZWdmc9wwn51FupMqy3GYzkK4opu9dhWHpAiZKNe7vpBq?filename=BitcoffeePlace.png";
  } else {
    state.creator_avatar = payload.avatar;
  }
};

export const SWITCH_BLANK = (state) => {
  state.shadowblank = !state.shadowblank;
};

export const SET_AVATAR = (state, payload) => {
  if (payload.avatar == undefined) {
    state.avatar =
      "https://ipfs.io/ipfs/QmZWdmc9wwn51FupMqy3GYzkK4opu9dhWHpAiZKNe7vpBq?filename=BitcoffeePlace.png";
  } else {
    state.avatar = payload.avatar;
  }
};

export const SET_BACKGROUND = (state, payload) => {
  if (payload.bg == undefined) {
    state.user_bg =
      "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80";
  } else {
    state.user_bg = payload.bg;
  }
};

export const SET_CREATOR_BACKGROUND = (state, payload) => {
  if (payload.bg == undefined) {
    state.creator_bg =
      "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80";
  } else {
    state.creator_bg = payload.bg;
  }
};

export const DONATOR_DATA = (state, payload) => {
  state.donator = {
    donatorName: payload.name,
    donatorEmail: payload.email,
    donatorMessage: payload.message,
  };
};

export const CONNECT_BUTTON = (state, status) => {
  state.connectBtnState = status;
};

export const DISCONNECT_BUTTON = (state, status) => {
  state.disconnectBtnState = status;
};

export const CURRENT_ADDRESS = (state, payload) => {
  state.currentAccount = payload;
};

export const IS_CONNECTED = (state, status) => {
  state.isconnected = status;
};

export const SET_BALANCE = (state, payload) => {
  state.balanceOf = {
    rifBal: payload.balanceRIF,
    bitcBal: payload.balanceBITC,
  };
};

export const CLEAR_BALANCE = (state) => {
  state.balanceOf = 0;
};

export const SET_NET = (state, payload) => {
  state.netID = payload;
};

export const SET_SELECTED_CRYPTO = (state, payload) => {
  state.selectedCypto = payload.crypto;
};

export const SHOW_EDIT_LAUNCH = (state) => {
  state.launchGoalModal = !state.launchGoalModal;
};

export const SHOW_CANCEL_GOAL = (state) => {
  state.cancelGoalModal = !state.cancelGoalModal;
};

export const LOADING_DATA = (state, status) => {
  state.fetchingData = status;
};

export const LOADING_DATA_WAIT = (state) => {
  state.fetchingDataWait = !state.fetchingDataWait;
};

export const TRANSACTION_WAIT = (state) => {
  state.transactionWait = !state.transactionWait;
};

export const LOADING_PLEDGE = (state) => {
  state.fetchingPledge = !state.fetchingPledge;
};

export const LOADING_APPROVE = (state) => {
  state.fetchingApprove = !state.fetchingApprove;
};

export const LOADING_LAUNCH = (state) => {
  state.fetchingLaunch = !state.fetchingLaunch;
};
export const LOADING_CANCEL = (state) => {
  state.fetchingCancel = !state.fetchingCancel;
};

export const ALLOW_SPEND = (state, payload) => {
  state.allowedSpend = payload.allow;
};

export const SHOW_NOWALLET_NOTIFICATION = (state) => {
  state.noWalletNoti = !state.noWalletNoti;
};

export const SHOW_EDIT_PROFILE = (state) => {
  state.editProfileModal = !state.editProfileModal;
};

export const SHOW_CHANGE_NETWORK = (state) => {
  state.showpleaseChangeNetState = !state.showpleaseChangeNetState;
};

export const SHOW_INSTALL_METAMASK = (state) => {
  state.showinstallMetaModalState = !state.showinstallMetaModalState;
};

export const PUSH_NOTIFICATION = (state, payload) => {
  state.notifications.push({
    ...payload,
    id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
  });
};

export const REMOVE_NOTIFICATION = (state, NotificationToRemove) => {
  state.notifications = state.notifications.filter((notification) => {
    return notification.id != NotificationToRemove.id;
  });
};

export const SET_TRANSACTION_HASH = (state, payload) => {
  state.transactionHash = payload.hash;
};

export const SET_COUNT_RIF_CAMPAIGNS = async (state) => {
  if (window.ethereum) {
    const net = await web3.eth.net.getId();
    tokenContract = new web3.eth.Contract(
      artifact_crowdfunding_rif.abi,
      artifact_crowdfunding_rif.networks[net].address
    );

    tokenContract.setProvider(
      Web3.givenProvider || "https://public-node.testnet.rsk.co"
    );

    const count = await tokenContract.methods.count.call().call();

    console.log(await count);

    state.campaigns_count_rif = await count;
  } else {
    console.log("No wallet");
  }
};
