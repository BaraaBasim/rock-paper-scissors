
function getComputerSelection(){
    let choices = ['Rock', 'Paper', 'Scissors']

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

const playButton = document.getElementById("play-button");

const buttons = document.querySelectorAll('.options button');
let playerScore = 0;
let computerScore = 0;

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let computerSelection = getComputerSelection();
    const option = button.dataset.option;
    let roundResult = playRound(option, computerSelection)
    if (roundResult === 1){
        playerScore++;
        document.getElementById("gameScore").innerHTML = "You won!"
        document.getElementById("userScore").innerHTML = playerScore;

    } else if (roundResult === 2){
        computerScore++;
        document.getElementById("gameScore").innerHTML = "You lost!"
        document.getElementById("computerScore").innerHTML = computerScore;
    } else {
        document.getElementById("gameScore").innerHTML = "Tie!"
    }




    console.log(`Computer: ${computerSelection}`)
    console.log(`Player Selection: ${option}`)
    console.log(`Round result: ${roundResult}`)
  });
});




playButton.addEventListener("click", function(e){
    
        e.target.parentNode.classList.add('opacity')
        e.target.style.opacity = 0;
        const header = document.querySelector('.header');
        // header.classList.add('opacity')
        // header.style.opacity = 0;
        const playSection = document.getElementById("play-section");
        const scores = document.getElementById("scores")
        setTimeout(function() {
            playSection.classList.remove('hidden')
            scores.classList.remove('hidden')
        }, 1000);

});

