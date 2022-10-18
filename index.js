let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const computerChoices = ['rock','paper','scissors'];

function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    let youWin = 'You win!!! ' + player + ' beats ' + computer;
    let youLose = 'You lose!!! ' + computer + ' beats ' + player;
    let draw = 'Draw!!! play again!!!'

    if((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')){
        return youWin;
    } else if((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')){
        return youLose;
    } else if(player === computer){
        return draw;
    } else {
        return 'Choose between rock, paper or scissors!!!'
    };
};

