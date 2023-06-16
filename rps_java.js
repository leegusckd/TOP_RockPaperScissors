const choices = ["rock", "paper", "scissors"]
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const ending = document.querySelector('#ending')


let playerSelection
let computerSelection = getComputerChoice()
let playerScore = 0
let computerScore = 0


function getComputerChoice() {
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice;
}



rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  })
paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  })
scissorsButton.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  })


  
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = ("It's a tie! No one wins this round.")
    } else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        result = ("You lost! This round belongs to the computer.")
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        result = ("You won! This round is yours.")
    } 

    

    if (playerScore ===5 || computerScore === 5) {
      gameOver();
    }


    updateScoreboard();
    document.getElementById('result').textContent = result; //.textcontent and .innerHTML accomplishes the same thing here
    document.getElementById('playerChose').textContent = "Player's Selection: " + playerSelection;
    document.getElementById('computerChose').textContent = "Computer's Selection: " + computerSelection;
  }

  
function updateScoreboard() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function gameOver() {
  let message;
  if (playerScore > computerScore) {
    message = "You won the game!";
  } else if (playerScore < computerScore) {
    message = "You lost the game!";
  }

  ending.textContent = message;

  rockButton.disabled = true; 
  paperButton.disabled = true; 
  scissorsButton.disabled = true; 

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again?';
  resetButton.addEventListener('click', resetGame);

  ending.appendChild(resetButton);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  ending.textContent = '';
  document.getElementById('result').textContent = '';
  document.getElementById('playerChose').textContent = '';
  document.getElementById('computerChose').textContent = '';

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}


