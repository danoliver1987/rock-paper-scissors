//COMPUTER CHOICE-->

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




