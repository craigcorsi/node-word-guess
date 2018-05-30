var Letter = require('./letter.js');



// word constructor expects a string -- a single english word, all in lowercase
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




// This may prove useful later (testing from word.js)

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






// This may prove useful later (testing from letter.js)

// var char_a = new Letter('a');
// var char_b = new Letter('b');
// var char_c = new Letter('c');
// var char_d = new Letter('d');
// var char_e = new Letter('e');


// var alphabet = [char_a, char_b, char_c, char_d, char_e];

// for (var i=0; i < alphabet.length; i++) {
//     alphabet[i].updateWithNewGuess('d');
//     alphabet[i].updateWithNewGuess('f');
//     alphabet[i].updateWithNewGuess('a');
//     console.log(alphabet[i].returnCurrentGuessState());
// }