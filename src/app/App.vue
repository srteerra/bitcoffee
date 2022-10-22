<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <Header />
    <b-row>
      <b-col class="col-auto">
        <Nav />
      </b-col>
      <b-col>
        <router-view style="max-height: 100vh; overflow-y: scroll" />
      </b-col>
    </b-row>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Nav,
  },
};
</script>

<style lang="scss"></style>
