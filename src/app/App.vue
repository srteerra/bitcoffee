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

    <!-- pleaseChangeNet modal -->
    <b-modal
      id="modal-pleaseChangeNet"
      v-model="showpleaseChangeNetState"
      centered
      size="md"
      headerBgVariant="light"
      headerTextVariant="dark"
      headerBorderVariant="light"
      footerBgVariant="light"
      footerTextVariant="dark"
      footerBorderVariant="light"
      no-close-on-backdrop
      no-close-on-esc
    >
      <template #modal-header>
        <div class="w-100">
          <p class="font-weight-bold">Check your network</p>
        </div>
      </template>
      <b-row class="px-5">
        <div>
          <p>Currently Dapp only supported in Binance Smart Chain Mainnet</p>
          <div class="d-flex justify-content-center my-5">
            <!-- <img
              src="./assets/vectors/tree-5.png"
              alt=""
              style="max-width: 150px"
            /> -->
          </div>
          <b-button block disabled variant="warning"
            >Please switch your network to continue.</b-button
          >
          <b-button
            block
            pill
            variant="primary"
            class="font-weight-bold"
            @click="changeNetwork()"
            >Switch my network</b-button
          >
        </div>
      </b-row>
      <template #modal-footer>
        <div class="w-100"></div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import NotificationList from "./components/NotificationList.vue";

import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NotificationList,
  },
  computed: {
    ...mapState([
      "shadowblank",
      "fetchingData",
      "showpleaseChangeNetState",
      "netID",
    ]),
  },
  methods: {
    ...mapActions(["changeNetwork"]),
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
