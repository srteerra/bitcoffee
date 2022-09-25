<template>
  <div class="user">
    <div
      class="user-profile__background"
      :style="{
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
        'background-image':
          'url(' + require('../assets/images/studio.jpg') + ')',
      }"
    />
    <div class="user-avatar__container text-center">
      <img src="../assets/images/unnamed.jpg" alt="avatar" />
    </div>
    <b-container class="user-information__container text-center my-4">
      <div class="user-personal-info__container">
        <div class="user-name__container my-3">
          <p class="font-weight-bold pt-5 px-2">{{ user_name }}</p>
          <b-icon icon="patch-check-fill"></b-icon>
        </div>
        <b-button
          id="address"
          pill
          variant="outline-dark"
          class="px-5 font-weight-bold"
          >{{ address }} <b-icon icon="files"></b-icon
        ></b-button>
        <p class="user-site my-3">
          {{ user_site }} <b-icon icon="box-arrow-up-right"></b-icon>
        </p>
      </div>
      <b-container class="user-description__container my-5">
        <b-container class="user-description__card px-5 py-4">
          <h1>{{ desc_title }}</h1>
          <p class="font-weight-bold">{{ desc_subtitle }}</p>
          <p>
            {{ description }}
          </p>
        </b-container>
      </b-container>

      <b-container class="user-goals__container my-5">
        <h1 class="my-4 font-weight-bold">My goals</h1>
        <div class="user-goal-card__container">
          <div class="goal-completed" v-if="goal_status == 100">
            <p class="bg-dark font-weight-bold p-3">COMPLETED</p>
          </div>
          <b-container
            class="user-goal__card p-4"
            :class="{ blur: goal_status == 100 }"
          >
            <p class="firstValue">0%</p>
            <p class="lastValue">100%</p>
            <h2 class="font-weight-bold">{{ goal_title }}</h2>
            <b-progress
              class="user-goal__progressbar mx-auto my-4"
              :value="goal_status"
              variant="dark"
            ></b-progress>
            <h4 class="mb-4">
              <b-badge class="progress__badge">{{ goal_status }}%</b-badge>
            </h4>
            <p>{{ goal_description }}</p>
          </b-container>
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      user_name: "Sarah",
      address: "0xB37Ecc72B...Bda3",
      user_site: "sarahsblog.com",
      desc_title: " Hi! My name is Sarah",
      desc_subtitle: "I live in Mexico",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
      consequuntur est inventore quia debitis dolor iste temporibus
      assumenda maxime ratione quaerat ducimus accusamus error sit quae
      ipsam, praesentium itaque amet voluptatibus veniam labore quibusdam
      facere voluptates velit. Deserunt tempore iste excepturi impedit
      iure accusantium voluptates fugiat, nam iusto animi, facere nisi ad
      repellendus cum eaque ipsam eos libero in. Voluptatum?`,

      goal_title: "A new acustic guitar",
      goal_status: 90,
      goal_description:
        "My guitar is nearly to break :( I really need a new one",

      blur: false,
    };
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
}

// user personal styles
.user-personal-info__container {
  position: relative;
  .edit-profile {
    .edit-btn {
      width: 90%;
      margin: 20px;
    }
  }
  .user-name__container {
    font-size: 30px;
    p {
      display: inline-block;
    }
  }

  .user-site:hover {
    color: gray;
    cursor: pointer;
  }

  .user-description__container {
    .user-description__card {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 20px;
      width: 80%;
      p:nth-child(2) {
        color: #969292;
      }
    }
  }

  .user-goals__container {
    .user-goal-card__container {
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
        width: 80%;
        position: relative;
        .user-goal__progressbar {
          width: 80%;
        }
        .progress__badge {
          background-color: #594d42;
        }
        .firstValue {
          position: absolute;
          top: 100px;
          left: 110px;
        }
        .lastValue {
          position: absolute;
          right: 110px;
          top: 100px;
        }
      }
    }
  }
}

.blur {
  filter: blur(4px);
}
</style>
