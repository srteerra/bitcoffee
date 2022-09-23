<template>
  <div class="container-fluid p-0 m-0">
    <b-navbar toggleable="md" type="light" variant="white" class="px-5 py-4">
      <!-- Navbar logo -->
      <b-navbar-brand href="#">
        <img
          id="principal-logo"
          src="../assets/logos/horizontal-logo.png"
          alt=""
        />
        <img id="secundary-logo" src="../assets/logos/icon-logo.png" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <!-- Navbar links -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-regular">
          <router-link to="/" class="px-2 my-auto" active-class="activeLink">
            Home
          </router-link>
          <router-link
            to="/about"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Become a creator
          </router-link>
          <router-link
            to="/token"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Q&A
          </router-link>
          <router-link
            to="/learn"
            class="px-2 my-auto"
            active-class="activeLink"
          >
          </router-link>
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
            class="ml-0 mt-3 mt-xl-0 ml-xl-4 px-4 py-2 rounded-pill font-weight-bold"
            variant="dark"
          >
            <span v-if="isConnected" class="pr-2"><b-icon-wallet /></span>
            {{ walletConnectText }}
          </b-button>
        </b-navbar-nav>
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
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
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
      "isConnected",
      "connectBtnState",
    ]),
  },
  methods: {
    ...mapActions(["showinstallMetaModal", "connect_wallet"]),
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
