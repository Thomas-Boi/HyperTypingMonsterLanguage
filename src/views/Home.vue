<template>
  <div class="home" v-bind:class="{moving: mode == 'Game'}">
    <TypingBox :text="HTMLtxt" v-bind:in-game="mode == 'Game'"/>
    <main class='mainArea'>
      <h1 class='title' v-bind:class="{invisible: mode == 'Game'}">
        Hyper Typing <br> Monster Language
      </h1>
      <ButtonSection v-bind:class="{invisible: mode == 'Game'}" v-on:play="play"/>
      <section class='game-play-section'>
        <Monster v-bind:in-game="mode == 'Game'"/>
        <Player />
        <div class='road'> </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonSection from "../components/ButtonSection"
import Player from "../components/Player"
import Monster from "../components/Monster"
import TypingBox from "../components/TypingBox"
import HTMLText from "raw-loader!../assets/helloworld.html"

export default {
  name: 'Home',
  components: {
    ButtonSection,
    Player,
    Monster,
    TypingBox 
  },
  data() {
    return {
      mode: "Home", // can be either "Home" or "Game"
      HTMLtxt: HTMLText
    }
  },
  methods: {
    play() {
      this.mode = "Game"
    }
  }
}
</script>

<style scoped>
  @keyframes movingBackground {
    from {
      background-position: 0px;
    }

    to {
      background-position: -92.5vw;
    }
  }

  .moving { 
    animation-duration: 6s;
  }

  .home {
    background-image: url("../assets/background.png");
    background-size: cover;
    animation-name: movingBackground;
    /* animation-duration: 15s; */
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    flex-direction: column;
    height:100%;
  }

  .mainArea {
    display: grid;
    grid-template-rows: 2fr 3fr;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "title button-section"
      "game-play-section game-play-section";
    height:100vh;
  }

  .title {
    margin-top: 40px;
    grid-area: title;
    font-size: 50px;
    color: white;
    text-align: center;
  }

  .game-play-section {
    grid-area: game-play-section;
    padding: 0;
    margin: 0;
  }
  
  .road {
    background-color: black;
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
</style>