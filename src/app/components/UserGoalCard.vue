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
        <p class="firstValue">0%</p>
        <p class="lastValue">100%</p>
        <h4 class="font-weight-bold">{{ goal_title }}</h4>
        <b-progress
          class="user-goal__progressbar mx-auto my-4"
          :value="goal_status"
          variant="dark"
        ></b-progress>
        <!-- <h4 class="mb-4">
          <b-badge class="progress__badge">{{ goal_status }}%</b-badge>
        </h4> -->
        <p>{{ goal_description }}</p>
        <b-row>
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
        </b-row>
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

      blur: false,
    };
  },
  methods: {
    claim() {
      this.goal_status = 100;
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

    @keyframes effect {
      25% {
        background: linear-gradient(
          160deg,
          rgba(245, 244, 84, 1) 21%,
          rgba(121, 9, 116, 1) 54%,
          rgba(58, 137, 137, 1) 78%,
          rgba(0, 255, 156, 1) 100%
        );
      }
      50% {
        background: linear-gradient(
          160deg,
          rgba(245, 88, 84, 1) 21%,
          rgba(245, 244, 84, 1) 54%,
          rgba(121, 9, 116, 1) 78%,
          rgba(58, 137, 137, 1) 100%
        );
      }
      75% {
        background: linear-gradient(
          160deg,
          rgba(84, 116, 245, 1) 21%,
          rgba(245, 88, 84, 1) 54%,
          rgba(245, 244, 84, 1) 78%,
          rgba(121, 9, 116, 1) 100%
        );
      }
      100% {
        background: linear-gradient(
          160deg,
          rgba(245, 84, 156, 1) 21%,
          rgba(84, 116, 245, 1) 54%,
          rgba(245, 88, 84, 1) 78%,
          rgba(245, 244, 84, 1) 100%
        );
      }
    }
  }
}
</style>
