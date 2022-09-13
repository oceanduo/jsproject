

//Project 1
setInterval(function(){
    var d = new Date();
    var time = document.getElementById('time');
    time.innerHTML = d.toLocaleString();
},1000);


// Project 2

var i = Math.floor(Math.random() * 4);
var t = Object;
function setNum() {
  var res = document.getElementById('num_text')
  res.innerHTML = i;
  i++;
  
  if(i === 4){
     i = 1;
  }
}
function start() {
  t = setInterval(setNum, 10)
}
function end() {
  t = clearInterval(t)
}
function reload(){window.location.reload()}

