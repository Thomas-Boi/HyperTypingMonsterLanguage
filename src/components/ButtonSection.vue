<template>
  <section class='button-section' >
    <button class="btn" v-on:click="$emit('playTest')">
      Tutorial
    </button>
	<button class="btn" v-on:click="$emit('playEasy')">
      Easy
    </button>
	<button class="btn" v-on:click="$emit('playMedium')">
      Medium
    </button>
	<button class="btn" v-on:click="$emit('playHard')">
      Hard
    </button>
    <ViewButton text="STATS" target="Stats"/>
    <!--<ViewButton text="DIFFICULTY" target="Stats"/>-->
    <!--<ViewButton text="UPLOAD YOUR OWN" target="Stats"/>-->
  </section>
</template>

<script>
	import ViewButton from "../components/ViewButton";

	export default {
		name: "ButtonSection",
		components: {
			ViewButton
		}
	}
</script>

<style scoped>
	.button-section {
		position: fixed;
		height: 400px;
		margin-top: 40px;
		right: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 2;
	}
</style>