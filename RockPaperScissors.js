// randomly chooses a string from the array

function getComputerChoice(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(getComputerChoice(["rock","paper","scissor"]))

// ask the player for their selection

function playerChoice() {
  const player = prompt("Please choose rock, paper, or scissors");
  return player.toLowerCase();
}

// console.log(playerChoice())

