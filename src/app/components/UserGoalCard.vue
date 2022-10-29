<template>
  <b-container class="user-goals__container my-5">
    <div
      class="user-goal-card__container"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div class="goal-completed" v-if="goal_status == 100">
        <p class="bg-dark font-weight-bold p-3">COMPLETED</p>
      </div>
      <b-container
        id="eff"
        class="user-goal__card"
        :class="{ blur: goal_status == 100 }"
      >
        <!-- Image collapse -->
        <b-collapse :id="collapse_a" class="my-2">
          <b-card style="border: none">
            <div class="image__container text-center">
              <img
                class="image-img mx-auto"
                src="../assets/images/user-goal.png"
                alt="user-goal"
              />

              <!-- Buttons to change de card view
              <div class="views__button" style="font-size: 4rem">
                <b-icon
                  icon="card-list"
                  class="btn-view rounded-circle bg-secondary p-3 m-2"
                  variant="light"
                ></b-icon>
                <b-icon
                  icon="list"
                  class="btn-view rounded-circle bg-secondary p-3 m-2"
                  variant="light"
                ></b-icon>
              </div> -->
            </div>
          </b-card>
        </b-collapse>

        <!-- Card content -->
        <h4
          class="font-weight-bold mx-auto text-capitalize"
          style="max-width: 45%"
        >
          {{ campTitle }}
        </h4>
        <p class="my-4 font-weight-light">
          by
          <span class="font-weight-bold" style="color: gray"
            ><a :href="'/#/member/' + campUser">{{ campUser }}</a></span
          >
        </p>

        <!-- Tags section -->
        <b-row align-h="center">
          <p class="category-tag font-weight-bold py-2 px-5 text-white">
            {{ campCategory }}
          </p>
        </b-row>

        <!-- Description collapse -->
        <b-collapse :id="collapse_b">
          <b-card style="border: none">
            <p>{{ campDesc }}</p>
          </b-card>
        </b-collapse>

        <!-- Counter -->
        <div v-if="!hide" class="my-3">
          <div v-if="time">
            <h3 v-if="DD <= 0" class="font-weight-bold">Only today</h3>
            <h3 v-else class="font-weight-bold">
              <span style="color: rgba(111, 80, 28, 0.38)">{{ DD }} days</span>
              left
            </h3>
          </div>
          <div v-else>
            <h3 class="font-weight-bold">Finished</h3>
          </div>
        </div>
        <div v-else>
          <h1
            v-if="time"
            id="timer"
            style="letter-spacing: 3px; font-weight: 800"
          >
            {{ DD }}:{{ HR }}:{{ MN }}:{{ SC }}
          </h1>
          <h3 v-else class="font-weight-bold">Finished</h3>
        </div>

        <!-- Time left collapse -->
        <b-collapse :id="collapse_c">
          <b-card :class="{ hide: !time }" style="border: none">
            <b-card-body class="p-0">
              <p class="p-0 m-0" style="opacity: 60%">to complete the goal.</p>
            </b-card-body>
          </b-card>
        </b-collapse>

        <!-- Progressbar -->
        <div class="progress__container mb-5">
          <b-progress
            class="user-goal__progressbar mx-auto my-4"
            :value="getStatus"
            variant="dark"
          ></b-progress>
          <p class="firstValue">0%</p>
          <p class="lastValue">100%</p>
        </div>

        <!-- Stats section -->
        <b-row class="stats justify-content-center">
          <b-col class="stats-item__container my-3">
            <div>
              <h3>
                <strong>{{ contributors.length - 1 }}</strong>
              </h3>
              <p>Supporters</p>
            </div>
          </b-col>

          <b-col class="stats-item__container my-3" style="color: #615040">
            <h3>
              <strong>${{ pledgedUSD }}</strong>
            </h3>
            <small>{{ pledgedRIF }} RIF</small>
            <p>Raised</p>
          </b-col>
          <b-col class="stats-item__container my-3">
            <div>
              <h3>
                <strong>${{ amountUSD }}</strong>
              </h3>
              <small>{{ amountRIF }} RIF</small>
              <p>Goal</p>
            </div>
          </b-col>
        </b-row>

        <!-- <p> Toggle -->
        <p
          class="my-4"
          :class="{ hide: hide }"
          v-b-toggle="[
            this.collapse_a,
            this.collapse_b,
            this.collapse_c,
            this.collapse_d,
          ]"
          @click="hide_p"
        >
          See details
        </p>

        <!-- Buttons collapse -->
        <b-collapse
          :id="collapse_d"
          class="mt-2"
          v-if="
            new String(currentAccount).toUpperCase() ==
            new String(campCreator).toUpperCase()
          "
        >
          <b-card style="border: none">
            <b-row align-h="center">
              <b-col cols="12" class="my-2">
                <div v-if="!isClaimed">
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    @click="connect_wallet()"
                    v-if="!isconnected"
                    >CONNECT WALLET</b-button
                  >
                  <b-button
                    class="w-100 mx-auto btn font-weight-bold"
                    variant="primary"
                    @click="claimRIF({ id: campId })"
                    v-else
                    >CLAIM</b-button
                  >
                </div>
                <div v-else>
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    @click="connect_wallet()"
                    v-if="!isconnected"
                    >CONNECT WALLET</b-button
                  >
                  <b-button
                    class="w-100 mx-auto btn font-weight-bold"
                    variant="primary"
                    disabled
                    v-else
                    >CLAIMED</b-button
                  >
                </div>
              </b-col>
              <b-col cols="12" md="6" class="my-2">
                <b-button
                  class="btn font-weight-bold w-100 mx-auto"
                  variant="outline-danger"
                  :disabled="isClaimed"
                  >CANCEL</b-button
                >
              </b-col>
              <b-col cols="12" md="6" class="my-2">
                <b-button
                  class="w-100 mx-auto font-weight-bold"
                  variant="outline-dark"
                  @click="show"
                  v-b-toggle="[
                    this.collapse_a,
                    this.collapse_b,
                    this.collapse_c,
                    this.collapse_d,
                  ]"
                  >CLOSE</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>

        <b-collapse :id="collapse_a" class="mt-2" v-else>
          <b-card style="border: none">
            <b-row align-h="center">
              <b-col cols="12" class="my-2">
                <b-form-group
                  id="PledgeAmountInputGroup"
                  class="text-dark font-weight-bold"
                  v-if="isconnected"
                >
                  <b-form-input
                    id="PledgeAmountInput"
                    v-model="pledgeAmount"
                    type="text"
                    class="w-100 py-2 px-3 mb-1"
                    placeholder="Enter the amount..."
                    :disabled="isClaimed"
                    required
                  />
                </b-form-group>
                <div v-if="isClaimed">
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    @click="connect_wallet()"
                    v-if="!isconnected"
                    >CONNECT WALLET</b-button
                  >
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    :disabled="isClaimed"
                    v-else
                    >GOAL ENDED</b-button
                  >
                </div>
                <div v-else>
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    @click="connect_wallet()"
                    v-if="!isconnected"
                    >CONNECT WALLET</b-button
                  >
                  <b-button
                    class="btn font-weight-bold w-100 mx-auto"
                    variant="primary"
                    @click="pledgeRIF({ id: campId, amount: pledgeAmount })"
                    :disabled="!isClaimed"
                    v-else
                    >CONTRIBUTE</b-button
                  >
                </div>
              </b-col>
              <b-col cols="12" md="6" class="my-2">
                <b-button
                  class="btn font-weight-bold w-100 mx-auto"
                  variant="outline-dark"
                  :disabled="isClaimed"
                  >REFUND</b-button
                >
              </b-col>
              <b-col cols="12" md="6" class="my-2">
                <b-button
                  class="w-100 mx-auto font-weight-bold"
                  variant="outline-dark"
                  @click="show"
                  v-b-toggle="[
                    this.collapse_a,
                    this.collapse_b,
                    this.collapse_c,
                    this.collapse_d,
                  ]"
                  >CLOSE</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>

        <!-- <b-row>
          <b-col cols="12" md="6" class="mx-auto">
            <b-button
              v-if="goal_status == 99"
              class="w-100"
              pill
              @click="claim"
              variant="outline-primary"
              >Claim</b-button
            >
            <b-button v-else class="w-100" pill variant="outline-primary"
              >Refound</b-button
            >
          </b-col>
        </b-row> -->
      </b-container>
    </div>
  </b-container>
</template>

<script>
import { client } from "../../lib/sanityClient";
import { mapActions, mapState } from "vuex";
import { isConnected } from "../store/getters";

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const provider = window.ethereum;

const artifact_crowdfunding = require("../../../build/contracts/CrowdFund.json");
const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
let tokenContract;

export default {
  name: "UserGoalCard",

  data() {
    return {
      DD: 0,
      HR: 0,
      MN: 0,
      SC: 0,
      time: true,
      goal_status: 90,
      categories: ["Music", "RIF"],
      blur: false,
      hide: false,
      counter: 0,
      campUser: "",
      campGoalRIF: 0,
      campUserAddress: null,
      supporters: 0,
      contributors: [],
      pledgeAmount: "",
      pledgedTotal: 0,
      isClaimed: false,
    };
  },
  props: [
    "collapse_a",
    "collapse_b",
    "collapse_c",
    "collapse_d",
    "campCategory",
    "campCreator",
    "campDesc",
    "campTitle",
    "campGoal",
    "campPledged",
    "campEndAt",
    "campStartAt",
    "campClaimed",
    "campId",
  ],
  methods: {
    ...mapActions([
      "getCryptoprice",
      "connect_wallet",
      "pledgeRIF",
      "claimRIF",
    ]),
    claim() {
      this.goal_status = 100;
    },
    hide_p() {
      this.hide = true;
    },
    show() {
      this.hide = false;
    },
    timer(date) {
      let deadline = new Date(date).getTime();
      let now = new Date().getTime();
      let t = deadline - now;
      this.DD = Math.floor(t / (1000 * 60 * 60 * 24));
      this.HR = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.MN = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      this.SC = Math.floor((t % (1000 * 60)) / 1000);
      if (t <= 0) {
        clearInterval(this.counter);
        this.time = false;
      }
    },
    async getSupporters() {
      const net = await web3.eth.net.getId();

      tokenContract = new web3.eth.Contract(
        artifact_crowdfunding_rif.abi,
        artifact_crowdfunding_rif.networks[net].address
      );

      tokenContract.setProvider(
        Web3.givenProvider || "https://public-node.testnet.rsk.co"
      );

      const totalContributors = await tokenContract.methods
        .totalContributors(this.campId)
        .call();

      console.log(totalContributors);

      for (let i = 0; i < totalContributors; i++) {
        this.contributors.push(
          await tokenContract.methods.contributedCampaign(this.campId, i).call()
        );

        let campaign = await tokenContract.methods
          .campaigns(this.campId)
          .call();

        let amountRaised = web3.utils.fromWei(campaign.pledged, "ether");
        this.pledgedTotal = amountRaised;
        this.isClaimed = campaign.claimed;
      }
    },
  },
  computed: {
    ...mapState(["currentAccount", "rifPrice", "isconnected"]),
    getStatus() {
      console.log((this.campPledged / this.campGoal) * 100);
      return (this.campPledged / this.campGoal) * 100;
    },
    amountRIF() {
      const rif = this.campGoalRIF;

      if (rif > 99999) {
        let str1 = new String(rif);
        let str2 = str1.slice(0, 3);
        return str2 + "k";
      } else {
        return Number(rif).toFixed();
      }
    },
    pledgedRIF() {
      const rif = this.pledgedTotal;

      if (rif > 99999) {
        let str1 = new String(rif);
        let str2 = str1.slice(0, 3);
        return str2 + "k";
      } else {
        return Number(rif).toFixed();
      }
    },
    amountUSD() {
      const usd = this.campGoalRIF * this.rifPrice;

      if (usd > 99999) {
        let str1 = new String(usd);
        let str2 = str1.slice(0, 3);
        return str2 + "k";
      } else {
        return parseFloat(usd).toFixed(2);
      }
    },
    pledgedUSD() {
      const usd = this.pledgedTotal * this.rifPrice;

      if (usd > 99999) {
        let str1 = new String(usd);
        let str2 = str1.slice(0, 3);
        return str2 + "k";
      } else {
        return parseFloat(usd).toFixed(2);
      }
    },
  },
  async beforeMount() {
    this.getSupporters();
    const query =
      '*[_type == "users" && _id == $addCreator] {userName, userAddress}';
    const params = { addCreator: new String(this.campCreator).toLowerCase() };

    client
      .fetch(query, params)
      .then((user) => {
        if (user.length > 0) {
          this.campUser = user[0].userName;
          this.campUserAddress = user[0].userAddress;
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (provider) {
      this.getCryptoprice();

      const amountRIF = web3.utils.fromWei(this.campGoal, "ether");
      this.campGoalRIF = amountRIF;
    } else {
      this.noprovider = true;
      console.log("No wallet");
    }
  },
  created() {
    var self = this;

    var fullDate = new Date(self.campEndAt * 1000).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    self.counter = setInterval(function () {
      self.timer(fullDate + " 23:59:59");
    }, 1000);
  },
};
</script>

<style lang="scss">
.user-goals__container {
  width: 100%;
  // max-width: 650px;
  margin: 0 auto 200px;
  .user-goal-card__container {
    width: 100%;
    position: relative;

    .goal-completed {
      width: 100%;
      position: absolute;
      top: 40%;
      color: white;
      height: auto;
      z-index: 2;
      p {
        margin: 0;
        display: inline-block;
        border-radius: 20px;
      }
    }
    .user-goal__card {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 20px;
      width: 100%;
      padding: 80px 60px 40px;

      .image__container {
        .image-img {
          width: 50%;
          @media (max-width: 460px) {
            width: 100%;
          }
        }
      }

      @media (max-width: 800px) {
        padding: 80px 10px 40px;
      }

      .progress__container {
        width: 100%;
        position: relative;
        .user-goal__progressbar {
          width: 80%;
        }
        .firstValue {
          position: absolute;
          top: 20px;
          left: 10%;
          display: inline-block;
        }
        .lastValue {
          position: absolute;
          right: 10%;
          top: 20px;
          display: inline;
        }
      }

      .progress__badge {
        background-color: #615040;
      }
    }

    .views__button {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 10px;
      top: 100px;
      .btn-view:hover {
        cursor: pointer;
      }
      @media (max-width: 1200px) {
        position: initial;
        flex-direction: row;
        justify-content: center;
      }

      @media (max-width: 980px) {
        position: absolute;
        flex-direction: column;
      }

      @media (max-width: 780px) {
        position: initial;
        flex-direction: row;
        justify-content: center;
      }
    }

    .category-tag {
      background-color: #615040;
      border-radius: 25px;
    }

    .stats {
      margin: 70px 0;
      .stats-item__container {
        border-right: 2px solid rgba(122, 122, 122, 0.4);
      }

      @media (max-width: 800px) {
        .stats-item__container {
          max-width: 350px;
        }
      }
    }
    .stats-item__container:nth-child(3) {
      border: none;
    }

    @media (max-width: 428px) {
      .stats-item__container:nth-child(2) {
        border-right: 2px solid rgba(122, 122, 122, 0.4);
      }
    }

    @media (max-width: 380px) {
      .stats-item__container:nth-child(2) {
        border: none;
      }
    }

    @media (max-width: 280px) {
      .stats-item__container:nth-child(1) {
        border: none;
      }
      .stats-item__container:nth-child(2) {
        border-right: 2px solid rgba(122, 122, 122, 0.4);
      }
    }
  }
}
</style>
