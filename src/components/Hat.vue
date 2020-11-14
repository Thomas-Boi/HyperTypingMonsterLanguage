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
    height: 40px;
    border-radius: 80px 90px 0 0;
    width: 90px;
    display: flex;
  }

  .eye-cover {
    background-color: blue;
    height: 10px;
    width: 40px;
    left: 80px;
    align-self: flex-end;
    position: relative;
  }
</style>