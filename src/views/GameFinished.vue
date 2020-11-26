<template>
  <div>
    <ViewButton text="Menu" target="Home"/>
    <h1>You {{queryObj.result}}</h1>
  </div>
</template>

<script>
export default {
  name: "GameFinished",
  computed: {
    queryObj() {
      return this.$route.query
    }
  }
}
</script>