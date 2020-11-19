<template>
    <div>
        
        <ViewButton text="Menu" target="Home"/>
        <h1>Stats</h1>
        <!-- pass histories and high scores here -->
        <Highscores title="HighScores" v-bind:scores="scores" />
        <Highscores title="Recent Runs" v-bind:scores="histories"/>
    </div>
</template>

<script>
    import Highscores from '../components/HighScores';
    import ViewButton from '../components/ViewButton';
    import Storage from '../utils/Storage';
    
    export default{
        name: 'Stats',
        components: {
            Highscores,
            ViewButton         
        },
        data(){
            return{
                scores:[],
                histories:[]
            }
        },     
        created: function(){
            let storage = Storage.getStorage();
            var hist = storage.getHistory();
            var hscores = storage.getHighscores();
            var size = 5;
            this.scores = hscores.slice(0, size);
            this.histories = hist.slice(0, size);        
            console.log("the score is: " + this.scores);
            console.log("this history is: " + this.histories);
        }       
    }
</script>

<style>

</style>