//
//computer chooses random number between 19-120 and displays on screen//
//each crystal has hidden value between 1-9
//when player clicks on crystal, the value is added to total score
//player wins when their points add up to total score
//player loses when their points goes above random number
//resets game when wins or losses occur
//new game should display new random number and new hidden values for crystals

$(document).ready(function () {
  //Global Variables
  var randomnum = Math.floor(Math.random() * (120 - 19) + 19);

  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  var crystalImages = [
    './assets/images/red.jpg',
    './assets/images/blue.jpg',
    './assets/images/yellow.jpg',
    './assets/images/green.jpg',
  ];

  //Dom manipulation - JQuery
  $('#random').text('Target: ' + randomnum);
  $('#totalscore').text('Your current score is: ' + totalScore);
  $('#wins').text(wins);
  $('#losses').text(losses);

  //Main////////////////////////////////////////////////////////////////////////////////
  function resetCrystals() {
    $('.ghostImage').remove();
    for (var i = 0; i < crystalImages.length; i++) {
      var image = $('<img>');
      image.addClass('ghostImage');
      image.attr('src', crystalImages[i]);
      image.attr('data-crystalvalue', Math.floor(Math.random() * (12 - 1) + 1));
      $('#crystals').append(image);
    }
    $('.ghostImage').on('click', function () {
      var crystalValue = $(this).data('crystalvalue');

      totalScore = totalScore + crystalValue;

      $('#totalscore').text('Your current score is: ' + totalScore);

      if (totalScore === randomnum) {
        wins++;
        $('#wins').text(wins);
        resetCrystals();
      } else if (totalScore > randomnum) {
        losses++;
        $('#losses').text(losses);
        resetCrystals();
      }
      if (totalScore === randomnum || totalScore > randomnum) {
        // Select new random number
        totalScore = 0;
        $('#random').text('Target: ' + randomnum);
        $('#totalscore').text('Your current score is: ' + totalScore);
      }
    });
  }
  resetCrystals();
});
// for loop that interates through random crystal value 4 times
// function that will seperate img element for me <img>??
