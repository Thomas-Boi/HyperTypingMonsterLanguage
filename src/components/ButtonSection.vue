<template>
  <section class='button-section' >
    <button class="btn" v-on:click="$emit('play')">
      PLAY
    </button>
    <ViewButton text="STATS" target="Stats"/>
    <ViewButton text="DIFFICULTY" target="Stats"/>
	<input type="file" id="file" ref="file" v-on:change="onFileUpload()">
	<button class="btn" v-on:click="submitFile()">UPLOAD YOUR OWN</button>
    <!--
    <ViewButton text="UPLOAD YOUR OWN" target="Stats"/>
    -->
  </section>
</template>

<script>
	import ViewButton from "../components/ViewButton";
	import axios from 'axios'

	export default {
		name: "ButtonSection",
		components: {
			ViewButton
		},
		data() {
			return {
				file: ''
			}
		},
		methods: {
			onFileUpload() {
				this.file = this.$refs.file.files[0];
			},
			async submitFile() {
				let formData = new FormData();
				formData.append('file', this.file);
				await axios.post('/upload',
						formData, {
							headers: {
								'Content-Type': 'multipart/form-data'
							}
						}
					).then(function() {
						console.log("upload success");
					})
					.catch(function() {
						console.log("upload failure");
					});
			}
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
