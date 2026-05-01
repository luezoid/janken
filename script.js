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
      let user = humanChoice.toLowerCase();

      if ((user === "rock" && computerChoice === "Rock - Gu") || (user === "paper" && computerChoice === "Paper - Pa") || (user === "scissors" && computerChoice === "Scissors - Chi")) {
        console.log("Draw! You both picked "  + user.charAt(0).toUpperCase() + user.slice(1) + " !")
        return "D"
      } else if ((user === "rock" && computerChoice === "Scissors - Chi") || (user === "paper" && computerChoice === "Rock - Gu") || (user === "scissors" && computerChoice === "Paper - Pa")) {
        console.log("You win! " + user.charAt(0).toUpperCase() + user.slice(1) + " beats " + computerChoice + "!")
        return "H"
      } else {
        console.log("You lose! " + computerChoice + " beats " + user.charAt(0).toUpperCase() + user.slice(1) + "!")
        return "C"
      }
    }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const roundResult = playRound(humanSelection, computerSelection);

  if (roundResult === "D") {
    // console.log("Draw!")
  } else if (roundResult === "H") {
    humanScore++;
    // console.log("You win!")
  } else {
    computerScore++;
    // console.log("You lose!")
  }

}

for (let i = 1; i <= 5; i++) {
  playGame();
}

console.log("You got " + humanScore + " and the computer got " + computerScore + "!")