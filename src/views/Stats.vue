<template>
    <div class="StatsScreen">
        
        <ViewButton text="Menu" target="Home"/>
        <h1 class="StatsTitle">Stats</h1>
        <!-- pass histories and high scores here -->
        <Highscores class="results" title="HighScores" v-bind:scores="scores" />
        <Highscores class="results" title="Recent Runs" v-bind:scores="histories"/>
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
    .StatsScreen {
        background-image: url("../assets/background.png");
        background-size: cover;
        position: absolute;
        height:100%;
        width: 100%;
    }
    h1 {
        text-align: center;
    }

    .StatsTitle {
        font-size: 60px;
        color:white;
    }

    .results {
        width:40%;
        float: left;
    }
</style>