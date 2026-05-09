let humanScore = 0;
let computerScore = 0;

const ROCK_BTN = document.querySelector("#rock")
const PAPER_BTN = document.querySelector("#paper")
const SCISSORS_BTN = document.querySelector("#scissors")

const RESULTS_DIV = document.querySelector(".results")

function getComputerChoice() {
  let selections = ["r", "p", "s"]
  let i = Math.floor(Math.random() * selections.length);
  return selections[i];
}

function getFullName(input) {
  if (input == "r") {
    return "Rock (Gu)";
  } else if (input == "p") {
    return "Paper (Pa)";
  } else {
    return "Scissors (Chi)";
  }
}

function showResult(str) {
  const result = document.createElement("p");
  result.textContent = str;
  RESULTS_DIV.appendChild(result)
}

function isPlural(score) {
  if (score === 1) {
    return `${score} point`;
  } else {
    return `${score} points`;
  }
}

function getFinalResult(h, c) {
  if ((h > c)) {
    return `You got ${isPlural(h)} and Gon Freecss got ${isPlural(c)}. You've won the game!`;
  } else {
    return `You got ${isPlural(h)} and Gon Freecss got ${isPlural(c)}. You've lost the game!`
  }
}

function getWinner(choiceOne, choiceTwo) {
  if (choiceOne === choiceTwo) {
    return 0;
  } else if ((choiceOne === "r" && choiceTwo === "s") || (choiceOne === "p" && choiceTwo === "r") || (choiceOne === "s" && choiceTwo === "p")) {
    return 1;
  } else {
    return 2;
  }
}

function playRound(humanChoice, computerChoice) {
  let winner = getWinner(humanChoice, computerChoice);

  if (winner === 0) {
    showResult(`Draw! You both picked ${getFullName(humanChoice)}! No points! Current Score: ${humanScore}-${computerScore}`)
  } else if (winner === 1) {
    humanScore++;
    showResult(`You win one point! ${getFullName(humanChoice)} beats ${getFullName(computerChoice)}! Current Score: ${humanScore}-${computerScore}`)
  } else {
    computerScore++;
    showResult(`Computer wins one point! ${getFullName(computerChoice)} beats ${getFullName(humanChoice)}! Current Score: ${humanScore}-${computerScore}`)
  }

  if (humanScore == 5 || computerScore == 5) {
    ROCK_BTN.disabled = true;
    PAPER_BTN.disabled = true;
    SCISSORS_BTN.disabled = true;

    const finalResult = getFinalResult(humanScore, computerScore)
    showResult(finalResult);
  }
}

ROCK_BTN.addEventListener("click", function() {
  playRound("r", getComputerChoice())
})

PAPER_BTN.addEventListener("click", function() {
  playRound("p", getComputerChoice())
})

SCISSORS_BTN.addEventListener("click", function() {
  playRound("s", getComputerChoice())
})