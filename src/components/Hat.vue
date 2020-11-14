<template>
  <div class='hat'>
    <div class='eye-cover'></div>
  </div>
</template>

<script>
export default {
  name: "Hat"
}
</script>

<style scoped>
  .hat {
    background-color: blue;
    height: 60px;
    border-radius: 120px 120px 0 0;
    width: 120px;
    display: flex;
  }

  .eye-cover {
    background-color: blue;
    height: 20px;
    width: 50px;
    left: 110px;
    align-self: flex-end;
    position: relative;
  }
</style>