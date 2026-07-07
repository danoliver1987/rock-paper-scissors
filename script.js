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

    // print the value
    console.log(resultString);

}

// invoke the function
getComputerChoice();

            // *** HUMAN CHOICE ***

// declare function for human choice
function getHumanChoice(Rock, Paper, Scissors) {

// prompt human to make a choice

   let humanChoice = prompt("Make your choice");

// return alert based on choice

    if (humanChoice === "Rock") {
        alert("You chose Rock!");
    }

    else if (humanChoice === "Paper") {
        alert("You chose Paper!");
    }

    else if (humanChoice === "Scissors") {
        alert("You chose Scissors!");
    }

}

// invoke the function 
    getHumanChoice();

            // *** KEEP TRACK OF THE SCORE ***

    let humanScore = 0;
    let computerScore = 0;

            // *** LOGIC FOR A SINGLE ROUND ***

// declare function for a single round
function playRound(humanChoice, computerChoice) {

// make case insensitive
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowercase();

// if humanChoice Rock - computerChoice Paper - computer wins 
    if (human === "rock" && computer === "paper") {
        computerScore ++;
        return "Computer wins! Paper beats Rock.";
    }
// if humanChoice Rock - computerChoice Scissors - human wins
// if humanChoice Rock - computerChoice Rock - null

// if humanChoice Paper - computerChoice Paper - null
// if humanChoice Paper - computerChoice Rock - human wins 
// if humanChoice Paper - computerChoice Scissors - computer wins

// if humanChoice Scissors - computerChoice Scissors - null
// if humanChoice Scissors - computerChoice Paper - human wins 
// if humanChoice Scissors - computerChoice Rock - computer wins


  
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);








