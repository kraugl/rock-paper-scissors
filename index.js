const computerChoices = ['rock','paper','scissors'];

//let getComputerChoices = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];

function getComputerChoices(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowercase();
    let computer = computerSelection;
    let youWin = 'You win!!!' + player + ' beats ' + computerSelection;
    let youLose = 'You lose!!!' + player + ' beats ' + computerSelection;
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