// already guessed, for incorrect guesses

var Word = require('./word.js');
var inquirer = require('inquirer');
var fs = require('fs');

var wordlist = fs.readFileSync('./wordlist.txt').toString().split('\n');
var numberOfWords = wordlist.length;

var inGameMessages = ['Guess a letter!', 'Already guessed!', 'Incorrect guess!', 'Correct guess!'];

// in-game variables
var livesRemaining;
var currentWordString;
var currentWordObject;
var currentArrayLettersRemaining;
var guessedLetters;





// in-game functions

function startUp() {
    inquirer.prompt([{
        type: "list",
        name: "startup",
        message: "Welcome to Word Guess!",
        choices: ["Play", "Quit"]
    }
    ]).then(function (response) {
        switch (response.startup) {
            case 'Play':
                startGame();
                break;
            case 'Quit': default:
        }
    });
}

function startGame() {
    livesRemaining = 5;
    currentWordString = wordlist[Math.floor(Math.random() * wordlist.length)];
    currentWordObject = new Word(currentWordString);
    currentArrayLettersRemaining = currentWordString.split('');
    guessedLetters = [];
    displayWord(0);
}

function displayWord(messageIndex) {
    currentWordObject.showGuessesAndBlanks();

    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: `${inGameMessages[messageIndex]} ${livesRemaining} lives remaining. Enter QUIT to forfeit.`
    }]).then(function (response) {
        var currentLetter = response.letter.toUpperCase().trim();

        // forfeit the game if they type 'quit'
        if (currentLetter == 'QUIT') {
            loseGame();

        // else let the user know if the letter has already been guessed
        } else if (guessedLetters.indexOf(currentLetter) > -1) {
            displayWord(1);

        // else deplete one life if they type something that isn't a chracter in the word
        } else if (currentWordString.indexOf(currentLetter) == -1) {
            livesRemaining--;
            if (livesRemaining > 0) {
                guessedLetters.push(currentLetter);
                displayWord(2);
            // if lives run out, lose the game
            } else {
                loseGame();
            }
        
        // else show each of the guessed letter in the word
        } else {
            currentWordObject.updateWithNewGuess(currentLetter);
            currentArrayLettersRemaining = currentArrayLettersRemaining.filter(function (char) { return char != currentLetter });
            if (currentArrayLettersRemaining.length > 0) {
                guessedLetters.push(currentLetter);
                displayWord(3);
            // if there are no letters left to guess, win the game
            } else {
                winGame();
            }
        }
    });
}

function winGame() {
    console.log('\nYou win! You guessed the word: ' + currentWordString);
    endGame();
}

function loseGame() {
    console.log('\nYou lose! The word was: ' + currentWordString);
    endGame();
}

function endGame() {
    inquirer.prompt([{
        type: "list",
        name: "startup",
        message: "Would you like to play again?",
        choices: ["Play", "Quit"]
    }
    ]).then(function (response) {
        switch (response.startup) {
            case 'Play':
                startGame();
                break;
            case 'Quit': default:
        }
    });
}

startUp();













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