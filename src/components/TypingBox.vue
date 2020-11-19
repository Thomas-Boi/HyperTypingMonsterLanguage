<template>
  <div class='typing-box' v-bind:class="{visible: inGame}">
    <p class="newlines" v-text="text"></p>
  </div>
</template>

<script>

export default {
  name: "TypingBox",
  props: {
    inGame: Boolean,
    text: String
  }
}

</script>

<style scoped>
  .typing-box {
    height: 30vh;
    width: 50vw;
    background-color: grey;
    transition-duration: 1s;
    position: fixed;
    z-index: 3;
    align-self: center;
    transform: translate(0, -100%);
  }
  .newlines {
    white-space:pre;
  }

  .visible {
    transform: translate(0, 0);
  }
</style>