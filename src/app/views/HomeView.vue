<template>
  <div>
    <b-container>
      <!-- First secrtion -->
      <div class="text-center p-5">
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
        <div class="down-arrow" id="hola">
          <img
            src="../assets/icons/Artboard 8 1.png"
            animation="cylon-vertical"
            alt="arrow-down"
            class="py-5"
          />
        </div>
      </div>

      <!-- Gallery section -->
      <div class="rojo">
        <b-row class="galery-section__container my-5">
          <b-col class="galery-info__column" cols="12" md="6" lg="4">
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
            <b-row class="galery-people__row m-3">
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 76.png" alt="person" />
              </b-col>
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 77.png" alt="person" />
              </b-col>
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 78.png" alt="person" />
              </b-col>
            </b-row>
            <b-row class="galery-people__row m-3">
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 79.png" alt="person" />
              </b-col>
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 80.png" alt="person" />
              </b-col>
              <b-col class="my-2" cols="12" md="4">
                <img src="../assets/images/Rectangle 81.png" alt="person" />
              </b-col>
            </b-row>
          </b-col>
          <div class="solid-back"></div>
        </b-row>
      </div>
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

.galery-section__container {
  display: flex;
  align-items: center;
  height: 100vh;
  .galery-info__column {
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

.arrow-down {
  animation: down 3s infinite alternate ease-in-out;
}

@keyframes down {
  from {
    transform: translateX(0vh);
  }

  to {
    transform: translateY(20vh);
  }
}
</style>
