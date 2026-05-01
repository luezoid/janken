let humanScore, computerScore = 0;

function getComputerChoice() {
  let randDec = Math.random();
  
  if (randDec >= (1 / 3) && randDec <= (2 / 3)) {
    return "Rock - Gu"
  } else if (randDec < (1 / 3)) {
    return "Scissors - Chi"
  } else {
    return "Paper - Pa"
  }
}

function getHumanChoice() {
  let prompt = prompt("Rock (Gu), Paper (Pa), or Scissors (Chi)?", "Rock")

  return prompt;
}

function playRound(humanChoice, computerChoice) {
  let user = humanChoice.toLowercase();

  if ((user === "rock" && computerChoice === "Rock - Gu") || (user === "paper" && computerChoice === "Paper - Pa") || (user === "scissors" && computerChoice === "Scissors - Chi")) {
    return "Draw!" 
  } else if ((user === "rock" && computerChoice === "Scissors - Chi") || (user === "paper" && computerChoice === "Rock - Gu") || (user === "scissors" && computerChoice === "Paper - Pa")) {
    return "You win!"
  } else {
    return "You lose!"
  }
    
}

console.log(getComputerChoice())
console.log(getHumanChoice())