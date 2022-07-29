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

//create object for result display area
const displayArea = document.querySelector('.text-box');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

//allow buttons to manage gameplay
const buttons = document.querySelectorAll('button');
let result = 0;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    result = playRound(button.getAttribute('id'), getComputerChoice());

    displayArea.textContent = '';
    if (result === -1) {

        return 'Error. Halting execution';
    }

    else if (result === 1) {
        p1.textContent = 'You win this round!';
        playerScore++;
        
    }
    else if (result === 2) {
        p1.textContent = "You lose this round! \n";
        computerScore++;
        
    }
    else {
        p1.textContent = "It was a draw! \n";
        computerScore++;
        
    }

    roundCount++;

    p2.textContent = `Your Score: ${playerScore}\n`;
    p3.textContent = `Computer Score: ${computerScore}`;

    if(roundCount >= 5) {

        let finalResult = ' ';

        if(playerScore > computerScore) {

            finalResult = 'The Player wins the game!';
        }

        else if (playerScore < computerScore) {

            finalResult = 'The Computer wins the game!';
        }

        else {

            finalResult = "It was a tie!";
        }

        p1.textContent = finalResult;
        p2.textContent = `Your Score: ${playerScore}\n`;
        p3.textContent = `Computer Score: ${computerScore}`;
    }

    displayArea.appendChild(p1);
    displayArea.appendChild(p2);
    displayArea.appendChild(p3);
}));



//function to run a 5 round game of rock paper scissors
//handles user input and calls all other functions
// function game(){

//     //keep track of scores
//     let playerScore = 0;
//     let computerScore = 0;
//     let i = 0;

//     while(i < 5) {


//         if (result === -1) {

//             return 'Error. Halting execution';
//         }

//         else if (result === 1) {
//             console.log('You win this round!');
//             playerScore++;
//         }
//         else if (result === 2) {
//             console.log('You lose this round!')
//             computerScore++;
//         }
//     }

//     console.log('Final scores were: ')
//     console.log(`Player: ${playerScore}`);
//     console.log(`Computer: ${computerScore}`);

//     let finalResult = ' ';

//     if(playerScore > computerScore) {

//         finalResult = 'The Player wins!';
//     }

//     else if (playerScore < computerScore) {

//         finalResult = 'The Computer wins!';
//     }

//     else {

//         finalResult = "It was a tie!";
//     }

//     console.log(`Final Result: ${finalResult}`);
    

// }

// game();