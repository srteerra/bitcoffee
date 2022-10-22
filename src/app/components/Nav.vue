<template>
  <b-list-group class="navMenu__container">
    <b-list-group-item
      button
      exact-path="/home"
      exact-path-active-class="activeLinkGroup"
      >Getting Started</b-list-group-item
    >
    <b-list-group-item button>I am a button</b-list-group-item>
    <b-list-group-item button disabled>Disabled button</b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.activeLinkGroup {
  background-color: rgb(85, 74, 57);
}

.navMenu__container {
  height: 100vh;
  max-height: 100vh;
  width: auto;
  background-color: white;
  overflow-y: scroll;
}
</style>
