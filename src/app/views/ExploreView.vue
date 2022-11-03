<template>
  <div>
    <Header />
    <b-container fluid class="my-5">
      <b-row class="py-5">
        <b-col class="text-center" cols="12">
          <h1>
            <strong>Explore</strong>
          </h1>
          <p class="py-2">Creators or goals on Bitcoffee.</p>
        </b-col>
        <b-col class="text-center" cols="12">
          <b-form-group v-slot="{ ariaContentby }">
            <b-form-radio-group
              id="ContentFilterRadios"
              v-model="selectedContent"
              :options="contentOptions"
              :aria-describedby="ariaContentby"
              button-variant="outline-primary"
              size="md"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="selectedContent === 'goals'">
        <b-col>
          <b-col
            cols="8"
            class="d-initial d-lg-flex justify-content-lg-center mx-auto"
          >
            <b-col cols="12" lg="3" class="d-flex my-auto pb-3 pb-lg-0">
              <b-form-select
                v-model="selectedCategory"
                :options="categoryOptions"
                class="ml-0 ml-lg-3 rounded-pill"
              ></b-form-select>
            </b-col>
            <b-col cols="12" lg="3" class="my-auto">
              <div class="w-100 mt-3 mt-lg-0 my-auto">
                <b-form-group v-slot="{ ariaCoinby }" class="w-100 my-auto">
                  <b-form-radio-group
                    id="ContractRadios"
                    v-model="selectedContract"
                    :options="contractOptions"
                    :aria-describedby="ariaCoinby"
                    button-variant="outline-primary"
                    size="md"
                    class="w-100"
                    name="radio-btn-outline"
                    buttons
                  ></b-form-radio-group>
                </b-form-group>
              </div>
            </b-col>
          </b-col>
        </b-col>
        <b-col
          class="text-center my-5"
          cols="12"
          v-if="campaigns_rif.length === 0 && !noprovider"
        >
          <p class="py-5 my-5" style="opacity: 40%">
            <strong>No results found.</strong>
          </p>
        </b-col>
        <b-col class="text-center my-5" cols="12" v-if="noprovider">
          <div class="py-5 my-5">
            <h4 class="pb-3 m-0"><strong>Connect your wallet</strong></h4>
            <p class="p-0 m-0" style="opacity: 40%">
              <strong>To explore Bitcoffee's goals</strong>
            </p>
            <!-- Connect wallet -->
            <b-button
              id="connectWallet"
              style="
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
              :disabled="connectBtnState"
              @click="connect_wallet()"
              class="mt-3 px-4 py-2 rounded-pill font-weight-bold"
              variant="dark"
            >
              Connect wallet
            </b-button>
          </div>
        </b-col>
        <b-col
          cols="12"
          md="11"
          class="mx-auto mt-5"
          v-if="campaigns_rif.length > 0"
        >
          <ul
            class="d-flex text-center justify-content-center justify-content-md-around flex-wrap p-0 m-0"
          >
            <li
              style="max-width: 33%"
              v-for="(campaign, index) in campaigns_rif"
              v-bind:key="index"
            >
              <UserGoalCard
                :collapse_a="'card' + index"
                :collapse_b="'card' + index"
                :collapse_c="'card' + index"
                :collapse_d="'card' + index"
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
              <!-- <router-link
                :to="`/member/Terra`"
                class="px-2 my-auto"
                active-class="activeLink"
              > -->

              <!-- <b-card id="main__card">
                  <b-row class="creator__desc text-center">
                    <b-avatar
                      class="mx-auto"
                      size="5rem"
                      :src="`${builder
                        .image(campaign.userAvatar || defaultAvatar)
                        .url()}`"
                    />
                    <b-card-text class="mt-3">
                      <h4>
                        <strong>{{ campaign.title }}</strong>
                      </h4>
                    </b-card-text>
                    <div class="d-flex justify-content-center">
                      <div class="category-badge rounded-pill mx-1">
                        <p class="m-0">
                          {{ campaign.category }}
                        </p>
                      </div>
                    </div>
                    <b-card-text class="px-3 my-3">
                      <strong style="opacity: 50%">
                        {{ web3.utils.fromWei(campaign.goal, "ether") }}
                      </strong>
                    </b-card-text>
                    <b-card-text class="px-3">
                      {{ campaign.description }}
                    </b-card-text>
                    <p>{{ new Date(campaign.endAt * 1000) }}</p>
                  </b-row>
                </b-card> -->
              <!-- </router-link> -->
            </li>
          </ul>
          <b-pagination
            class="my-5"
            v-model="currentPage"
            :total-rows="Creatorsrows"
            :per-page="CreatorsperPage"
            pills
            align="center"
            aria-controls="creatorsList"
            first-number
            last-number
          ></b-pagination>
        </b-col>
      </b-row>
      <b-row v-if="selectedContent === 'creators'">
        <b-col>
          <b-col
            cols="8"
            class="d-initial d-lg-flex justify-content-lg-center mx-auto"
          >
            <b-col cols="12" lg="3" class="d-flex my-auto">
              <b-form-select
                v-model="selectedCategory"
                :options="categoryOptions"
                class="ml-0 ml-lg-3 rounded-pill"
              ></b-form-select>
            </b-col>
            <b-col cols="12" lg="3" class="my-auto">
              <div class="mt-3 mt-lg-0">
                <b-form-checkbox
                  v-model="creatorVerify"
                  name="check-button"
                  switch
                >
                  Verified creators
                </b-form-checkbox>
              </div>
            </b-col>
            <b-col cols="12" lg="3" class="my-auto">
              <div class="mt-3 mt-lg-0">
                <b-input-group>
                  <b-icon id="searching__icon" icon="search"></b-icon>
                  <b-form-input
                    v-model="filterSearchInput"
                    placeholder="Search..."
                    style="padding-left: 32px"
                    class="rounded-pill"
                  >
                  </b-form-input>
                </b-input-group>
              </div>
            </b-col>
          </b-col>
        </b-col>
        <b-col
          class="text-center my-5"
          cols="12"
          v-if="itemsForCreatorsList.length === 0"
        >
          <p class="py-5 my-5" style="opacity: 40%">
            <strong>No results.</strong>
          </p>
        </b-col>
        <b-col cols="11" class="mx-auto" v-if="itemsForCreatorsList.length > 0">
          <ul
            id="creatorsList"
            class="d-flex justify-content-center flex-wrap p-0 m-0"
          >
            <li
              v-show="filterSearch(creator)"
              v-for="(creator, index) in itemsForCreatorsList"
              v-bind:key="index"
              data-aos="fade-up"
              :data-aos-delay="index + '00'"
              data-aos-duration="500"
            >
              <b-skeleton-wrapper :loading="loading">
                <template #loading>
                  <b-card id="main__card">
                    <b-skeleton-img
                      card-img="top"
                      aspect="3:1"
                    ></b-skeleton-img>
                    <b-skeleton
                      type="avatar"
                      size="5rem"
                      style="position: aboslute; top: -15%; left: 39.5%"
                    ></b-skeleton>
                    <b-skeleton width="50%" class="mx-auto"></b-skeleton>
                    <b-skeleton width="70%" class="mx-auto my-3"></b-skeleton>
                    <b-skeleton width="90%" class="mx-auto my-3"></b-skeleton>
                  </b-card>
                </template>
                <router-link
                  :to="`/member/${creator.userName}`"
                  class="px-2 my-auto"
                  active-class="activeLink"
                >
                  <b-card
                    id="main__card"
                    :img-src="
                      builder.image(creator.userBg || defaultBackground).url()
                    "
                    aspect="3:1"
                    img-height="100"
                    img-alt="Card image"
                    img-top
                  >
                    <b-avatar
                      class="mx-auto creator__avatar"
                      size="5rem"
                      :src="`${builder
                        .image(creator.userAvatar || defaultAvatar)
                        .url()}`"
                    />
                    <b-row class="creator__desc text-center">
                      <b-card-text class="mt-3">
                        <h4>
                          <strong>{{ creator.userName }}</strong>
                        </h4>
                      </b-card-text>
                      <div class="d-flex justify-content-center">
                        <div class="category-badge rounded-pill mx-1">
                          <p class="m-0">
                            {{ getCategory(creator.userCategory) }}
                          </p>
                        </div>
                        <div
                          class="category-badge-fill rounded-pill mx-1"
                          v-if="creator.userVerify"
                        >
                          <p class="m-0">
                            Verified
                            <span
                              ><b-icon
                                icon="check"
                                style="color: #ffff"
                              ></b-icon
                            ></span>
                          </p>
                        </div>
                      </div>
                      <b-card-text class="px-3 my-3">
                        <strong style="opacity: 50%">
                          {{ creator.userTitle.slice(0, 20) + "..." }}
                        </strong>
                      </b-card-text>
                      <b-card-text class="px-3">
                        {{ creator.userSubtitle.slice(0, 30) + "..." }}
                        <span><b-icon icon="box-arrow-up-right"></b-icon></span>
                      </b-card-text>
                    </b-row>
                  </b-card>
                </router-link>
              </b-skeleton-wrapper>
            </li>
          </ul>
          <b-pagination
            class="my-5"
            v-model="currentPage"
            :total-rows="Creatorsrows"
            :per-page="CreatorsperPage"
            pills
            align="center"
            aria-controls="creatorsList"
            first-number
            last-number
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "vuex";
import { client } from "../../lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const provider = window.ethereum;

const artifact_crowdfunding = require("../../../build/contracts/CrowdFund.json");
const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
let tokenContract;

export default {
  name: "ExploreView",
  data() {
    return {
      loading: true,
      isSearching: false,
      creatorVerify: false,
      defaultAvatar:
        "image-3ae59984424be3e4e7119b62ac1a29df46525312-1000x1000-jpg",
      defaultBackground:
        "image-21440068fd03cfe711bf6cd8a7f7d07c0936f6df-1002x564-jpg",
      builder: imageUrlBuilder(client),
      web3: new Web3(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      ),
      noprovider: false,
      selectedCategory: "All",
      categoryOptions: [
        { value: null, text: "Select your category" },
        { value: "All", text: "All" },
        { value: "Music", text: "Music" },
        { value: "IT", text: "IT" },
        { value: "Art & Culture", text: "Art & Culture" },
      ],
      selectedContent: "creators",
      contentOptions: [
        { value: "creators", text: "Creators" },
        { value: "goals", text: "Goals" },
      ],
      selectedContract: "rif",
      contractOptions: [
        { value: "rif", text: "RIF" },
        { value: "bitc", text: "BITC", disabled: true },
      ],
      filterSearchInput: "",
      creators: [],
      campaigns_rif: [],
      CreatorsperPage: 9,
      currentPage: 1,
    };
  },
  async beforeMount() {
    this.loading = true;

    if (provider) {
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

      for (var i = 1; i <= count; i++) {
        const campaign = await tokenContract.methods.campaigns(i).call();
        if (campaign.id !== "0") {
          this.campaigns_rif.push(await campaign);
        } else {
          console.log("There's an deleted campaign");
        }
        // console.log(
        // new Date(campaign.endAt * 1000).toLocaleDateString("en-us", {
        //   weekday: "long",
        //   year: "numeric",
        //   month: "long",
        //   day: "numeric",
        // })
        // );
      }
      console.log(this.campaigns_rif);
    } else {
      this.noprovider = true;
      console.log("No wallet");
    }

    const query =
      '*[_type == "users"] {userName, userAddress, userAvatar, userBg, userTitle, userVerify, userCategory, userSubtitle, userDesc, _createdAt}';

    client
      .fetch(query)
      .then((users) => {
        console.log(users);
        if (users.length > 0) {
          this.creators = users;
        } else {
          console.log("Creators not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const query2 =
      '*[_type == "assets" && assetName == "DefaultAvatar"] {assetProvider, assetName}';

    client
      .fetch(query2)
      .then((assets) => {
        if (assets.length > 0) {
          this.defaultAvatar = assets[0].assetProvider.asset._ref;
        } else {
          console.log("Avatar not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const query3 =
      '*[_type == "assets" && assetName == "DefaultBackground"] {assetProvider, assetName}';

    client
      .fetch(query3)
      .then((assets) => {
        if (assets.length > 0) {
          this.defaultBackground = assets[0].assetProvider.asset._ref;
        } else {
          console.log("BG not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    ...mapState(["isconnected", "connectBtnState", "disconnectBtnState"]),
    slicedDesc(givenDesc) {
      if (givenDesc) {
        return givenDesc.slice(0, 11) + "...";
      } else {
        return "...";
      }
    },
    Creatorsrows() {
      return this.creators.length;
    },
    Goalsrows() {
      return this.creators.length;
    },
    itemsForGoalsList() {
      var whatTo;

      if (this.selectedCategory === "All") {
        whatTo = true;
      } else {
        whatTo = false;
      }

      if (this.filterSearchInput === "") {
        whatTo = true;
      } else {
        whatTo = false;
      }

      if (whatTo) {
        return this.goals.slice(
          (this.currentPage - 1) * this.CreatorsperPage,
          this.currentPage * this.CreatorsperPage
        );
      } else {
        return this.goals;
      }
    },
    itemsForCreatorsList() {
      var whatTo;

      if (this.selectedCategory === "All") {
        whatTo = true;
      } else {
        whatTo = false;
      }

      if (this.filterSearchInput === "") {
        whatTo = true;
      } else {
        whatTo = false;
      }

      if (whatTo) {
        return this.creators.slice(
          (this.currentPage - 1) * this.CreatorsperPage,
          this.currentPage * this.CreatorsperPage
        );
      } else {
        return this.creators;
      }
    },
  },
  watch: {
    filterSearchInput(newValue, oldValue) {
      this.selectedCategory = "All";
      this.creatorVerify = false;
    },
    selectedCategory(newValue, oldValue) {
      this.filterSearchInput = "";
    },
  },
  methods: {
    ...mapActions(["connect_wallet"]),
    getCategory(category) {
      if (!category || category.length === 0) {
        return "Creator";
      } else {
        return category[0];
      }
    },
    filterSearch(creator) {
      var show = true;

      if (this.filterSearchInput !== "") {
        if (
          creator.userName
            .toLocaleLowerCase()
            .indexOf(this.filterSearchInput.toLocaleLowerCase()) < 0
        ) {
          show = false;
        }
      } else if (!creator.userVerify && this.creatorVerify) {
        show = false;
      } else if (
        (!creator.userCategory || creator.userCategory) &&
        (this.selectedCategory === "All" || this.selectedCategory === null)
      ) {
        show = true;
      } else if (
        !creator.userCategory ||
        this.selectedCategory !== creator.userCategory[0]
      ) {
        show = false;
      }
      return show;
    },
  },
  components: {
    Header,
    Footer,
    UserGoalCard,
  },
};
</script>

<style lang="scss">
#searching__icon {
  position: absolute;
  z-index: 20;
  left: 11px;
  top: 11px;
  opacity: 70%;
}

#main__card {
  width: 400px;
  height: 350px;
  max-width: 400px;
  max-height: 350px;
  margin: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: ease-in 0.2s;

  &:hover {
    box-shadow: rgba(249, 195, 86, 0.38) 0px 30px 30px -5px,
      rgba(249, 195, 86, 0.38) 0px 10px 10px -5px;
  }
}

.creator__avatar {
  position: absolute;
  top: 12%;
  left: 39.5%;
}

.creator__desc {
  max-height: 50%;
  display: block;

  .category-badge {
    width: auto;
    border: 1px solid black;
    padding: 5px 15px;
  }

  .category-badge-fill {
    width: auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.826);
    padding: 5px 15px;
  }
}
</style>
