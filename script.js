const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Choose: Rock, Paper or Scissors.").toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
        return "It's a Tie!"
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return "You lose! Paper beats Rock!";
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return "You lose! Scissors beats Paper!";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You Win! Paper beats Rock!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You Win! Scissors beats Paper!";
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(computerScore);
console.log(humanScore);