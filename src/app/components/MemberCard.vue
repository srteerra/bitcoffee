<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="px-2">
    <b-card id="member-card" class="text-center p-5" border-variant="light">
      <div class="px-4">
        <div class="pb-4">
          <img
            v-if="avatar === 'john'"
            src="../assets/images/john.jpg"
            style="width: 80px; height: 80px"
            class="rounded-circle"
            alt=""
          />
          <img
            v-else-if="avatar === 'charlie'"
            src="../assets/images/charlie.jpg"
            style="width: 80px; height: 80px"
            class="rounded-circle"
            alt=""
          />
          <img
            v-else-if="avatar === 'terra'"
            src="../assets/images/unnamed.jpg"
            style="width: 80px; height: 80px"
            class="rounded-circle"
            alt=""
          />
        </div>
        <b-card-title>{{ nickName }}</b-card-title>
        <b-card-text>{{ position }}</b-card-text>
        <div class="d-flex justify-content-around">
          <a :href="githubURL">
            <b-icon-github></b-icon-github>
          </a>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  data() {
    return {};
  },
  props: ["nickName", "position", "githubURL", "avatar"],
};
</script>

<style></style>
