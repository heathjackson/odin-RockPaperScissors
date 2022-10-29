// rock paper scissors game function - player vs computer

const arr = ["rock", "paper", "scissors"];

// repeat game 5 times

let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {
    let computerSelection = getComputerChoice(arr);
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
    else if (round === "tie") {
      console.log("You TIED this round. You chose " + playerChoice + "," + " and the computer chose " + computerSelection + ".");
    }
    else if (round === "wrongChoice") {
      console.log("You need to choose rock, paper, or scissors");
      i--;
    }
  console.log("player =", playerScore);
  console.log("computer =", computerScore);
  
  if (playerScore > computerScore) {
    console.log("You are the winner, winner, chicken dinner of the game!!!!");
  }
  else if (playerScore < computerScore) {
    console.log("YOU LOST THE GAME SUCKA");
  }
  else if (playerScore === computerScore) {
    console.log("You tied...wa wa");
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

