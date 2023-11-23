//Scores
let playerScore = 0;
let computerScore = 0;
let scoreResult = "";
const reset = document.querySelector(".reset");

//Computers Selection
function getComputerChoice () {
    const option = ["rock", "paper", "scissor"];
    const selection = option[Math.floor(Math.random() * option.length)];
    return selection;
    
}

// Winner check
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
        const gameResult = document.querySelector(".result");
        gameResult.textContent = "Its a tie";
        
    } else if (result == "You won") {

        
        const gameResult = document.querySelector(".result");
        gameResult.textContent = `You won ${playerSelection} beats ${computerSelection}`;

        let pScore = document.querySelector(".playerScore");
        pScore.textContent = playerScore += 1;
        
    } else {
        
        const gameResult = document.querySelector(".result");
        gameResult.textContent = `You lose ${computerSelection} beats ${playerSelection}`;

        let compScore = document.querySelector(".compScore");
        compScore.textContent = computerScore += 1;

        
    }
    scoreChecker(playerScore, computerScore);
    
}





//game winner

const scoreChecker = function(playerScore, computerScore,) {

    
    if ((playerScore == 5) && (computerScore == 5)) {
        window.prompt("Its a draw");
        reset.style.visibility = 'visible';
    } else if (playerScore == 5) {
        window.prompt(`YOU WIN ${playerScore}:${computerScore}!`);
        reset.style.visibility = 'visible';
    } else if ( computerScore == 5) {
        window.prompt("Computer Won this round");
        reset.style.visibility = 'visible';
    }
    gameReset();
    
    
}

//End Game

// const gameReset = function(){
    
//     if (scoreChecker((playerScore == 5) ||
//     (computerScore == 5)
//      || (playerScore == computerScore))) {

//         reset.style.visibility = 'visible';
//      }
// }

//Game starter
const buttons = document.querySelectorAll(".gameButton > button");
buttons.forEach((button) =>{
    
    button.addEventListener('click', () => {
        let playerSelection = button.textContent.toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        
    });
    
}) 
