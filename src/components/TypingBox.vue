<template>
  <div class='typing-box' v-bind:class="{visible: inGame}">
  </div>
</template>

<script>
export default {
  name: "TypingBox",
  props: {
    inGame: Boolean
  }
}
</script>

<style scoped>
  .typing-box {
    height: 30vh;
    width: 50vw;
    background-color: black;
    transition-duration: 1s;
    position: fixed;
    z-index: 3;
    align-self: center;
    transform: translate(0, -100%);
  }

  .visible {
    transform: translate(0, 0);
  }
</style>