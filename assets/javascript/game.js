

// We start the game with the following stats:
var wins = 0;
var losses = 0;
var score = []
var reducer = (score, crystal1)

// Function that randomly generates a number between 1 - 120
var randomNumber = [Math.floor(Math.random() * 101 + 20)];
    console.log("Random number = " + randomNumber);
    $("#random-number").text(randomNumber);

// Crystal 1: function that randomly generates a number between 1 - 12
var crystal1 = [Math.floor(Math.random() * 12 + 1)];
    console.log("Crystal 1 = " + crystal1);
    console.log(typeof(crystal1));

// Crystal 2: function that randomly generates a number between 1 - 12
var crystal2 = [Math.floor(Math.random() * 12 + 1)];
    console.log("Crystal 2 = " + crystal2);

// Crystal 3: function that randomly generates a number between 1 - 12
var crystal3 = [Math.floor(Math.random() * 12 + 1)];
    console.log("Crystal 3 = " + crystal3);

// Crystal 4: function that randomly generates a number between 1 - 12
var crystal4 = [Math.floor(Math.random() * 12 + 1)];
    console.log("Crystal 4 = " + crystal4);


// When you click each crystal, their randomly assigned value will get added to the score box
// N.B. Still need to figure out how to add the values together
$("#crystal-1").on("click", function () {
    score.push(parseInt(crystal1));
    $("#score").text(crystal1);
    console.log(typeof(crystal1));
    console.log(score);
    // console.log(score.reduce(reducer));
});

$("#crystal-2").on("click", function() {
    $("#score").text(crystal2)
});

$("#crystal-3").on("click", function() {
    $("#score").text(crystal3)
});

$("#crystal-4").on("click", function() {
    $("#score").text(crystal4)
});

// $("#crystal1").on("click", function () {

// })


// if 
// score.push(crystal1);
// console.log(score);