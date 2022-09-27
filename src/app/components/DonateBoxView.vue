<template>
  <div class="donate-card p-4" data-aos="zoom-in" data-aos-duration="1000">
    <div class="donate-card-title w-50 mx-auto my-4">
      <h3 class="font-weight-bold my-3">Buy me a coffee</h3>
    </div>
    <div>
      <div class="w-100 text-left">
        <!-- critpo dropdown -->
        <b-dropdown
          size="md"
          class="my-2"
          variant="link"
          toggle-class="text-decoration-none"
        >
          <template #button-content>
            <span class="pr-1"><img alt="" style="max-width: 25px" /></span>
            {{ selectedCypto }}
          </template>
          <b-dropdown-item-button
            v-if="selectedCypto !== 'WBNB'"
            class="py-1"
            @click="selectedCypto({ crypto: 'WBNB' })"
          >
            <span class="pr-1"
              ><img src="" alt="" style="max-width: 25px"
            /></span>
            WBNB
          </b-dropdown-item-button>
          <b-dropdown-item-button
            v-if="selectedCypto !== 'ETH'"
            class="py-1"
            @click="selectCrypto({ crypto: 'ETH' })"
          >
            <span class="pr-1"
              ><img src="" alt="" style="max-width: 25px"
            /></span>
            ETH
          </b-dropdown-item-button>
        </b-dropdown>
      </div>

      <!-- Donation amount -->
      <div class="py-3 amountSelection">
        <div class="amount-list my-3">
          <div class="amountSelection-item">
            <input
              id="1critpo"
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
          class="text-dark font-weight-bold m-0"
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

      <p>
        I appreciate all the support, with this donation I’ll keep doing what I
        love.
      </p>
      <div>
        <b-button
          pill
          class="donate__button bg-dark w-100 py-2 px-3 font-weight-bold my-3"
          >Donate</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonateBoxView",
  data() {
    return {
      // Amount group
      amountSelected: "",
      amountSelectedInput: "",
      amountSelectedCustomInput: "",

      selectedCypto: "BTC",
    };
  },
  // computed: {
  //   ...mapGetters(['getCryptoVSPair']),
  // },
  // methods: {
  //   ...mapActions(["selectPair"]),
  // },
  watch: {
    amountSelectedCustomInput(newValue, oldValue) {
      if (this.amountSelectedCustomInput !== "") {
        this.amountSelectedInput = newValue;
      }
    },
    amountSelectedInput(newValue, oldValue) {
      if (this.amountSelectedInput !== "") {
        this.amountSelectedCustomInput = newValue;
        this.amountSelected = this.amountSelectedInput;
      }
    },
  },
};
</script>

<style lang="scss">
.donate-card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 25px;
  width: 80%;
  margin: 0 auto;
  .donate-card-title {
    border-bottom: 3px solid #000;
  }
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
        color: #000;
        border: 3px solid #000;
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
      height: 40px;
      border-radius: 50px;
      border: 3px solid #000;
      outline: none;
      min-width: 70px;
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
}
</style>
