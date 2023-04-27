// Store a secret number
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number or is close enough
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, incorrect guess. The secret number was " + secretNumber);
}
