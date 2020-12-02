<template>
    <div>
        <h1>{{title}}</h1>
        <ol v-for="(score, index) in scores" v-bind:key="index" >
            <ScoreItem  v-bind:score="score" v-bind:index="index" />
            
        </ol>
    </div>
</template>

<script>
import ScoreItem from './ScoreItem';

export default {
    name: "Highscores",
    components:{
        ScoreItem
    },
    props: {
        scores: Array,
        title: String
    }
    
}
</script>

<style scoped>
    div{
        display:flexbox;
        background-color:#aaa;
        margin:5%;
    }

</style>