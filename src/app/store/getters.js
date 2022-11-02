import state from "./state";
import { client } from "../../lib/sanityClient";

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

export const getAddress = (state) => {
  return state.currentAccount;
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

export const getUserCategory = (state) => {
  return state.user_category;
};

export const isConnected = () => {
  return state.isconnected;
};

export const getDefaultAvatar = () => {
  const query =
    '*[_type == "assets" && assetName == "DefaultAvatar"] {assetProvider}';

  client
    .fetch(query)
    .then((assets) => {
      if (assets.length > 0) {
        return assets[0].assetProvider.asset._ref;
      } else {
        return console.log("Avatar not found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDefaultBackground = () => {
  const query =
    '*[_type == "assets" && assetName == "DefaultBackground"] {assetProvider}';

  client
    .fetch(query)
    .then((assets) => {
      if (assets.length > 0) {
        return assets[0].assetProvider.asset._ref;
      } else {
        return console.log("Background not found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
