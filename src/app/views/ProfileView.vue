<template>
  <div class="user">
    <!-- Banner -->
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
    <!-- User avatar -->
    <div class="user-avatar__container text-center">
      <img src="../assets/images/unnamed.jpg" alt="avatar" />
    </div>
    <b-container class="user-information__container text-center my-4">
      <!-- personal information -->
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
        <a href="#" style="display: block" class="user-site my-4">
          {{ user_site
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
          <b-button class="edit-add"
            ><b-icon icon="plus" font-scale="1"></b-icon
          ></b-button>
        </div>
      </div>
      <!-- user description -->
      <b-container class="user-description__container">
        <b-container
          data-aos="fade-up"
          data-aos-duration="1000"
          class="user-description__card px-5 py-4"
        >
          <h1>{{ desc_title }}</h1>
          <p class="font-weight-bold">{{ desc_subtitle }}</p>
          <p>
            {{ description }}
          </p>
        </b-container>
      </b-container>

      <!-- User goals -->
      <div>
        <h1 class="my-4 font-weight-bold">My goals</h1>
        <UserGoalCard />
        <UserGoalCard />
      </div>
    </b-container>
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
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
    };
  },
  components: {
    UserGoalCard,
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
      border-radius: 50%;
    }
  }
}

// user description styles
.user-description__container {
  margin-bottom: 300px;
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
