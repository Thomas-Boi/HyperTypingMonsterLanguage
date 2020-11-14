<template>
  <div class="home">
    <h1 class='title'>Hyper Typing <br> Monster Language</h1>
    <section class='right-side-section'>
      <Button text="PLAY" target="GameScene"/>
      <Button text="STATS" target="Stats"/>
      <Button text="DIFFICULTY" target="Stats"/>
      <Button text="UPLOAD YOUR OWN" target="Stats"/>
    </section>
    <section class='game-play-section'>
      <Player />
      <div class='road'> </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/Button"
import Player from "../components/Player"

export default {
  name: 'Home',
  components: {
    Button,
    Player
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    grid-template-rows: 2fr 3fr;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "title right-side-section"
      "game-play-section game-play-section";
  }

  .title {
    margin-top: 40px;
    grid-area: title;
    font-size: 50px;
    text-align: center;
  }

  .right-side-section {
    position: fixed;
    height: 400px;
    margin-top: 40px;
    right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
  }

  .game-play-section {
    grid-area: game-play-section;
    padding: 0;
    margin: 0;
  }

  .road {
    background-color: black;
    height: 200px;
    width: 100%;
    z-index: -1;
    position: fixed;
    bottom: 0px;
  }
</style>