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
  let text = prompt("Rock (Gu), Paper (Pa), or Scissors (Chi)?", "Rock")

  return text;
}

function playRound(humanChoice, computerChoice) {
  let user = humanChoice.toLowerCase();

  if ((user === "rock" && computerChoice === "Rock - Gu") || (user === "paper" && computerChoice === "Paper - Pa") || (user === "scissors" && computerChoice === "Scissors - Chi")) {
    return "Draw! You both picked "  + user.charAt(0).toUpperCase() + user.slice(1) + " !"
  } else if ((user === "rock" && computerChoice === "Scissors - Chi") || (user === "paper" && computerChoice === "Rock - Gu") || (user === "scissors" && computerChoice === "Paper - Pa")) {
    return "You win! " + user.charAt(0).toUpperCase() + user.slice(1) + " beats " + computerChoice + "!";
  } else {
    return "You lose! " + computerChoice + " beats " + user.charAt(0).toUpperCase() + user.slice(1) + "!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))