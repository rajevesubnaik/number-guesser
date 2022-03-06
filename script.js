let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generate random number between 0 and 9
const generateTarget = num => {
    return Math.floor(Math.random() * 10)
}

// function compares the score of the user and the computer to the target then determine the winner
const compareGuesses = (user, computer, targetNum) => {
    const userGuess = Math.abs(user - targetNum);
    const computerGuess = Math.abs(computer - targetNum);
    return userGuess <= computerGuess;
}

// update score if the user or computer wins
const updateScore = winner => {
    winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}