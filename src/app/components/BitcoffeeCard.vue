<template>
  <div id="profile__container" class="ho pb-2">
    <div
      class="profile__background"
      :style="{
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'background-image': 'url(' + creator_bg + ')',
      }"
    />
    <div class="profile__desc">
      <div class="profile__desc__top">
        <b-avatar
          class="profile__avatar mx-auto"
          size="6rem"
          :src="`${creator_avatar}`"
        />
        <b-button
          size="sm"
          variant="light"
          class="profile__edit rounded-pill"
          :to="`/member/${this.$route.params.user}`"
          :style="{
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
            'background-image':
              'url(' + require('../assets/icons/go-link.png') + ')',
          }"
        >
        </b-button>
      </div>
      <section>
        <h3 class="font-weight-bold pt-5 text-center">
          {{ creator_username }}
        </h3>
        <div v-if="donationSteps == 1" class="p-0 text-center">
          <div>
            <b-row>
              <b-col style="height: auto">
                <div>
                  <a :href="'https://' + site" target="_blank"
                    ><p class="font-weight-light" v-if="creator_site">
                      {{ site }}
                    </p></a
                  >
                  <p style="max-width: 200px" class="mx-auto py-3">
                    {{ desc }}
                  </p>
                </div>
                <div class="donate__button">
                  <div class="social__section py-2">
                    <b-button
                      size="sm"
                      variant="outline-primary"
                      class="social__button mb-2 mx-2"
                      href="https://www.google.com"
                      target="_blank"
                      v-b-tooltip.hover.top="'Instagram'"
                    >
                      <b-icon icon="instagram" aria-label="Help"></b-icon>
                    </b-button>
                    <b-button
                      size="sm"
                      variant="outline-primary"
                      class="social__button mb-2 mx-2"
                      href="https://www.google.com"
                      target="_blank"
                      v-b-tooltip.hover.top="'Twitter'"
                    >
                      <b-icon icon="twitter" aria-label="Help"></b-icon>
                    </b-button>
                    <b-button
                      size="sm"
                      variant="outline-primary"
                      class="social__button mb-2 mx-2"
                      href="https://www.google.com"
                      target="_blank"
                      v-b-tooltip.hover.top="'YouTube'"
                    >
                      <b-icon icon="youtube" aria-label="Help"></b-icon>
                    </b-button>
                    <b-button
                      size="sm"
                      variant="outline-primary"
                      class="social__button mb-2 mx-2"
                      href="https://www.google.com"
                      target="_blank"
                      v-b-tooltip.hover.top="'Twitch'"
                    >
                      <b-icon icon="twitch" aria-label="Help"></b-icon>
                    </b-button>
                  </div>
                  <div>
                    <b-button
                      size="lg"
                      block
                      variant="dark"
                      :disabled="!isconnected"
                      v-if="$route.params.user !== $store.state.username"
                      class="rounded-pill font-weight-bold w-50 mx-auto"
                      @click="DONATION_MAIN_STEPPER_NEXT()"
                    >
                      <p class="p-0 m-0">Donate</p>
                    </b-button>
                    <b-button
                      size="lg"
                      block
                      variant="outline-dark"
                      v-else
                      class="rounded-pill font-weight-bold w-50 mx-auto"
                      to="profile"
                    >
                      <p class="p-0 m-0">Edit profile</p>
                    </b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
        <div v-if="donationSteps == 2" class="p-0">
          <div>
            <b-row>
              <b-col>
                <div class="w-50 mx-auto py-3">
                  <!-- <b-form-group
                    id="AmountInputGroup"
                    class="text-dark font-weight-bold"
                  >
                    <label for="AmountInput">Amount</label>
                    <b-form-input
                      id="AmountInput"
                      type="number"
                      class="w-100 py-2 px-4 mb-0 AmountInput rounded-pill"
                      v-model="amountInput"
                      placeholder="Enter the amount of coffees"
                      required
                    />
                  </b-form-group> -->

                  <!-- Donation amount -->
                  <div class="hola w-100 text-left">
                    <!-- critpo dropdown -->
                    <b-dropdown
                      size="md"
                      class="my-2"
                      variant="link"
                      toggle-class="text-decoration-none"
                    >
                      <template #button-content>
                        <span class="pr-1"
                          ><img
                            :src="
                              require('../assets/icons/' +
                                selectedCypto +
                                '.png')
                            "
                            alt=""
                            style="max-width: 25px"
                        /></span>
                        {{ selectedCypto }}
                      </template>
                      <b-dropdown-item-button
                        v-if="selectedCypto !== 'RIF'"
                        class="py-1"
                        @click="selectedCypto = 'RIF'"
                      >
                        <span class="pr-1"
                          ><img
                            src="../assets/logos/rif-token-logo.png"
                            alt="RIF"
                            style="max-width: 25px"
                        /></span>
                        RIF
                      </b-dropdown-item-button>
                      <b-dropdown-item-button
                        v-if="selectedCypto !== 'BITC'"
                        class="py-1"
                        @click="selectedCypto = 'BITC'"
                      >
                        <span class="pr-1"
                          ><img
                            src="../assets/icons/BITC.png"
                            alt="BITC"
                            style="max-width: 25px"
                        /></span>
                        BITC
                      </b-dropdown-item-button>
                    </b-dropdown>
                  </div>

                  <div class="amountSelection">
                    <div class="amount-list my-3">
                      <div class="amountSelection-item">
                        <!-- <img
                          src="../assets/icons/coffee-icon.png"
                          alt="coffees"
                          style="max-width: 25px"
                        /> -->
                        <span style="font-size: 25px">☕</span>
                        <span class="px-3">x</span>
                      </div>
                      <div class="amountSelection-item">
                        <input
                          id="1cripto"
                          v-model="amountSelectedInput"
                          type="radio"
                          name="amountSelection"
                          value="1"
                        />
                        <label for="1cripto">1</label>
                      </div>
                      <div class="amountSelection-item">
                        <input
                          id="2cripto"
                          v-model="amountSelectedInput"
                          type="radio"
                          name="amountSelection"
                          value="2"
                        />
                        <label for="2cripto">2</label>
                      </div>
                      <div class="amountSelection-item">
                        <input
                          id="5cripto"
                          v-model="amountSelectedInput"
                          type="radio"
                          name="amountSelection"
                          value="5"
                        />
                        <label for="5cripto">5</label>
                      </div>
                    </div>
                    <b-form-group
                      id="amountSelectedGroup"
                      class="text-dark font-weight-bold m-0 pl-3"
                    >
                      <b-form-input
                        id="customAmountInput"
                        v-model="amountSelectedCustomInput"
                        type="number"
                        class="DonationInput"
                        placeholder="0"
                        required
                      />
                    </b-form-group>
                  </div>
                </div>
                <b-button
                  size="lg"
                  block
                  :disabled="amountSelected < 1"
                  variant="dark"
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  @click="DONATION_MAIN_STEPPER_NEXT()"
                >
                  <p class="p-0 m-0">Next</p>
                </b-button>
                <b-button
                  id="backStepButton"
                  block
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  variant="outline-primary"
                  @click="DONATION_MAIN_STEPPER_BACK()"
                >
                  <p class="p-0 m-0">Back</p>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
        <div v-if="donationSteps == 3" class="p-0 pb-5">
          <b-overlay :show="transactionWait" rounded="sm">
            <div>
              <b-row>
                <b-col>
                  <div class="w-50 mx-auto py-4">
                    <p class="text-dark font-weight-bold">Summary</p>
                    <p class="text-dark font-weight-bold" style="opacity: 50%">
                      <span class="pl-2 pr-1" v-if="selectedCypto === 'RIF'"
                        ><img
                          src="../assets/icons/RIF.png"
                          style="width: 20px; height: 20px"
                          alt=""
                      /></span>
                      <span class="pl-2 pr-1" v-else
                        ><img
                          src="../assets/icons/BITC.png"
                          style="width: 20px; height: 20px"
                          alt=""
                      /></span>
                      {{ amountSelected }} {{ selectedCypto }}
                    </p>
                    <p
                      class="text-dark font-weight-light"
                      v-if="selectedCypto === 'BITC'"
                    >
                      = ☕ {{ amountSelected }} coffees
                    </p>
                    <p class="text-dark font-weight-light" v-else>
                      = $ {{ amountUSD }} USD
                    </p>
                    <b-form-checkbox
                      id="approveCheck"
                      v-model="approved"
                      name="approveCheck"
                      value="approved"
                      unchecked-value="not_approved"
                    >
                      I’ve read the summary. It's correct.
                    </b-form-checkbox>
                  </div>
                  <b-button
                    size="lg"
                    block
                    variant="dark"
                    :disabled="approvedCheck"
                    class="rounded-pill font-weight-bold w-50 mx-auto"
                    v-if="selectedCypto === 'BITC'"
                    @click="
                      sendSingleDonation({
                        creator: $route.params.user,
                        amount: amountSelected,
                      })
                    "
                  >
                    <p class="p-0 m-0">Send</p>
                  </b-button>
                  <b-button
                    size="lg"
                    block
                    variant="dark"
                    :disabled="approvedCheck"
                    class="rounded-pill font-weight-bold w-50 mx-auto"
                    v-else
                    @click="
                      sendSingleDonationRIF({
                        creator: $route.params.user,
                        amount: amountSelected,
                      })
                    "
                  >
                    <p class="p-0 m-0">Send</p>
                  </b-button>
                  <b-button
                    id="backStepButton"
                    block
                    class="rounded-pill font-weight-bold w-50 mx-auto"
                    variant="outline-primary"
                    @click="DONATION_MAIN_STEPPER_BACK()"
                  >
                    <p class="p-0 m-0">Back</p>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-overlay>
        </div>
        <div v-if="donationSteps == 4" class="p-0 pb-5">
          <b-overlay :show="false" rounded="sm">
            <div>
              <b-row>
                <b-col>
                  <div class="w-50 mx-auto py-4 text-center">
                    <b-col md="12" class="mb-3 pt-3">
                      <b-icon
                        class="mx-auto"
                        icon="arrow-clockwise"
                        animation="spin"
                        font-scale="4"
                      ></b-icon>
                    </b-col>
                    <h4 class="font-weight-bold">Transfering funds...</h4>
                    <p class="text-dark font-weight-light">
                      Please wait until the transaction is completed.
                    </p>
                    <a
                      :href="gohash"
                      style="display: block"
                      class="user-site my-4"
                      target="_blank"
                    >
                      {{ shortHash
                      }}<span class="px-2"
                        ><b-icon icon="box-arrow-up-right"></b-icon
                      ></span>
                    </a>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-overlay>
        </div>
        <div v-if="donationSteps == 5" class="p-0 pb-5">
          <b-overlay :show="false" rounded="sm">
            <div>
              <b-row>
                <b-col>
                  <div class="w-50 mx-auto py-4 text-center">
                    <b-col md="12" class="mb-3 pt-3">
                      <img
                        src="../assets/icons/success.png"
                        style="width: 100px"
                        alt=""
                      />
                    </b-col>
                    <h4 class="font-weight-bold">
                      Your coffees have been sent!
                    </h4>
                    <p class="text-dark font-weight-light">
                      Thanks for your contribution.
                    </p>
                    <a
                      :href="gohash"
                      style="display: block"
                      class="user-site my-4"
                      target="_blank"
                    >
                      View transaction<span class="px-2"
                        ><b-icon icon="box-arrow-up-right"></b-icon
                      ></span>
                    </a>
                  </div>
                  <b-button
                    id="backStepButton"
                    block
                    class="rounded-pill font-weight-bold w-50 mx-auto"
                    variant="outline-primary"
                    @click="
                      DONATION_MAIN_STEPPER_INITIAL(),
                        (amountSelected = 0),
                        (amountSelectedCustomInput = 0)
                    "
                  >
                    <p class="p-0 m-0">Go back</p>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-overlay>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "BifcoffeeCard",
  data() {
    return {
      amountSelected: 0,
      amountSelectedInput: 0,
      amountSelectedCustomInput: 0,
      approved: "",
      selectedCypto: "RIF",
    };
  },
  computed: {
    ...mapState([
      "donator",
      "isconnected",
      "username",
      "balanceOf",
      "donationSteps",
      "creator_username",
      "creator_site",
      "creator_subtitle",
      "creator_avatar",
      "creator_bg",
      "transactionWait",
      "transactionHash",
      "rifPrice",
    ]),
    ...mapGetters(["getCreatorUsername", "getCreatorAvatar"]),

    progress() {
      return Math.round(100 / this.max_step) * this.currentStep;
    },

    gohash() {
      return "https://explorer.testnet.rsk.co/tx/" + this.transactionHash;
    },

    shortHash() {
      return (
        this.transactionHash.slice(0, 4) +
        "..." +
        this.transactionHash.slice(60)
      );
    },

    desc() {
      if (!this.creator_subtitle) {
        return "No description :(";
      } else {
        return this.creator_subtitle;
      }
    },

    site() {
      if (!this.creator_site) {
        return "...";
      } else {
        return this.creator_site;
      }
    },

    approvedCheck() {
      if (this.approved !== "approved" && this.amountSelected > 0) {
        return true;
      } else {
        return false;
      }
    },

    amountUSD() {
      const usd = this.amountSelected * this.rifPrice;
      console.log(usd);

      if (usd > 99999) {
        let str1 = new String(usd);
        let str2 = str1.slice(0, 3);
        return str2 + "k";
      } else {
        return parseFloat(usd).toFixed(2);
      }
    },

    google() {
      return "https://www.google.com";
    },
  },
  beforeMount() {
    this.getCryptoprice();
  },
  methods: {
    ...mapActions([
      "sendSingleDonation",
      "sendSingleDonationRIF",
      "getCryptoprice",
    ]),
    ...mapMutations([
      "DONATION_MAIN_STEPPER_NEXT",
      "DONATION_MAIN_STEPPER_BACK",
      "DONATION_MAIN_STEPPER_INITIAL",
    ]),
    copyMyAddress(add) {
      navigator.clipboard.writeText(add);
    },
  },
  watch: {
    amountSelectedCustomInput(newValue, oldValue) {
      if (this.amountSelectedCustomInput !== 0) {
        this.amountSelectedInput = newValue;
      } else {
        this.amountSelectedInput = 0;
      }
    },
    amountSelectedInput(newValue, oldValue) {
      if (this.amountSelectedInput !== 0) {
        this.amountSelectedCustomInput = newValue;
        this.amountSelected = this.amountSelectedInput;
      } else {
        this.amountSelectedCustomInput = 0;
        this.amountSelected = 0;
      }
    },
  },
};
</script>

<style lang="scss">
.amountSelection {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="radio"] {
    opacity: 0;
    visibility: hidden;
    width: 0;
    &:checked + label {
      color: rgb(52, 52, 52);
      border: 3px solid rgb(52, 52, 52);
    }
  }

  label {
    width: 40px;
    height: 40px;
    display: inline-block;
    color: rgb(127, 127, 127);
    font-weight: 800;
    background-color: #ffffff;
    padding: 0;
    display: grid;
    place-content: center;

    cursor: pointer;
    border: 3px solid gray;
    border-radius: 50%;
    margin: 0;
  }

  input[type="number"] {
    margin: 0;
    width: 80px;
    min-width: 70px;
    height: 40px;
    border-radius: 50px;
    border: 3px solid rgb(52, 52, 52);
    outline: none;

    @media (max-width: 790px) {
      width: 100%;
    }
  }

  .amountSelection-item {
    margin: 0 2px;
    display: flex;
    align-items: center;
    padding: 0;
  }

  .amount-list {
    display: flex;
  }
}

@media (max-width: 790px) {
  .amountSelection {
    flex-direction: column;
  }
}

#profile__container {
  width: 100%;
  max-width: 654px;
  min-height: 625px;
  height: auto;
  min-height: 625px;
  background-color: rgb(255, 255, 255);
  border-radius: 90px;

  /* Center vertically and horizontally */
  margin: 0px auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .profile__background {
    height: 218.75px;
    // background-image: url('../assets/images/bg-user.png');
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
  }

  .profile__desc {
    height: 50%;
    position: relative;

    a:hover {
      color: gray;
    }

    .profile__desc__top {
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      top: -60px;
    }

    .profile__edit {
      width: 35px;
      height: 35px;
      position: absolute;
      top: 65%;
      left: 52%;
      border: none;
      outline: none;
    }

    .donate__button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 70%;

      //Social networks section
      .social__section {
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        .social__button {
          width: 40px;
          height: 40px;
          border-radius: 25px;
          display: grid;
          place-items: center;
        }
      }
    }
  }

  .AmountInput {
    background-color: rgb(255, 255, 255);
    border: 1px solid #2d2d2d;
    outline: none;

    &:focus {
      color: #2d2d2d;
      font-weight: 700;
      outline: none !important;
      outline-width: 0 !important;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }
  }

  @media screen and (max-width: 575px) {
    .profile__background {
      height: 35%;
      // background-image: url('../assets/images/bg-user.png');
      // background-repeat: no-repeat;
      // background-position: center;
      // background-size: cover;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
