<template>
  <div class="container-fluid p-0 m-0">
    <b-navbar toggleable="lg" type="light" variant="white" class="px-5 py-4">
      <!-- Navbar logo -->
      <b-navbar-brand href="#">
        <router-link to="/home">
          <img
            id="principal-logo"
            src="../assets/logos/horizontal-logo.png"
            alt=""
          />
        </router-link>
        <router-link to="/home">
          <img id="secundary-logo" src="../assets/logos/icon-logo.png" alt="" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <!-- Navbar links -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-regular">
          <b-button
            id="amountBITC"
            style="
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            @click="changeSelection()"
            class="ml-0 mt-3 mt-lg-0 ml-lg-4 px-4 py-2 rounded-pill font-weight-bold"
            variant="outline-dark"
            v-if="isconnected"
            ><span
              ><span class="font-weight-light">Your balance: </span
              ><span class="pl-2" v-if="selectedCypto === 'BITC'">
                {{ balanceOf.bitcBal.toLocaleString() }}
                <img
                  src="../assets/icons/BITC.png"
                  style="width: 20px; height: 20px"
                  alt=""
                />
              </span>
              <span class="pl-2" v-else>
                {{ balanceOf.rifBal.toLocaleString() }}
                <img
                  src="../assets/icons/RIF.png"
                  style="width: 20px; height: 20px"
                  alt=""
                />
              </span> </span
          ></b-button>
          <b-button
            variant="outline-dark"
            v-else
            class="ml-0 mt-3 mt-lg-0 ml-lg-4 px-4 py-2 rounded-pill font-weight-bold"
            href="https://faucet.rifos.org/"
            target="_blank"
            >GET <span class="font-weight-bold">$RIF</span></b-button
          >

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
            class="ml-0 mt-3 mt-lg-0 ml-lg-4 px-4 py-2 rounded-pill font-weight-bold"
            variant="dark"
          >
            <span v-if="isconnected" class="pr-2"><b-icon-wallet /></span>
            {{ walletConnectText }}
          </b-button>
        </b-navbar-nav>

        <!-- Controls dropdown -->
        <b-dropdown
          v-if="isconnected"
          right
          toggle-class="text-decoration-none"
          class="m-md-2 pl-1"
          variant="light"
          no-caret
        >
          <template #button-content>
            <b-avatar button :src="`${avatar}`" size="4rem" />
          </template>
          <b-dropdown-item to="/profile">
            <div class="py-2">
              <span class="px-2"><b-icon-person /></span> My profile
            </div>
          </b-dropdown-item>
          <b-dropdown-item to="/help">
            <div class="py-2">
              <span class="px-2"><b-icon-question-circle /></span>
              Need help?
            </div>
          </b-dropdown-item>
          <b-dropdown-item to="/help">
            <div class="py-2">
              <span class="px-2"><b-icon-bug /></span> Report a bug
            </div>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item-button
            :disabled="disconnectBtnState"
            @click="disconnectAcc()"
          >
            <div class="py-2">
              <span class="px-2"><b-icon-box-arrow-left /></span>
              Disconnect
            </div>
          </b-dropdown-item-button>
        </b-dropdown>
      </b-collapse>
    </b-navbar>

    <!-- Missing Metamask modal -->
    <b-modal
      id="modal-installMetamask"
      v-model="showinstallMetaModalState"
      centered
      size="md"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button
            variant="light"
            size="md"
            class="float-right"
            @click="showinstallMetaModal()"
          >
            <b-icon-x />
          </b-button>
        </div>
      </template>
      <b-container class="px-5">
        <b-row class="pb-4">
          <b-col class="text-center">
            <h4>Something is missing!</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <p class="font-weight-regular">
              You must to have <span class="font-weight-bold">Metamask</span> on
              your browser to connect. Install it
              <span class="font-weight-regular text-primary">
                <a href="https://metamask.io/" target="_blank">here</a>
              </span>
            </p>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="dark"
            size="md"
            class="float-right"
            @click="showinstallMetaModal()"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "AltHeader",
  data() {
    return {};
  },
  computed: {
    walletConnectText() {
      if (this.$store.state.currentAccount === null) {
        return "Connect Wallet";
      } else {
        return (
          this.$store.state.currentAccount.slice(0, 4) +
          "..." +
          this.$store.state.currentAccount.slice(36)
        );
      }
    },
    ...mapState([
      "showinstallMetaModalState",
      "isconnected",
      "connectBtnState",
      "disconnectBtnState",
      "creator_avatar",
      "avatar",
      "balanceOf",
      "selectedCypto",
    ]),
  },
  methods: {
    ...mapMutations(["SET_SELECTED_CRYPTO"]),
    ...mapActions(["showinstallMetaModal", "connect_wallet", "disconnectAcc"]),
    changeSelection() {
      if (this.selectedCypto === "RIF") {
        this.SET_SELECTED_CRYPTO({ crypto: "BITC" });
      } else {
        this.SET_SELECTED_CRYPTO({ crypto: "RIF" });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
#principal-logo {
  display: none;
}
#secundary-logo {
  display: none;
}
#wallet-ico {
  max-width: 30px;
}
#connectWalletOptionsLogo {
  max-width: 40px;
}
@media screen and (min-width: 600px) {
  #principal-logo {
    display: initial;
    max-width: 200px;
  }
  #secundary-logo {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  #principal-logo {
    display: none;
  }
  #secundary-logo {
    display: initial;
    max-width: 50px;
  }
}
.activeLink {
  font-weight: 800;
  color: #2d2d2d;
}
</style>
