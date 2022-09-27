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
        'background-image':
          'url(' + require('../assets/images/studio.jpg') + ')',
      }"
    />
    <!-- User avatar -->
    <div class="user-avatar__container text-center">
      <img src="../assets/images/unnamed.jpg" alt="avatar" />
    </div>
    <div class="creator-information__container text-center">
      <!-- personal information -->
      <div class="creator-personal-info__container">
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
      </div>

      <!-- creator information -->
      <div class="creator-information">
        <b-row class="creator-row">
          <b-col cols="12" md="12" lg="7">
            <div class="creator-description__container">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="creator-description__card px-5 py-4"
              >
                <h1>{{ desc_title }}</h1>
                <p class="font-weight-bold">{{ desc_subtitle }}</p>
                <p>
                  {{ description }}
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="5">
            <!-- donation box -->
            <div class="donation-box__container">
              <DonateBoxView />
            </div>
          </b-col>

          <!-- creator goals -->
        </b-row>
        <b-row class="creator-row">
          <b-col cols="12" md="12" lg="8">
            <div class="text-left">
              <h1 class="px-5 my-4 font-weight-bold">{{ user_name }} goals</h1>
            </div>
            <UserGoalCard />
            <UserGoalCard />
          </b-col>
          <b-col cols="12" md="12" lg="4"> </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import UserGoalCard from "../components/UserGoalCard.vue";
import DonateBoxView from "../components/DonateBoxView.vue";
import Header from "../components/Header.vue";

export default {
  name: "PublicProfileView",
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

      donation: 0,
    };
  },
  components: {
    UserGoalCard,
    DonateBoxView,
    Header,
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

.creator-information__container {
  width: 80%;
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
      .creator-description__card {
        text-align: justify;
        width: 100%;
        p:nth-child(2) {
          color: #969292;
        }
      }
    }
  }
}

@media (max-width: 790px) {
  .creator-information__container {
    width: 95% !important;
  }
}
</style>
