<template>
  <div>
    <Header />
    <b-container>
      <h1>
        <strong>Your page, your <br />own place.</strong>
      </h1>
      <p class="py-4">Here with us</p>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapActions } from "vuex";
import { client } from "../../lib/sanityClient";

export default {
  name: "ExploreView",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
