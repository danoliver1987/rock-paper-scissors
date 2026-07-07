            // *** COMPUTER CHOICE ***

// declare function for computer choice
function getComputerChoice(Rock, Paper, Scissors) {

    // randomly pick either 1, 2 or 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // convert these numbers to strings
    let resultString;

    if (randomNumber === 1) {
        resultString = "Rock";
    }
    else if (randomNumber === 2) {
        resultString = "Paper";
    }
    else if (randomNumber === 3) {
        resultString = "Scissors";
    }

    // return the new value
    return resultString;

}

            // *** HUMAN CHOICE ***

// declare function for human choice
function getHumanChoice() {

// prompt human to make a choice

   let humanChoice = prompt("Make your choice");
   const choiceLower = humanChoice?.toLowerCase(); 

// return alert based on choice

    if (choiceLower === "rock") {
        alert("You chose Rock!");
    }

    else if (choiceLower === "paper") {
        alert("You chose Paper!");
    }

    else if (choiceLower === "scissors") {
        alert("You chose Scissors!");
    }

// return the users input
    return humanChoice;
}

            // *** KEEP TRACK OF THE SCORE ***

    let humanScore = 0;
    let computerScore = 0;

            // *** LOGIC FOR A SINGLE ROUND ***

// declare function for a single round
function playRound(humanChoice, computerChoice) {

// crash protection
    if (!humanChoice || !computerChoice) {
        return "Error: A choice was missing.";
    }

// make case insensitive
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

// if humanChoice Rock - computerChoice Paper - computer wins 
    if (human === "rock" && computer === "paper") {
        computerScore ++;
        return "Computer wins! Paper beats Rock.";
    }
// if humanChoice Rock - computerChoice Scissors - human wins
    else if (human === "rock" && computer === "scissors") {
        humanScore ++;
        return "You win! Rock beats Scissors."
}

// if humanChoice Paper - computerChoice Rock - human wins 
    else if (human === "paper" && computer === "rock") {
        humanScore ++;
        return "You win! Paper beats Rock."
}
// if humanChoice Paper - computerChoice Scissors - computer wins
    else if (human === "paper" && computer === "scissors") {
        computerScore ++;
        return "Computer wins! Scissors beats Paper."
}

// if humanChoice Scissors - computerChoice Paper - human wins 
    else if (human === "scissors" && computer === "paper") {
        humanScore ++;
        return "You win! Scissors beats Paper."
}
// if humanChoice Scissors - computerChoice Rock - computer wins
    else if (human === "scissors" && computer === "rock") {
        computerScore ++;
        return "Computer wins! Rock beats Scissors."
}
// if humanChoice & computerChoice the same
    else {
        return "It's a tie! Try again.";
    }
}
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);