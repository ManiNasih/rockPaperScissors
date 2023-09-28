let playerScore = 0;
let compScore = 0;

const getComputerChoice = () => {
  const arrOfChoice = ["rock", "paper" , "scissors"];

  const randNum = Math.floor(Math.random() * 3);
  let choice = arrOfChoice[randNum];

  return choice;
}

const playRound = (playerSelection, computerSelection) => {
  console.log(`
  Player: ${playerSelection}
  computer: ${computerSelection}
  `)

  if (playerSelection === "rock" && computerSelection === 'rock') {
    return 'You tied! You both picked rock!'
  }
  else if (playerSelection === "paper" && computerSelection === 'paper') {
    return 'You tied! You both picked paper!'
  }
  else if (playerSelection === "scissors" && computerSelection === 'scissors') {
    return 'You tied! You both picked Scissors!'
  }
  else if (playerSelection === "scissors" && computerSelection === 'rock') {
    compScore ++
    return 'You lost! Rock crushes Scissors!'
  }
  else if (playerSelection === "scissors" && computerSelection === 'paper') {
    playerScore ++
    return 'You won! Scissors cuts Paper!'
  }
  else if (playerSelection === "rock" && computerSelection === 'paper') {
    compScore ++
    return 'You lost! Paper covers Rock!'
  }
  else if (playerSelection === "rock" && computerSelection === 'scissors') {
    playerScore ++
    return 'You won! Rock crushes Scissors!'
  }
  else if (playerSelection === "paper" && computerSelection === 'scissors') {
    compScore ++
    return 'You lost! Scissors cuts Paper!'
  }
  else if (playerSelection === "paper" && computerSelection === 'rock') {
    playerScore ++
    return 'You won! Paper covers Rock!'
  }
}


const game = () => {
  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt('Chose what to throw:').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  if(playerScore > compScore) {
    return `You beat the computer You are a genius!
    computer : ${compScore}
    player : ${playerScore}
    `
  }
  else if(compScore > playerScore) {
    return `
    You got beat by the Computer, Practice your throws!
    computer : ${compScore}
    player : ${playerScore}
    `
  }
  else {
    return `
    You tied with the computer, not too Shabby!
    computer : ${compScore}
    player : ${playerScore}
    `
  }
}

console.log(game())