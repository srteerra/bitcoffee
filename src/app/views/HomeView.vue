<template>
  <div>
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
          <div class="search-creator w-100 text-center">
            <input
              class="search-creator__input"
              type="text"
              placeholder="bitcoffee.com/"
            />
            <button class="search-creator__button">
              <img
                src="../assets/icons/Artboard 81 1.png"
                class="mx-auto"
                alt="arrow-right"
              />
            </button>
          </div>
          <p class="pt-4 pb-5">
            Get started now, just connect your wallet and set up <br />your new
            <strong>BitCofee</strong> page.
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
        <b-row class="galery-section__container my-5">
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
                cols="12"
                md="6"
                lg="4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="../assets/images/Rectangle 76.png" alt="person" />
              </b-col>
              <b-col
                class="text-center my-2"
                cols="12"
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
                cols="12"
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
                cols="12"
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
                cols="12"
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
                cols="12"
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
          <b-col align-self="start" cols="12" md="12" lg="4">
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
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {},
};
</script>

<style lang="scss">
// Css styles for the first section
.first-section {
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  .search-creator {
    width: 50%;
    .search-creator__input {
      width: 50%;
      padding-right: 50px;
      height: 45px;
      padding: 10px 100px 10px 20px;
      border-radius: 50px;
      border: 3px solid #594d42;
      outline: none;
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
      img {
        width: 20px;
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
    width: 50px;
    opacity: 0.5;
    position: absolute;
    right: 20px;
    bottom: 10px;
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
  height: 100vh !important;
  img {
    width: 100%;
  }
  h2 {
    color: rgba(45, 45, 45, 0.5);
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

  .search-creator__input {
    width: 90%;
  }
}
</style>
