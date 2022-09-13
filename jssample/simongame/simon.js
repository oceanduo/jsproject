

  var level = 0;
  var started = false;

  const buttonColours = ["red", "blue", "green", "yellow"]
  var gamePattern =[]
var userClickedPattern = []






$(document).keypress(function(){
  //if (event.key == "a") {
if (!started){
  $('h2').text("let's start Level"+ level );
    nextSequence();
  started = true;
}

//  }
})




function nextSequence(){

level++;
$('h2').text("let's start Level"+ level );
 userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
//  $('randomChosenColour').css("background-color","black");
var rNum ="#"+randomChosenColour
$(rNum).fadeOut(100).fadeIn(100);




var sound = "sounds/"+randomChosenColour+".mp3"
var audio = new Audio(sound);
audio.play();





}


$('.btn').click(function(event){


  var userChosenColour = event.target.id //$(this).attr("id");
  userClickedPattern.push(userChosenColour);

var rNum ="#"+userChosenColour

$(rNum).addClass('pressed').delay(200). queue(function(next){
    $(rNum).removeClass('pressed');
    next(); //这个非常重要，不然会卡住
  });

var sound = "sounds/"+userChosenColour+".mp3"
var audio = new Audio(sound);
audio.play();

checkAnswer(userClickedPattern.length-1);

})




function checkAnswer(currentLevel) {

    //13. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {



      //14. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
     if (userClickedPattern.length === gamePattern.length){

        //15. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
            nextSequence();
          }, 1000);


        }

      } else {

        // console.log("wrong");

        //16. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();

        //17. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        //18. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");

        //19. Call startOver() if the user gets the sequence wrong.
        level = 0;
        gamePattern = [];
        started = false;

      }

}
