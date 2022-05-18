//User makes a choice
var userChoice = prompt("Do you choose rock, paper or scissors?");

//Computer makes a choice
var options = ["rock", "paper", "scissors"];
var randomNumber = Math.floor((Math.random() * 3));
var computerChoice = options[randomNumber];
alert("The computer has chosen " + computerChoice);

//Compare choices.
if (computerChoice == userChoice) {
  alert("It's a tie. Rerun to play again.");
}

else if (computerChoice == "rock") {
  if (userChoice == "paper") {
    alert("Paper covers rock. You win!");
  }
  else if (userChoice == "scissors")
  {
    alert("Rock beats scissors. Computer wins!");
  }
}

else if (computerChoice == "paper") {
  if (userChoice == "rock") {
    alert("Paper covers rock. Computer wins!");
  }
  else if (userChoice == "scissors")
  {
    alert("Scissors cuts paper. You win!");
  }  
}

else if (computerChoice == "scissors") {
  if (userChoice == "paper") {
    alert("Scissors cuts paper. Computer wins!");
  }
  else if (userChoice == "rock")
  {
    alert("Rock beats scissors. You win!");
  }  
}