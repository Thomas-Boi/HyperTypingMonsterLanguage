<template>
  <div>
    <ViewButton text="Menu" target="Home"/>
    <h1>You {{result}}</h1>
  </div>
</template>

<script>
export default {
  name: "GameFinished",
  props: {
    gameResult: Object
  },
  computed: {
    result() {
      return this.gameResult.result
    }
  }
}
</script>