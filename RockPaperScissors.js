// rock paper scissors game function - player vs computer

const arr = ["rock", "paper", "scissors"];
// let playerSelection = playerChoice();
// let computerSelection = getComputerChoice(arr);

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice(arr);
    console.log("You chose", playerSelection);
    console.log("The computer chose", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}



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

// console.log("You chose", playerSelection);
// console.log("The computer chose", computerSelection);
// console.log(playRound(playerSelection, computerSelection));


// randomly chooses a string from the array



function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(getComputerChoice(["rock","paper","scissors"]))

// ask the player for their selection

function playerChoice() {
  let player = prompt("Please choose rock, paper, or scissors");
  return player.toLowerCase();
}

// console.log(playerChoice())

game()
