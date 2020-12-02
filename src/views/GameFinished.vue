<template>
  <div>
    <ViewButton text="Menu" target="Home"/>
   <h1>You {{queryObj.result}}</h1>
    <div id="inner">
       
       <p>Accuracy: {{queryObj.accuracy}}</p>
       <p>Char Count: {{queryObj.charCount}}</p>
       <p>CPM Average: {{queryObj.cpm}} </p>
       <p>Total Score: {{queryObj.totalScore}} </p>

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
        padding:20px;
        margin:5%;
           
    }
    p{
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;

    }

</style>