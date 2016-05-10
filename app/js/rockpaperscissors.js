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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch (playerMove) {
      case "rock":
        switch (computerMove) {
          case "rock": // rock ties rock
            winner = "tie";
            break;
          case "scissors": // rock breaks scissors
            winner = "player";
            break;
          case "paper": // rock is covered by paper
            winner = "computer";
            break;
          default: // should be impossible to reach
            winner = "";
        }
        break;
      case "scissors":
        switch (computerMove) {
          case "rock": // scissors are brokne by rock
            winner = "computer";
            break;
          case "scissors": // scissors ties scissors
            winner = "tie";
            break;
          case "paper": // scissors cuts paper
            winner = "player";
            break;
          default: // should be impossible to reach
            winner = "";
        }
        break;
      case "paper":
        switch (computerMove) {
          case "rock": // paper covers rock
            winner = "player";
            break;
          case "scissors": // paper is cut by scissors
            winner = "computer";
            break;
          case "paper": // paper ties paper
            winner = "tie";
            break;
          default: // should be impossible to reach
            winner = "";
        }
        break;
      default: // should be very impossible to reach
        winner = "";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
