const option = ["rock", "paper", "scissor"];


function getComputerChoice () {
    
    const selection = option[Math.floor(Math.random() * option.length)];
    return selection;
    
}

function Winner(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        return "Tie";
    } else if(
            (playerSelection === "rock" && computerSelection === "scissor") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissor" && computerSelection === "paper")
            ){

        return "You won";
    } else {
        return "Computer Won";
    } 
}


 
function playRound(playerSelection, computerSelection) {
    const result = Winner(playerSelection, computerSelection);

    if (result == "Tie") {
        return "its a Tie";
    } else if (result == "You won") {
        return `You won ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose ${playerSelection} beats ${computerSelection}`;
    }
}

// const playerSelection = prompt("Choose between Rock, Paper and Scissors ");
// const lwr = playerSelection.toLowerCase();
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));



function game(){
    const playerScore = 0;
    console.log(playerScore);
    const computerScore = 0;
    console.log(playerScore);

    for(let i = 0; i < 5; i++ ){
        const playerSelection = prompt("Choose between Rock, Paper and Scissors ");
        const lwr = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

