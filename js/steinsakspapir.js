// Array of options for the game (rock, paper, scissors)
const options = ["rock", "paper", "scissors"];

// Initialize player score, computer score, and moves left
let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;

// Get references to HTML elements
const buttons = document.querySelectorAll(".options button");
const playerCount = document.querySelector(".p-count");
const computerCount = document.querySelector(".c-count");
const movesLeftText = document.querySelector(".movesleft");
const resultText = document.querySelector(".result");

// Add event listeners to each button
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// Get player's choice and generate a random computer choice
		const playerChoice = button.classList[0];
		const computerChoice = options[Math.floor(Math.random() * options.length)];

		// Play a round of the game
		playRound(playerChoice, computerChoice);

		// Update the scores and moves left
		updateScore();

		// Check if the game is over
		checkGameOver();
	});
});

// Function to play a round of the game
function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		// If player and computer choices are the same, it's a tie
		resultText.textContent = "Uavgjort!";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		// If player wins the round, update player score
		resultText.textContent = "Du vinner!";
		playerScore++;
	} else {
		// If computer wins the round, update computer score
		resultText.textContent = "Datamskinen vinner";
		computerScore++;
	}

	// Decrease the number of moves left
	movesLeft--;
}

// Function to update the scores and moves left in the HTML
function updateScore() {
	playerCount.textContent = playerScore;
	computerCount.textContent = computerScore;
	movesLeftText.textContent = `Rundar igjen: ${movesLeft}`;
}

// Function to check if the game is over
function checkGameOver() {
	if (movesLeft === 0) {
		// If no moves left, determine the winner or if it's a tie
		if (playerScore > computerScore) {
			resultText.textContent = "Du vant!";
		} else if (playerScore < computerScore) {
			resultText.textContent = "Datamskinen vant!";
		} else {
			resultText.textContent = "Det ble uavgjort!";
		}

		// Disable all buttons
		buttons.forEach((button) => {
			button.disabled = true;
		});
	}
}
