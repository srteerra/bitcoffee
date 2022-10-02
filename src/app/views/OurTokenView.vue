<template>
  <div class="our-token__view">
    <Header />
    <b-container class="our-token__container p-3">
      <!-- bitcoffee token information section -->
      <b-row class="bitcoffee__container">
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
        <b-col cols="12" md="6" lg="6">
          <div class="token-image__container">
            <img
              class="w-75"
              src="../assets/images/Bitcoffee-token.png"
              alt="bitcoffe-token"
              data-aos="flip-right"
              data-aos-duration="1000"
            />
          </div>
        </b-col>
        <b-col class="token-info__container" cols="12" md="6" lg="6">
          <div class="w-100 px-3" data-aos="fade-left" data-aos-duration="1000">
            <h1><strong>Our token</strong></h1>
            <h3 class="my-4">About Bitcoffee token</h3>
            <p class="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              nisi nobis, quasi dolorum reprehenderit, nihil quo nemo suscipit
              esse accusantium voluptas similique sint obcaecati saepe in neque,
              repudiandae laborum quia sunt. Quod optio, labore reprehenderit,
              ab possimus veniam qui porro quae vel asperiores ad natus officia
              quos explicabo laborum dolorem eligendi laudantium modi. Minima
              voluptatibus illum sit facilis voluptas doloremque.
            </p>
          </div>
        </b-col>
        <div class="solid-back"></div>
      </b-row>

      <!-- where to buy section -->
      <b-container class="where-buy__container text-center">
        <div class="w-100" data-aos="zoom-in" data-aos-duration="1000">
          <h2><strong>Where to buy?</strong></h2>
          <div class="buy-information mx-auto">
            <p class="py-4">
              For now, it's only a development token, So it's not in liquidty.
            </p>
            <p class="py-3">
              But you can interact using RBTC, here is a
              <strong><a href="#" target="_blank">faucet</a></strong> to fund
              you Testnet account.
            </p>
          </div>
        </div>
        <img id="cat-1" src="../assets/icons/coffee-cat.png" alt="cat" />
        <img id="cat-2" src="../assets/icons/coffee-cat.png" alt="cat" />
      </b-container>

      <!-- token address section -->
      <b-container class="token-address__container text-center">
        <div
          class="w-100"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h1><strong>Token address</strong></h1>
          <p class="my-5">
            Only this is the
            <strong
              ><a
                href="https://crypto4dummy.com/que-es-testnet/"
                target="_blank"
                >Tesnet</a
              ></strong
            >
            address, please verfy it before making transaction or purchase.
          </p>
          <b-button
            class="token-address__button w-75 mx-auto bg-dark font-weight-bold p-3"
            >0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
            <span class="px-2"><b-icon icon="files"></b-icon></span
          ></b-button>
          <b-button
            class="token-address-short__button w-75 mx-auto bg-dark font-weight-bold p-3"
            >0xc3...9375 <span class="px-2"><b-icon icon="files"></b-icon></span
          ></b-button>
        </div>
      </b-container>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "OurTokenView",
  data() {},
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.our-token__view {
  // first section styles
  .our-token__container {
    .hearthVector {
      width: 50px;
      opacity: 0.5;
      position: absolute;
      top: 250px;
      right: 300px;
      transform: rotate(25deg);
      animation-name: vectorAnimation;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
    .coffeeVector {
      width: 50px;
      opacity: 0.5;
      position: absolute;
      left: 300px;
      bottom: 100px;
      transform: rotate(-25deg);
      animation-name: vectorAnimation2;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
    .bitcoffee__container {
      height: 90vh;
      display: flex;
      align-items: center;
      .token-image__container {
        text-align: right;
      }
      @media (max-width: 790px) {
        .token-image__container {
          text-align: center;
        }
      }
      .token-info__container {
      }
    }
    .solid-back {
      background-color: #f1e9e1;
      width: 50%;
      height: 90vh;
      position: absolute;
      left: 0;
      z-index: -1;
    }
  }

  //   were to buy and token address styles
  .where-buy__container {
    height: 90vh;
    display: flex;
    align-items: center;
    position: relative;

    .buy-information {
      width: 70%;
    }

    // cat images styles
    #cat-1 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 300px;
      left: 60px;
      transform: rotate(-25deg);
      transform: rotate(25deg);
      animation-name: vectorAnimation2;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
    #cat-2 {
      width: 60px;
      height: 60px;
      position: absolute;
      right: 100px;
      bottom: 200px;
      transform: rotate(25deg);
      transform: rotate(25deg);
      animation-name: vectorAnimation;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }

    @media (max-width: 790px) {
      #cat-1 {
        bottom: 0;
        top: initial;
        left: 40%;
      }
    }
  }

  //   token address section styles
  .token-address__container {
    height: 90vh;
    display: flex;
    align-items: center;

    .token-address__button {
      border-radius: 15px;
    }

    .token-address-short__button {
      border-radius: 15px;
      display: none;
    }

    @media (max-width: 790px) {
      .token-address__button {
        display: none;
      }

      .token-address-short__button {
        display: block;
      }
    }
  }
}
</style>
