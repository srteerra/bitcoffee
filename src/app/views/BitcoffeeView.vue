<template>
  <div>
    <b-container v-if="getCreatorFound"> <BitcoffeeCard /> </b-container>
    <b-container v-else>Not registered page</b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BitcoffeeCard from "../components/BitcoffeeCard.vue";

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
  },
  computed: {
    ...mapGetters(["getCreatorFound"]),
  },
  methods: {
    ...mapActions(["getCreatorPage"]),
  },
};
</script>

<style lang="scss"></style>
