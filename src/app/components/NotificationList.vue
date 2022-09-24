<template>
  <div class="notification__list m-3">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage.vue";
import { mapState } from "vuex";

export default {
  name: "NotificationList",
  components: {
    NotificationMessage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["notifications"]),
  },
};
</script>

<style lang="scss">
.notification__list {
  width: 500px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
}
</style>
