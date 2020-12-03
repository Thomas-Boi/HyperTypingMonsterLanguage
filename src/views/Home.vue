<template>
  <div class="home" v-bind:class="{moving: mode == 'Game'}">
    <CPMDisplayer v-bind:cpm="cpm" v-bind:monster-cpm="monsterCpm"
      v-bind:in-game="mode == 'Game'" />
    <TypingBox :text="HTMLtxt" v-bind:in-game="mode == 'Game'" 
      v-bind:monster-cpm="monsterCpm"
      v-on:game-finished="displayResultScene" v-on:update-cpm="updateCPM"
      v-on:player-move="movePlayer"/>

    <main class='mainArea'>
      <h1 class='title' v-bind:class="{invisible: mode == 'Game'}">
        Hyper Typing <br> Monster Language
      </h1>

      <ButtonSection v-bind:class="{invisible: mode == 'Game'}" v-on:playTest="playTest" v-on:playEasy="playEasy" v-on:playMedium="playMedium" v-on:playHard="playHard"/>
      <section class='game-play-section'>
        <Monster v-bind:in-game="mode == 'Game'" ref='monster'/>
        <Player v-bind:distance="distanceFromPlayerToMonster" ref='player'/>
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
	import CPMDisplayer from "../components/CPMDisplayer"
	import HTMLText from "raw-loader!../assets/test.html"
	import EasyText from "raw-loader!../assets/Uploads/carousel/easy.html"
	import MediumText from "raw-loader!../assets/Uploads/carousel/medium.html"
	import HardText from "raw-loader!../assets/Uploads/carousel/hard.html"
	import router from "../router/index"

	export default {
		name: 'Home',
		components: {
			ButtonSection,
			Player,
			Monster,
			TypingBox,
			CPMDisplayer
		},
		data() {
			return {
				mode: "Home", // can be either "Home" or "Game"
				HTMLtxt: HTMLText,
				cpm: 0,
				monsterCpm: 150,
				startingDistanceFromMonster: 0,
				distanceFromPlayerToMonster: 0
			}
		},
		methods: {
			playTest() {
				this.mode = "Game";
				this.HTMLtxt = HTMLText;
			},
			playEasy() {
				this.mode = "Game";
				this.HTMLtxt = EasyText;
			},
			playMedium() {
				this.mode = "Game";
				this.HTMLtxt = MediumText;
			},
			playHard() {
				this.mode = "Game";
				this.HTMLtxt = HardText;
			},

			displayResultScene(gameResult) {
				// navigate to the page
				router.push({
					name: "GameFinished",
					query: gameResult
				})
			},

			updateCPM(newCPM) {
				this.cpm = newCPM
			},

			movePlayer(distanceFraction) {
				this.distanceFromPlayerToMonster =
					this.startingDistanceFromMonster * distanceFraction
				console.log(this.distanceFromPlayerToMonster)
			},

			// find the starting distance from the monster 
			// only call this method once like a singleton
			async findStartingDistanceFromMonster() {
				if (this.startingDistanceFromMonster !== 0) {
					return this.startingDistanceFromMonster
				}

				let monsterPosition = await this.$refs.monster.getPosition()
				let playerPosition = this.$refs.player.getPosition()

				return playerPosition.left - monsterPosition.right
			}
		},

		updated() {
			this.$nextTick(async () => {
				if (this.mode === "Game") {
					this.startingDistanceFromMonster = await this.findStartingDistanceFromMonster()
				}
			})
		}
	}

</script>

<style scoped>
	@keyframes movingBackground {
		from {
			background-position: 0px;
		}

		to {
			background-position: -100vw;
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
		height: 100%;
	}

	.mainArea {
		display: grid;
		grid-template-rows: 2fr 3fr;
		grid-template-columns: 2fr 1fr;
		grid-template-areas: "title button-section" "game-play-section game-play-section";
		height: 100vh;
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
