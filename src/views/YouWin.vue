<template> 
    <div>
        <ViewButton text="Menu" target="Home"/>
        <h1>You Won!</h1>
        <img src="../assets/deadlizard.png" alt="dead" />       
    </div>
</template>

<script>
    import ViewButton from '../components/ViewButton'

    export default{
        name:"YouWin",
        components:{
            ViewButton
        },
        props:{
            accuracy:Number,
            speed:Number,
            score:Number
        }

    }
</script>

<style scoped>

</style>