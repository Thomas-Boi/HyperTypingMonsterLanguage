<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .btn {
    padding: 5px;
    cursor: pointer;
    width: 300px;
    font-size: 30px;
    color: red;
  }

  .invisible {
    display: none !important;
  }
</style>
