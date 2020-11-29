<template>
  <section class='displayer' v-bind:class="{invisible: !inGame}">
    <span v-bind:class="{danger: isPlayerSlower}">Your CPM: </span>
    <span v-bind:class="{danger: isPlayerSlower}" class='rightSideSpan'>{{cpm}}</span>
    <span>Monster CPM: </span>
    <span class='rightSideSpan'>{{monsterCpm}}</span>
  </section>
</template>

<script>


export default {
  name: "CPMDisplayer",
  props: {
    cpm: Number,
    inGame: Boolean,
    monsterCpm: Number
  },
  computed: {
    isPlayerSlower() {
      return this.cpm < this.monsterCpm
    }
  }
    
}
</script>

<style scoped>
  .displayer {
    height: 10vh;
    background-color: black;
    color: white;
    position: fixed;
    font-size: 25px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .rightSideSpan {
    justify-self: center;
  }

  .danger {
    color: red;
  }
</style>