

// We start the game with the following stats:
var wins = 0;
var losses = 0;
var score = 0;


// Function that randomly generates a number between 1 - 120
var randomNumber = parseInt([Math.floor(Math.random() * 101 + 20)]);
    console.log("Random number = " + randomNumber);
    console.log(typeof(randomNumber));
    $("#random-number").text(randomNumber);

// Crystal 1: function that randomly generates a number between 1 - 12
var crystal1 = parseInt([Math.floor(Math.random() * 12 + 1)]);
    console.log("Crystal 1 = " + crystal1);

// Crystal 2: function that randomly generates a number between 1 - 12
var crystal2 = parseInt([Math.floor(Math.random() * 12 + 1)]);
    console.log("Crystal 2 = " + crystal2);

// Crystal 3: function that randomly generates a number between 1 - 12
var crystal3 = parseInt([Math.floor(Math.random() * 12 + 1)]);
    console.log("Crystal 3 = " + crystal3);

// Crystal 4: function that randomly generates a number between 1 - 12
var crystal4 = parseInt([Math.floor(Math.random() * 12 + 1)]);
    console.log("Crystal 4 = " + crystal4);


// When you click each crystal, their randomly assigned value will get added to the score box
$("#crystal-1").on("click", function () {
    score = score + crystal1
    $("#score").text(score);
    // console.log("Score: " + score);
});

$("#crystal-2").on("click", function() {
    score = score + crystal2;
    $("#score").text(score);
});

$("#crystal-3").on("click", function() {
    score = score + crystal3;
    $("#score").text(score);
});

$("#crystal-4").on("click", function() {
    score = score + crystal4;
    $("#score").text(score);
});

// Function that updates wins
function updateWins() {
    $("#wins").text("Wins: " + wins);
}

// Function that updates losses
function updateLosses() {
    $("#losses").text("Losses: " + losses);
}

// Function that updates score
function updateScore() {
    $("#score").text(score);
}

// Function to reset stats (other than wins and losses, which accumulate through all rounds of the game)


// THE GAME

// Calling functions to start the game
updateWins();
updateLosses();
updateScore();

// When the user clicks a crystal, it will run the following function: 
$(".btn").on("click", function() {

// If the user's score equals the randomly generated number, their score goes up by one and the game resets
if (score === randomNumber) {
    wins++;
    updateWins();
    console.log("You win!");
} 
else if (score > randomNumber) {
    losses++;
    updateLosses();
    console.log("You lose :(");
}

});
