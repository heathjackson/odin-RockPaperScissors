// randomly chooses a string from the array

const arr = ["rock", "paper", "scissors"];

// rock paper scissors game function - player vs computer

function playRound() {
  const playerRound = playerChoice();
  console.log("your choice", "=", playerRound);
  const computerRound = getComputerChoice(arr);
  console.log("computer choice", "=", computerRound);
    if (!(playerRound == "rock" || playerRound == "paper" || playerRound == "scissors")) {
      console.log("Please choose rock, paper, or scissors")
    }
    else if (playerRound == computerRound) {
      console.log("It's a tie!");
    }
    else if ((playerRound == "rock" && computerRound == "scissors") || (playerRound == "paper" && computerRound == "rock") || (playerRound == "scissors" && computerRound == "paper")) {
      console.log("Congratulations you won!");}
    else {
      console.log("loser");

      }
}

playRound()

function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(getComputerChoice(["rock","paper","scissors"]))

// ask the player for their selection

function playerChoice() {
  const player = prompt("Please choose rock, paper, or scissors");
  return player.toLowerCase();
}

// console.log(playerChoice())

