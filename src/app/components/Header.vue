<template>
  <div class="container-fluid p-0 m-0">
    <b-navbar toggleable="md" type="light" variant="white" class="px-5 py-4">
      <!-- Navbar logo -->
      <b-navbar-brand href="#">
        <img
          id="principal-logo"
          src="../assets/logos/horizontal-logo.png"
          alt=""
        />
        <img id="secundary-logo" src="../assets/logos/icon-logo.png" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <!-- Navbar links -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-regular">
          <router-link to="/" class="px-2 my-auto" active-class="activeLink">
            Home
          </router-link>
          <router-link
            to="/about"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Become a creator
          </router-link>
          <router-link
            to="/token"
            class="px-2 my-auto"
            active-class="activeLink"
          >
            Q&A
          </router-link>
          <router-link
            to="/learn"
            class="px-2 my-auto"
            active-class="activeLink"
          >
          </router-link>
          <!-- Connect wallet -->
          <b-button
            id="connectWallet"
            style="
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            class="ml-0 mt-3 mt-xl-0 ml-xl-4 px-4 py-2 rounded-pill font-weight-bold"
            variant="dark"
          >
            Connect wallet
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {},
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
