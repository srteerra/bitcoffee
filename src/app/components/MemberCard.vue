<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="px-2">
    <b-card id="member-card" class="text-center p-5" border-variant="light">
      <div class="px-4">
        <div class="pb-4">
          <b-avatar src="https://i.pravatar.cc/300?4" size="4rem" />
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
  props: ["nickName", "position", "githubURL"],
};
</script>

<style></style>
