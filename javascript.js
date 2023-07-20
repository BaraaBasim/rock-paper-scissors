


let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(choices){
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


