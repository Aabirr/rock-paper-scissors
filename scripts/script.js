const option = ["rock", "paper", "scissor"];


function getComputerChoice () {
    
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

//Scores
let playerScore = 0;
let computerScore = 0;
 


function playRound(playerSelection, computerSelection) {
    const result = Winner(playerSelection, computerSelection);

    if (result == "Tie") {
        const gameResult = document.querySelector(".result");
        const text = document.createElement("li");
        text.textContent = "Its a Tie";
        gameResult.appendChild(text);
        
    } else if (result == "You won") {
        const gameResult = document.querySelector(".result");
        const text = document.createElement("li");
        text.textContent = `You won ${playerSelection} beats ${computerSelection}`;
        gameResult.appendChild(text);
        
    } else {
        const gameResult = document.querySelector(".result");
        const text = document.createElement("li");
        text.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
        gameResult.appendChild(text);
        
    }
}



const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    
    button.addEventListener('click', () => {
        let playerSelection = button.textContent.toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        console.log("Computer Play: " + playerSelection);
        console.log("Your Play: " + computerSelection);
        playRound(playerSelection, computerSelection);

        
    });
    
});
