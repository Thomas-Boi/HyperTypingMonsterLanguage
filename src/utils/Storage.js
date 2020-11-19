// get and set data about the user's wpm and accuracies
class Storage {
  static scoreKey = "HyperTypingScoreKey"
  static historyKey = "HyperTypingHistoryKey"
  static maxHistory = 5
  static maxHighscore = 5
  static singleton = null;

  constructor() {
    // both are arrays
    // index 0 is highest score
    this.highscores = localStorage.getItem(Storage.scoreKey)

    if (this.highscores === null) {
      this.highscores = new Array(this.maxhighscore).fill(0)
    }
    // index 0 is most recent playthrough
    this.history = localStorage.getItem(Storage.historyKey)
    if (this.history === null) {
      this.history = new Array(this.maxHistory).fill(0)
    }
  }

  static getStorage() {
    if (this.singleton === null) {
      this.singleton = new Storage()
    }
    return this.singleton;
  }

  // save the result of a run 
  saveResult(wpm, accuracy, wordCount) {
    let result = wpm * accuracy * wordCount
    if (this.history.length === Storage.maxHistory) {
      this.history.pop() // remove oldest history
    }
    this.history.unshift(result)
    this.checkHighscore(result)
  }

  checkHighscore(result) {
    let lastIndex = this.highscores.length - 1;
    if (this.highscores[lastIndex] > result) return;

    let i;
    for (i = lastIndex; i >= 0; i--) {
      let record = this.highscores[i]
      if (record > result) {
        break
      }
    }
    this.addHighscore(result, i + 1)
  }

  addHighscore(result, index) {
    let elemsToDel = length - index;
    let deletedElements = this.highscores.splice(index, elemsToDel, result)

    let elemsToReadd = elemsToDel - 1
    for (let i = 0; i < elemsToReadd; i++) {
      this.highscores.push(deletedElements[i])
    }
  }

  getHistories() {
    return this.histories
  }

  getHighscores() {
    return this.highscores
  }
}
export default Storage.getStorage