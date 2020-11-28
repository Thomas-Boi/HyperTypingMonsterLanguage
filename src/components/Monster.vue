<template>
  <img id='monster' src="../assets/lizard_monster_T.png" alt='monster'
  v-bind:class='{chasing: inGame}'  />
</template>

<script>
export default {
  name: "Monster",
  props: {
    inGame: Boolean
  }
}
</script>

<style scoped>
  img {
    height: 400px;
    width: 400px;
    position: relative;
    z-index: 1;
    float: left;
    transform: translate(-100%);
  }

  .chasing {
    transform: translate(0);
    transition: transform 1s;
  }
</style>