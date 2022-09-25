<template>
  <div>
    <Header />
    <b-container>
      <!-- First secrtion -->
      <div class="first-section text-center p-5">
        <img
          src="../assets/vectors/hearth.png"
          alt="hearth"
          class="hearthVector"
        />
        <img
          src="../assets/vectors/coffee.png"
          alt="coffeee"
          class="coffeeVector"
        />
        <div class="w-100">
          <h1>
            <strong>Your page, your <br />own place.</strong>
          </h1>
          <p class="py-4">Here with us</p>
          <div class="search-creator text-center">
            <div class="search-creator-input__container">
              <p class="placeholder font-weight-light">bitcoffee.com/</p>
              <input
                class="search-creator__input font-weight-bold"
                type="text"
                v-model="requestedName"
              />
              <div class="search-creator__status" v-show="requestedName">
                <b-icon
                  icon="check-circle-fill"
                  font-scale="1"
                  v-if="isAvailable"
                ></b-icon>
                <b-icon
                  icon="x-circle-fill"
                  font-scale="1"
                  v-if="!isAvailable"
                ></b-icon>
              </div>
              <button
                class="search-creator__button"
                :disabled="isAvailableBtn"
                @click="getMyPage"
              >
                <img
                  src="../assets/icons/Artboard 81 1.png"
                  class="mx-auto"
                  alt="arrow-right"
                />
              </button>
            </div>
            <b-button
              class="alternativeBtn w-100 bg-dark font-weight-bold"
              pill
              :disabled="isAvailableBtn"
              >Get started</b-button
            >
          </div>
          <p class="pt-4 pb-5">
            Get started now, just connect your wallet and set up <br />your new
            <strong>BitCoffee</strong> page.
          </p>
          <div class="down-arrow" id="down-arrow">
            <img
              src="../assets/icons/Artboard 8 1.png"
              animation="cylon-vertical"
              alt="arrow-down"
              class="py-5"
            />
          </div>
        </div>
      </div>
      <!-- / First section -->

      <!-- Gallery section -->
      <div>
        <b-row class="galery-section__container my-5 px-3">
          <b-col class="galery-info__column" cols="12" md="6" lg="4">
            <img
              src="../assets/vectors/coffee-cup.png"
              alt="coffee-cup"
              class="coffee-cupVector"
            />
            <h1>
              <strong
                >Use your <span style="color: #d8bea7">cripto wallet</span> to
                accept donations from your fans.</strong
              >
            </h1>
            <p class="my-4">
              Unlike other platforms, you can use the power of RSK to
              <strong>keep doing what you really like and enjoy</strong>
            </p>
            <b-button class="bg-dark w-50 font-weight-bold" pill
              >Get started</b-button
            >
          </b-col>
          <b-col class="galery-people__column" cols="12" md="6" lg="8">
            <b-row class="galery-people__row p-3 mt-4">
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="../assets/images/Rectangle 76.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img src="../assets/images/Rectangle 77.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img src="../assets/images/Rectangle 78.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <img src="../assets/images/Rectangle 79.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <img src="../assets/images/Rectangle 80.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="6"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <img src="../assets/images/Rectangle 81.png" alt="person" />
              </b-col>
            </b-row>
          </b-col>
          <div class="solid-back"></div>
        </b-row>
      </div>
      <!-- / Galery section  -->

      <!-- Membership section -->
      <div>
        <b-row class="membership-section__container py-5 px-4">
          <img
            src="../assets/vectors/Dollar 1.png"
            alt="dollar"
            class="membershipVector1"
          />
          <img
            src="../assets/vectors/Doc 2.png"
            alt="doc"
            class="membershipVector2"
          />
          <img
            src="../assets/vectors/xusd.png"
            alt="xusd"
            class="membershipVector3"
          />
          <b-col class="mb-0" align-self="start" cols="12" md="12" lg="4">
            <h2 class="font-weight-bold">
              Build a <span style="color: #594d42">monthly</span> income!
            </h2>
            <p>You can make the best membership to your fans.</p>
          </b-col>
          <b-col align-self="center" cols="12" md="12" lg="6">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="../assets/images/btc-hands.png"
              alt="btc-hands"
              class="w-100"
            />
          </b-col>
          <b-col md="6" offset-md="6" class="text-right">
            <h2 class="font-weight-bold">
              <span style="color: #594d42">0% fees</span> on platform for
              donations
            </h2>
            <p>Take all the contributions</p>
          </b-col>
        </b-row>
      </div>
      <!-- / Membership section -->

      <!-- Address section -->
      <div>
        <b-row class="address-section__container my-5 px-3">
          <b-col class="my-5" cols="12" md="12" lg="5">
            <h1 class="font-weight-bold">
              Stop sharing you <span style="color: #d8bea7">address</span> like
              this.
            </h1>
            <p>
              Copying and pasting is not the safest way, you expose yourself to
              <strong>typos</strong> or any other <strong>risk</strong>.
            </p>
            <p>
              With BitCoffee you can share your unique link with everyone, and
              start receiving contributions to your synchronized addresses.
            </p>
          </b-col>
          <b-col
            class="text-center my-5 address-section__img"
            cols="12"
            md="12"
            lg="7"
          >
            <img
              class="w-100"
              src="../assets/images/address.png"
              alt="address"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </b-col>
        </b-row>
      </div>
      <!-- / Address section -->
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { log } from "console";
import { mapActions } from "vuex";
import { client } from "../../lib/sanityClient";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isAvailable: false,
      requestedName: null,
      fetchingPage: false,
    };
  },
  methods: {
    ...mapActions(["getMyPage"]),
  },
  computed: {
    isAvailableBtn() {
      if (this.isAvailable === false) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    requestedName() {
      if (this.requestedName) {
        this.fetchingPage = true;
        const query =
          '*[_type == "users" && userName == $user] {userName, userAddress}';
        const params = { user: this.requestedName };
        client
          .fetch(query, params)
          .then((users) => {
            if (users.length === 0) {
              this.isAvailable = true;
            } else {
              this.isAvailable = false;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.isAvailable = false;
      }
    },
  },
};
</script>

<style lang="scss">
// Css styles for the first section
.first-section {
  display: flex;
  align-items: center;
  height: 90vh;
  position: relative;
  .alternativeBtn {
    display: none;
  }
  .search-creator {
    width: 100%;
    .placeholder {
      display: inline-block;
      margin-right: -130px;
      color: rgb(146, 142, 142);
    }
    .search-creator__input {
      width: 50%;
      height: 45px;
      padding: 10px 100px 10px 130px;
      border-radius: 50px;
      border: 3px solid #594d42;
      outline: none;
      background: transparent;
    }
    .search-creator__button {
      margin-left: -80px;
      height: 45px;
      width: 80px;
      background: #594d42;
      color: white;
      border: 0;
      border-radius: 50px;
      &:hover {
        background-color: #726253;
      }
      &:disabled {
        background-color: #aa9684;
      }
      img {
        width: 20px;
      }
    }
    .search-creator__status {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 44%;
      right: 33%;

      @media (max-width: 1200px) {
        top: 43.5%;
        right: 35%;
      }

      @media (max-width: 990px) {
        top: 43%;
        right: 37%;
      }
    }
  }
  .hearthVector {
    width: 50px;
    opacity: 0.5;
    position: absolute;
    top: 200px;
    transform: rotate(-25deg);
    animation-name: vectorAnimation2;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  .coffeeVector {
    width: 50px;
    opacity: 0.5;
    position: absolute;
    right: 100px;
    bottom: 200px;
    transform: rotate(25deg);
    animation-name: vectorAnimation;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
}

// Css styles for the galery section
.galery-section__container {
  display: flex;
  align-items: center;
  height: 100vh;
  .coffee-cupVector {
    width: 30px;
    opacity: 0.5;
    position: absolute;
    right: 60px;
    bottom: 0;
    animation-name: vectorAnimation3;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }
  .galery-people__column {
    position: relative;
    .galery-people__row {
      display: flex;
      justify-content: space-around;
      img {
        width: 90%;
      }
    }
  }
  .solid-back {
    background-color: #f1e9e1;
    width: 50%;
    height: 90vh;
    position: absolute;
    right: 0;
    z-index: -1;
  }
}

// Css styles for membership section
.membership-section__container {
  position: relative;
  height: 100vh;
  h2 {
    color: rgba(45, 45, 45, 0.5);
  }

  .membershipVector1 {
    width: 50px;
    position: absolute;
    right: 100px;
  }
  .membershipVector2 {
    width: 50px;
    position: absolute;
    left: 150px;
    bottom: 200px;
  }
  .membershipVector3 {
    width: 70px;
    position: absolute;
    left: 200px;
    bottom: 150px;
  }
}

.address-section__img {
  display: flex;
  align-items: center;
  text-align: center;
}

// Animations

#down-arrow {
  animation-name: upAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  position: relative;
}

@keyframes upAnimation {
  0% {
    top: 0;
  }
  50% {
    top: 50px;
  }
  100% {
    top: 0;
  }
}

@keyframes vectorAnimation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(25deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes vectorAnimation2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes vectorAnimation3 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

// This media query don't works correctly in breackpoint files
@media (max-width: 790px) {
  .galery-section__container {
    height: auto;
  }
}
</style>
