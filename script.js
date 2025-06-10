// Get computer choice randomly 
function getComputerChoice() {
    // Storage for possible choices
    const choice = ["rock", "paper", "scissors"]
    // Storage for random value in 0-2 range
    let randomVal = Math.floor(Math.random() * 3);
    return choice[randomVal];
}
// Get user input
function getHumanChoice() {
    let input = prompt("Please enter your choice:");
    return input;
}
// Global storage for choices
const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();
// Global storage for player scores
let humanScore = 0;
let computerScore = 0;
// Play one round 
function playRound(humanChoice, computerChoice) {
    // Rock > Scissors 
    if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore++;
      // Paper > Rock
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
      // Scissors > Paper
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.")
        humanScore++;
      // Rock < Paper
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
      // Paper < Scissors
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
      // Scissors < Rock
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    } else {
        console.log("Draw!")
    }
}
playRound(humanSelection, computerSelection);
// Play whole game (BO3) 