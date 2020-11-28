<template>
  <span class='player'>
    <Hat />
    <div class='head'></div>
    <div class='body'></div>
  </span>
</template>


<script>
import Hat from "./Hat";
export default {
  name: "Player",
  components: {
    Hat
  },
  props: {
    distance: Number
  },
  data() {
    return {
      distanceFromMonsterInPixel: 0
    }
  }
}
</script>


<style scoped>
  .player {
    display: inline-block;
    position: relative;
    z-index: 1;
    left: 20%;
    top: 100px;
  }

  .head {
    width: 90px;  
    height: 90px;
    background-color: pink;
  }

  .body {
    width: 60px;  
    height: 150px;
    background-color: pink;
    margin: auto;
  }
</style>