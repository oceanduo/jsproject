

var level = 0;
var started = false;

const buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
let userClickedPattern = []

// can not use 'const' here?






$(document).keypress(function () {
  //if (event.key == "a") {
  if (!started) {
    $('h2').text("let's start Level" + level);
    nextSequence();
    started = true;
  }

  //  }
})




function nextSequence() {

  level++;
  $('h2').text("let's start Level" + level);
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //  $('randomChosenColour').css("background-color","black");
  var rNum = "#" + randomChosenColour
  $(rNum).fadeOut(100).fadeIn(100);

  var sound = "sounds/" + randomChosenColour + ".mp3"
  var audio = new Audio(sound);
  audio.play();

}



$('.btn').click(function (event) {
  console.log(event)

  var userChosenColour = event.target.id //$(this).attr("id");
  userClickedPattern.push(userChosenColour);

  var rNum = "#" + userChosenColour

  $(rNum).addClass('pressed').delay(200).queue(function (next) {
    $(rNum).removeClass('pressed');
    next(); //very important
  });

  var sound = "sounds/" + userChosenColour + ".mp3"
  var audio = new Audio(sound);
  audio.play();

  checkAnswer(userClickedPattern.length - 1);

})




function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    // console.log('good job, keep going')

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {

    // console.log("wrong");

   
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();

    // In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");

    // Call startOver() if the user gets the sequence wrong.
    level = 0;
    gamePattern = [];
    started = false;

  }

}
