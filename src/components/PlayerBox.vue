<template>
    <textarea :value="value" @input="$emit('input', $event.target.value)"
    class='player-box' v-bind:class="{visible: inGame}" placeholder="Type Here" />
</template>

<script>
import Vue from 'vue'
console.log(Vue.version);
export default {
  name: "PlayerBox",
  props: {
    inGame: Boolean,
    value: String
  }
}
</script>

<style scoped>
  .player-box {
    height: 10vh;
    width: 50vw;
    bottom: 0;
    background-color: white;
    transition-duration: 1s;
    position: fixed;
    z-index: 3;
    align-self: center;
    transform: translate(0, -100%);
    visibility: hidden;
    font-size: 30px;

  }

  .visible {
    transform: translate(0, 0);
    visibility: visible;
  }
</style>