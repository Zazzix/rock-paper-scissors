const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Choose: Rock, Paper or Scissors.").toLowerCase();
}

