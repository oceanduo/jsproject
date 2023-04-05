
//for click
var x = new Audio("");
for (var i = 0; i < 7; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var letter = this.innerHTML;
    playMusic(letter);
    animation(letter);
  })
}


//for keypress

document.addEventListener('keypress', function (event) {

  playMusic(event.key);
  console.log(event.key);
  animation(event.key);
  console.log(event)
})



function animation(nun) {
  var nun1 = "." + nun;
  document.querySelector(nun1).classList.add("pressed");

  setTimeout(function () { document.querySelector(nun1).classList.remove("pressed") }, 100);
}



function playMusic(letter) {

  switch (letter) {
    case 'w':
      var audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      break;

    case 'a':
      var audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      break;

    case 's':
      var audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      break;

    case 'd':
      var audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;

    case 'j':
      var audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;

    case 'k':
      var audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;

    case 'l':
      var audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      break;
    default:

  }
}
