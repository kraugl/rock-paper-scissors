const computerChoices = ['rock','paper','scissors'];

let playerSelection = prompt('Rock, Paper, or Scissors', '').toLowerCase();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(playerSelection, computerSelection){

    let youWin = 'You win!!! ' + playerSelection + ' beats ' + computerSelection;
    let youLose = 'You lose!!! ' + computerSelection + ' beats ' + playerSelection;
    let draw = 'Draw!!! play again!!!'

    if((playerSelection === 'rock' && computerSelection === 'scissors') || 
       (playerSelection === 'scissors' && computerSelection === 'paper') || 
       (playerSelection === 'paper' && computerSelection === 'rock')){
        return youWin;
    } else if((computerSelection === 'rock' && playerSelection === 'scissors') || 
              (computerSelection === 'scissors' && playerSelection === 'paper') || 
              (computerSelection === 'paper' && playerSelection === 'rock')){
        return youLose;
    } else if(playerSelection === computerSelection){
        return draw;
    } else {
        return 'Choose between rock, paper or scissors!!!'
    };
};

function game(){
    for(i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        let youWin = 'You win!!! ' + playerSelection + ' beats ' + computerSelection;
        let youLose = 'You lose!!! ' + computerSelection + ' beats ' + playerSelection;
        let draw = 'Draw!!! play again!!!'
        let result = playRound(playerSelection, computerSelection);

        if(result === youWin){
            console.log(result + `!!! Player: ${++playerScore} | Computer: ${computerScore}`);
        }else if(result === youLose){
            console.log(result + `!!! Player: ${playerScore} | Computer: ${++computerScore}`)
        }else if(result === draw){
            console.log(result + `!!! Player: ${playerScore} | Computer: ${computerScore}`)
        }else{
            console.log('error');
        }
    }

    if(playerScore > computerScore){
        return `You win ${playerScore}:${computerScore}`;
    }else if(playerScore < computerScore){
        return `You lose ${playerScore}:${computerScore}`;
    }else return 'draw';
}

console.log(game())