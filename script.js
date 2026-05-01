function getComputerChoice() {
  let randDec = Math.random();
  
  if (randDec >= (1 / 3) && randDec <= (2 / 3))
    return "Rock - Gu"
  else if (randDec < (1 / 3))
    return "Scissors - Chi"
  else {
    return "Paper - Pa"
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock (Gu), Paper (Pa), or Scissors (Chi)?", "Rock")

  return humanChoice;
}

let humanScore, computerScore = 0;

console.log(getComputerChoice())
console.log(getHumanChoice())