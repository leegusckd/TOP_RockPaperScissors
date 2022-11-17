//Create a function "getComputerChoice" that will randomly select 
//rock paper scissors

    //Maybe create an array ["rock", "paper", "scissors"], then 
    //use the Math.random() function to create to have computer randomly choose one

const choices = ["Rock", "Paper", "Scissors"]

    function getComputerChoice(choices) {
            return choices[Math.floor(Math.random()*choices.length)];
     }

    console.log(getComputerChoice(choices))

     //Another way to write this would be: 
        //const getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
        //console.log(getComputerChoice);

//Create a function "playRound" that plays a single round of rps. Should have 
//two parameters: playerSelection and computerSelection. 

     //playerSelection: either rock, paper, or scissor, depending on what the 
        //player chooses. Make it case-insensistive

     //computerSelection: const computerSelection = getComputerChoice();



     



