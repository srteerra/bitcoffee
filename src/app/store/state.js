export default {
  fetchingData: false,
  fetchingDataWait: false,
  transactionWait: false,
  fetchingPledge: false,
  fetchingApprove: false,
  fetchingLaunch: false,
  fetchingCancel: false,

  allowedSpend: false,

  shadowblank: false,
  error: null,
  windowWidth: window.innerWidth,

  listedCategories: ["Music", "Arts & Culture", "Gaming", "IT", "Personal"],

  // Eth or wallet
  provider: null,
  currentAccount: null,
  isconnected: false,
  balanceOf: {
    rifBal: 0,
    bitcBal: 0,
  },
  rifPrice: null,
  contract: "0x2F395a03820af458AE3e39fcA40C9DC80223492D",
  netID: null,

  selectedCypto: null,

  // Transaction info
  transactionHash: "",

  // Btn states
  connectBtnState: false,
  disconnectBtnState: true,

  // Modals
  showinstallMetaModalState: false,
  editProfileModal: false,
  launchGoalModal: false,
  cancelGoalModal: false,
  showpleaseChangeNetState: false,
  walletModal: false,

  // Notification Ex
  noWalletNoti: false,

  // Donator card steps
  donationCardsteps: 1,
  donationSteps: 1,

  // User data
  username: "",
  avatar: "",

  user_bg: "",
  user_site: "",
  user_title: "",
  user_subtitle: "",
  user_description: "",
  user_category: "",
  user_instagram: "",
  user_twitter: "",
  user_twitch: "",
  user_youtube: "",

  // Creator data
  creator_username: null,
  creator_address: null,
  creator_site: null,
  creator_title: null,
  creator_subtitle: null,
  creator_avatar: "",
  creator_bg: "",
  creator_description: null,
  creator_category: null,
  creator_instagram: null,
  creator_twitter: null,
  creator_twitch: null,
  creator_youtube: null,
  creatorFound: false,

  // Notification center
  notifications: [],
};
