<template>
  <div class="faucet-view">
    <Header />
    <b-container class="faucet__container px-3">
      <div class="faucet-form__container">
        <img
          src="../assets/vectors/coffee.png"
          alt="coffeee"
          class="coffeeVector"
        />
        <div class="faucet-form__box p-3 text-center mx-auto">
          <h2 class="font-weight-bold my-4">Enter the amount to request</h2>
          <input
            type="number"
            required
            class="faucet-form__input py-2 px-4 my-3"
            placeholder="100"
            ondrop="return false;"
            onpaste="return false;"
            onkeypress="return event.charCode>=48 && event.charCode<=57"
          />
          <div class="faucet-form__button mx-auto">
            <b-button class="w-100 my-3 mx-auto" pill variant="outline-dark"
              >Request</b-button
            >
          </div>
        </div>
        <img id="cat-1" src="../assets/icons/coffee-cat.png" alt="cat" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "FaucetView",
  data() {},
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.faucet-view {
  height: 100vh;
  width: 100%;
  .faucet__container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .faucet-form__container {
      width: 75%;
      .coffeeVector {
        width: 50px;
        opacity: 0.5;
        position: absolute;
        left: 100px;
        bottom: 100px;
        transform: rotate(-25deg);
        animation-name: vectorAnimation2;
        animation-duration: 5s;
        animation-iteration-count: infinite;
      }
      #cat-1 {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 100px;
        right: 60px;
        transform: rotate(-25deg);
        transform: rotate(25deg);
        animation-name: vectorAnimation;
        animation-duration: 5s;
        animation-iteration-count: infinite;
      }
      .faucet-form__box {
        border-radius: 25px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        width: 80%;
        .faucet-form__input {
          border-radius: 50px;
          outline: none;
          border: 1px solid black;
          width: 40%;
        }
        .faucet-form__button {
          width: 50%;
        }
      }
    }
    @media (max-width: 640px) {
      .faucet-form__container {
        width: 100%;
        .faucet-form__box {
          width: 100%;
          box-shadow: none;
          .faucet-form__input {
            width: 90%;
          }
          .faucet-form__button {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
