// Get computer choice randomly 
function getComputerChoice() {
    // Storage for possible choices
    const choice = ["rock", "paper", "scissors"]
    // Storage for random value in 0-2 range
    let randomVal = Math.floor(Math.random() * 3);
    return choice[randomVal];
}

// Get user input
// Play one round 
// Play whole game (BO3) 