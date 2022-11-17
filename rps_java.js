//create a function "getComputerChoice" that will randomly select 
//rock paper scissors

    //maybe create an array ["rock", "paper", "scissors"], then 
    //use the Math.random() function to create to have computer randomly choose one

const choices = ["Rock", "Paper", "Scissors"]

    function getComputerChoice(choices) {
            return choices[Math.floor(Math.random()*choices.length)];
     }

    console.log(getComputerChoice(choices))

     //Another way to write this would be: 
        //const getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
        //console.log(getComputerChoice);



     



