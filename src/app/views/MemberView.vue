<template>
  <div class="pub-profile">
    <Header />
    <!-- Banner -->
    <div class="head">
      <div
        class="user-profile__background2"
        :style="{
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
          'background-image': 'url(' + creator_bg + ')',
        }"
      />
      <!-- User avatar -->
      <div class="user-avatar__container2 text-center">
        <b-avatar :src="`${creator_avatar}`" size="9rem" />
      </div>
    </div>

    <div class="creator-information__container text-center">
      <!-- personal information -->
      <div class="creator-personal-info__container">
        <div class="user-name__container my-3">
          <p class="font-weight-bold pt-5 px-2">
            {{ this.$route.params.id }}
          </p>
          <b-icon
            id="verify__badge"
            icon="patch-check-fill"
            v-if="memberVerified"
          ></b-icon>
        </div>
        <b-button
          id="address"
          pill
          variant="outline-dark"
          class="px-5 font-weight-bold"
          >{{ myaddress }} <b-icon icon="files"></b-icon></b-button
        ><br />
        <a
          :href="'https://' + site"
          target="_blank"
          style="display: inline-block"
          class="user-site my-4"
        >
          {{ site
          }}<span class="px-2"
            ><b-icon icon="box-arrow-up-right"></b-icon
          ></span>
        </a>

        <p class="font-weight-bold" style="opacity: 40%">
          Member since {{ monthNames[new Date(memberSince).getMonth()] }},
          {{ new Date(memberSince).getFullYear() }}
        </p>
      </div>

      <!-- creator information -->
      <div class="creator-information">
        <b-row class="creator-row">
          <b-col cols="12" md="12" lg="6" xl="7" class="p-0">
            <div class="creator-description__container">
              <div class="creator-description__card p-5">
                <h3 class="font-weight-bold">{{ title }}</h3>
                <p class="font-weight-bold">{{ subtitle }}</p>
                <hr />
                <p>
                  {{ description }}
                </p>
                <div
                  class="social__section"
                  v-if="
                    creator_twitter ||
                    creator_instagram ||
                    creator_youtube ||
                    creator_twitch
                  "
                >
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    :href="creator_instagram"
                    target="_blank"
                    v-b-tooltip.hover.top="'Instagram'"
                    v-if="creator_instagram"
                  >
                    <b-icon icon="instagram" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    :href="creator_twitter"
                    target="_blank"
                    v-b-tooltip.hover.top="'Twitter'"
                    v-if="creator_twitter"
                  >
                    <b-icon icon="twitter" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    :href="creator_youtube"
                    target="_blank"
                    v-b-tooltip.hover.top="'YouTube'"
                    v-if="creator_youtube"
                  >
                    <b-icon icon="youtube" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    :href="creator_twitch"
                    target="_blank"
                    v-b-tooltip.hover.top="'Twitch'"
                    v-if="creator_twitch"
                  >
                    <b-icon icon="twitch" aria-label="Help"></b-icon>
                  </b-button>
                </div>
              </div>
            </div>

            <!-- category desc -->
            <div class="category-description__container">
              <router-link to="/explore" id="category-card">
                <div class="category-description__card p-5">
                  <h3 class="font-weight-bold">Category</h3>
                  <p class="font-weight-bold">Music</p>
                  <p class="pt-3 pb-1 border-top">
                    <span class="mr-2"
                      ><b-icon icon="arrow-right-circle-fill"></b-icon
                    ></span>
                    Explore more
                  </p>
                  <small>You can find more people with the same hobbies.</small>
                </div>
              </router-link>
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="6" xl="5" class="p-0">
            <!-- donation box -->
            <div class="donation-box__container">
              <DonateBoxView />
            </div>
          </b-col>
        </b-row>

        <!-- creator goals -->
        <div class="user-goals__list p-0 m-0">
          <h1 class="my-4 font-weight-bold">My goals</h1>
          <p>Here you can help me to continue my stuff.</p>
          <b-row class="mt-5">
            <b-col cols="12" md="12" class="mx-auto" v-if="!noCampaigns">
              <ul
                class="d-flex justify-content-center justify-content-md-around flex-wrap p-0 m-0"
              >
                <li
                  id="goal-per"
                  v-for="(campaign, idx) in campaigns_rif"
                  :key="idx"
                >
                  <UserGoalCard
                    :collapse_a="'card' + idx"
                    :collapse_b="'card' + idx"
                    :collapse_c="'card' + idx"
                    :collapse_d="'card' + idx"
                    :campId="campaign.id"
                    :campCategory="campaign.category"
                    :campCreator="campaign.creator"
                    :campDesc="campaign.description"
                    :campTitle="campaign.title"
                    :campGoal="campaign.goal"
                    :campPledged="campaign.pledged"
                    :campEndAt="campaign.endAt"
                    :campStartAt="campaign.startAt"
                    :campClaimed="campaign.claimed"
                  />
                </li>
              </ul>
            </b-col>
            <b-col
              cols="12"
              class="mx-auto text-center mt-5"
              style="height: 500px"
              v-else
            >
              <p style="opacity: 40%"><strong>No results</strong></p>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
import DonateBoxView from "../components/DonateBoxView.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapState } from "vuex";
import { client } from "../../lib/sanityClient";

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const provider = window.ethereum;

const artifact_crowdfunding = require("../../../build/contracts/CrowdFund.json");
const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
let tokenContract;

export default {
  name: "MemberView",
  data() {
    return {
      myaddress: "",
      noSite: "No site :(",
      noTitle: "No title added",
      noSub: "No subtitle added",
      noDesc: "No description added",
      noBg: "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",

      donation: 0,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      memberSince: "",
      memberVerified: false,
      memberAddress: "",

      campaigns_rif: [],
      noCampaigns: false,
      loadingCampaigns: true,
    };
  },
  components: {
    UserGoalCard,
    DonateBoxView,
    Header,
    Footer,
  },
  beforeMount() {
    this.$store.dispatch("getCreatorPage", {
      user: this.$route.params.id,
    });

    const query =
      '*[_type == "users" && userName == $user] {userName, userAddress, _createdAt, userVerify}';
    const params = { user: this.$route.params.id };

    client
      .fetch(query, params)
      .then((users) => {
        console.log(users);
        if (users.length > 0) {
          users.forEach((user) => {
            this.myaddress =
              user.userAddress.slice(0, 4) + "..." + user.userAddress.slice(36);
            this.memberSince = user._createdAt;
            this.memberVerified = user.userVerify;
            this.memberAddress = user.userAddress;
          });
        } else {
          console.log("Creator not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  created() {
    this.startedCampaigns();
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("getCreatorPage", {
        user: to.params.id,
      });

      const query =
        '*[_type == "users" && userName == $user] {userName, userAddress}';
      const params = { user: this.$route.params.id };

      client
        .fetch(query, params)
        .then((users) => {
          console.log(users);
          if (users.length > 0) {
            users.forEach((user) => {
              this.myaddress =
                user.userAddress.slice(0, 4) +
                "..." +
                user.userAddress.slice(36);
            });
          } else {
            console.log("Creator not found");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    async startedCampaigns() {
      setTimeout(async () => {
        if (provider) {
          const net = await web3.eth.net.getId();
          let contributors = [];

          tokenContract = new web3.eth.Contract(
            artifact_crowdfunding_rif.abi,
            artifact_crowdfunding_rif.networks[net].address
          );

          tokenContract.setProvider(
            Web3.givenProvider || "https://public-node.testnet.rsk.co"
          );

          const totalCamps = await tokenContract.methods
            .creatorCamps(this.memberAddress)
            .call();

          // if (totalCamps < 1) {
          //   console.log("No campaigns");
          // } else {
          //   for (let i = 0; i < totalCamps; i++) {
          //     let campaign = await tokenContract.methods
          //       .campaignsAddress(this.memberAddress, i)
          //       .call();

          //     this.campaigns_rif.push(await campaign);
          //     console.log(this.campaigns_rif);
          //   }
          // }

          if (totalCamps < 1) {
            console.log("No campaigns");
            this.noCampaigns = true;
          } else {
            for (let i = 0; i < totalCamps; i++) {
              let campaign = await tokenContract.methods
                .campaignsAddress(this.memberAddress, i)
                .call();

              let newCampaign = await tokenContract.methods
                .campaigns(await campaign.id)
                .call();

              if ((await newCampaign.id) !== "0") {
                this.campaigns_rif.push(await newCampaign);
              } else {
                console.log("There's an deleted campaign");
              }
            }
            if (this.campaigns_rif.length === 0) {
              console.log("No campaigns");
              this.noCampaigns = true;
            }
          }
        } else {
          console.log("No wallet");
        }
      }, 5000);
    },

    // Date formated
    onContext1(ctx) {
      // The date formatted
      this.formattedStart = ctx.selectedFormatted;
    },
    onContext2(ctx) {
      // The date formatted
      this.formattedEnd = ctx.selectedFormatted;
    },
  },
  computed: {
    ...mapState([
      "currentAccount",
      "creator_username",
      "creator_site",
      "creator_subtitle",
      "creator_instagram",
      "creator_twitter",
      "creator_twitch",
      "creator_youtube",
      "creator_avatar",
      "creator_bg",
      "fetchingDataWait",
      "fetchingData",
      "editProfileModal",
      "listedCategories",
    ]),

    // Unixtimestamp for the start date
    startUnixTime2() {
      let min = new Date().getMinutes();
      let hrs = new Date().getHours();
      let mil = new Date().getSeconds();
      const FDate = new Date(
        this.formattedStart + " " + hrs + ":" + min + ":" + mil
      );
      return (this.startUnixtime = FDate.getTime() / 1000);
    },

    // Unixtimestamp for the start date
    endUnixTime2() {
      const FDate = new Date(this.formattedEnd + " 23:59:59");
      return (this.endUnixtime = FDate.getTime() / 1000);
    },

    title() {
      if (!this.creator_title) {
        return this.noTitle;
      } else {
        return this.creator_title;
      }
    },
    subtitle() {
      if (!this.creator_subtitle) {
        return this.noSub;
      } else {
        return this.creator_subtitle;
      }
    },
    site() {
      if (!this.creator_site) {
        return this.noSite;
      } else {
        return this.creator_site;
      }
    },
    description() {
      if (!this.creator_description) {
        return this.noDesc;
      } else {
        return this.creator_description;
      }
    },
  },
};
</script>

<style lang="scss">
#category-card {
  transition: ease-in-out 0.2s;
  &:hover {
    color: white;
    filter: brightness(70%);
  }
}
// banner styles
.head {
  position: relative;
  .user-profile__background2 {
    width: 100%;
    height: 300px;
  }

  // avatar styles
  .user-avatar__container2 {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: -60px;
    img {
      width: 150px;
      border-radius: 50%;
    }

    // @media (max-width: 991px) {
    //   top: 315px;
    // }
  }
}

.creator-information__container {
  margin: 0 auto;
  //user personal styles
  .creator-personal-info__container {
    width: 90%;
    margin: 20px auto;
    .user-name__container {
      position: relative;
      font-size: 30px;
      p {
        display: inline-block;
      }
      #verify__badge {
        position: static;
      }
    }
    .user-site {
      &:hover {
        color: #969292;
      }
    }
  }

  .creator-information {
    margin: 200px 0;
    .creator-row {
      margin: 200px 0;
    }

    // creator description styles
    .creator-description__container {
      width: 80%;
      margin: 0 auto 50px;

      @media (max-width: 500px) {
        width: 100%;
      }
      .creator-description__card {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        text-align: justify;
        width: 100%;
        p:nth-child(2) {
          color: #969292;
        }
        .social__section {
          display: flex;
          justify-content: space-around;
          width: 60%;
          margin: 100px auto 20px;
        }
      }
    }

    // category description styles
    .category-description__container {
      width: 80%;
      margin: 0 auto 50px;
      color: white;

      @media (max-width: 500px) {
        width: 100%;
      }

      .category-description__card {
        background-image: linear-gradient(
            to bottom,
            rgba(113, 113, 113, 0.63),
            rgba(0, 0, 0, 0.69)
          ),
          url("../assets/images/chill-back.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        text-align: justify;
        width: 100%;
      }
    }
  }
}

@media (max-width: 790px) {
  .creator-information__container {
    width: 95%;
  }
}
</style>
