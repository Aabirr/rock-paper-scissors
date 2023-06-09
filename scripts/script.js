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
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice () {
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt("Choose between Rock, Paper and Scissors ");
        if(choice == null) {
            continue;
        } 
        
        const choiceInLwr = choice.toLowerCase();
        if(option.includes(choiceInLwr)){
            validateInput = true;
            return choiceInLwr;
        } 
            
        
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
     

    for(let i = 0; i < 5; i++ ){
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if(Winner(playerSelection, computerSelection) == "You won") {
            playerScore++;
        } else if (Winner(playerSelection, computerSelection) == "Computer Won") {
            computerScore++;
        }
        console.log("-------------------------");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);

        
    }

    if (playerScore > computerScore){
        console.log("Player Win");
    } else if (computerScore > playerScore) {
        console.log("Computer Win");
    } else {
        console.log("Game is Draw");
    }
    console.log("Game Over!");
}
game();

