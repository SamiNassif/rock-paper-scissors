//Making a loop counter
let counterRound = 0;

//Using while loop to loop the game 5 times
while (counterRound < 5) {

    //Making the function of computer randomly generating rock, paper, or scissors.
    function getComputerChoice() {

        const computerSelection = ['rock', 'paper', 'scissors'];
        const randomPick = Math.floor(Math.random() * 3);
        return computerSelection[randomPick];

    }

    //Making the computer-function into a constant so we can output the value
    const computerSelection = getComputerChoice();
    console.log("Computer's Choice:", computerSelection);


    //Getting user input
    let playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();

    //This is the result of the game, making the function of where our actual game is being stored in this variable so we can call on it to output the winner.
    let resultOfGame = playGame(playerSelection, computerSelection);


    //Actual function and logic of the game of who wins and loses in rock, paper, and scissors.
    function playGame(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "it's a tie";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return "you win";
        } else {
            return "you lose, computer wins";
        }
    }


    //Outputting the results of the game.
    console.log(resultOfGame);
    counterRound = counterRound + 1;
    
}






