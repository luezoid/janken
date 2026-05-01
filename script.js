let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randDec = Math.random();
  
  if (randDec >= (1 / 3) && randDec < (2 / 3)) {
    return "r"
  } else if (randDec < (1 / 3)) {
    return "p"
  } else {
    return "s"
  }
}

function getHumanChoice() {
  let text = prompt("You are fighting Gon Freecss. What's your move? Rock (Gu), Paper (Pa), or Scissors (Chi)?", "Rock")

  if ((text.toLowerCase() === "rock") || (text.toLowerCase() === "gu") || (text.toLowerCase() === "r") || (text.toLowerCase() === "g")) {
    return "r";
  } else if ((text.toLowerCase() === "paper") || (text.toLowerCase() === "pa") || (text.toLowerCase() === "p")) {
    return "p";
  } else if ((text.toLowerCase() === "scissors") || (text.toLowerCase() === "chi") || (text.toLowerCase() === "s") || (text.toLowerCase() === "c")) {
    return "s";
  } else {
    return "Invalid answer - please reload the page!"
  }
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
      let fullHuman;
      let fullComputer;

      if (humanChoice == "r") {
        fullHuman = "Rock (Gu)"
      } else if (humanChoice == "p") {
        fullHuman = "Paper (Pa)"
      } else {
        fullHuman = "Scissors (Chi)"
      }

      if (computerChoice == "r") {
        fullComputer = "Rock (Gu)"
      } else if (humanChoice == "p") {
        fullComputer = "Paper (Pa)"
      } else {
        fullComputer = "Scissors (Chi)"
      }

      if ((humanChoice === "r" && computerChoice === "r") || (humanChoice === "p" && computerChoice === "p") || (humanChoice === "s" && computerChoice === "s")) {
        console.log(`Draw! You both picked ${fullHuman}! No points!`)
        return "d"
      } else if ((humanChoice === "r" && computerChoice === "s") || (humanChoice === "p" && computerChoice === "r") || (humanChoice === "s" && computerChoice === "p")) {
        console.log(`You win one point! ${fullHuman} beats ${fullComputer}!`)
        return "h"
      } else {
        console.log(`Computer wins one point! ${fullComputer} beats ${fullHuman}!`)
        return "c"
      }
    }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const roundResult = playRound(humanSelection, computerSelection);

  if (roundResult === "h") {
    humanScore++;
  } else if (roundResult === "c") {
    computerScore++;
  }
}

for (let i = 1; i <= 5; i++) {
  playGame();
}


let finalScore;

if (humanScore > computerScore) {
  finalScore = "You've won the game!"
} else if (computerScore > humanScore) {
  finalScore = "You've lost the game!"
} else {
  finalScore = "You drew the game!"
}

console.log(`You got ${humanScore} point(s) and the computer got ${computerScore} point(s)! ${finalScore}`)