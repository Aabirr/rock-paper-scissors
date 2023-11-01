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

// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper");
// const scissor = document.querySelector(".scissor");

// rock.addEventListener("click", () => {
//     console.log(playRound(getPlayerChoice(), getComputerChoice()));
    
// });
// paper.addEventListener('click', () =>{
//     console.log(playRound(paper, getComputerChoice()));
   
// });
// scissor.addEventListener('click', () =>{
//     console.log(playRound(scissor, getComputerChoice()));
// });

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    
    button.addEventListener('click', () => {
        let playerSelection = button.textContent.toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    });
    
});
    
