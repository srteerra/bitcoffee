export default {
  fetchingData: false,
  shadowblank: false,
  error: null,
  windowWidth: window.innerWidth,

  // Eth or wallet
  provider: null,
  currentAccount: null,
  isconnected: false,
  balanceOf: 0,
  contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  netID: null,

  selectedCypto: null,

  // Btn states
  connectBtnState: false,
  disconnectBtnState: true,

  // Modals

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

  // Notification center
  notifications: [],
};
