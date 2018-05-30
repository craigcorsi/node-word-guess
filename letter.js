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


var char_a = new Letter('a');
var char_b = new Letter('b');
var char_c = new Letter('c');
var char_d = new Letter('d');
var char_e = new Letter('e');


// This may prove useful later
var alphabet = [char_a, char_b, char_c, char_d, char_e];

for (var i=0; i < alphabet.length; i++) {
    alphabet[i].updateWithNewGuess('d');
    alphabet[i].updateWithNewGuess('f');
    alphabet[i].updateWithNewGuess('a');
    console.log(alphabet[i].returnCurrentGuessState());
}