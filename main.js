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

var newGame = function(){
    $("#user_image").attr("src","images/fist.png");
    $("#computer_image").attr("src","images/fist.png")  
    resetComputer();
    $("#user_controls").show();
    $("#result").hide();


}

var play = function(userChoice) {
    
    compare(userChoice, computerChoice);

    $("#user_image").attr("src","images/" + userChoice + ".png");
    $("#computer_image").attr("src","images/" + computerChoice + ".png");

    document.getElementById("winner").innerHTML = winner;
    
    $("#user_controls").hide();
    $("#result").show();
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