

//Project 1

setInterval(function(){
    var d = new Date();
    var time = document.getElementById('time');
    time.innerHTML = d.toLocaleString();
},1000);

var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
   
    if (hour < 12) {  
      welcome = "Good Morning,";  
    } else if (hour < 17) {  
      welcome = "Good Afternoon,";  
    } else {  
      welcome = "Good Evening,";  
    }  
    var time = document.getElementById('greeting');
    time.innerHTML = "<h2>" + "<font color='grey'>" + welcome + "</font>" + " welcome to Ocean's Playground"
    
 


// Project 2

var i = Math.floor(Math.random() * 7);
var t = Object;
function setNum() {
  var res = document.getElementById('num_text')
  res.innerHTML = i;
  i++;
  
  if(i === 7){
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

