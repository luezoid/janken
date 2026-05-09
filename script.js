let humanScore = 0;
let computerScore = 0;

const ROCK_BTN = document.querySelector("#rock")
const PAPER_BTN = document.querySelector("#paper")
const SCISSORS_BTN = document.querySelector("#scissors")

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


  PAPER_BTN.addEventListener("click", () => {
    return "p";
  });

  SCISSORS_BTN.addEventListener("click", () => {
    return "s";
  });
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



function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "r" && computerChoice === "r") || (humanChoice === "p" && computerChoice === "p") || (humanChoice === "s" && computerChoice === "s")) {
    console.log(`Draw! You both picked ${getFullName(humanChoice)}! No points!`)
    return "d"
  } else if ((humanChoice === "r" && computerChoice === "s") || (humanChoice === "p" && computerChoice === "r") || (humanChoice === "s" && computerChoice === "p")) {
    console.log(`You win one point! ${getFullName(humanChoice)} beats ${getFullName(computerChoice)}!`)
    return "h"
  } else {
    console.log(`Computer wins one point! ${getFullName(computerChoice)} beats ${getFullName(humanChoice)}!`)
    return "c"
  }
}

ROCK_BTN.addEventListener("click", playRound(removeEventListener, getComputerChoice()));

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const roundResult = playRound(humanSelection, computerSelection);

  if (roundResult === "h") {
    humanScore++;
  } else if (roundResult === "c") {
    computerScore++;
  }
}

function getWinner(h, c) {
  if ((h > c) && (h !== 1) && (c !== 1)) {
    return `You got ${h} points and Gon Freecss got ${c} points. You've won the game!`;
  } else if ((h > c) && (h == 1) && (c !== 1)) {
    return `You got ${h} point and Gon Freecss got ${c} points. You've won the game!`
  } else if ((c > h) && (h !== 1) && (c !== 1)) {
    return `You got ${h} points and Gon Freecss got ${c} points. You've lost the game!`
  } else if ((c > h) && (h !== 1) && (c == 1)) {
    return `You got ${h} point and Gon Freecss got ${c} points. You've lost the game!`
  } else if ((h == c) && h !== 1) {
    return `You both got ${h} points! Draw!`
  } else if ((h == c) && h == 1) {
    return `You both got ${h} point! Draw!`
  }
}

console.log(getWinner(humanScore, computerScore))