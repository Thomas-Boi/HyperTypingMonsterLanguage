<template>
  <transition name="chase"
    v-on:after-enter="setPositionAfterEnter">
    <img v-if="inGame" id='monster' src="../assets/lizard_monster_T.png" alt='monster' />
  </transition>
</template>

<script>
export default {
  name: "Monster",
  props: {
    inGame: Boolean
  },
  data() {
    return {
      monsterPosition: null
    }
  },
  methods: {
    getPosition() {
      return new Promise(resolve => {
        let intervalObj;
        intervalObj = setInterval(() => {
          if (this.monsterPosition !== null) {
            clearInterval(intervalObj)
            resolve(this.monsterPosition)
          }
        }, 400)
      })
    },

    setPositionAfterEnter() {
      this.monsterPosition = this.$el.getBoundingClientRect()
    }
  }
}
</script>

<style scoped>
  img {
    height: 400px;
    width: 400px;
    position: relative;
    z-index: 1;
    float: left;
  }

  .chase-enter-active {
    transition: transform 2s ease;
  }

  .chase-enter {
    transform: translate(-100%);
  }
</style>