<template>
  <div class='typing-box' v-bind:class="{visible: inGame}">
    <span class='typedTxt'>{{cleanedText.slice(0, curCharIndex)}}</span>
    <span class='nextCharToType'>{{cleanedText.charAt(curCharIndex)}}</span>
    <span class='remainingTxt'>{{cleanedText.slice(curCharIndex + 1)}}</span>
    <textarea id='inputArea' class='inputArea' @keydown.stop.prevent="typeText($event)"/> 
  </div>
</template>

<script>

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
      curCharIndex: 0
    }
  },
  methods: {
    typeText(evt) {
      let typedChar = evt.key
      // console.log(
      //   {
      //     typedChar,
      //     target: this.cleanedText.charAt(this.curCharIndex)
      //   }
      // )

      // convert to equivalent forms
      if (typedChar === "Enter") {
        typedChar = "\n"
      } else if (typedChar === "Tab") {
        typedChar = "\t"
      }

      if (typedChar === this.cleanedText.charAt(this.curCharIndex)) {
        this.curCharIndex++
        if (this.cleanedText.charAt(this.curCharIndex) == "") {
          console.log("Finish game")
        } 
      }
    }
  },
  updated() {
    if (this.inGame) {
      document.querySelector("#inputArea").focus()
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
  }

  span {
    white-space: pre-wrap;
  }

  .typedTxt {
    color: green;
  }

  .nextCharToType {
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