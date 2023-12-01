// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check if the user's guess is correct
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById("guessInput").value);

    // Get the result message element
    const resultMessage = document.getElementById("resultMessage");

    // Check if the user's guess is correct
    if (userGuess === randomNumber) {
        resultMessage.textContent = "Congratulations! You guessed the correct number!";
        restartGame();
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "Too low! Try again.";
    } else {
        resultMessage.textContent = "Too high! Try again.";
    }
}

// Function to restart the game
function restartGame() {
    // Reset the input field
    document.getElementById("guessInput").value = "";

    // Generate a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
