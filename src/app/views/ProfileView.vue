<template>
  <div class="user">
    <Header />
    <!-- Banner -->
    <div class="head-profile">
      <div
        class="user-profile__background1"
        :style="{
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover',
          'background-image': 'url(' + user_bg + ')',
        }"
      />
      <!-- User avatar -->
      <div class="user-avatar__container1 text-center">
        <b-avatar :src="`${avatar}`" size="9rem" />
      </div>
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
          @click="copyAddress(currentAccount)"
          >{{ myaddress }} <b-icon icon="files"></b-icon
        ></b-button>
        <a
          :href="site"
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
            class="edit-btn font-weight-bold mr-2 my-2"
            pill
            variant="outline-dark"
            @click="SHOW_EDIT_PROFILE()"
            data-backdrop="static"
            data-keyboard="false"
            >Edit profile</b-button
          >
          <b-button
            class="share-btn font-weight-bold mr-0 mr-sm-2 my-2"
            pill
            v-b-modal.share-modal
            variant="dark"
            ><span class="px-2"><b-icon icon="share"></b-icon></span
          ></b-button>

          <b-button
            class="edit-add p-0 my-2"
            variant="primary"
            @click="SHOW_EDIT_LAUNCH()"
            ><b-icon icon="plus" font-scale="1" class="p-0 m-0"></b-icon
          ></b-button>
        </div>
      </div>

      <!-- user description -->
      <b-container class="user-description__container">
        <h1 class="my-5 font-weight-bold">About me</h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="user-description__card mx-auto px-2 px-md-5 py-5"
        >
          <h3 class="font-weight-bold">{{ title }}</h3>
          <p class="font-weight-bold">
            {{ subtitle }}
          </p>
          <hr />
          <p class="pt-3">
            {{ description }}
          </p>

          <b-button
            @click="SHOW_EDIT_PROFILE()"
            variant="dark"
            class="px-5 py-2"
            v-if="
              !user_twitter && !user_instagram && !user_youtube && !user_twitch
            "
            pill
            ><span class="mr-2"
              ><b-icon icon="heart-fill" class="pr-1"></b-icon
            ></span>
            Edit your social media</b-button
          >

          <div class="social__section mx-auto" v-else>
            <b-button
              size="lg"
              pill
              variant="outline-primary"
              class="mb-2 mx-2"
              :href="user_instagram"
              v-if="user_instagram"
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
              :href="user_twitter"
              v-if="user_twitter"
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
              :href="user_youtube"
              v-if="user_youtube"
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
              :href="user_twitch"
              v-if="user_twitch"
              target="_blank"
              v-b-tooltip.hover.top="'Twitch'"
            >
              <b-icon icon="twitch" aria-label="Help"></b-icon>
            </b-button>
          </div>
        </div>
      </b-container>
    </b-container>

    <div class="user-goals__list text-center p-0 m-0 mb-5">
      <h1 class="my-4 font-weight-bold">My goals</h1>
      <p>See your goals here.</p>
      <b-row class="mt-5">
        <b-col cols="12" md="10" class="mx-auto" v-if="!noCampaigns">
          <ul
            class="d-flex justify-content-center justify-content-md-around flex-wrap p-0 m-0"
          >
            <li
              id="goal-per"
              v-for="(campaign, idx) in campaigns_rif"
              :key="idx"
            >
              <UserGoalCard
                :collapse_a="'card' + idx"
                :collapse_b="'card' + idx"
                :collapse_c="'card' + idx"
                :collapse_d="'card' + idx"
                :campId="campaign.id"
                :campCategory="campaign.category"
                :campCreator="campaign.creator"
                :campDesc="campaign.description"
                :campTitle="campaign.title"
                :campGoal="campaign.goal"
                :campPledged="campaign.pledged"
                :campEndAt="campaign.endAt"
                :campStartAt="campaign.startAt"
                :campClaimed="campaign.claimed"
              />
            </li>
          </ul>
        </b-col>
        <b-col
          cols="12"
          class="mx-auto text-center"
          style="height: 500px"
          v-else
        >
          <b-button
            v-b-modal.goal-modal
            variant="dark"
            class="mt-3 px-5 py-2"
            pill
            ><span class="mr-1"><b-icon icon="plus"></b-icon></span> Launch a
            new goal</b-button
          >
        </b-col>
      </b-row>
    </div>

    <Footer />

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
        <h3 class="mt-5">Share your profile</h3>
        <p>So new users will find you.</p>
      </b-container>

      <div class="share__button w-100 text-center mt-5">
        <b-button
          pill
          class="w-75 px-4 py-2 mt-4"
          variant="outline-dark"
          @click="copyAddress('www.bitcoffee.site/#/' + username)"
          v-b-tooltip.click="'Copied'"
          >www.bitcoffee.site/{{ username }}
          <span class="pl-1"><b-icon icon="files"></b-icon></span
        ></b-button>
      </div>
      <div class="text-center mt-4">
        <small>You can share this URL, is unique, is yours.</small>
      </div>

      <!-- <b-row class="mt-5 text-center">
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
            :href="user_instagram"
            v-if="user_instagram"
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
            :href="user_twitter"
            v-if="user_twitter"
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
            :href="user_youtube"
            v-if="user_youtube"
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
            :href="user_twitch"
            v-if="user_twitch"
            target="_blank"
            v-b-tooltip.hover.top="'Twitch'"
          >
            <b-icon icon="twitch" aria-label="Help"></b-icon>
          </b-button>
        </div>
      </b-row> -->
    </b-modal>

    <!-- Edit goals modal -->
    <b-modal
      id="goal-modal"
      v-model="launchGoalModal"
      size="lg"
      hide-footer
      hide-header
      title="Edit goals"
      centered
      no-close-on-backdrop
      no-close-on-esc
    >
      <b-overlay :show="fetchingLaunch" rounded="sm">
        <b-container class="d-block text-center px-5">
          <h3 class="mt-5">New goal</h3>
          <p class="font-weight-light mb-5">
            Launch a new goal to get supported by other people.
          </p>
          <b-form class="text-left">
            <b-form-group
              id="goal-category"
              label="Goal Category"
              label-for="goal-category"
              class="my-3"
            >
              <b-form-select
                id="goal-category"
                v-model="goalCategory"
                :options="listedCategories"
                class="rounded-pill pl-4"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="goal-title"
              label="Goal title"
              label-for="goal-title"
              class="my-3"
              description="Example (A new guitar!)"
            >
              <b-form-input
                id="goal-category"
                type="text"
                placeholder="Enter the goal title"
                v-model="goalTitle"
                class="rounded-pill pl-4"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="goal-description"
              label="Goal description"
              label-for="goal-description"
              class="my-3"
              description="Example (I need it to make more music and learn new instruments.)"
            >
              <b-form-input
                id="goal-description"
                type="text"
                placeholder="Enter the goal description"
                v-model="goalDesc"
                class="rounded-pill pl-4"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="goal-amount"
              label="Needed tokens amount"
              label-for="goal-amount"
              class="my-3"
              description="How much do you need?"
            >
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                  id="goal-amount"
                  placeholder="Enter the goal amount"
                  type="number"
                  v-model="goalAmount"
                  class="rounded-pill pl-4"
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
                :disabled="pickerDis"
                calendar-width="100%"
                today-variant="primary"
                reset-button
                reset-button-variant="primary w-100"
                @context="onContext1"
                class="mb-2 rounded-pill pl-3"
                ><p>Hola</p></b-form-datepicker
              >
            </b-form-group>

            <b-form-group>
              <label for="end-datepicker">Choose a end date</label>
              <b-input-group>
                <b-form-datepicker
                  id="end-datepicker"
                  :min="minEnd"
                  :date-disabled-fn="dateDisabledEnd"
                  :date-format-options="{ month: 'long', day: '2-digit' }"
                  :disabled="goalDateStart === '' || pickerDis"
                  v-model="goalDateEnd"
                  menu-class="w-100"
                  calendar-width="100%"
                  @context="onContext2"
                  class="mb-2 rounded-pill pl-3"
                ></b-form-datepicker>
              </b-input-group>
            </b-form-group>
            <div class="text-center my-5">
              <div v-b-toggle.hotGoals @click="(pickerDis = !pickerDis), reset">
                <p>
                  Or select a
                  <span class="font-weight-bold"
                    ><span
                      ><b-icon
                        icon="lightning-fill"
                        class="mx-1"
                      ></b-icon></span
                    >Hot Goal</span
                  >
                </p>
                <span><b-icon icon="caret-down-fill"></b-icon></span>
              </div>

              <!-- Hot goals section -->
              <b-collapse id="hotGoals" class="my-4 w-100">
                <b-card class="w-100" style="border: none">
                  <b-form-group v-slot="{ ariaDescribedby }" class="w-100">
                    <b-form-radio-group
                      id="btn-radios-1"
                      v-model="selected"
                      :aria-describedby="ariaDescribedby"
                      name="radios-btn"
                      class="d-flex flex-wrap"
                      button-variant="outline-primary"
                      buttons
                    >
                      <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="5"
                        class="m-1"
                        style="min-width: 150px"
                        >5 mins</b-form-radio
                      >
                      <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="10"
                        class="m-1"
                        style="min-width: 150px"
                        >10 mins</b-form-radio
                      >
                      <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="15"
                        class="m-1"
                        style="min-width: 150px"
                        >15 mins</b-form-radio
                      >
                      <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="30"
                        class="m-1"
                        style="min-width: 150px"
                        >30 mins</b-form-radio
                      >
                    </b-form-radio-group>
                  </b-form-group>
                </b-card>
              </b-collapse>
            </div>

            <b-form-checkbox
              id="checkbox-1"
              v-model="terms"
              name="checkbox-1"
              value="true"
              unchecked-value="false"
            >
              I accept that everything is correct
            </b-form-checkbox>

            <b-row class="w-100 my-5 mx-auto">
              <b-col class="my-3" cols="12" md="6">
                <b-button
                  class="w-100"
                  @click="SHOW_EDIT_LAUNCH()"
                  pill
                  variant="outline-primary"
                  >Close</b-button
                >
              </b-col>
              <b-col class="my-3" cols="12" md="6">
                <b-button
                  :disabled="launchValid || !termsValid"
                  @click="launchGoal()"
                  class="w-100 font-weight-bold"
                  pill
                  variant="primary"
                  >Launch goal</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-container>
      </b-overlay>
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
                instagram: newInstagram,
                twitter: newTwitter,
                twitch: newTwitch,
                youtube: newYoutube,
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
import Footer from "../components/Footer.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { client } from "../../lib/sanityClient";

const Web3 = require("web3");
const web3 = new Web3(
  Web3.givenProvider || "https://public-node.testnet.rsk.co"
);

const provider = window.ethereum;

const artifact_crowdfunding = require("../../../build/contracts/CrowdFund.json");
const artifact_crowdfunding_rif = require("../../../build/contracts/CrowdFundERC677.json");
let tokenContract;

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
      pickerDis: false,
      activeCam: null,
      pledgeC: null,
      pledgeA: null,
      isAvailable: false,
      fetchingPage: false,
      terms: false,
      cards: [
        { id: "g1" },
        // { title: "", desc: "", category: "", goal: "" },
        { id: "g2" },
        { id: "g3" },
        { id: "g4" },
        { id: "g4" },
      ],
      selectedHotGoal: null,
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
      newInstagram: null,
      newTwitter: null,
      newTwitch: null,
      newYoutube: null,
      holea: 1,

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

      goalCategory: "Undefined",

      goalDesc: null,
      goalAmount: null,
      goalTitle: null,

      selected: "",

      campaigns_rif: [],
      noCampaigns: false,
    };
  },
  components: {
    UserGoalCard,
    Header,
    Footer,
  },
  mounted() {
    this.newUsername = this.username;
    this.newSite = this.user_site;
    this.newTitle = this.user_title;
    this.newSub = this.user_subtitle;
    this.newDesc = this.user_description;
    this.newInstagram = this.user_instagram;
    this.newTwitter = this.user_twitter;
    this.newTwitch = this.user_twitch;
    this.newYoutube = this.user_youtube;

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
  beforeMount() {
    this.startedCampaigns();
  },
  methods: {
    ...mapActions([
      "updateAccount",
      "launchGoal",
      "activeCampaigns",
      "approveSpender",
      "launchGoalRIF",
      "activeCampaignsRIF",
      "approveSpenderRIF",
    ]),
    ...mapMutations(["SHOW_EDIT_PROFILE", "SHOW_EDIT_LAUNCH"]),

    async startedCampaigns() {
      if (provider) {
        const net = await web3.eth.net.getId();

        tokenContract = new web3.eth.Contract(
          artifact_crowdfunding_rif.abi,
          artifact_crowdfunding_rif.networks[net].address
        );

        tokenContract.setProvider(
          Web3.givenProvider || "https://public-node.testnet.rsk.co"
        );

        const totalCamps = await tokenContract.methods
          .creatorCamps(this.currentAccount)
          .call();

        if (totalCamps < 1) {
          console.log("No campaigns");
          this.noCampaigns = true;
        } else {
          for (let i = 0; i < totalCamps; i++) {
            let campaign = await tokenContract.methods
              .campaignsAddress(this.currentAccount, i)
              .call();

            let newCampaign = await tokenContract.methods
              .campaigns(await campaign.id)
              .call();

            if ((await newCampaign.id) !== "0") {
              this.campaigns_rif.push(await newCampaign);
            } else {
              console.log("There's an deleted campaign");
            }
          }

          if (this.campaigns_rif.length === 0) {
            console.log("No campaigns");
            this.noCampaigns = true;
          }
        }
      } else {
        console.log("No wallet");
      }
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
      return day <= now;
    },
    dateDisabledEnd(ymd, date) {
      // get the selected start date
      const SDate = new Date(this.formattedStart + " 00:00:00");
      const selected = new Date(SDate).getDate();
      const day = date.getDate();

      // Disabling oll days before
      return day <= selected;
    },

    launchGoal() {
      // Only God know how this works
      if (this.selected === "") {
        const FDate1 = new Date(this.formattedStart + " 00:00:00");
        this.startUnixtime = FDate1.getTime() / 1000;
        // Unixtimestamp for the start date
        const FDate2 = new Date(this.formattedEnd + " 23:59:59");
        this.endUnixtime = FDate2.getTime() / 1000;
        this.launchGoalRIF({
          amount: this.goalAmount,
          startDate: FDate1.getTime() / 1000,
          endDate: FDate2.getTime() / 1000,
          title: this.goalTitle,
          desc: this.goalDesc,
          category: this.goalCategory,
        });
      } else {
        const nowDate = new Date();
        const today = new Date(
          nowDate.getFullYear(),
          nowDate.getMonth(),
          nowDate.getDate(),
          nowDate.getHours(),
          nowDate.getMinutes() + 5,
          nowDate.getSeconds()
        );

        this.startUnixtime = today.getTime() / 1000;

        switch (this.selected) {
          case "5":
            const v5 = today.setMinutes(nowDate.getMinutes() + 5);
            var timeNow4 = v5.toString();
            var v5t = parseInt(timeNow4.slice(0, 10));

            this.endUnixtime = v5t;
            break;

          case "10":
            const v10 = today.setMinutes(nowDate.getMinutes() + 10);
            var timeNow4 = v10.toString();
            var v10t = parseInt(timeNow4.slice(0, 10));

            this.endUnixtime = v10t;
            break;

          case "15":
            const v15 = today.setMinutes(nowDate.getMinutes() + 15);
            var timeNow4 = v15.toString();
            var v15t = parseInt(timeNow4.slice(0, 10));
            this.endUnixtime = v15t;
            break;

          case "30":
            const v30 = today.setMinutes(nowDate.getMinutes() + 30);

            var timeNow4 = v30.toString();
            var v30t = parseInt(timeNow4.slice(0, 10));
            this.endUnixtime = v30t;
            break;
        }
        this.launchGoalRIF({
          amount: this.goalAmount,
          startDate: this.startUnixtime,
          endDate: this.endUnixtime,
          title: this.goalTitle,
          desc: this.goalDesc,
          category: this.goalCategory,
        });
      }
    },
  },
  computed: {
    ...mapState([
      "username",
      "currentAccount",
      "avatar",
      "user_bg",
      "user_title",
      "user_site",
      "user_subtitle",
      "user_description",
      "user_instagram",
      "user_twitter",
      "user_twitch",
      "user_youtube",
      "fetchingDataWait",
      "editProfileModal",
      "getCountCampaignsRIF",
      "listedCategories",
      "launchGoalModal",
      "fetchingLaunch",
    ]),

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

    myaddress() {
      return (
        this.currentAccount.slice(0, 4) + "..." + this.currentAccount.slice(36)
      );
    },
    reset() {
      if (this.pickerDis === true) {
        // Get today date for date-picker
        const today = new Date();
        const MM = today.getMonth() + 1;
        const YYYY = today.getFullYear();
        const DD = today.getDate();
        // Set the current date in date-picker
        this.goalDateStart = YYYY + "-" + MM + "-" + DD;
        this.goalDateEnd = YYYY + "-" + MM + "-" + DD;
      } else {
        this.selected = "";
      }
    },
    launchValid() {
      if (
        this.goalDateEnd === "" ||
        (this.pickerDis === true && this.selected === "")
      ) {
        return true;
      } else {
        return false;
      }
    },
    termsValid() {
      if (this.terms === "false") {
        return false;
      }
      if (this.terms === "true") {
        return true;
      }
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

#goal-per {
  width: 650px;
  // min-width: 100%;
  // max-width: 850px;
}

#hotGoalsRadios {
  label {
    padding: 15px 0;
  }
}
.head-profile {
  position: relative;
  .user-profile__background1 {
    width: 100%;
    height: 300px;
  }

  // avatar styles
  .user-avatar__container1 {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: -60px;
    img {
      width: 150px;
      border-radius: 50%;
    }

    // @media (max-width: 991px) {
    //   top: 315px;
    // }
  }
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
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  @media (max-width: 580px) {
    padding: 0;
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
@media (max-width: 500px) {
  .user-personal-info__container {
    .edit-profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      .edit-btn {
        width: 90%;
      }
      .share-btn {
        width: 90%;
      }
      .edit-add {
        width: 90%;
        border-radius: 25px;
      }
    }
  }
}
</style>
