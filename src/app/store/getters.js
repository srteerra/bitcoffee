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

export const isConnected = () => {
  return state.isconnected;
};
