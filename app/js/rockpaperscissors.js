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

function getWinnerAlt(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch (playerMove) {
      case "rock":
        switch (computerMove) {
          case "rock": // rock ties rock
            return "tie";
          case "lizard": // rock crushes lizard
          case "scissors": // rock breaks scissors
            return "player";
          case "spock": // rock is vaporized by Spock
          case "paper": // rock is covered by paper
            return "computer";
          default: // should be impossible to reach
            return "";
        }
        break;
      case "scissors":
        switch (computerMove) {
          case "spock": // scissors are smashed by spock
          case "rock": // scissors are broken by rock
            return "computer";
          case "scissors": // scissors ties scissors
            return "tie";
          case "lizard": // scissors decapitates lizard
          case "paper": // scissors cuts paper
            return "player";
          default: // should be impossible to reach
            return "";
        }
        break;
      case "paper":
        switch (computerMove) {
          case "spock": // paper disproves spock
          case "rock": // paper covers rock
            return "player";
          case "lizard": // paper is eaten by lizard
          case "scissors": // paper is cut by scissors
            return "computer";
          case "paper": // paper ties paper
            return "tie";
          default: // should be impossible to reach
            return "";
          }
          break;
        case "lizard":
          switch(computerMove) {
            case "spock": // lizard poisons spock
            case "paper": // lizard eats paper
              return "player";
            case "scissors": // lizard is decapiated by scissors
            case "rock": // lizard is crushed by rock
              return "computer";
            case "lizard":
              return "tie";
            default: // should be impossible to reach
              return "";
            }
            break;
          case "spock": {
            switch(computerMove) {
              case "scissors": // spock vaporizes scissors
              case "rock": // spock vaporizes rock
                return "player";
              case "paper": // spock is disproven by paper
              case "lizard": // spock is poisoned by lizard
                return "computer";
              case "spock": // spock ties spock
                return "spock";
              default: // should be impossible to reach
                return "";
              }
              break;
          }
        break;
      default: // should be very impossible to reach
        return "";
    }
    return ""; // should be very very impossible to reach
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
