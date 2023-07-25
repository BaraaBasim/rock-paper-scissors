

let choices = ['Rock', 'Paper', 'Scissors']

function getComputerSelection(choices){
    // gets the computer selection
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


function playRound(playerSelection, computerSelection){
    // returns 0 if the round is a tie
    // returns 1 if the user wins
    // returns 2 if the computer wins
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

function playGame(){
    // plays a game of 3 rounds
    // game ends when the score reaches 3
    let playerScore = 0;
    let computerScore = 0;
    let gameScore = 0;
    
    
    while (playerScore < 3 && computerScore < 3){
        let playerInput = prompt("Choose your weapon!").toLowerCase();
        let computerSelection = getComputerSelection(choices).toLowerCase()
        if (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors'){
            throw new Error("Invalid choice");
        }
        gameScore = playRound(playerInput, computerSelection);
        if (gameScore == 1){
            playerScore++;
        } else if (gameScore == 2){
            computerScore++;
        }
        console.log("Player choice: ",playerInput)
        console.log("Computer choice: ", computerSelection)
        console.log("Player score: ", playerScore)
        console.log("Computer score: ", computerScore)
    }

    return playerScore > computerScore ? 1 : 0

}
const playButton = document.getElementById("play-button");


playButton.addEventListener("click", function(e){
    
        e.target.parentNode.classList.add('opacity')
        e.target.style.opacity = 0;
        const header = document.querySelector('.header');
        header.classList.add('opacity')
        header.style.opacity = 0;
        // var removeTarget = e.target.parentNode.parentNode;
        const playSection = document.getElementById("play-section");
        
        setTimeout(function() {
            // e.target.parentNode.removeChild(e);
            // e.target.parentNode.removeChild(header);
            playSection.classList.remove('hidden')
        }, 1000);

});


// playGame();