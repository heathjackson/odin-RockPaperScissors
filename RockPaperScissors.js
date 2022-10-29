// rock paper scissors game function - player vs computer



let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');

const playerTotal = document.createElement('div');
playerTotal.classList.add('playerTotal');
playerTotal.textContent = `Your score is ${playerScore}`;

container.appendChild(playerTotal);

const computerTotal = document.createElement('div');
computerTotal.classList.add('computerTotal');
computerTotal.textContent = `The computer's score is ${computerScore}`;

container.appendChild(computerTotal);

const arr = ["rock", "paper", "scissors"];


// makes the button and the website connect correctly and 
// connects them to the game function
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  game('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  game('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  game('scissors');
});


function game(playerChoice) {
    let computerSelection = getComputerChoice(arr);

    if (playerScore === 5 || computerScore === 5) {
      endGame();
      return;
    }
    // console.log("You chose", playerSelection);
    // console.log("The computer chose", computerSelection);
    round = playRound(playerChoice, computerSelection);
   
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
    playerTotal.textContent = `Your score is ${playerScore}`;
    computerTotal.textContent = `The computer's score is ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      endGame();
      return;
    }
  }

    
  
  // console.log("player =", playerScore);
  // console.log("computer =", computerScore);
function endGame() {
    if (playerScore > computerScore) {
      alert("You are the winner, winner, chicken dinner of the game!!!!");
    }
    else {
      alert("YOU LOST THE GAME SUCKA");
    }
  }

// FUNCTIONS USED //

// Plays one round of Rock, Paper, Scissors //

function playRound(playerChoice, computerSelection) {
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
      return playerChoice = "wrongChoice";
    }
    else if (playerChoice === computerSelection) {
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
  return arr[Math.floor(Math.random() * arr.length)];
}

// asks the player for their selection

// function playerChoice() {
//   let player = prompt("Please choose rock, paper, or scissors");
//   return player.toLowerCase();
// }


 //each score is tallied on the website
 


