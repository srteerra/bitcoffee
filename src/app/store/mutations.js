export const WINDOW_WIDTH = (state) => {
  state.windowWidth = window.innerWidth;
};

export const SET_USERNAME = (state, payload) => {
  state.username = payload.name;
};

export const SWITCH_BLANK = (state) => {
  state.shadowblank = !state.shadowblank;
};

export const SET_AVATAR = (state, payload) => {
  if (payload.avatar == undefined) {
    state.avatar = "";
  } else {
    state.avatar = payload.avatar;
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

export const CURRENT_ADDRESS = (state, address) => {
  state.currentAccount = address;
};

export const IS_CONNECTED = (state, status) => {
  state.isconnected = status;
};

export const SET_BALANCE = (state, payload) => {
  state.balanceOf = payload.balance;
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

export const SHOW_NOWALLET_NOTIFICATION = (state) => {
  state.noWalletNoti = !state.noWalletNoti;
};

export const SHOW_CHANGE_NETWORK = (state) => {
  state.showpleaseChangeNetState = !state.showpleaseChangeNetState;
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
