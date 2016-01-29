//set global variables
var computerChoice;
var userChoice;
var winner;

//assign computer choice to Math.random()
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

//set start state
var newGame = function(){
    $("#user_image").attr("src","images/rightfist.png");
    $("#computer_image").attr("src","images/leftfist.png");
    $("#user_image").addClass("animated");
    $("#computer_image").addClass("animated");
    $("#user_controls").show();
    $("#result").hide();
}

var play = function(userChoice) {
    resetComputer(); //reassign random choice to computer
    compare(userChoice, computerChoice);
    $("#user_image").removeClass("animated"); //stop animation
    $("#computer_image").removeClass("animated"); //stop animation
    $("#user_image").attr("src", "images/" + userChoice + ".png"); //change img src according to userChoice
    $("#computer_image").attr("src", "images/" + computerChoice + ".png"); //change img src according to computerChoice

    document.getElementById("winner").innerHTML = winner;   //display var winner in winner p element
    
    $("#user_controls").hide(); //hide control buttons
    $("#result").show(); //show result div
}

//set winner and loser using userChoice and computerChoice
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        winner = "It's a tie!"
    }
    else if (choice1 === "rock") {  //if user chooses rock
        
        if (choice2 === "scissors") {   //and if computer chooses scissors
            winner = "You Win!" //set var winner = you
        } else {    //set winner = computer
            winner = "You Lose!"
        }
    }
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            winner = "You Win!"
        } else {
            winner = "You Lose!"
        }
    }
    else if (choice1 === "scissors") {
        
        if (choice2 === "paper") {
            winner = "You Win!"
        } else {
            winner = "You Lose!" 
        }
    }
}