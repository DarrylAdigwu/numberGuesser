let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.ceil(Math.random() * 9);
}

const compareGuesses = (human, computer, secret) => {
  let humanDistance = Math.abs(human - secret);
  let computerDistance = Math.abs(computer - secret);

  //Absolute Value
  if (humanDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }

  // Distance
  const getAbsoluteDistance = (humanDistance, computerDistance) => {
  return `You were off by ${humanDistance}. The computer was off by ${computerDistance}`;
}
}

const updateScore = winner => {
  switch (winner) {
    case 'human':
      let human = humanScore++;
      break;
    case 'computer':
      let computer = computerScore++;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber = humanScore + computerScore + 1;
}