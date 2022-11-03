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
          Next we will show you a section in which you will be able to solve
          your doubts, which are common with the arrival of all this new world
          of Web3 technology, and you will also learn how to interact with our
          platform.
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
            >Simple, through a smart contract, the Campaigns are created in a
            period of time to make the Crowdsourcing.
            <br />
            <br />
            Once the Campaign is over the creator will be able to claim the
            pledged tokens only if the amount of contributed tokens is equal or
            more than the amount of tokens defined in the campaign.
            <br />
            <br />
            Otherwise, the users on the campaign will able to refund their
            tokens.</b-card
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
            >No, only RSK Testnet at this moment.</b-card
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
          <b-card class="question-item__card text-dark">
            During the active Campaign, all the pledged tokens goes to our Smart
            Contract.
            <br />
            <br />
            Once the campaign is over, the Smart Contract takes the decision of
            what happens next.</b-card
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
            <p class="m-0 font-weight-bold">Can I contribute my ETH or BNB?</p>
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
            >No, the Smart Contract only accepts tRIF.</b-card
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
            <p class="m-0 font-weight-bold">How to get verified?</p>
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
            >You need to send us a message and we'll confirm your identity and
            other steps to get verify!</b-card
          >
        </b-collapse>
      </div>

      <div class="w-100" id="tutos__sect">
        <b-row class="text-center mb-5">
          <b-col>
            <h1><strong>Videos</strong></h1>
            <p>Learn more about Bitcoffee and Web 3.0</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="tutorials__section">
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/Kg1h0uZX6G8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">
                  How to launch a goal
                </h3>
                <p style="opacity: 60%">
                  Launch your first goal to achieve your monetary goals through
                  our platform which provides you with the tools to achieve it.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/Kg1h0uZX6G8"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span
                  >Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/Kg1h0uZX6G8"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/EmsgVGoXhnA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">
                  How to create a wallet
                </h3>
                <p style="opacity: 60%">
                  Start interacting with our platform through a wallet which we
                  will teach you how to create step by step.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/EmsgVGoXhnA"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span
                  >Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/EmsgVGoXhnA"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/C9TWsQghfGA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">
                  How to contribute a goal
                </h3>
                <p style="opacity: 60%">
                  Start supporting a creator you follow by contributing to their
                  goals which you can fund on our platform.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/C9TWsQghfGA"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span>
                  Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/C9TWsQghfGA"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/TNOJcKMxO7o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">
                  How to refund a goal
                </h3>
                <p style="opacity: 60%">
                  Learn how to refund your contributions made to goals that were
                  not met.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/TNOJcKMxO7o"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span>
                  Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/TNOJcKMxO7o"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/ZxstS_FsyJU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">
                  How to send a donation
                </h3>
                <p style="opacity: 60%">
                  Learn how to directly support your favorite creator through
                  the direct contribution feature.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/ZxstS_FsyJU"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span>
                  Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/ZxstS_FsyJU"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
            <b-row
              class="tutorials__section__card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <b-col cols="12" lg="6">
                <iframe
                  class="tutorial__video"
                  src="https://www.youtube.com/embed/1jmZGAyPCv8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col cols="12" lg="6" class="py-2 px-0 px-lg-5">
                <h3 class="font-weight-bold mt-4 mt-lg-0">How claim a goal</h3>
                <p style="opacity: 60%">
                  Meet your goals through the realization of the claim of the
                  contributions you make in your goals.
                </p>
                <b-button
                  variant="primary"
                  href="https://youtu.be/1jmZGAyPCv8"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="play-fill" class="mr-2"></b-icon></span>
                  Watch now</b-button
                >
                <b-button
                  variant="outline-dark"
                  href="https://youtu.be/1jmZGAyPCv8"
                  target="_blank"
                  class="mt-5 px-4 py-2 rounded-lg"
                  ><span><b-icon icon="share"></b-icon></span
                ></b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
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
#tutos__sect {
  margin: 50px 0 300px;
}
.tutorials__section {
  display: flex;
  gap: 25px;
  flex-direction: column;

  .tutorials__section__card {
    background-color: white;
    padding: 50px 40px;
    margin-bottom: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 10px -5px,
      rgba(64, 64, 64, 0.3) 0px 20px 46px -6px;
    border-radius: 20px;

    .tutorial__video {
      width: 100%;
      height: 280px;
      max-width: 550px;
      border-radius: 20px;
    }
  }
}

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
