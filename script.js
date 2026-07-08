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
// check for value first (?) & convert any user input to lower case
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
function playRound(humanChoice, computerChoice, scores) {

// crash protection
    if (!humanChoice || !computerChoice) {
        return "Error: A choice was missing.";
    }

// make case insensitive
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

// if humanChoice Rock - computerChoice Paper - computer wins 
    if (human === "rock" && computer === "paper") {
        scores.computer ++;
        return "Computer wins! Paper beats Rock.";
    }
// if humanChoice Rock - computerChoice Scissors - human wins
    else if (human === "rock" && computer === "scissors") {
        scores.human ++;
        return "You win! Rock beats Scissors."
}

// if humanChoice Paper - computerChoice Rock - human wins 
    else if (human === "paper" && computer === "rock") {
        scores.human ++;
        return "You win! Paper beats Rock."
}
// if humanChoice Paper - computerChoice Scissors - computer wins
    else if (human === "paper" && computer === "scissors") {
        scores.computer ++;
        return "Computer wins! Scissors beats Paper."
}

// if humanChoice Scissors - computerChoice Paper - human wins 
    else if (human === "scissors" && computer === "paper") {
        scores.human ++;
        return "You win! Scissors beats Paper."
}
// if humanChoice Scissors - computerChoice Rock - computer wins
    else if (human === "scissors" && computer === "rock") {
        scores.computer ++;
        return "Computer wins! Rock beats Scissors."
}
// if humanChoice & computerChoice the same
    else {
        return "It's a tie! Try again.";
    }
}

            // *** MAIN GAME LOOP ***

function playGame() {

    let scores = { human: 0, computer: 0 };

    while (scores.human < 5 && scores.computer <5) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection, scores));

        console.log(`Score -> You: ${scores.human} | Computer: ${scores.computer}`);
    }

    if (humanScore !==5 && computerScore !== 5) {
        playRound(); 
    }   else {
       return("Game over!=> You(" + humanScore + ") vs Computer(" + computerScore + ")");
}

    alert(`Game over! You(${scores.human}) vs Computer(${scores.computer})`);
}
playGame();