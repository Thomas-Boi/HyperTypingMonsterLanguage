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
  }  
}
</script>


<style scoped>
  .player {
    display: inline-block;
    position: relative;
    z-index: 1;
    left: 50%;
  }

  .head {
    width: 120px;  
    height: 120px;
    background-color: pink;
  }

  .body {
    width: 70px;  
    height: 200px;
    background-color: pink;
    margin: auto;
  }
</style>