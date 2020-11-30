<template>
  <section class='button-section' >
    <button class="btn" v-on:click="$emit('play')">
      PLAY
    </button>
    <ViewButton text="STATS" target="Stats"/>
    <ViewButton text="DIFFICULTY" target="Stats"/>
    <input id="fileUpload" type="file" ref-"file" style="display:none" v-on:change="upload">
    <button class="btn" onclick="document.getElementById('fileUpload').click()">UPLOAD FILE</button>
  </section>
</template>

<script>
import ViewButton from "../components/ViewButton";
import axios from "axios
import http from "../http-common"

export default {
  name: "ButtonSection",
  components: {
    ViewButton
  },
  methods: {
    upload(){
        this.fileUpload = this.$refs.file.files[0];
        let formData = newFormData();
        formData.append('file', this.fileUpload);
        
        axios.post('single-file',
            formData,
            {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(function(){
            console.log("File uploaded");
        })
        .catch(function(){
            console.log("File Upload Failed");
        });
    },
    getFiles(){
        return http.get("/files");
    }
  },
  data(){
    return {
        file:''
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