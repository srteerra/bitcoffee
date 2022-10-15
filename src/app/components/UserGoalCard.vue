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
        <!-- Image collapse -->
        <b-collapse id="collapse-a" class="my-2">
          <b-card style="border: none">
            <div class="text-center">
              <img
                class="w-50 mx-auto"
                src="../assets/images/user-goal.png"
                alt="user-goal"
              />

              <!-- Buttons to change de card view -->
              <div class="views__button" style="font-size: 4rem">
                <b-icon
                  icon="card-list"
                  class="btn-view rounded-circle bg-secondary p-3 m-2"
                  variant="light"
                ></b-icon>
                <b-icon
                  icon="list"
                  class="btn-view rounded-circle bg-secondary p-3 m-2"
                  variant="light"
                ></b-icon>
              </div>
            </div>
          </b-card>
        </b-collapse>

        <!-- Card content -->
        <h4 class="font-weight-bold">{{ goal_title }}</h4>
        <p class="my-4">
          by <strong style="color: gray">{{ user_name }}</strong>
        </p>

        <!-- Tags section -->
        <b-row class="my-5" align-h="center">
          <b-col
            cols="12"
            sm="4"
            v-for="category in categories"
            :key="category"
          >
            <p class="category-tag font-weight-bold py-2">{{ category }}</p>
          </b-col>
        </b-row>

        <!-- Description collapse -->
        <b-collapse id="collapse-b" class="mt-2">
          <b-card style="border: none">
            <p>{{ goal_description }}</p>
          </b-card>
        </b-collapse>

        <!-- Counter -->
        <h3><strong>8 days left</strong></h3>

        <!-- Time left collapse -->
        <b-collapse id="collapse-b" class="mt-2">
          <b-card style="border: none">
            <p>to complete the goal.</p>
          </b-card>
        </b-collapse>

        <!-- Progressbar -->
        <div class="progress__container my-5">
          <b-progress
            class="user-goal__progressbar mx-auto my-4"
            :value="goal_status"
            variant="dark"
          ></b-progress>
          <p class="firstValue">0%</p>
          <p class="lastValue">100%</p>
        </div>

        <!-- Stats section -->
        <b-row class="stats">
          <b-col class="stats-item__container my-3">
            <div>
              <h3><strong>43</strong></h3>
              <p>Supporters</p>
            </div>
          </b-col>

          <b-col class="stats-item__container my-3">
            <h3 style="color: #594d42"><strong>$233.24</strong></h3>
            <p>Raised</p>
          </b-col>
          <b-col class="stats-item__container my-3">
            <div>
              <h3><strong>$350</strong></h3>
              <p>Goal</p>
            </div>
          </b-col>
        </b-row>

        <!-- <p> Toggle -->
        <p
          class="my-4"
          :class="{ hide: hide }"
          v-b-toggle="['collapse-a', 'collapse-b', 'collapse-c', 'collapse-d']"
          @click="hide_p"
        >
          See details
        </p>

        <!-- Buttons collapse -->
        <b-collapse id="collapse-d" class="mt-2">
          <b-card style="border: none">
            <b-row align-h="center">
              <b-col cols="4">
                <b-button
                  class="w-100 mx-auto btn btn-dark font-weight-bold"
                  @click="claim"
                  >CLAIM</b-button
                >
              </b-col>
              <b-col cols="4">
                <b-button
                  class="w-100 mx-auto font-weight-bold"
                  variant="outline-dark"
                  @click="show"
                  v-b-toggle="[
                    'collapse-a',
                    'collapse-b',
                    'collapse-c',
                    'collapse-d',
                  ]"
                  >CANCEL</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>

        <b-collapse id="collapse-a" class="mt-2">
          <b-card style="border: none">
            <b-row align-h="center">
              <b-col cols="4">
                <b-button class="btn btn-dark font-weight-bold w-100 mx-auto"
                  >CONTRIBUTE</b-button
                >
              </b-col>
              <b-col cols="4">
                <b-button
                  class="w-100 mx-auto font-weight-bold"
                  variant="outline-dark"
                  >REFOUND</b-button
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
      categories: ["Music", "RIF"],
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

      .progress__container {
        width: 100%;
        position: relative;
        .user-goal__progressbar {
          width: 80%;
        }
        .firstValue {
          position: absolute;
          top: 20px;
          left: 10%;
          display: inline-block;
        }
        .lastValue {
          position: absolute;
          right: 10%;
          top: 20px;
          display: inline;
        }
      }

      .progress__badge {
        background-color: #594d42;
      }
    }

    .views__button {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 10px;
      top: 100px;
      .btn-view:hover {
        cursor: pointer;
      }
      @media (max-width: 1200px) {
        position: initial;
        flex-direction: row;
        justify-content: center;
      }

      @media (max-width: 980px) {
        position: absolute;
        flex-direction: column;
      }

      @media (max-width: 780px) {
        position: initial;
        flex-direction: row;
        justify-content: center;
      }
    }

    .category-tag {
      background-color: rgba(122, 122, 122, 0.3);
      border-radius: 25px;
    }

    .stats {
      margin: 70px 0;
      .stats-item__container {
        border-right: 2px solid rgba(122, 122, 122, 0.4);
      }
    }
    .stats-item__container:nth-child(3) {
      border: none;
    }

    @media (max-width: 580px) {
      .stats-item__container:nth-child(2) {
        border: none;
      }
    }

    @media (max-width: 428px) {
      .stats-item__container:nth-child(1) {
        border: none;
      }

      .stats-item__container:nth-child(2) {
        border-right: 2px solid rgba(122, 122, 122, 0.4);
      }
    }

    @media (max-width: 380px) {
      .stats-item__container:nth-child(2) {
        border: none;
      }
    }
  }
}
</style>
