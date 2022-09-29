<template>
  <div>
    <AltHeader v-if="getCreatorFound" />
    <b-container class="coffee__container" v-if="getCreatorFound">
      <BitcoffeeCard />
    </b-container>
    <b-container v-else>
      <div class="notfound__container">
        <div class="notfound__content">
          <img src="../assets/logos/icon-logo.png" class="cup-logo" />
          <p class="notfound__title" style="margin: 0; font-weight: 700">
            <strong
              >PAGE <span style="color: #d9bea7">NOT</span>
              <br />REGISTERED</strong
            >
          </p>
          <div>
            <p class="notfound__warning">This page not available.</p>
          </div>
          <router-link to="/">
            <b-button class="px-5" variant="outline-dark" pill>
              Go back
            </b-button>
          </router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BitcoffeeCard from "../components/BitcoffeeCard.vue";
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "BifcoffeeView",
  data() {
    return {};
  },
  beforeMount() {
    this.$store.dispatch("getCreatorPage", {
      user: this.$route.params.user,
    });
  },
  components: {
    BitcoffeeCard,
    AltHeader,
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("getCreatorPage", {
        user: to.params.user,
      });
    },
  },
  computed: {
    ...mapGetters(["getCreatorFound"]),
  },
  methods: {
    ...mapActions(["getCreatorPage"]),
  },
};
</script>

<style lang="scss">
.coffee__container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.notfound__container {
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
}
.cup-logo {
  width: 151px;
  height: 134px;
}
.notfound__content {
  text-align: center;
}

.notfound__title {
  font-size: 50px;
}

@media (max-width: 400px) {
  .notfound__title {
    font-size: 2em;
  }
  .notfound__subtitle {
    font-size: 2em;
  }
  .notfound__warning {
    font-size: 1em;
  }

  .cup-logo {
    width: 100px;
    height: 100px;
    padding-bottom: 20px;
  }
}

@media (max-width: 580px) {
  .coffee__container {
    padding: 0;
  }
}
</style>
