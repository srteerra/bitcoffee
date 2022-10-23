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
          <b-icon icon="patch-check-fill" v-if="memberVerified"></b-icon>
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
          <b-button
            class="share-btn font-weight-bold mr-2"
            pill
            v-b-modal.share-modal
            variant="dark"
            ><span class="px-2"><b-icon icon="share"></b-icon></span
          ></b-button>

          <b-button class="edit-add p-0 m-0" v-b-modal.goal-modal
            ><b-icon icon="plus" font-scale="1" class="p-0 m-0"></b-icon
          ></b-button>
        </div>
      </div>

      <!-- user description -->
      <b-container class="user-description__container">
        <h1 class="my-5 font-weight-bold">About me</h1>
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

          <div class="social__section mx-auto">
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
        </b-container>
      </b-container>
    </b-container>

    <div class="user-goals__list text-center">
      <h1 class="my-4 font-weight-bold">My goals</h1>
      <b-row class="my-1">
        <b-col cols="12">
          <ul class="d-flex justify-content-center flex-wrap p-0 m-0">
            <li class="w-50" v-for="(card, idx) in cards" :key="idx">
              <UserGoalCard
                :collapse_a="'card' + card.id"
                :collapse_b="'card' + card.id"
                :collapse_c="'card' + card.id"
                :collapse_d="'card' + card.id"
              />
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>

    <!-- Share modal -->
    <b-modal
      id="share-modal"
      ref="share-modal"
      size="lg"
      hide-header
      title="Edit goals"
      centered
      no-close-on-backdrop
      no-close-on-esc
      class="share__modal"
    >
      <b-container class="d-block text-center">
        <h3 class="my-5">Share your profile</h3>
      </b-container>

      <div class="share__button w-100 text-center my-5">
        <b-button
          pill
          class="w-75 px-4 py-2 my-4"
          variant="outline-dark"
          @click="copyAddress('www.bitcoffee.site/#/' + username)"
          v-b-tooltip.click="'Copied'"
          >www.bitcoffee.site/{{ username }}
          <span class="pl-1"><b-icon icon="files"></b-icon></span
        ></b-button>
      </div>

      <b-row class="mt-5 text-center">
        <p class="font-weight-bold mx-auto" style="color: gray">
          Or share in your social networks
        </p>
        <div
          class="modal-social__section text-center w-100 pt-4"
          style="border-top: 1px solid black"
        >
          <b-button
            size="lg"
            pill
            variant="outline-primary"
            class="mb-2 mx-2"
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
            class="mb-2 mx-2"
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
            class="mb-2 mx-2"
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
            class="mb-2 mx-2"
            href="https://www.google.com"
            target="_blank"
            v-b-tooltip.hover.top="'Twitch'"
          >
            <b-icon icon="twitch" aria-label="Help"></b-icon>
          </b-button>
        </div>
      </b-row>
    </b-modal>

    <!-- Edit goals modal -->
    <b-modal
      id="goal-modal"
      ref="goal-modal"
      size="lg"
      hide-footer
      hide-header
      title="Edit goals"
      centered
      no-close-on-backdrop
      no-close-on-esc
    >
      <b-container class="d-block text-center">
        <h3 class="my-5">New goal</h3>
        <b-form class="text-left">
          <b-form-group
            id="goal-category"
            label="Goal Category"
            label-for="goal-category"
            description="Example (Music, Arts)"
            class="my-3"
          >
            <b-form-input
              id="goal-category"
              type="text"
              v-model="goalCategory"
              placeholder="Enter the goal category"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="goal-title"
            label="Goal title"
            label-for="goal-title"
            class="my-3"
          >
            <b-form-input
              id="goal-category"
              type="text"
              placeholder="Enter the goal title"
              v-model="goalTitle"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="goal-description"
            label="Goal description"
            label-for="goal-description"
            class="my-3"
          >
            <b-form-input
              id="goal-description"
              type="text"
              placeholder="Enter the goal description"
              v-model="goalDesc"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="goal-amount"
            label="Needed tokens amount"
            label-for="goal-amount"
            class="my-3"
          >
            <b-input-group prepend="🪙" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="goal-amount"
                placeholder="Enter the goal amount"
                type="number"
                v-model="goalAmount"
                ondrop="return false;"
                onpaste="return false;"
                onkeypress="return event.charCode>=48 && event.charCode<=57"
                required
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group>
            <label for="start-datepicker">Choose a start date</label>
            <b-form-datepicker
              id="start-datepicker"
              :min="minStart"
              :date-disabled-fn="dateDisabledStart"
              :date-format-options="{ month: 'long', day: '2-digit' }"
              v-model="goalDateStart"
              menu-class="w-100"
              calendar-width="100%"
              reset-button
              @context="onContext1"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group>
            <label for="end-datepicker">Choose a end date</label>
            <b-input-group>
              <b-form-datepicker
                id="end-datepicker"
                :min="minEnd"
                :date-disabled-fn="dateDisabledEnd"
                :date-format-options="{ month: 'long', day: '2-digit' }"
                :disabled="goalDateStart === ''"
                v-model="goalDateEnd"
                menu-class="w-100"
                calendar-width="100%"
                @context="onContext2"
                class="mb-2"
              ></b-form-datepicker>
            </b-input-group>
          </b-form-group>

          <div class="text-center">
            <b-button
              v-b-tooltip.hover.top="'Set a 5 minutes goal'"
              :disabled="goalDateStart === ''"
              @click="hotGoal"
              ><b-icon icon="clock"></b-icon
            ></b-button>
          </div>

          <b-row class="w-75 my-5 mx-auto">
            <b-col class="my-3" cols="12" md="6">
              <b-button
                class="w-100"
                @click="hideModal"
                variant="outline-primary"
                >Close</b-button
              >
            </b-col>
            <b-col class="my-3" cols="12" md="6">
              <b-button
                @click="
                  launchGoal({
                    startDate: goalDateStart,
                    endDate: goalDateEnd,
                    title: goalTitle,
                    desc: goalDesc,
                    amount: goalAmount,
                  })
                "
                class="w-100"
                variant="primary"
                >Launch goal</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </b-modal>

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
                    id="SiteInputGroup"
                    class="text-dark font-weight-bold"
                    label="Your Site"
                    label-for="SiteInput"
                  >
                    <b-form-input
                      id="SiteInput"
                      v-model="newSite"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="https://example.com/"
                      required
                    />
                  </b-form-group>
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
                      placeholder="Enter the title"
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    id="SubtitleInputGroup"
                    class="text-dark font-weight-bold"
                    label="Short description"
                    label-for="SubtitleInput"
                  >
                    <b-form-input
                      id="SubtitleInput"
                      v-model="newSub"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="Who are you?..."
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    id="DescInputGroup"
                    class="text-dark font-weight-bold"
                    label="About me"
                    label-for="DescInput"
                  >
                    <b-form-textarea
                      id="DescInput"
                      v-model="newDesc"
                      type="text"
                      class="w-100 py-2 px-3 mb-4"
                      placeholder="Tell us about you..."
                      required
                    />
                  </b-form-group>
                </section>
              </b-form>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col>
              <div>
                <label for="InstragramInput" class="text-dark font-weight-bold"
                  >Instagram</label
                >
                <b-input-group
                  id="InstragramInputGroup"
                  class="text-dark font-weight-bold mb-4"
                >
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <b-icon icon="instagram" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="InstragramInput"
                    v-model="newInstagram"
                    type="text"
                    class="py-2 px-3"
                    placeholder="https://www.instagram.com/example/"
                    required
                  />
                </b-input-group>
              </div>

              <div>
                <label for="TwitterInput" class="text-dark font-weight-bold"
                  >Twitter</label
                >
                <b-input-group
                  id="TwitterInputGroup"
                  class="text-dark font-weight-bold mb-4"
                >
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <b-icon icon="twitter" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="TwitterInput"
                    v-model="newTwitter"
                    type="text"
                    class="py-2 px-3"
                    placeholder="https://www.twitter.com/example/"
                    required
                  />
                </b-input-group>
              </div>

              <div>
                <label for="TwitchInput" class="text-dark font-weight-bold"
                  >Twitch</label
                >
                <b-input-group
                  id="TwitchInputGroup"
                  class="text-dark font-weight-bold mb-4"
                >
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <b-icon icon="twitch" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="TwitchInput"
                    v-model="newTwitch"
                    type="text"
                    class="py-2 px-3"
                    placeholder="https://www.twitch.tv/example/"
                    required
                  />
                </b-input-group>
              </div>

              <div>
                <label for="YoutubeInput" class="text-dark font-weight-bold"
                  >Youtube</label
                >
                <b-input-group
                  id="YoutubeInputGroup"
                  class="text-dark font-weight-bold mb-4"
                >
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <b-icon icon="youtube" />
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    id="YoutubeInput"
                    v-model="newYoutube"
                    type="text"
                    class="py-2 px-3"
                    placeholder="https://www.youtube.com/c/example/"
                    required
                  />
                </b-input-group>
              </div>
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
import { log, time } from "console";

export default {
  name: "ProfileView",
  data() {
    //Getting the current date
    const nowDate = new Date();
    const today = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate()
    );
    // Setting up as minimum the corrent month
    const minDateStart = new Date(today);
    minDateStart.setMonth(minDateStart.getMonth());
    minDateStart.setDate(today.getDate());

    const minDateEnd = new Date(today);
    minDateEnd.setMonth(minDateEnd.getMonth());
    minDateEnd.setDate(today.getDate());

    return {
      goals: [],
      activeCam: null,
      pledgeC: null,
      pledgeA: null,
      isAvailable: false,
      fetchingPage: false,

      cards: [
        { id: "g1" },
        { id: "g2" },
        { id: "g3" },
        { id: "g4" },
        { id: "g4" },
      ],

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

      //Minimum date to select
      minStart: minDateStart,
      minEnd: minDateEnd,
      //Start date variables
      goalDateStart: "",
      startUnixtime: "",
      //End date variables
      goalDateEnd: "",
      endUnixtime: "",
      //Formatted date variables
      formattedStart: "",
      formattedEnd: "",

      goalCategory: "",
      goalDesc: null,
      goalAmount: null,
      goalTitle: null,
    };
  },
  components: {
    UserGoalCard,
    Header,
  },
  mounted() {
    this.newUsername = this.username;
    this.newSite = this.user_site;
    this.newTitle = this.user_title;
    this.newSub = this.user_subtitle;
    this.newDesc = this.user_description;

    if (this.newUsername === this.username) {
      this.isAvailable = true;
    } else {
      this.isAvailable = false;
    }

    if (this.username) {
      const query =
        '*[_type == "users" && userName == $user] {_createdAt, userVerify}';
      const params = { user: this.username };
      client
        .fetch(query, params)
        .then((user) => {
          console.log(user);
          if (user.length > 0) {
            this.memberSince = user[0]._createdAt;
            this.memberVerified = user[0].userVerify;
          } else {
            console.log("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error");
    }
  },
  methods: {
    ...mapActions([
      "updateAccount",
      "launchGoal",
      "activeCampaigns",
      "approveSpender",
      "pledgeCampaign",
      "launchGoalRIF",
      "activeCampaignsRIF",
      "approveSpenderRIF",
      "pledgeCampaignRIF",
    ]),
    ...mapMutations(["SHOW_EDIT_PROFILE"]),
    hideModal() {
      this.$refs["goal-modal"].hide();
    },

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

    // Date formated
    onContext1(ctx) {
      // The date formatted
      this.formattedStart = ctx.selectedFormatted;
    },
    onContext2(ctx) {
      // The date formatted
      this.formattedEnd = ctx.selectedFormatted;
    },

    //Disabling dates before
    dateDisabledStart(ymd, date) {
      // get the current day
      const now = new Date().getDate();
      const day = date.getDate();

      // Disabling oll days before
      return day < now;
    },
    dateDisabledEnd(ymd, date) {
      // get the selected start date
      let min = new Date().getMinutes();
      let hrs = new Date().getHours();
      let mil = new Date().getSeconds();
      const SDate = new Date(
        this.formattedStart + " " + hrs + ":" + min + ":" + mil
      );
      const selected = new Date(SDate).getDate();
      const day = date.getDate();

      // Disabling oll days before
      return day <= selected;
    },
    hotGoal() {
      // Get today date for date-picker
      const today = new Date();
      const MM = today.getMonth() + 1;
      const YYYY = today.getFullYear();
      const DD = today.getDate();

      // Get the current time
      let min = new Date().getMinutes() + 5;
      let hrs = new Date().getHours();
      let mil = new Date().getSeconds();

      // Set the current date in date-picker
      this.goalDateEnd = YYYY + "-" + MM + "-" + DD;

      // Send the new unixtime
      const FDate = new Date(
        this.formattedEnd + " " + hrs + ":" + min + ":" + mil
      );
      this.endUnixtime = FDate.getTime() / 1000;
    },
  },
  computed: {
    // Unixtimestamp for the start date
    startUnixTime() {
      let min = new Date().getMinutes();
      let hrs = new Date().getHours();
      let mil = new Date().getSeconds();
      const FDate = new Date(
        this.formattedStart + " " + hrs + ":" + min + ":" + mil
      );
      this.startUnixtime = FDate.getTime() / 1000;
    },

    // Unixtimestamp for the start date
    endUnixTime() {
      const FDate = new Date(this.formattedEnd + " 23:59:59");
      this.endUnixtime = FDate.getTime() / 1000;
    },
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
      "editProfileModal",
      "getCountCampaignsRIF",
      "campaigns_count_rif",
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
            if (users.length === 0 && this.newUsername.length >= 3) {
              this.isAvailable = true;
            } else {
              if (this.newUsername === this.username) {
                this.isAvailable = true;
              } else {
                this.isAvailable = false;
              }
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
#verify__badge {
  position: absolute;
  top: 55px;
}

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
    right: -40px;
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
    .social__section {
      display: flex;
      justify-content: space-around;
      width: 60%;
      margin: 100px 0 20px;
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
