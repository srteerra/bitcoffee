export default {
  fetchingData: false,
  fetchingDataWait: false,
  shadowblank: false,
  error: null,
  windowWidth: window.innerWidth,

  // Eth or wallet
  provider: null,
  currentAccount: null,
  isconnected: false,
  balanceOf: {
    rskBal: 0,
    tsyBal: 0,
  },
  contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  netID: null,

  selectedCypto: null,

  // Btn states
  connectBtnState: false,
  disconnectBtnState: true,

  // Modals
  showinstallMetaModalState: false,
  editProfileModal: false,

  // Notification Ex
  noWalletNoti: false,

  // Donator data
  donator: {
    donatorName: "",
    donatorEmail: "",
    donatorMessage: "",
  },

  // User data
  username: "",
  avatar: "",

  user_bg: "",
  user_site: "",
  user_title: "",
  user_subtitle: "",
  user_description: "",

  // Creator data
  creator_username: null,
  creator_site: null,
  creator_subtitle: null,
  creator_avatar: "",
  creator_bg: "",
  creatorFound: false,

  // Notification center
  notifications: [],
};
