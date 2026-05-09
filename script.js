let humanScore = 0;
let computerScore = 0;

const ROCK_BTN = document.querySelector("#rock")
const PAPER_BTN = document.querySelector("#paper")
const SCISSORS_BTN = document.querySelector("#scissors")

const RESULTS_DIV = document.querySelector(".results")

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

function getFullName(input) {
  if (input == "r") {
    return "Rock (Gu)";
  } else if (input == "p") {
    return "Paper (Pa)";
  } else if (input == "s") {
    return "Scissors (Chi)";
  } else {
    console.log("Invalid input. Something's gone wrong here!")
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

function getWinner(h, c) {
  if ((h > c)) {
    return `You got ${isPlural(h)} points and Gon Freecss got ${isPlural(c)} points. You've won the game!`;
  } else {
    return `You got ${isPlural(h)} points and Gon Freecss got ${isPlural(c)} points. You've lost the game!`
  }
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "r" && computerChoice === "r") || (humanChoice === "p" && computerChoice === "p") || (humanChoice === "s" && computerChoice === "s")) {
    showResult(`Draw! You both picked ${getFullName(humanChoice)}! No points! Current Score: ${humanScore}-${computerScore}`)
  } else if ((humanChoice === "r" && computerChoice === "s") || (humanChoice === "p" && computerChoice === "r") || (humanChoice === "s" && computerChoice === "p")) {
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

    const finalResult = getWinner(humanScore, computerScore)
    showResult(finalResult);
  }
}

ROCK_BTN.addEventListener("click", function() {
  roundResult = playRound("r", getComputerChoice())
})

PAPER_BTN.addEventListener("click", function() {
  roundResult = playRound("p", getComputerChoice())
})

SCISSORS_BTN.addEventListener("click", function() {
  roundResult = playRound("s", getComputerChoice())
})