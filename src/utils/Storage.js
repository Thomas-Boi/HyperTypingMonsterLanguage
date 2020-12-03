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
      this.highscores = new Array(Storage.maxHighscore).fill(0)
    } else {
      this.highscores = JSON.parse(this.highscores)
    }
    // index 0 is most recent playthrough
    this.history = localStorage.getItem(Storage.historyKey)
    if (this.history === null) {
      this.history = new Array(Storage.maxHistory).fill(0)
    } else {
      this.history = JSON.parse(this.history)
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
    let result = Math.round(wpm * accuracy * wordCount)
    if (this.history.length === Storage.maxHistory) {
      this.history.pop() // remove oldest history
    }
    this.history.unshift(result)
    this.checkHighscore(result)
    localStorage.setItem(Storage.historyKey, JSON.stringify(this.history))
    localStorage.setItem(Storage.scoreKey, JSON.stringify(this.highscores))
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

  getHistory() {
    return this.history
  }

  getHighscores() {
    return this.highscores
  }
}

export {
  Storage
}