<template>
  <footer class="py-5">
    <b-container class="py-5">
      <b-row class="p-0">
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
        >
          <ul class="text-light p-0">
            <li class="py-2 font-weight-bold">Menu</li>
            <li class="py-2">
              <router-link to="/" class="footer__link">
                Back to top
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/about" class="footer__link"> Team </router-link>
            </li>
            <li class="py-2">
              <router-link to="/token" class="footer__link">
                Our token
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/faq" class="footer__link"> Q&A </router-link>
            </li>
          </ul>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
        >
          <ul class="text-light p-0">
            <li class="py-2 font-weight-bold">Explore</li>
            <li class="py-2">
              <router-link to="how" class="footer__link"> Learn </router-link>
            </li>
            <li class="py-2">
              <a
                href="https://faucet.rifos.org/"
                target="_blank"
                class="footer__link"
              >
                tRIF Faucet
              </a>
            </li>
          </ul>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
        >
          <ul class="text-light p-0">
            <li class="py-2 font-weight-bold">Others</li>
            <li class="py-2">
              <a
                class="footer__link"
                href="https://github.com/srteerra/bitcoffee/blob/master/README.md"
                target="_blank"
                >Terms and conditions</a
              >
            </li>
            <li class="py-2">
              <router-link to="/about" class="footer__link">
                Our branding
              </router-link>
            </li>
            <li class="py-2">
              <a
                class="footer__link"
                href="https://github.com/srteerra/bitcoffee"
                target="_blank"
                >Repository</a
              >
            </li>
            <li class="py-2">
              <a
                class="footer__link"
                href="https://github.com/srteerra/bitcoffee/blob/master/LICENSE"
                target="_blank"
                >Licence</a
              >
            </li>
          </ul>
        </b-col>
        <b-col cols="10" md="12" lg="3" class="pt-5 pt-lg-0 mx-auto">
          <b-row
            class="d-flex justify-content-center justify-content-lg-end text-center text-lg-left px-3 px-md-0"
          >
            <ul class="text-light p-0">
              <li class="py-2 font-weight-bold">Contact us</li>
              <div class="d-flex flex-wrap">
                <li class="py-2">
                  <b-button
                    size="md"
                    variant="outline-light"
                    href="https://www.youtube.com/channel/UCT3XYpgY10k7PvLmYyDr-Kw"
                    target="_blank"
                    class="mr-2"
                  >
                    <b-icon icon="youtube" aria-label="Help"></b-icon>
                  </b-button>
                </li>
                <li class="py-2">
                  <b-button
                    size="md"
                    variant="outline-light"
                    href="https://github.com/srteerra/bitcoffee"
                    target="_blank"
                  >
                    <b-icon icon="github" aria-label="Help"></b-icon>
                  </b-button>
                </li>
              </div>
            </ul>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mt-5 text-center text-lg-left">
        <b-col cols="12">
          <h5 class="font-weight-bold">Powered by:</h5>
        </b-col>
        <b-col
          cols="12"
          class="d-flex justify-content-center justify-content-lg-start"
        >
          <a href="https://www.coingecko.com/en/api">
            <img
              src="../assets/logos/coingecko.png"
              style="width: 350px; max-width: 100%"
              alt=""
            />
          </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
footer {
  background-color: $dark;
  color: #ffffff;
  z-index: 20px;

  .footer__link {
    &:hover {
      opacity: 100%;
      color: rgb(219, 197, 147);
    }
  }
}
.poweredLogos {
  max-width: 250px;
  transition: 0.1s ease-in;
  &:hover {
    opacity: 50%;
  }
}
</style>
