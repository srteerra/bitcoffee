<template>
  <div>
    <Header />
    <b-container class="FAQ__container pt-5">
      <div class="faq__container text-center mx-auto" data-aos="zoom-in">
        <h1 class="mt-5">
          <strong>
            Frequently
            <span style="color: #d8bea7">Asked</span> <br />
            Questions</strong
          >
        </h1>
        <p class="mb-5 mt-2">Some answers</p>

        <p id="faq__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          consequatur voluptate ut cupiditate itaque facere ratione minima ullam
          et tempore aliquam, nam architecto veritatis, temporibus repellendus
          dolore assumenda porro ex a numquam tenetur, iste soluta.
        </p>
      </div>

      <!-- Questions section -->
      <div class="question__section mx-auto">
        <div
          v-b-toggle="'question_1'"
          class="question-item bg-dark text-light d-flex justify-content-between w-100 px-3 px-md-4 py-3 my-4"
          data-aos="fade-up"
          duration="2000"
        >
          <div class="d-flex align-items-center">
            <b-icon
              icon="question-circle"
              class="ml-1 ml-md-3 mr-3 mb-0"
            ></b-icon>
            <p class="m-0 font-weight-bold">How it works?</p>
          </div>
          <div class="question__icon">
            <img src="../assets/icons/Artboard 81 1.png" alt="" />
          </div>
        </div>
        <b-collapse
          id="question_1"
          accordion="questions
        "
        >
          <b-card class="question-item__card text-dark"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            maxime necessitatibus optio voluptatem ipsa distinctio ab fugiat
            alias cupiditate, quae repudiandae dignissimos excepturi modi
            quaerat voluptate officia impedit. Ullam alias dolorem, debitis
            inventore illo id reiciendis deleniti deserunt ratione minima,
            facere quam eum? Assumenda error aliquid porro praesentium
            quod.</b-card
          >
        </b-collapse>

        <div
          v-b-toggle="'question_2'"
          class="question-item bg-dark text-light d-flex justify-content-between w-100 px-3 px-md-4 py-3 my-4"
          data-aos="fade-up"
          duration="2000"
          delay="200"
        >
          <div class="d-flex align-items-center">
            <b-icon
              icon="question-circle"
              class="ml-1 ml-md-3 mr-3 mb-0"
            ></b-icon>
            <p class="m-0 font-weight-bold">Can I use BSC or Ethereum?</p>
          </div>
          <div class="question__icon">
            <img src="../assets/icons/Artboard 81 1.png" alt="" />
          </div>
        </div>
        <b-collapse
          id="question_2"
          accordion="questions
        "
        >
          <b-card class="question-item__card text-dark"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            maxime necessitatibus optio voluptatem ipsa distinctio ab fugiat
            alias cupiditate, quae repudiandae dignissimos excepturi modi
            quaerat voluptate officia impedit. Ullam alias dolorem, debitis
            inventore illo id reiciendis deleniti deserunt ratione minima,
            facere quam eum? Assumenda error aliquid porro praesentium
            quod.</b-card
          >
        </b-collapse>

        <div
          v-b-toggle="'question_3'"
          class="question-item bg-dark text-light d-flex justify-content-between w-100 px-3 px-md-4 py-3 my-4"
          data-aos="fade-up"
          duration="2000"
          delay="300"
        >
          <div class="d-flex align-items-center">
            <b-icon
              icon="question-circle"
              class="ml-1 ml-md-3 mr-3 mb-0"
            ></b-icon>
            <p class="m-0 font-weight-bold">Where goes my contributions?</p>
          </div>
          <div class="question__icon">
            <img src="../assets/icons/Artboard 81 1.png" alt="" />
          </div>
        </div>
        <b-collapse
          id="question_3"
          accordion="questions
        "
        >
          <b-card class="question-item__card text-dark"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            maxime necessitatibus optio voluptatem ipsa distinctio ab fugiat
            alias cupiditate, quae repudiandae dignissimos excepturi modi
            quaerat voluptate officia impedit. Ullam alias dolorem, debitis
            inventore illo id reiciendis deleniti deserunt ratione minima,
            facere quam eum? Assumenda error aliquid porro praesentium
            quod.</b-card
          >
        </b-collapse>

        <div
          v-b-toggle="'question_4'"
          class="question-item bg-dark text-light d-flex justify-content-between w-100 px-3 px-md-4 py-3 my-4"
          data-aos="fade-up"
          duration="2000"
          delay="300"
        >
          <div class="d-flex align-items-center">
            <b-icon
              icon="question-circle"
              class="ml-1 ml-md-3 mr-3 mb-0"
            ></b-icon>
            <p class="m-0 font-weight-bold">
              How much the platform takes form fees?
            </p>
          </div>
          <div class="question__icon">
            <img src="../assets/icons/Artboard 81 1.png" alt="" />
          </div>
        </div>
        <b-collapse
          id="question_4"
          accordion="questions
        "
        >
          <b-card class="question-item__card text-dark"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            maxime necessitatibus optio voluptatem ipsa distinctio ab fugiat
            alias cupiditate, quae repudiandae dignissimos excepturi modi
            quaerat voluptate officia impedit. Ullam alias dolorem, debitis
            inventore illo id reiciendis deleniti deserunt ratione minima,
            facere quam eum? Assumenda error aliquid porro praesentium
            quod.</b-card
          >
        </b-collapse>

        <div
          v-b-toggle="'question_5'"
          class="question-item bg-dark text-light d-flex justify-content-between w-100 px-3 px-md-4 py-3 my-4"
          data-aos="fade-up"
          duration="2000"
          delay="400"
        >
          <div class="d-flex align-items-center">
            <b-icon
              icon="question-circle"
              class="ml-1 ml-md-3 mr-3 mb-0"
            ></b-icon>
            <p class="m-0 font-weight-bold">How it works?</p>
          </div>
          <div class="question__icon">
            <img src="../assets/icons/Artboard 81 1.png" alt="" />
          </div>
        </div>
        <b-collapse
          id="question_5"
          accordion="questions
        "
        >
          <b-card class="question-item__card text-dark"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            maxime necessitatibus optio voluptatem ipsa distinctio ab fugiat
            alias cupiditate, quae repudiandae dignissimos excepturi modi
            quaerat voluptate officia impedit. Ullam alias dolorem, debitis
            inventore illo id reiciendis deleniti deserunt ratione minima,
            facere quam eum? Assumenda error aliquid porro praesentium
            quod.</b-card
          >
        </b-collapse>
      </div>

      <div id="see-more" class="w-100 text-center">
        <p>See more</p>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "FAQView",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.FAQ__container {
  #see-more {
    margin: 200px 0;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .faq__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: 50px 0 100px;
    #faq__desc {
      width: 70%;
      margin: 0 auto;
    }

    @media (max-width: 800px) {
      width: 100%;
      #faq__desc {
        width: 95%;
      }
    }
  }
  .question__section {
    width: 70%;
    margin: 100px 0 200px;
    .question-item {
      border-radius: 50px;
      .question__icon {
        display: flex;
        align-items: center;
        img {
          transform: rotate(90deg);
        }
      }
    }

    .question-item__card {
      border: none;
    }

    @media (max-width: 800px) {
      width: 100%;
      .question-item {
        border-radius: 10px;
      }
      .question-item div:nth-child(1) {
        :nth-child(1) {
          display: none;
        }
      }
    }

    @media (max-width: 250px) {
      .question-item div:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>
