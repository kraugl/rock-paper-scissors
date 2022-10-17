const computerChoices = ['rock','paper','scissors'];

//let getComputerChoices = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];

function getComputerChoices(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};