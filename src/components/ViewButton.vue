<template>
  <button class="btn">
    <router-link :to="{name: target}" class="router-link">{{text}}</router-link>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: [
    "text", // the text that the button will display
    "target" // name of the route in the router
  ]
}
</script>

<style scoped>
  .router-link {
    text-decoration: none;
    font-size: 30px;
    color: red;
  }
</style>