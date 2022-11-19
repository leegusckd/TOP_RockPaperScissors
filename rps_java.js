//Create a function "getComputerChoice" that will randomly select 
//rock paper scissors

    //Maybe create an array ["rock", "paper", "scissors"], then 
    //use the Math.random() function to create to have computer randomly choose one

const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
     }

   //Another way to write this would be: 
        //const getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
        //console.log(getComputerChoice);

     

        

//Create a function "playRound" that plays a single round of rps. Should have 
//two parameters: playerSelection and computerSelection. Create if else statements
//for the game, returning a string that declares the winner of the round. 

     //playerSelection: either rock, paper, or scissor, depending on what the 
        //player chooses. Make it case-insensistive

     //computerSelection: const computerSelection = getComputerChoice();



function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "It's a tie! No one wins this round.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You lost! This round belongs to the computer.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You won! This round is yours.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You won! This round is yours.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "It's a tie! No one wins this round.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "You lost! This round belongs to the computer.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "You lost! This round belongs to the computer.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "You won! This round belongs to the computer."; 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "It's a tie! No one wins this round.";
    }
}

const playerSelection = "pApER"
const computerSelection = getComputerChoice(choices);

console.log (computerSelection)
console.log(playRound(playerSelection, computerSelection))


