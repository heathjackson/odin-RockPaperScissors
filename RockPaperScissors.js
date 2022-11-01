// rock paper scissors game function - player vs computer
let playerScore = 0;
let computerScore = 0;

const scores = document.querySelector('#scores');

const playerTotal = document.createElement('div');
playerTotal.classList.add('playerTotal');
playerTotal.textContent = `Your score is ${playerScore}`;

scores.appendChild(playerTotal);

const computerTotal = document.createElement('div');
computerTotal.classList.add('computerTotal');
computerTotal.textContent = `The computer's score is ${computerScore}`;

scores.appendChild(computerTotal);

const arr = ["rock", "paper", "scissors"];


// makes the button and the website connect correctly and 
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

function game(playerChoice) {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
    return;
  }

  let computerSelection = getComputerChoice(arr);
  // console.log("You chose", playerSelection);
  // console.log("The computer chose", computerSelection);
  let round = playRound(playerChoice, computerSelection);
  
  if (round === "win") {
    playerScore += 1;
    console.log("You WON this round! You chose " + playerChoice + "," + " and the computer chose " + computerSelection + ".");
  }
  else if (round === "lose") {
    computerScore += 1;
    console.log("You LOST this round. You chose " + playerChoice + "," + " and the computer chose " + computerSelection + ".");
  }
  else {
    console.log("You TIED this round. You chose " + playerChoice + "," + " and the computer chose " + computerSelection + ".");
  }

  playerTotal.textContent = `YOUR SCORE = ${playerScore}`;
  computerTotal.textContent = `COMPUTER'S SCORE = ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

//*********************** FUNCTIONS USED ******************************//   
//makes the click sound when the button is pushed

function sound() {
  var snd = new Audio('sounds/click.m4a')//wav is also supported
  snd.play()//plays the sound
  return;
}
  
//alert when the game is over

function endGame() {
  if ((playerScore === 5 || computerScore === 5) && (playerScore > computerScore)) {
      alert("You are the winner, winner, chicken dinner of the game!!!!");
      return;
  }

  else {
      alert("YOU LOST THE GAME SUCKA");
      return;
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
 

