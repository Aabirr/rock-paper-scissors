const computerSelection = ["rock", "paper", "scissor"];

function getComputerChoice () {
    
    const selection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return selection;
    
}


console.log(getComputerChoice());
 

function playRound(playerPick, computerSelection) {

    if (playerPick === computerPick){
        return "Tie";
    } else if((playerPick === "rock" && computerSelection === "scissor") || (playerPick === "paper" && computerSelection === "rock") || (playerPick === "scissor" && computerSelection === "paper")){

        return "You won";
    } else {
        return "Computer Won";
    } 
}
    

const playerPick = prompt("Choose between Rock, Paper and Scissors ");
const lwr = playerPick.toLowerCase();
const computerPick = getComputerChoice();

alert(playRound(playerPick, computerPick));