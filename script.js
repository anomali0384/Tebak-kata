// Word Guessing Game Logic

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
let secretWord = '';
let guessedLetters = [];
let attempts = 6;

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 6;
    console.log('New game started! Guess the word.');
    console.log('The word has ' + secretWord.length + ' letters.');
}

function guessLetter(letter) {
    if (guessedLetters.includes(letter) || letter.length !== 1) {
        console.log('You have already guessed that letter or it is not valid.');
        return;
    }
    guessedLetters.push(letter);
    if (!secretWord.includes(letter)) {
        attempts--;
        console.log('Wrong guess! You have ' + attempts + ' attempts left.');
    } else {
        console.log('Good guess!');
    }
    displayCurrentState();
    checkGameOver();
}

function displayCurrentState() {
    let displayWord = secretWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    console.log(displayWord);
}

function checkGameOver() {
    if (attempts === 0) {
        console.log('Game Over! The word was: ' + secretWord);
        return;
    }
    if (secretWord.split('').every(letter => guessedLetters.includes(letter))) {
        console.log('Congratulations! You guessed the word: ' + secretWord);
    }
}

// Start a new game
startGame();
