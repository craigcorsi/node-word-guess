var Letter = require('./letter.js');

// constructor for an object that records and updates information about 
// which letters in a word have been guessed yet in this Hangman game

// This constructor expects a string -- a single english word, all in lowercase
function Word (word) {
    this.letterExpansion = word.split('').map(function(char){return new Letter(char)});
}

Word.prototype.showGuessesAndBlanks = function() {
    var wordString = '';
    for (i=0; i<this.letterExpansion.length;i++) {
        wordString += this.letterExpansion[i].returnCurrentGuessState() + " ";
    }
    console.log(wordString);
}

Word.prototype.updateWithNewGuess = function(char) {
    for (i=0; i<this.letterExpansion.length; i++){
        this.letterExpansion[i].updateWithNewGuess(char);
    }
}

module.exports = Word;


// This may prove useful when testing

// var boats = new Word('boats');
// var apples = new Word('apples');

// boats.showGuessesAndBlanks();
// boats.updateWithNewGuess('t');
// boats.showGuessesAndBlanks();
// boats.updateWithNewGuess('b');
// boats.showGuessesAndBlanks();

// apples.showGuessesAndBlanks();
// apples.updateWithNewGuess('e');
// apples.showGuessesAndBlanks();
// apples.updateWithNewGuess('p');
// apples.showGuessesAndBlanks();