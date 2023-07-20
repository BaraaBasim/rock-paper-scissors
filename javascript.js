

let choices = ['Rock', 'Paper', 'Scissors']

function getComputerSelection(choices){
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == computerSelection){
        return 0
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors')
     || (playerSelection == 'scissors' && computerSelection == 'paper')
     || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 1
    } else return 2;
}

const playerSelection = 'Paper'
const computerSelection = getComputerSelection(choices);
console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));
