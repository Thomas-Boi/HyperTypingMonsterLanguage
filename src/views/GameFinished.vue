<template>
  <div>
    
   
   <div id="outer">
     <ViewButton text="Menu" target="Home"/>
      <div id="inner">
        <h1>YOU {{queryObj.result}}!</h1>     
        <p>Accuracy: {{queryObj.accuracy}}</p>
        <p>Char Count: {{queryObj.charCount}}</p>
        <p>CPM Average: {{queryObj.cpm}} </p>
        <p>Total Score: {{queryObj.totalScore}} </p>
        <a class="twitter-share-button"
  v-bind:href="'https://twitter.com/intent/tweet?text=My%20Hyper%20Typing%20Monster%20Language%20Scores%0aAccuracy:%20' + 
  queryObj.accuracy +
  '%0aChar%20Count:%20' +
  queryObj.charCount +
  '%0aCPM%20Average:%20' +
  queryObj.cpm +
  '%0aTotal%20Score:%20'+ 
  queryObj.totalScore">
Tweet</a>
      </div>
    </div>
    
   
  </div>
</template>

<script>
import ViewButton from "../components/ViewButton"

export default {
  name: "GameFinished",
  components:{
    ViewButton
  },
  computed: {
    queryObj() {
      return this.$route.query
    }
  }
}
</script>

<style scoped>
    #inner{
       
        background-color:#aaa;
        padding:10%;
        margin:5%;
        justify-content: space-evenly;
    }
    #outer{
      background-image:url('../assets/background.png');
      padding:15%;

    }
    p{
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;

    }

</style>