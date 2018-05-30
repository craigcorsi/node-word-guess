function Letter (char) {
    this.char= char;
    this.hasBeenGuessed = false;
}

Letter.prototype.returnCurrentGuessState = function() {
    if (this.hasBeenGuessed) {
        return this.char;
    } else {
        return '_'
    }
}

Letter.prototype.updateWithNewGuess = function (guessedCharacter) {
    if (guessedCharacter == this.char) {
        this.hasBeenGuessed = true;
    }
}

module.exports = Letter;