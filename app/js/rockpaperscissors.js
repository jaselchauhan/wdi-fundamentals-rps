////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// create my global variables here. These will initially be undefined. Have chosen to create as global so they are accessible to more than one function.
var winner;
var playerMove;
var computerMove;


function getPlayerMove(move) {

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value (i.e is not null), your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    if (move!=null) {
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value (i.e is not null), your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    if(move!=null){
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    //the results of the getPlayerMove and getComputerMove functions will be used as the parameters for the getWinner function
    playerMove = getPlayerMove();
    computerMove = getComputerMove();


    if (playerMove == computerMove) {
        winner = "tie";
    } else if (playerMove=="rock") {
        if (computerMove == "scissors") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove=="paper") {
        if (computerMove == "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove=="scissors") {
        if (computerMove=="rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    }

    return winner;
}


function playToFive() {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    //while playerWins and computerWins are less than 5, increment them based on results of getWinner function.
    //input for player and computer moves are initially from functions getPlayerMove and getComputerMove. Use these as parameters for getWinner function to determine who has won.
    //therefore assign the getPlayerMove and getComputerMove functions to the global variables playerMove and computerMove.
    //increment either playerWins or computerWins. 
    //while playerwins and comupterwins are both not over 5, continue to wait for another game and then incremement relevant counter.
    //when the counter for either player or computer reaches 5, declare the winner and reset the counters for both.

    // identify who has won using result of getWinner(playerMove, computerMove) function.

    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    while (playerWins < 5 && computerWins < 5) {

        if (getWinner(playerMove,computerMove) == "player") {

            console.log(playerMove + " beats " + computerMove + ". Player wins!");
            playerWins ++;

        } else if (getWinner(playerMove,computerMove) == "computer") {

            console.log(computerMove + " beats " + playerMove + ". Computer wins!");
            computerWins ++;

        } else {

            console.log("The result was a tie, please play another round!");
        }
    }

    if (playerWins == 5){

        console.log("Congratulations, you have won the game!");
        playerWins = 0;
        computerWins = 0;

    }   else {

        console.log("Unlucky, the computer has won this game, please try again!");
        playerWins = 0;
        computerWins = 0;

        }

}

function playToX(){

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // create a local variable which asks users how many games to play to.
    var NumberOfGames= prompt("Please enter the number of games to play:");

    console.log("Awesome! We are now playing to " + NumberOfGames + " games, enjoy!");


    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    while (playerWins < NumberOfGames && computerWins < NumberOfGames) {

        if (getWinner(playerMove,computerMove) == "player") {

            console.log(playerMove + " beats " + computerMove + ". Player wins!");
            playerWins ++;

        } else if (getWinner(playerMove,computerMove) == "computer") {

            console.log(computerMove + " beats " + playerMove + ". Computer wins!");
            computerWins ++;

        } else {

            console.log("The result was a tie, please play another round!");
        }
    }

    if (playerWins == NumberOfGames){

        console.log("Congratulations, you have won the game!");
        playerWins = 0;
        computerWins = 0;

    }   else {

        console.log("Unlucky, the computer has won this game, please try again!");
        playerWins = 0;
        computerWins = 0;

        }

}


