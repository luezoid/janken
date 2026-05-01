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
    return "Invalid input. Something's gone wrong here!"
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

function playGame() {
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