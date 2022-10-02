<template>
  <div class="about-view">
    <Header />
    <b-container>
      <!-- First section  -->
      <b-row class="about__section">
        <b-col cols="12" md="12" lg="6" class="about-info__container">
          <div class="text-left px-2">
            <h1 class="font-weight-bold">
              About <span style="color: #d8bea7">Bitcoffee</span> <br />
              Team
            </h1>
            <p class="my-3">Members and more</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              odio? Optio ducimus laboriosam expedita perspiciatis, esse
              consectetur quasi porro minus voluptatibus. Et temporibus suscipit
              fuga, a consectetur vitae cum iste, dolor incidunt aspernatur
              voluptas nisi, ullam maiores recusandae.
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="12" lg="6" class="about-img__container w-100">
          <div>
            <img
              class="w-100"
              src="../assets/images/cfee-open.png"
              alt="coffee-open"
            />
          </div>
        </b-col>
      </b-row>

      <!-- Members section -->
      <div class="members__section">
        <div class="text-center pb-4 pt-5">
          <h1 class="font-weight-bold">Members</h1>
        </div>
        <b-row class="py-5 members-cards__container">
          <b-col
            cols="12"
            sm="12"
            md="8"
            lg="4"
            class="my-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <MemberCard
              nickName="Carlos Sanchez"
              position="Frontend"
              githubURL="https://www.instagram.com/"
              twitterURL="https://www.instagram.com/"
              instaURL="https://www.instagram.com/"
            />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="8"
            lg="4"
            class="my-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <MemberCard
              nickName="Angel Lopez"
              position="Full-stack"
              githubURL="https://www.instagram.com/"
              twitterURL="https://www.instagram.com/"
              instaURL="https://www.instagram.com/"
            />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="8"
            lg="4"
            class="my-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <MemberCard
              nickName="Jonathan Ocampo"
              position="CSO"
              githubURL="https://www.instagram.com/"
              twitterURL="https://www.instagram.com/"
              instaURL="https://www.instagram.com/"
            />
          </b-col>
        </b-row>
      </div>

      <!-- token address section -->
      <b-container class="token-address__container text-center">
        <div
          class="w-100"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h1><strong>Buy us a coffee</strong></h1>
          <p class="my-5">
            If you'd like to donate to the Devs, send rDAI, rBTC, BITC here.
            Thank you for your support!
          </p>
          <b-button
            class="token-address__button w-75 mx-auto bg-dark font-weight-bold p-3"
            @click="copyAddress('0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375')"
            v-b-tooltip.click="'Copied'"
            >0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
            <span class="px-2"><b-icon icon="files"></b-icon></span
          ></b-button>
          <b-button
            class="token-address-short__button w-75 mx-auto bg-dark font-weight-bold p-3"
            @click="copyAddress('0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375')"
            v-b-tooltip.click="'Copied'"
            >0xc3...9375 <span class="px-2"><b-icon icon="files"></b-icon></span
          ></b-button>
        </div>
      </b-container>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MemberCard from "../components/MemberCard.vue";
export default {
  name: "AboutView",
  data() {},
  components: {
    Header,
    Footer,
    MemberCard,
  },
  methods: {
    copyAddress(add) {
      navigator.clipboard.writeText(add).then(
        () => {
          console.log("copied");
        },

        () => {
          console.log("not copied");
        }
      );
    },
  },
};
</script>

<style lang="scss">
.about-view {
  .about__section {
    margin: 100px 0;
    .about-info__container,
    .about-img__container {
      display: flex;
      align-items: center;
      h1 {
        font-size: 50px;
      }
    }
  }

  #member-card {
    border-radius: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .members__section {
    margin: 200px 0;
    .members-cards__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .token-address__container {
    margin: 300px 0;
    display: flex;
    align-items: center;

    .token-address__button {
      border-radius: 15px;
    }

    .token-address-short__button {
      border-radius: 15px;
      display: none;
    }

    @media (max-width: 790px) {
      .token-address__button {
        display: none;
      }

      .token-address-short__button {
        display: block;
      }
    }
  }
}
</style>
