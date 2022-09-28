export const WINDOW_WIDTH = (state) => {
  state.windowWidth = window.innerWidth;
};

export const DONATION_CARD_STEPPER_NEXT = (state) => {
  state.donationCardsteps + 1;
};

export const DONATION_CARD_STEPPER_BACK = (state) => {
  state.donationCardsteps - 1;
};

export const DONATION_MAIN_STEPPER_NEXT = (state) => {
  state.donationSteps = state.donationSteps + 1;
};

export const DONATION_MAIN_STEPPER_BACK = (state) => {
  state.donationSteps = state.donationSteps - 1;
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

export const SET_CREATOR_SITE = (state, payload) => {
  state.creator_site = payload.site;
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
    rskBal: payload.balanceRSK,
    tsyBal: payload.balanceTSY,
  };
};

export const CLEAR_BALANCE = (state) => {
  state.balanceOf = 0;
};

export const SET_NET = (state, payload) => {
  state.netID = payload;
};

export const LOADING_DATA = (state, status) => {
  state.fetchingData = status;
};

export const LOADING_DATA_WAIT = (state) => {
  state.fetchingDataWait = !state.fetchingDataWait;
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
