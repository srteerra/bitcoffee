<template>
  <b-container class="user-goals__container my-5">
    <div class="user-goal-card__container">
      <div class="goal-completed" v-if="goal_status == 100">
        <p class="bg-dark font-weight-bold p-3">COMPLETED</p>
      </div>
      <b-container
        id="eff"
        class="user-goal__card px-4 py-5"
        :class="{ blur: goal_status == 100 }"
      >
        <!-- <p class="firstValue">0%</p>
        <p class="lastValue">100%</p> -->

        <b-collapse id="collapse-b" class="my-2">
          <b-card style="border: none">
            <div class="text-center">
              <img
                class="w-50 mx-auto"
                src="../assets/images/user-goal.png"
                alt="user-goal"
              />
            </div>
          </b-card>
        </b-collapse>

        <h4 class="font-weight-bold">{{ goal_title }}</h4>
        <p>
          by <strong>{{ user_name }}</strong>
        </p>

        <h3>8 days left</h3>
        <b-progress
          class="user-goal__progressbar mx-auto my-4"
          :value="goal_status"
          variant="dark"
        ></b-progress>
        <!-- <h4 class="mb-4">
          <b-badge class="progress__badge">{{ goal_status }}%</b-badge>
        </h4> -->
        <p>{{ goal_description }}</p>

        <b-row class="stats my-3">
          <b-col class="stats-item__container">
            <div>
              <h3>43</h3>
              <p>Supporters</p>
            </div>
          </b-col>

          <b-col class="stats-item__container">
            <h3>$233.24</h3>
            <p>Raised</p>
          </b-col>
          <b-col class="stats-item__container">
            <div>
              <h3>$350</h3>
              <p>Goal</p>
            </div>
          </b-col>
        </b-row>

        <p
          class="my-4"
          :class="{ hide: hide }"
          v-b-toggle="['collapse-a', 'collapse-b']"
          @click="hide_p"
        >
          See details
        </p>

        <b-collapse id="collapse-a" class="mt-2">
          <b-card style="border: none">
            <b-row align-h="center">
              <b-col cols="4">
                <b-button class="w-100 mx-auto" @click="claim">Claim</b-button>
              </b-col>
              <b-col cols="4">
                <b-button
                  class="w-100 mx-auto"
                  variant="outline-dark"
                  @click="show"
                  v-b-toggle="['collapse-a', 'collapse-b']"
                  >Close</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>

        <!-- <b-row>
          <b-col cols="12" md="6" class="mx-auto">
            <b-button
              v-if="goal_status == 99"
              class="w-100"
              pill
              @click="claim"
              variant="outline-primary"
              >Claim</b-button
            >
            <b-button v-else class="w-100" pill variant="outline-primary"
              >Refound</b-button
            >
          </b-col>
        </b-row> -->
      </b-container>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "UserGoalCard",
  data() {
    return {
      goal_title: "A new acustic guitar",
      goal_status: 90,
      goal_description:
        "My guitar is nearly to break :( I really need a new one",
      user_name: "Angel Lopez",

      blur: false,
      hide: false,
    };
  },
  methods: {
    claim() {
      this.goal_status = 100;
    },
    hide_p() {
      this.hide = true;
    },
    show() {
      this.hide = false;
    },
  },
};
</script>

<style lang="scss">
.user-goals__container {
  width: 80%;
  margin: 0 auto 200px;
  .user-goal-card__container {
    width: 100%;
    position: relative;
    .goal-completed {
      width: 100%;
      position: absolute;
      top: 40%;
      color: white;
      height: auto;
      z-index: 2;
      p {
        margin: 0;
        display: inline-block;
        border-radius: 20px;
      }
    }
    .user-goal__card {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 20px;
      width: 100%;
      position: relative;
      .user-goal__progressbar {
        width: 80%;
      }
      .progress__badge {
        background-color: #594d42;
      }
      .firstValue {
        position: absolute;
        top: 120px;
        left: 110px;
      }
      .lastValue {
        position: absolute;
        right: 110px;
        top: 120px;
      }
    }

    .stats {
      .stats-item__container {
        border-right: 1px solid black;
      }
    }
    .stats-item__container:nth-child(3) {
      border: none;
    }
  }
}
</style>
