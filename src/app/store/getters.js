import state from "./state";

export const getBalanceOf = (state) => {
  return state.balanceOf;
};

export const getCreatorFound = (state) => {
  return state.creatorFound;
};

export const getCreatorAvatar = (state) => {
  return state.creator_avatar;
};

export const getCreatorUsername = (state) => {
  return state.creator_username;
};

export const getAvatar = (state) => {
  return state.avatar;
};

export const getUsername = (state) => {
  return state.username;
};

export const getUserbg = (state) => {
  return state.user_bg;
};

export const getUserTitle = (state) => {
  return state.user_title;
};

export const getUserSubtitle = (state) => {
  return state.user_subtitle;
};

export const getUserDescription = (state) => {
  return state.user_description;
};

export const isConnected = () => {
  return state.isconnected;
};
