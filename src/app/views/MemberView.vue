<template>
  <div class="pub-profile">
    <Header />
    <!-- Banner -->
    <div
      class="user-profile__background"
      :style="{
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'background-image': 'url(' + creator_bg + ')',
      }"
    />
    <!-- User avatar -->
    <div class="user-avatar__container text-center">
      <b-avatar :src="`${creator_avatar}`" size="9rem" />
    </div>
    <div class="creator-information__container text-center">
      <!-- personal information -->
      <div class="creator-personal-info__container">
        <div class="user-name__container my-3">
          <p class="font-weight-bold pt-5 px-2">
            {{ this.$route.params.id }}
          </p>
          <b-icon
            id="verify__badge"
            icon="patch-check-fill"
            v-if="memberVerified"
          ></b-icon>
        </div>
        <b-button
          id="address"
          pill
          variant="outline-dark"
          class="px-5 font-weight-bold"
          >{{ myaddress }} <b-icon icon="files"></b-icon
        ></b-button>
        <a
          :href="'https://' + site"
          target="_blank"
          style="display: block"
          class="user-site my-4"
        >
          {{ site
          }}<span class="px-2"
            ><b-icon icon="box-arrow-up-right"></b-icon
          ></span>
        </a>

        <p class="font-weight-bold" style="opacity: 40%">
          Member since {{ monthNames[new Date(memberSince).getMonth()] }},
          {{ new Date(memberSince).getFullYear() }}
        </p>
      </div>

      <!-- creator information -->
      <div class="creator-information">
        <b-row class="creator-row">
          <b-col cols="12" md="12" lg="6" xl="7" class="p-0">
            <div class="creator-description__container">
              <div class="creator-description__card px-5 py-4">
                <h3 class="font-weight-bold">{{ title }}</h3>
                <p class="font-weight-bold">{{ subtitle }}</p>
                <hr />
                <p>
                  {{ description }}
                </p>
                <div class="social__section">
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    href="https://www.google.com"
                    target="_blank"
                    v-b-tooltip.hover.top="'Instagram'"
                  >
                    <b-icon icon="instagram" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    href="https://www.google.com"
                    target="_blank"
                    v-b-tooltip.hover.top="'Twitter'"
                  >
                    <b-icon icon="twitter" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    href="https://www.google.com"
                    target="_blank"
                    v-b-tooltip.hover.top="'YouTube'"
                  >
                    <b-icon icon="youtube" aria-label="Help"></b-icon>
                  </b-button>
                  <b-button
                    size="lg"
                    pill
                    variant="outline-primary"
                    class="mb-2"
                    href="https://www.google.com"
                    target="_blank"
                    v-b-tooltip.hover.top="'Twitch'"
                  >
                    <b-icon icon="twitch" aria-label="Help"></b-icon>
                  </b-button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="6" xl="5">
            <!-- donation box -->
            <div class="donation-box__container">
              <DonateBoxView />
            </div>
          </b-col>
        </b-row>
        
        <!-- creator goals -->
        <div
          class="text-center text-lg-left"
          style="width: 80%; margin: 0 auto"
        >
          <h1 class="font-weight-bold">{{ this.$route.params.id }}'s goals</h1>
          <p class="font-weight-light">
            Help {{ this.$route.params.id }} with the following goals.
          </p>
        </div>
        <b-row class="creator-row my-1">
          <b-col cols="12">
            <ul class="d-flex justify-content-center flex-wrap p-0 m-0">
              <li class="w-50" v-for="(card, idx) in cards" :key="idx">
                <UserGoalCard
                  :collapse_a="'hola' + card.id"
                  :collapse_b="'hola' + card.id"
                  :collapse_c="'hola' + card.id"
                  :collapse_d="'hola' + card.id"
                />
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
import DonateBoxView from "../components/DonateBoxView.vue";
import Header from "../components/Header.vue";
import { mapState } from "vuex";
import { client } from "../../lib/sanityClient";

export default {
  name: "MemberView",
  data() {
    return {
      myaddress: "",
      noSite: "No site :(",
      noTitle: "No title added",
      noSub: "No subtitle added",
      noDesc: "No description added",
      noBg: "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
      cards: [
        { id: "h1" },
        { id: "h2" },
        { id: "h3" },
        { id: "h4" },
        { id: "h4" },
      ],

      donation: 0,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      memberSince: "",
      memberVerified: false,
      coll: "",
    };
  },
  components: {
    UserGoalCard,
    DonateBoxView,
    Header,
  },
  beforeMount() {
    this.$store.dispatch("getCreatorPage", {
      user: this.$route.params.id,
    });

    const query =
      '*[_type == "users" && userName == $user] {userName, userAddress, _createdAt, userVerify}';
    const params = { user: this.$route.params.id };

    client
      .fetch(query, params)
      .then((users) => {
        console.log(users);
        if (users.length > 0) {
          users.forEach((user) => {
            this.myaddress =
              user.userAddress.slice(0, 4) + "..." + user.userAddress.slice(36);
            this.memberSince = user._createdAt;
            this.memberVerified = user.userVerify;
          });
        } else {
          console.log("Creator not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("getCreatorPage", {
        user: to.params.id,
      });

      const query =
        '*[_type == "users" && userName == $user] {userName, userAddress}';
      const params = { user: this.$route.params.id };

      client
        .fetch(query, params)
        .then((users) => {
          console.log(users);
          if (users.length > 0) {
            users.forEach((user) => {
              this.myaddress =
                user.userAddress.slice(0, 4) +
                "..." +
                user.userAddress.slice(36);
            });
          } else {
            console.log("Creator not found");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    title() {
      if (!this.creator_title) {
        return this.noTitle;
      } else {
        return this.creator_title;
      }
    },
    subtitle() {
      if (!this.creator_subtitle) {
        return this.noSub;
      } else {
        return this.creator_subtitle;
      }
    },
    site() {
      if (!this.creator_site) {
        return this.noSite;
      } else {
        return this.creator_site;
      }
    },
    description() {
      if (!this.creator_description) {
        return this.noDesc;
      } else {
        return this.creator_description;
      }
    },
    ...mapState([
      "currentAccount",
      "creator_username",
      "creator_site",
      "creator_subtitle",
      "creator_avatar",
      "creator_bg",
      "fetchingDataWait",
      "editProfileModal",
    ]),
  },
};
</script>

<style lang="scss">
// banner styles
.user-profile__background {
  width: 100%;
  height: 300px;
  position: relative;
}

// avatar styles
.user-avatar__container {
  width: 100%;
  height: 200px;
  position: absolute;
  img {
    width: 150px;
    border-radius: 50%;
  }
  top: 320px;

  @media (max-width: 991px) {
    top: 315px;
  }
}

.creator-information__container {
  margin: 0 auto;
  //user personal styles
  .creator-personal-info__container {
    width: 90%;
    margin: 20px auto;
    .user-name__container {
      font-size: 30px;
      p {
        display: inline-block;
      }
    }
    .user-site {
      &:hover {
        color: #969292;
      }
    }
  }

  .creator-information {
    margin: 200px 0;
    .creator-row {
      margin: 200px 0;
    }
    // creator description styles
    .creator-description__container {
      width: 80%;
      margin: 0 auto 200px;
      .creator-description__card {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        text-align: justify;
        width: 100%;
        p:nth-child(2) {
          color: #969292;
        }
        .social__section {
          display: flex;
          justify-content: space-around;
          width: 60%;
          margin: 100px auto 20px;
        }
      }
    }
  }
}

@media (max-width: 790px) {
  .creator-information__container {
    width: 95%;
  }
}
</style>
