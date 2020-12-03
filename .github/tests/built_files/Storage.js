"use strict";

var _interopRequireDefault = require("C:/Users/Admin_Think541/Documents/JavaScriptProjects/hypertypingmonsterlanguage/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.fill");

require("core-js/modules/es.array.splice");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _classCallCheck2 = _interopRequireDefault(require("C:/Users/Admin_Think541/Documents/JavaScriptProjects/hypertypingmonsterlanguage/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("C:/Users/Admin_Think541/Documents/JavaScriptProjects/hypertypingmonsterlanguage/node_modules/@babel/runtime/helpers/esm/createClass"));

var _defineProperty2 = _interopRequireDefault(require("C:/Users/Admin_Think541/Documents/JavaScriptProjects/hypertypingmonsterlanguage/node_modules/@babel/runtime/helpers/esm/defineProperty"));

// get and set data about the user's wpm and accuracies
var Storage = /*#__PURE__*/function () {
  function Storage() {
    (0, _classCallCheck2.default)(this, Storage);
    // both are arrays
    // index 0 is highest score
    this.highscores = localStorage.getItem(Storage.scoreKey);

    if (this.highscores === null) {
      this.highscores = new Array(Storage.maxHighscore).fill(0);
    } else {
      this.highscores = JSON.parse(this.highscores);
    } // index 0 is most recent playthrough


    this.history = localStorage.getItem(Storage.historyKey);

    if (this.history === null) {
      this.history = new Array(Storage.maxHistory).fill(0);
    } else {
      this.history = JSON.parse(this.history);
    }
  }

  (0, _createClass2.default)(Storage, [{
    key: "saveResult",
    // save the result of a run 
    value: function saveResult(wpm, accuracy, wordCount) {
      var result = Math.round(wpm * accuracy * wordCount);

      if (this.history.length === Storage.maxHistory) {
        this.history.pop(); // remove oldest history
      }

      this.history.unshift(result);
      this.checkHighscore(result);
      localStorage.setItem(Storage.historyKey, JSON.stringify(this.history));
      localStorage.setItem(Storage.scoreKey, JSON.stringify(this.highscores));
    }
  }, {
    key: "checkHighscore",
    value: function checkHighscore(result) {
      var lastIndex = this.highscores.length - 1;
      if (this.highscores[lastIndex] > result) return;
      var i;

      for (i = lastIndex; i >= 0; i--) {
        var record = this.highscores[i];

        if (record > result) {
          break;
        }
      }

      this.addHighscore(result, i + 1);
    }
  }, {
    key: "addHighscore",
    value: function addHighscore(result, index) {
      var elemsToDel = length - index;
      var deletedElements = this.highscores.splice(index, elemsToDel, result);
      var elemsToReadd = elemsToDel - 1;

      for (var i = 0; i < elemsToReadd; i++) {
        this.highscores.push(deletedElements[i]);
      }
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return this.history;
    }
  }, {
    key: "getHighscores",
    value: function getHighscores() {
      return this.highscores;
    }
  }], [{
    key: "getStorage",
    value: function getStorage() {
      if (this.singleton === null) {
        this.singleton = new Storage();
      }

      return this.singleton;
    }
  }]);
  return Storage;
}();

exports.Storage = Storage;
(0, _defineProperty2.default)(Storage, "scoreKey", "HyperTypingScoreKey");
(0, _defineProperty2.default)(Storage, "historyKey", "HyperTypingHistoryKey");
(0, _defineProperty2.default)(Storage, "maxHistory", 5);
(0, _defineProperty2.default)(Storage, "maxHighscore", 5);
(0, _defineProperty2.default)(Storage, "singleton", null);