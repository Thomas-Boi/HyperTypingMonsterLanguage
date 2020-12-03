<template>
    <div>
        <p>{{index+1}}.   {{score}}</p>
    </div>
</template>

<script>
export default {
    name:"ScoreItem",
    props:{      
        score:Number,
        index:Number
    }
}
</script>

<style scoped>
    p {
        font-size: 25px;
        font-weight: bold;
    }
</style>