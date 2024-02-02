// Initialize scores
let playerScore = 0;
let computerScore = 0;

//Keeping track of Player/Computer game wins
let playerGameWins = 0;
let computerGameWins = 0;


// Making the function of computer randomly generating rock, paper, or scissors.
function getComputerChoice() {
    const computerSelections = ['rockImage', 'paperImage', 'scissorsImage'];
    const randomPick = Math.floor(Math.random() * 3);
    return computerSelections[randomPick];
}

// Actual function and logic of the game of who wins and loses in rock, paper, and scissors.
function determineChoiceResult(playerSelection, computerSelection) {
    
    //making constant variables for our outputting image
    const resultDisplay = document.getElementById("resultDisplay");
    const playerImage = document.createElement("img");
    playerImage.src = `${playerSelection}.png`;
    playerImage.alt = playerSelection;

    const computerImage = document.createElement("img");
    computerImage.src = `${computerSelection}.png`;
    computerImage.alt = computerSelection;

    if (
        (playerSelection === "paperImage" && computerSelection === "rockImage") ||
        (playerSelection === "scissorsImage" && computerSelection === "paperImage") ||
        (playerSelection === "rockImage" && computerSelection === "scissorsImage")
    ) {
        resultDisplay.innerHTML = `Player: ${playerImage.outerHTML} Computer: ${computerImage.outerHTML} player won`;
        return "player won";
    } else if (
        (playerSelection === "rockImage" && computerSelection === "paperImage") ||
        (playerSelection === "paperImage" && computerSelection === "scissorsImage") ||
        (playerSelection === "scissorsImage" && computerSelection === "rockImage")
    ) {
        resultDisplay.innerHTML = `Player: ${playerImage.outerHTML} Computer: ${computerImage.outerHTML} computer won`;
        return "computer won";
    } else {
        resultDisplay.innerHTML = `Player: ${playerImage.outerHTML} Computer: ${computerImage.outerHTML} it's a tie`;
        return "it's a tie";
    }
}

// Function to play round of rps
function playSingleRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultOfRound = determineChoiceResult(playerSelection, computerSelection);

    // Updating the score at the end of each round while checking for the winner
    updateScoredPoints(resultOfRound);
}

function updateScoredPoints(result) {
    if (result == "player won") {
      playerScore++;
    } else if (result == "computer won") {
      computerScore++;
    }
  
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
  
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  
    if (playerScore === 5 || computerScore === 5) {
      announceWinner();
    }
  
    // Update game win counters
    const playerGameWinsDisplay = document.getElementById("playerGameWins");
    const computerGameWinsDisplay = document.getElementById("computerGameWins");
  
    playerGameWinsDisplay.textContent = `${playerGameWins}`;
    computerGameWinsDisplay.textContent = `${computerGameWins}`;
}


// Announcing the winner of the game
function announceWinner() {
    const winnerDisplay = document.getElementById("winnerDisplay");
    if (playerScore === 5) {
      winnerDisplay.textContent = "Player Wins The Game!";
      playerGameWins++;
      resetGame();
    } else {
      winnerDisplay.textContent = "Computer Wins The Game!";
      computerGameWins++;
      resetGame();
    }
}


// Adding event listeners to buttons
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.rock').addEventListener('click', function () {
        playSingleRound('rockImage');
    });

    document.querySelector('.paper').addEventListener('click', function () {
        playSingleRound('paperImage');
    });

    document.querySelector('.scissors').addEventListener('click', function () {
        playSingleRound('scissorsImage');
    });
});


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoredPoints("Game Reset");

    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    playerScoreDisplay.textContent = `Player ${playerScore}`;
    computerScoreDisplay.textContent = `Computer ${computerScore}`;

    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = "";
}

