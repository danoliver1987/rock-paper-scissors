            // *** COMPUTER CHOICE ***

// Returns a random choice for the computer: "Rock", "Paper", or "Scissors".
// Called fresh once per round, from inside each button's click handler.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
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

    return resultString;
}

            // *** LOGIC FOR A SINGLE ROUND ***

// Compares the human's and computer's choices, updates the shared `scores`
// object for whichever side won, and returns a message describing the outcome.
// `human` is already lowercase since it always comes from a fixed button value
// (e.g. "rock"). `computer` needs lowercasing since getComputerChoice()
// returns capitalized strings like "Rock".
function playRound(humanChoice, computerChoice, scores) {

    // defensive check - not currently reachable since both inputs are always
    // valid by the time this runs, but kept as a safety net
    if (!humanChoice || !computerChoice) {
        return "Error: A choice was missing.";
    }

    const human = humanChoice;
    const computer = computerChoice.toLowerCase();

    // each branch below covers one possible matchup: a human win, a computer
    // win, a tie, or (as a fallback) an invalid choice
    if (human === "rock" && computer === "paper") {
        scores.computer++;
        return "Computer wins! Paper beats Rock.";
    }
    else if (human === "rock" && computer === "scissors") {
        scores.human++;
        return "You win! Rock beats Scissors.";
    }
    else if (human === "paper" && computer === "rock") {
        scores.human++;
        return "You win! Paper beats Rock.";
    }
    else if (human === "paper" && computer === "scissors") {
        scores.computer++;
        return "Computer wins! Scissors beats Paper.";
    }
    else if (human === "scissors" && computer === "paper") {
        scores.human++;
        return "You win! Scissors beats Paper.";
    }
    else if (human === "scissors" && computer === "rock") {
        scores.computer++;
        return "Computer wins! Rock beats Scissors.";
    }
    else if (human === computer) {
        return `It's a tie! Both chose ${humanChoice}. Try again.`;
    }
    else {
        return `Invalid choice! You typed "${humanChoice}". This round doesn't count.`;
    }
}

            // *** GAME STATE & DOM ELEMENTS ***

// `scores` is declared once at the top level (not inside any function) so
// all three button handlers can read and update the same running total.
// resultDiv and scoreDiv are also selected once here, rather than inside
// every handler, since the same two elements are reused on every click.
let scores = { human: 0, computer: 0 };
const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#currentScore");

            // *** BUTTON HANDLERS ***

// select the existing Rock button from the HTML
// Paper and Scissors buttons follow this exact same pattern below
const rockBtn = document.querySelector("#rock-btn");

// listen for a click on the Rock button
rockBtn.addEventListener("click", () => {

    // if either side has already reached 5 points, the game is over -
    // show a message and stop here, without playing another round
    if (scores.human === 5 || scores.computer === 5) {
        resultDiv.textContent = "Game is over!";
        return;
    }

    // human's choice is fixed, since this is the Rock button specifically
    let humanChoice = "rock";

    // get a fresh random choice from the computer for this round
    let computerChoice = getComputerChoice();

    // play the round: compares choices, updates the shared `scores` object,
    // and returns a message describing the outcome
    let round = playRound(humanChoice, computerChoice, scores);

    // display the round result on the page
    resultDiv.textContent = round;

    // display the updated running score on the page
    scoreDiv.textContent = `Human: ${scores.human} | Computer ${scores.computer}`;

    // check whether this round just pushed the human to 5 points -
    // if so, overwrite the round result with a winner announcement
    if (scores.human === 5) {
        resultDiv.textContent = `You win! You(${scores.human}) vs Computer(${scores.computer})`;
    }
    // otherwise, check whether the computer just reached 5 points instead
    else if (scores.computer === 5) {
        resultDiv.textContent = `You lose! You(${scores.human}) vs Computer(${scores.computer})`;
    }
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {

    if (scores.human === 5 || scores.computer === 5) {
        resultDiv.textContent = "Game is over!";
        return;
    }

    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    let round = playRound(humanChoice, computerChoice, scores);
    resultDiv.textContent = round;
    scoreDiv.textContent = `Human: ${scores.human} | Computer ${scores.computer}`;

    if (scores.human === 5) {
        resultDiv.textContent = `You win! You(${scores.human}) vs Computer(${scores.computer})`;
    }
    else if (scores.computer === 5) {
        resultDiv.textContent = `You lose! You(${scores.human}) vs Computer(${scores.computer})`;
    }
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {

    if (scores.human === 5 || scores.computer === 5) {
        resultDiv.textContent = "Game is over!";
        return;
    }

    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    let round = playRound(humanChoice, computerChoice, scores);
    resultDiv.textContent = round;
    scoreDiv.textContent = `Human: ${scores.human} | Computer ${scores.computer}`;

    if (scores.human === 5) {
        resultDiv.textContent = `You win! You(${scores.human}) vs Computer(${scores.computer})`;
    }
    else if (scores.computer === 5) {
        resultDiv.textContent = `You lose! You(${scores.human}) vs Computer(${scores.computer})`;
    }
});

