<template>
  <div id="profile__container" class="pb-5">
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
        <div v-if="currentStep == 1" class="p-0 text-center">
          <div>
            <b-row>
              <b-col>
                <div>
                  <p class="font-weight-light" v-if="creator_site">
                    {{ site }}
                  </p>
                  <p style="max-width: 200px" class="mx-auto py-3">
                    {{ desc }}
                  </p>
                </div>
                <b-button
                  size="lg"
                  block
                  variant="dark"
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  @click="onClickNext"
                >
                  <p class="p-0 m-0">Donate</p>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
        <div v-if="currentStep == 2" class="p-0">
          <div>
            <b-row>
              <b-col>
                <div class="w-50 mx-auto py-5">
                  <b-form-group
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
                  </b-form-group>
                </div>
                <b-button
                  size="lg"
                  block
                  variant="dark"
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  @click="onClickNext"
                >
                  <p class="p-0 m-0">Next</p>
                </b-button>
                <b-button
                  id="backStepButton"
                  block
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  variant="outline-primary"
                  @click="onClickBack"
                >
                  <p class="p-0 m-0">Back</p>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
        <div v-if="currentStep == 3" class="p-0 pb-5">
          <div>
            <b-row>
              <b-col>
                <div class="w-50 mx-auto py-4">
                  <p class="text-dark font-weight-bold">Summary</p>
                  <p class="text-dark font-weight-bold" style="opacity: 50%">
                    {{ amountInput }} TSY
                  </p>
                  <p class="text-dark font-weight-light">
                    = {{ amountInput }} coffees
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
                  @click="sendDonation({ amount: amountInput })"
                >
                  <p class="p-0 m-0">Approve</p>
                </b-button>
                <b-button
                  id="backStepButton"
                  block
                  class="rounded-pill font-weight-bold w-50 mx-auto"
                  variant="outline-primary"
                  @click="onClickBack"
                >
                  <p class="p-0 m-0">Back</p>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "BifcoffeeCard",
  data() {
    return {
      currentStep: 1,
      amountInput: null,
      approved: "approved",
    };
  },
  computed: {
    progress() {
      return Math.round(100 / this.max_step) * this.currentStep;
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
      if (this.approved !== "approved") {
        return true;
      } else {
        return false;
      }
    },

    ...mapState([
      "donator",
      "isconnected",
      "username",
      "balanceOf",
      "creator_username",
      "creator_site",
      "creator_subtitle",
      "creator_avatar",
      "creator_bg",
    ]),
    ...mapGetters(["getCreatorUsername", "getCreatorAvatar"]),
  },
  methods: {
    ...mapActions(["sendDonation"]),
    onClickNext() {
      this.currentStep++;
    },
    onClickBack() {
      this.currentStep--;
    },
    onClickFirst() {
      this.currentStep = 1;
    },
    copyMyAddress(add) {
      navigator.clipboard.writeText(add);
    },
  },
};
</script>

<style lang="scss">
#profile__container {
  width: 100%;
  max-width: 654px;
  height: 625px;
  min-height: 625px;
  background-color: rgb(255, 255, 255);
  border-radius: 90px;

  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .profile__background {
    height: 35%;
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
    border-radius: 0;

    .profile__background {
      height: 35%;
      // background-image: url('../assets/images/bg-user.png');
      // background-repeat: no-repeat;
      // background-position: center;
      // background-size: cover;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
