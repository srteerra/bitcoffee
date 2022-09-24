<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <!-- <div id="bg-slot-page" v-if="shadowblank" class="text-center">
      <a href="/">
        <img id="shadow-icon-place" src="./assets/logos/icon-logo.png" alt="" />
      </a>
    </div> -->
    <Header />
    <NotificationList />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import NotificationList from "./components/NotificationList.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    NotificationList,
  },
  computed: {
    ...mapState(["shadowblank"]),
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
