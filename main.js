var computerChoice;
var resetComputer = function(){
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);
}

var userChoice;
var winner;
var play = function(userChoice) {
    resetComputer();
    compare(userChoice, computerChoice);

    document.getElementById("user_image").src = "images/" + userChoice + ".png";
    document.getElementById("computer_image").src = "images/" + computerChoice + ".png";

    document.getElementById("winner").innerHTML = winner + " - Play Again?";
}


var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        winner = "It's a tie!"
    }
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            winner = "You Win!"
        }
        else {
            winner = "You Lose!"
        }
    }
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            winner = "You Win!"
        }
        else {
            winner = "You Lose!"
        }
    }
    else if (choice1 === "scissors") {
        
        if (choice2 === "paper") {
            winner = "You Win!"
        }
        else {
            winner = "You Lose!" 
        }
    }
}
