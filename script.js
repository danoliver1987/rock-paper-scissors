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

            // *** LOGIC FOR A SINGLE ROUND ***

// declare function for a single round
function playRound(humanChoice, computerChoice, scores) {

// crash protection
    if (!humanChoice || !computerChoice) {
        return "Error: A choice was missing.";
    }

// make case insensitive
    let human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

// add the ability to type one letter for each choice
    if (human === "r") human = "rock";
    if (human === "p") human = "paper";
    if (human === "s") human = "scissors";

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
// if human and computer choose the same option 
    else if (human === computer) {
        return `It's a tie! Both chose ${humanChoice}. Try again.`;
    }
// invalid choice
    else {
        return `Invalid choice! You typed "${humanChoice}". This round doesn't count.`;
    }
}

            // *** MAIN GAME LOOP ***

// add function for overall game
function playGame() {

//initialize a score object
    let scores = { human: 0, computer: 0 };

// add a loop that repeats while scores below 5
    while (scores.human < 5 && scores.computer <5) {
        
// save human answer in a constant variable
        const humanSelection = getHumanChoice();
// save computer answer in a constant variable 
        const computerSelection = getComputerChoice();

// pass both answers and scores object into playRound then print result to console
        console.log(playRound(humanSelection, computerSelection, scores));
// print freshly updated scores to console
        console.log(`Score -> You: ${scores.human} | Computer: ${scores.computer}`);
    }

// check if human has reached 5 points and if so show the alert
// template literal used here to cleanly mix text with variable 
// values inside a single string. Avoids string concatenation
    if (scores.human === 5 ) {
    alert(`You win! You(${scores.human}) vs Computer(${scores.computer})`);
    }
// check if computer has reached 5 points and if so show the alert
// template literal used here to cleanly mix text with variable 
// values inside a single string. Avoids string concatenation
    else if (scores.computer === 5) {
    alert(`You lose! You(${scores.human}) vs Computer(${scores.computer})`);   
    }
}
// execute the playGame function to start running the game
playGame();