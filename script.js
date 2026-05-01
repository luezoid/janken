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

console.log(getComputerChoice())