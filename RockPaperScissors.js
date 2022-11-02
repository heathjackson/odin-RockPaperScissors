// rock paper scissors game function - player vs computer
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// creats score board

const scores = document.querySelector('#scores');

const playerTotal = document.createElement('div');
playerTotal.classList.add('playerTotal');
playerTotal.textContent = `YOUR SCORE = ${playerScore}`;

scores.appendChild(playerTotal);

const computerTotal = document.createElement('div');
computerTotal.classList.add('computerTotal');
computerTotal.textContent = `COMPUTER'S SCORE = ${computerScore}`;

scores.appendChild(computerTotal);

// constants to create the text that says what the player chose vs the computer

const rounds = document.querySelector('.rounds');
const bothChoices = document.querySelector('.bothChoices');
const result = document.querySelector('.result');

// used to create an array so the computer can randomly choose 

const arr = ["rock", "paper", "scissors"];


// makes the button and UI connect correctly and 
// connects them to the game function

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
  sound();
  game('rock');
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  sound();
  game('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  sound();
  game('scissors')
})


// how the game runs

function game(playerChoice) {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
    return;
  }

  let computerSelection = getComputerChoice(arr);
  
  let round = playRound(playerChoice, computerSelection);

  roundNumber += 1;
  
  if (round === "win") {
    playerScore += 1;
    result.textContent = 'You won this round!';
  }
  else if (round === "lose") {
    computerScore += 1;
    result.textContent = 'You lost this round.';
  }
  else {
    result.textContent = 'You tied this round.';
  }

  // places text on UI
  playerTotal.textContent = `YOUR SCORE = ${playerScore}`;
  computerTotal.textContent = `COMPUTER'S SCORE = ${computerScore}`;
  
  rounds.textContent = `Round ${roundNumber}`;
  bothChoices.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}.`;
  
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}
//*********************** FUNCTIONS USED ******************************//   
//makes the click sound when the button is pushed

function sound() {
  var snd = new Audio('sounds/click.m4a')//wav is also supported
  snd.play()//plays the sound
}
  
//alert when the game is over

function endGame() {
  if (playerScore > computerScore) {
    rounds.textContent = '';
    result.textContent = '';
    bothChoices.textContent = 'You are the winner, winner, chicken dinner of the game!!!!';
  }
  else {
    rounds.textContent = '';
    result.textContent = '';
    bothChoices.textContent = 'YOU LOST THE GAME SUCKA!!';
  }
  
}
// Plays one round of Rock, Paper, Scissors //

function playRound(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    return playerChoice = "tie";
  }
  else if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "paper" && computerSelection === "rock") || (playerChoice === "scissors" && computerSelection === "paper")) {
    return playerChoice = "win";
  }
  else {
    return playerChoice = "lose";
  }
}

// randomly chooses a string from the array

function getComputerChoice(arr) {
  return arr = arr[Math.floor(Math.random() * arr.length)];
}
 

