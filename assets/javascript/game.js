//
//computer chooses random number between 19-120 and displays on screen
//each crystal has hidden value between 1-9
//when player clicks on crystal, the value is added to total score
//player wins when their points add up to total score
//player loses when their points goes above random number
//resets game when wins or losses occur
//new game should display new random number and new hidden values for crystals

$(document).ready(function() {
  //Global Variables
  var randomnum = Math.floor(Math.random() * (120 - 19) + 19);
  var crystalnum = Math.floor(Math.random() * (9 - 1) + 1);

  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  var crystalImages = [
    "./assets/images/red.jpg",
    "./assets/images/blue.jpg",
    "./assets/images/yellow.jpg",
    "./assets/images/green.jpg"
  ];

  //Dom manipulation - JQuery
  $("#random").text(randomnum);
  $("#red").text(crystalnum);
  $("#blue").text(crystalnum);
  $("#yellow").text(crystalnum);
  $("#green").text(crystalnum);
  $("#totalscore").text(totalScore);
  $("#wins").text(wins);
  $("#losses").text(losses);
});
