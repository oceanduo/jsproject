var randomNumber1 = Math.floor(Math.random() * 6);

var img = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

var ranimage=img[randomNumber1]

document.querySelector(".img1").setAttribute("src",ranimage)


var randomNumber2 = Math.floor(Math.random() * 6);

var ranimage2=img[randomNumber2]

document.querySelector(".img2").setAttribute("src",ranimage2)


//function compare(randomNumber1,randomNumber2) {

if (randomNumber1>randomNumber2) { document.querySelector("h1").innerHTML="player1 win"}
else if (randomNumber1<randomNumber2) { document.querySelector("h1").innerHTML="player2 win"}
else { document.querySelector("h1").innerHTML="drawn!"}
//};
