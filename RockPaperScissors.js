// randomly chooses a string from the array

const arr = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getComputerChoice(["rock","paper","scissors"]))

// ask the player for their selection

function playerChoice() {
  const player = prompt("Please choose rock, paper, or scissors");
  return player.toLowerCase();
}

console.log(playerChoice())

// rock paper scissors game function - player vs computer

function playRound() {
  const playerRound = playerChoice();
  const computerRound = getComputerChoice(arr);
  if (playerRound == "rock" && computerRound == "scissors") {
    winner = "Congratulations you won!";
    console.log(winner);}
    else {
      console.log("loser");

  }
}

playRound()

