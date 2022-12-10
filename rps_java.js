//Create a function "getComputerChoice" that will randomly select 
//rock paper scissors

    //Maybe create an array ["rock", "paper", "scissors"], then 
    //use the Math.random() function to create to have computer randomly choose one

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice;
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
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie! No one wins this round.";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") 
    || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        return "You lost! This round belongs to the computer.";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") 
    || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        return "You won! This round is yours.";
    } 
}



//Write a function called game(). This should enable user to play 5 rounds of RPS and reports 
//the winner or loser at the end. playround() will go inside this function. 
//Use console.log() to display the results of each round and the overall winner

function getPlayerChoice(){
    let validInput = false; 
    while(validInput == false) {
        const choice = prompt("Rock, Paper, or Scissors?")
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(choices.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function game() {
        let playerScore = 0;
        let computerScore = 0;
    for (let i = 0; i <5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("player:", playerSelection, "| computer:", computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log("___________________________________________________________")
        if(playRound(playerSelection, computerSelection) == "You won! This round is yours.") {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) == "You lost! This round belongs to the computer.") {
            computerScore++;
        } 
    }
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("Player was the winner");
    } else if (playerScore < computerScore){
        console.log("Computer was the winner");
    } else {
        console.log("We have a tie!")
    }

    console.log(playerScore, computerScore)
}

game()








