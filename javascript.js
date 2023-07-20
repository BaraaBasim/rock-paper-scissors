

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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameScore = 0;
    
    
    while (playerScore < 5 && computerScore < 5){
        let playerInput = prompt("Choose your weapon!").toLowerCase();
        let computerSelection = getComputerSelection(choices)
        if (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors'){
            throw new Error("Invalid choice");
        }
        gameScore = playRound(playerInput, computerSelection);
        if (gameScore == 1){
            playerScore++;
        } else if (gameScore == 2){
            computerScore++;
        } else {
            continue;
        }
    }

    return playerScore > computerScore ? 1 : 0

}

// const playerSelection = 'Paper'
// const computerSelection = getComputerSelection(choices);
// console.log(computerSelection)
// console.log(playerSelection)
// console.log(playRound(playerSelection, computerSelection));

console.log(game())