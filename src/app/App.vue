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
