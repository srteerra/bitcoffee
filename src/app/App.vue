<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <!-- <div id="fetchingData__screen" v-if="fetchingData" style="z-index: 100">
      <img
        src="./assets/logos/icon-logo.png"
        alt=""
        style="width: 100px; height: 100px"
      />
    </div> -->
    <!-- <div id="bg-slot-page" v-if="shadowblank" class="text-center">
      <a href="/">
        <img id="shadow-icon-place" src="./assets/logos/icon-logo.png" alt="" />
      </a>
    </div> -->
    <NotificationList />
    <router-view />
    <!-- Share modal -->
    <b-modal
      id="wallet-modal"
      v-model="walletModal"
      size="lg"
      title="Oh no!"
      centered
      hide-footer
      hide-header
      no-close-on-backdrop
      no-close-on-esc
    >
      <div class="px-4 py-5">
        <b-container class="text-center my-3">
          <b-row>
            <b-col>
              <h3 class="font-weight-bold">You don't have a wallet yet</h3>
              <p>You need to install a digital wallet.</p>
            </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col>
              <b-button
                class="w-75 py-3"
                pill
                href="https://metamask.io/"
                target="_blank"
                variant="outline-dark"
                ><span class="pr-2"
                  ><img
                    src="./assets/logos/metamask-icon.png"
                    style="max-width: 30px"
                    alt=""
                /></span>
                Metamask</b-button
              >
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button
                class="w-75"
                pill
                variant="danger"
                @click="SHOW_INSTALL_WALLET()"
                >Close</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>
  </div>
</template>

<script>
import NotificationList from "./components/NotificationList.vue";

import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NotificationList,
  },
  computed: {
    ...mapState(["walletModal"]),
  },
  methods: {
    ...mapMutations(["SHOW_INSTALL_WALLET"]),
  },
};
</script>

<style lang="scss">
#shadow-icon-place {
  width: 50px;
  margin: 0 auto;
  padding-top: 50px;
}

#bg-slot-page {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: 1;
}
</style>
