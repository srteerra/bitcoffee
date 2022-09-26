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
        'background-image': 'url(' + user_bg + ')',
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
            class="edit-btn font-weight-bold"
            pill
            variant="outline-dark"
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

      <!-- User goals -->
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
    >
      <template #modal-header>
        <div class="w-100">
          <b-button
            variant="light"
            size="md"
            class="float-right"
            @click="editProfileModal = false"
          >
            <b-icon-x />
          </b-button>
        </div>
      </template>
      <b-overlay :show="fetchingDataWait" rounded="sm">
        <b-container class="px-5">
          <b-row class="pb-4">
            <b-col>
              <h4>Edit your profile</h4>
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
                    class="w-100 py-2 px-3 mb-4"
                    placeholder="Enter a new username"
                    required
                  />
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
                  id="CountryInputGroup"
                  class="text-dark font-weight-bold"
                  label="Country"
                  label-for="CountryInput"
                >
                  <b-form-select
                    id="CountryInput"
                    v-model="newCountry"
                    :options="countryOptions"
                    class="w-50 py-2 px-3 mb-4"
                  />
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="font-weight-light">
                *If you're using <span class="font-weight-bold">Brave</span> as
                your browser, it might be a problem selecting a wallet. We
                recommend you move to another browser or change the
                <span class="font-weight-bold"
                  >"Default cryptocurrency wallet"</span
                >
                on your settings to have the best experience.
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
            @click="editProfileModal = false"
          >
            Close
          </b-button>
          <b-button
            variant="primary"
            size="md"
            class="float-right mr-2"
            @click="
              (editProfileModal = false),
                updateAccount({
                  name: newUsername,
                  country: newCountry,
                  avatar: newAvatar,
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
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "ProfileView",
  data() {
    return {
      editProfileModal: false,
      maxLengthUsername: 35,
      newUsername: "",
      newAvatar: null,

      noSite: "yourSite",
      noTitle: "No title added",
      noSub: "No subtitle added",
      noDesc: "No description added",
    };
  },
  components: {
    UserGoalCard,
    Header,
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
    ]),

    myaddress() {
      return (
        this.currentAccount.slice(0, 4) + "..." + this.currentAccount.slice(36)
      );
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
