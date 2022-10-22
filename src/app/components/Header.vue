<template>
  <div class="container-fluid p-0 m-0">
    <b-navbar toggleable="lg" type="light" variant="white" class="px-5 py-4">
      <!-- Navbar logo -->
      <b-navbar-brand href="#">
        <router-link to="/home">
          <img
            id="principal-logo"
            src="../assets/logos/horizontal-logo.png"
            alt=""
          />
        </router-link>
        <router-link to="/home"
          ><img id="secundary-logo" src="../assets/logos/icon-logo.png" alt=""
        /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <!-- Navbar links -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-regular">
          <router-link
            to="/home"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Guide
          </router-link>
          <router-link
            to="/explore"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Release Notes
          </router-link>
          <router-link
            to="/about"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Github
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
