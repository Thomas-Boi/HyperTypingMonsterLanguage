<template>
  <div class='typing-box' v-bind:class="{visible: inGame}">
    <span class='typedTxt'>{{cleanedText.slice(0, curCharIndex)}}</span>
    <span ref='curChar' class='curChar'>{{cleanedText.charAt(curCharIndex)}}</span>
    <span class='remainingTxt'>{{cleanedText.slice(curCharIndex + 1)}}</span>
    <textarea ref='inputArea' class='inputArea' @keydown.stop.prevent="typeText($event)"/> 
  </div>
</template>

<script>
const UPDATE_INTERVAL_IN_MILI = 3000

export default {
  name: "TypingBox",
  props: {
    inGame: Boolean,
    text: String
  },
  computed: {
    cleanedText() {
      return this.text.replace(/\r/g, "").replace(/ {4}/g, "\t")
    }
  },
  data() {
    return {
      curCharIndex: 0,
      mistypedCount: 0,
      cpmUpdater: null,
      previousIndex: 0,
      gameStarted: false,
      cpm: 0
    }
  },
  methods: {
    typeText(evt) {
      let typedChar = evt.key

      // convert to equivalent forms
      if (typedChar === "Enter") {
        typedChar = "\n"
        this.scrollDown()
      } else if (typedChar === "Tab") {
        typedChar = "\t"
      }

      if (typedChar === this.cleanedText.charAt(this.curCharIndex)) {
        this.curCharIndex++
        // if reached the end
        if (this.cleanedText.charAt(this.curCharIndex) == "") {
          this.finishGame()
        } 
      } else {
        this.mistypedCount++
      }
    },

    scrollDown() {
      this.$refs.curChar.scrollIntoView()
    },

    finishGame() {
      clearInterval(this.cpmUpdater)
      let charCount = this.cleanedText.length
      let totalCharType = charCount + this.mistypedCount
      let accuracy = charCount / totalCharType

      let gameResult = {
        charCount,
        cpm: this.cpm,
        accuracy,
        result: "won"
      }
      this.$emit("game-finished", gameResult)
    },

    updateCPM() {
      let capturedCurChar = this.curCharIndex
      let charTypedCount = capturedCurChar - this.previousIndex
      this.previousIndex = capturedCurChar
      let ratioOfMinToInterval = 60000 / UPDATE_INTERVAL_IN_MILI

      this.cpm = charTypedCount * ratioOfMinToInterval
      this.$emit("update-cpm", this.cpm)
    }
  },

  updated() {
    // only run it once
    if (this.inGame && !this.gameStarted) {
      this.$refs.inputArea.focus()
      this.cpmUpdater = setInterval(this.updateCPM, UPDATE_INTERVAL_IN_MILI)
      this.gameStarted = true
    }
  }
}

</script>

<style scoped>
  .typing-box {
    height: 30vh;
    width: 50vw;
    background-color: black;
    transition-duration: 1s;
    position: fixed;
    z-index: 3;
    align-self: center;
    transform: translate(0, -100.5%);
    color: white;
    overflow: hidden;
  }

  span {
    white-space: pre-wrap;
  }

  .typedTxt {
    color: green;
  }

  .curChar {
    background-color: gray;
  }

  .inputArea {
    position: fixed;
    opacity: 0;
    top: 0;
    height: 30vh;
    width: 50vw;
  }

  .visible {
    transform: translate(0, 0);
  }
</style>