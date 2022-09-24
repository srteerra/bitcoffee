<!-- eslint-disable vue/require-prop-types -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <transition
    mode="out-in"
    enter-class="animate__animated animate__backInRight"
    leave-active-class="animate__animated animate__backOutRight"
  >
    <b-card id="notificationMessage" class="pl-4 pr-2 mb-3">
      <div class="notificationMessage__content m-0 p-0">
        <div>
          <p class="m-0 p-0 font-weight-bold">
            <span :class="typeMessage" class="dot mr-2"></span>
            {{ notification.message }}
          </p>
        </div>
        <div class="notificationMessage__btn">
          <b-button
            variant="light"
            size="md"
            class="m-0"
            @click="closeNotification()"
          >
            <b-icon-x />
          </b-button>
        </div>
      </div>
      <b-progress
        :value="timeNoti"
        :variant="notification.type"
        :max="max"
        class="notificationMessage__timeline mb-3 p-0"
      ></b-progress>
    </b-card>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["notification"],
  data() {
    return {
      timeOut: null,
      timer: 0,
      timeNoti: 100,
      max: 100,
    };
  },
  computed: {
    typeMessage() {
      return `alert-${this.notification.type}`;
    },
  },
  mounted() {
    this.startTimer();
  },
  created() {
    this.timeOut = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeOut);
  },
  methods: {
    ...mapActions(["removeNotification"]),
    startTimer() {
      let vm = this;
      let timer = setInterval(function () {
        vm.timeNoti -= 5;
        if (vm.timeNoti >= vm.max) clearInterval(timer);
      }, 100);
    },
    closeNotification() {
      this.removeNotification(this.notification);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

#notificationMessage {
  width: 100%;
  height: 90px;
  border: none;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .notificationMessage__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .notificationMessage__btn {
      justify-items: end;
    }
  }
}

.notificationMessage__timeline {
  width: 422px;
  max-height: 7px;
  position: relative;
  bottom: -5px;
  left: -5px;
  border-radius: 30px !important;
}

.dot {
  display: inline-flex;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}

.alert-success {
  background-color: green;
}

.alert-danger {
  background-color: red;
}

.alert-warning {
  background-color: yellow;
}
</style>
