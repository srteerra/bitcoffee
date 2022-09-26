<template>
  <div class="user">
    <Header />
    <!-- Banner -->
    <div
      class="user-profile__background"
      :style="{
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'background-image': 'url(' + background + ')',
      }"
    />
    <!-- User avatar -->
    <div class="user-avatar__container text-center">
      <b-avatar :src="`${avatar}`" size="9rem" />
    </div>
    <b-container class="user-information__container text-center my-4">
      <!-- personal information -->
      <div class="user-personal-info__container">
        <div class="user-name__container my-1">
          <p class="font-weight-bold pt-5 px-2">{{ username }}</p>
          <b-icon icon="patch-check-fill"></b-icon>
        </div>
        <b-button
          id="address"
          pill
          variant="outline-dark"
          class="px-5 font-weight-bold"
          >{{ myaddress }} <b-icon icon="files"></b-icon
        ></b-button>
        <a :href="user_site" style="display: block" class="user-site my-4">
          {{ site
          }}<span class="px-2"
            ><b-icon icon="box-arrow-up-right"></b-icon
          ></span>
        </a>

        <div class="edit-profile my-3">
          <b-button
            class="edit-btn font-weight-bold mr-2"
            pill
            variant="outline-dark"
            @click="SHOW_EDIT_PROFILE()"
            data-backdrop="static"
            data-keyboard="false"
            >Edit profile</b-button
          >
          <b-button class="edit-add p-0 m-0"
            ><b-icon icon="plus" font-scale="1" class="p-0 m-0"></b-icon
          ></b-button>
        </div>
      </div>
      <!-- user description -->
      <b-container class="user-description__container">
        <b-container
          data-aos="fade-up"
          data-aos-duration="1000"
          class="user-description__card px-5 py-5"
        >
          <h3 class="font-weight-bold">{{ title }}</h3>
          <p class="font-weight-bold">
            {{ subtitle }}
          </p>
          <hr />
          <p>
            {{ description }}
          </p>
        </b-container>
      </b-container>

      <div class="user-goals__list">
        <h1 class="my-4 font-weight-bold">My goals</h1>
        <UserGoalCard />
        <UserGoalCard />
      </div>
    </b-container>
    
    <!-- Edit profile modal -->
    <b-modal
      id="modal-editProfile"
      v-model="editProfileModal"
      centered
      size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
      no-close-on-backdrop
      no-close-on-esc
    >
      <template #modal-header>
        <div class="w-100">
          <b-button
            variant="light"
            size="md"
            class="float-right"
            @click="SHOW_EDIT_PROFILE()"
          >
            <b-icon-x />
          </b-button>
        </div>
      </template>
      <b-overlay :show="fetchingDataWait" rounded="sm">
        <b-container class="px-5">
          <b-row class="pb-4">
            <b-col>
              <h4>☕ Edit your profile</h4>
            </b-col>
          </b-row>
          <b-row class="pb-3">
            <b-col>
              <b-form>
                <b-form-group
                  id="UsernameInputGroup"
                  class="text-dark font-weight-bold"
                  label="Username"
                  label-for="UsernameInput"
                >
                  <b-form-input
                    id="UsernameInput"
                    v-model="newUsername"
                    :maxlength="maxLengthUsername"
                    type="text"
                    class="w-100 py-2 px-3"
                    placeholder="Enter a new username"
                    required
                    :state="isAvailable"
                  />
                  <b-form-invalid-feedback>
                    This username is in use OR is incorrect.
                  </b-form-invalid-feedback>
                  <b-form-text>At least 3 characters.</b-form-text>
                </b-form-group>
                <b-form-group
                  id="AvatarInputGroup"
                  class="text-dark font-weight-bold"
                  label="Avatar"
                  label-for="AvatarInput"
                >
                  <b-form-file
                    v-model="newAvatar"
                    placeholder="Choose another avatar or just ignore me..."
                    drop-placeholder="Drop file here..."
                  />
                </b-form-group>
                <b-form-group
                  id="BackgroundInputGroup"
                  class="text-dark font-weight-bold"
                  label="Background"
                  label-for="BackgroundInput"
                >
                  <b-form-file
                    v-model="newBackground"
                    placeholder="Choose another background or just ignore me..."
                    drop-placeholder="Drop file here..."
                  />
                </b-form-group>
                <section class="user-data__container">
                  <b-form-group
                    id="TitleInputGroup"
                    class="text-dark font-weight-bold"
                    label="Title"
                    label-for="TitleInput"
                  >
                    <b-form-input
                      id="TitleInput"
                      v-model="newTitle"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="Write a new title"
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    id="SubtitleInputGroup"
                    class="text-dark font-weight-bold"
                    label="Subtitle"
                    label-for="SubtitleInput"
                  >
                    <b-form-input
                      id="SubtitleInput"
                      v-model="newSub"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="Write a new subtitle"
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    id="DescInputGroup"
                    class="text-dark font-weight-bold"
                    label="Description"
                    label-for="DescInput"
                  >
                    <b-form-textarea
                      id="DescInput"
                      v-model="newDesc"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="Enter a new description"
                      required
                    />
                  </b-form-group>
                </section>
              </b-form>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="font-weight-light">
                Everything is stored by your
                <span class="font-weight-bold">Wallet</span>, your address makes
                you unique. We recommend that you do not share your private data
                with others.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </b-overlay>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="dark"
            size="md"
            class="float-right"
            @click="SHOW_EDIT_PROFILE()"
          >
            Close
          </b-button>
          <b-button
            variant="primary"
            size="md"
            class="float-right mr-2"
            :disabled="!isAvailable"
            @click="
              updateAccount({
                oldName: username,
                name: newUsername,
                site: newSite,
                title: newTitle,
                sub: newSub,
                desc: newDesc,
                avatar: newAvatar,
                bg: newBackground,
              })
            "
          >
            Save
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
import Header from "../components/Header.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { client } from "../../lib/sanityClient";

export default {
  name: "ProfileView",
  data() {
    return {
      isAvailable: false,
      fetchingPage: false,

      maxLengthUsername: 35,
      newUsername: "",
      newAvatar: null,
      newBackground: null,
      newTitle: null,
      newSub: null,
      newDesc: null,
      newSite: null,

      noSite: "yourSite",
      noTitle: "No title added",
      noSub: "No subtitle added",
      noDesc: "No description added",
      noBg: "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    };
  },
  components: {
    UserGoalCard,
    Header,
  },
  methods: {
    ...mapActions(["updateAccount"]),
    ...mapMutations(["SHOW_EDIT_PROFILE"]),
  },
  computed: {
    title() {
      if (!this.user_title) {
        return this.noTitle;
      } else {
        return this.user_title;
      }
    },
    subtitle() {
      if (!this.user_subtitle) {
        return this.noSub;
      } else {
        return this.user_subtitle;
      }
    },
    site() {
      if (!this.user_site) {
        return this.noSite;
      } else {
        return this.user_site;
      }
    },
    description() {
      if (!this.user_description) {
        return this.noDesc;
      } else {
        return this.user_description;
      }
    },
    background() {
      if (!this.user_bg) {
        return this.noBg;
      } else {
        return this.user_bg;
      }
    },
    ...mapState([
      "username",
      "currentAccount",
      "avatar",
      "user_bg",
      "user_title",
      "user_site",
      "user_subtitle",
      "user_description",
      "fetchingDataWait",
      "editProfileModal",
    ]),

    myaddress() {
      return (
        this.currentAccount.slice(0, 4) + "..." + this.currentAccount.slice(36)
      );
    },
  },
  watch: {
    newUsername() {
      if (this.newUsername) {
        this.fetchingPage = true;
        const query =
          '*[_type == "users" && userName == $user] {userName, userAddress}';
        const params = { user: this.newUsername };
        client
          .fetch(query, params)
          .then((users) => {
            if (users.userName === this.username) {
              this.isAvailable = true;
            } else if (users.length === 0 && this.newUsername.length >= 3) {
              this.isAvailable = true;
            } else {
              this.isAvailable = false;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.isAvailable = false;
      }
    },
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

.user-goals__list {
  margin: 0 0 300px;
}

.newUsername__status {
  width: 200px;
  height: 100px;
  position: absolute;
  top: 5.5%;
  right: -3%;

  @media (max-width: 990px) {
    top: 5.5%;
    right: -10%;
  }
}

.user-data__container {
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  padding: 20px 50px;
  margin: 50px 0;
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
  top: 350px;

  @media (max-width: 991px) {
    top: 315px;
  }
}

//user personal styles
.user-personal-info__container {
  position: relative;
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

  .edit-profile {
    position: absolute;
    text-align: end;
    width: 50%;
    right: 0;
    top: 50px;
    .edit-btn {
      width: 30%;
    }
    .edit-add {
      width: 40px;
      height: 40px;
      text-align: center;
      border-radius: 100%;
    }
  }
}

// user description styles
.user-description__container {
  margin: 150px 0 300px;
  .user-description__card {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    width: 80%;
    p:nth-child(2) {
      color: #969292;
    }
  }
}

@media (max-width: 1000px) {
  .user-personal-info__container {
    .edit-profile {
      position: initial;
      text-align: center;
      width: 100%;
      .edit-btn {
        width: 40%;
      }
      .edit-add {
        border-radius: 50%;
      }
    }
  }
}
</style>
