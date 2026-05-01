let humanScore, computerScore = 0;

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
  let prompt = prompt("Rock (Gu), Paper (Pa), or Scissors (Chi)?", "Rock")

  return prompt;
}

function playRound(humanChoice, computerChoice) {

}

console.log(getComputerChoice())
console.log(getHumanChoice())