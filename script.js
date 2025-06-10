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
// Global storage for player scores
let humanScore = 0;
let computerScore = 0;
// Play one round 

// Play whole game (BO3) 