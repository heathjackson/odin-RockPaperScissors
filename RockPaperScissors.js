// rock paper scissors game function - player vs computer

const arr = ["rock", "paper", "scissors"];
let playerSelection = playerChoice();
let computerSelection = getComputerChoice(arr);

// repeat game 5 times

let playerScore = 0;
let computerScore = 0;

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice(arr);
    // console.log("You chose", playerSelection);
    // console.log("The computer chose", computerSelection);
    round = playRound(playerSelection, computerSelection);
    if (round === "win") {
      playerScore += 1;
      console.log("You WON this round! You chose " + playerSelection + "," + " and the computer chose " + computerSelection + ".");
    }
    else if (round === "lose") {
      computerScore += 1;
      console.log("You LOST this round. You chose " + playerSelection + "," + " and the computer chose " + computerSelection + ".");
    }
    else if (round === "tie") {
      console.log("You TIED this round. You chose " + playerSelection + "," + " and the computer chose " + computerSelection + ".");
    }
    else if (round === "wrongChoice") {
      console.log("You need to choose rock, paper, or scissors");
      i--;
    }
  console.log("player =", playerScore);
  console.log("computer =", computerScore);
  }
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

game()

// FUNCTIONS USED //

// Plays one round of Rock, Paper, Scissors //

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      return playerSelection = "wrongChoice";
    }
    else if (playerSelection === computerSelection) {
      return playerSelection = "tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
      return playerSelection = "win";
    }
    else {
      return playerSelection = "lose";
    }
  }

// randomly chooses a string from the array

function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// asks the player for their selection

function playerChoice() {
  let player = prompt("Please choose rock, paper, or scissors");
  return player.toLowerCase();
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  alert("Hello Rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  alert("Hello Paper");
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  alert("Hello Scissors");
});

