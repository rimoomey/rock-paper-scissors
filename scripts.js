//function to generate computer choice in a game of Rock Paper Scissors
//input = none
//output can be "Rock", "Paper", or "Scissors"

function getComputerChoice() {
    
    let choice = Math.floor(Math.random() * 3) + 1;

    switch(choice) {
        case 1:
            return "Rock";
            break;

        case 2:
            return "Paper";
            break;

        case 3:
            return "Scissors";
            break;

        default: return "Error";
    }
}

//function to play a single round of rock, paper, scissors
//takes player selection and computer selection and determines the winner
//returns a message that either the player won or lost
function playRound(playerSelection, computerSelection) {

    //Ignore case
    playerSelection = playerSelection.slice(0,1).toUpperCase() +
    playerSelection.slice(1);

    //case 1: playerSelection = Rock
    if(playerSelection === 'Rock') {

        //case 1.1
        if(computerSelection === 'Rock') {

            return 0;
        }

        //case 1.2
        else if(computerSelection === 'Paper') {

            return 2;
        }

        //case 1.3
        else if (computerSelection === 'Scissors') {

            return 1;
        }

        //error
        else {
            return -1;
        }
    }

    //case 2: playerSelection = Paper
    if(playerSelection === 'Paper') {

        //case 1.1
        if(computerSelection === 'Rock') {

            return 1;
        }

        //case 1.2
        else if(computerSelection === 'Paper') {

            return 0;
        }

        //case 1.3
        else if (computerSelection === 'Scissors') {

            return 2;
        }

        //error
        else {
            return -1;
        }
    }

    //case 3: playerSelection = Scissors
    if(playerSelection === 'Scissors') {

        //case 1.1
        if(computerSelection === 'Rock') {

            return 2;
        }

        //case 1.2
        else if(computerSelection === 'Paper') {

            return 1;
        }

        //case 1.3
        else if (computerSelection === 'Scissors') {

            return 0;
        }

        //error
        else {
            return -1;
        }
    }
}

//function to run a 5 round game of rock paper scissors
//handles user input and calls all other functions
function game(){

    //keep track of scores
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i < 5; i++) {

        let playerChoice = prompt("Choose Rock, Paper, or Scissors: ");
        let result = playRound(playerChoice, getComputerChoice());

        if (result === -1) {

            return 'Error. Halting execution';
        }

        else if (result === 1) {
            console.log('You win this round!');
            playerScore++;
        }
        else if (result === 2) {
            console.log('You lose this round!')
            computerScore++;
        }
    }

    console.log('Final scores were: ')
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    let finalResult = ' ';

    if(playerScore > computerScore) {

        finalResult = 'The Player wins!';
    }

    else if (playerScore < computerScore) {

        finalResult = 'The Computer wins!';
    }

    else {

        finalResult = "It was a tie!";
    }

    console.log(`Final Result: ${finalResult}`);
    

}

game();