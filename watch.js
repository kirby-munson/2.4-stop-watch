(function(){
  'use strict';


var currentTime;
var seconds = document.querySelector('.seconds');
var minutes = document.querySelector('.minutes');
var hours = document.querySelector('.hours');


function logCurrentTime(){
var timeinterval = setInterval(function(){
currentTime = new Date();
console.log(currentTime);
var color = "#"+((1<<24)*Math.random()|0).toString(16);
document.bgColor = color;


 },1000);
 }

 function changetext(){
var textchange2 = "Th";
var id = document.getElementById("DP");
id.innerHTML=textchange2;
}

 function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            move.call(s = "00");
        }
    }
}

move();



 function logCurrentSeconds(){
 var timeinterval = setInterval(function(){
 currentTime = new Date();
 var s = currentTime.getSeconds();
 seconds.textContent = ("0" + s).slice(-2);

  },1000);
  }

  function logCurrentMinutes(){
  var timeinterval = setInterval(function(){
  currentTime = new Date();
  var m = currentTime.getMinutes();
  minutes.textContent = ("0" + m).slice(-2);

   },100);
   }


   function logCurrentHours(){
   var timeinterval = setInterval(function(){
   currentTime = new Date();
   var h = currentTime.getHours();
   hours.textContent = ("0" + h).slice(-2);

    },10);
    }



logCurrentTime();
logCurrentSeconds();
logCurrentMinutes();
logCurrentHours();



  }());


  // hours.textContent =
  // minutes.textContent =
  // seconds.textContent = interval[2]
// var startButton = document.getElementById('start-button');
// var hours = document.querySelector('.hours');
// var minutes = document.querySelector('.minutes');
// var seconds = document.querySelector('.seconds');
//
// var startTime;
// var currentText;
//
// console.log(startButton);
//
//  function toggleButton(){
//    currentText = startButton.textContent;
//
//   if(currentText == 'Start'){
//      startButton.textContent = 'Stop';
//      startButton.style.backgroundColor = 'red';
//    } else{
//      startButton.textContent = 'Start';
//    startButton.style.backgroundColor = 'green';
//   }
//  }
//
//  function millisecondsToInterval(ms){
//  var numMsInHour = 60000 * 60;
//  var numMsInMinute = 60000;
//  var numMsInSecond = 1000;
//
//    var hourCount = Math.floor(ms / numMsInHour);
//    var minuteCount = Math.floor(ms / numMsInMinute);
//    var secondCount = Math.floor(ms / numMsInSecond);
//
//    return [hourCount, minuteCount, secondCount];
//  }
//
//  function displayInterval(interval){
//    hours.textContent = ("0" + interval[0]).slice(-2);
//    minutes.textContent = ("0" + interval[1]).slice(-2);
//    seconds.textContent = ("0" + interval[2]).slice(-2);
//
//  }
//
//  function logElapsedTime(){
//    var currentTime = new Date();
//    var elapsedTime = currentTime - startTime;
//    var elapsed = millisecondsToInterval(elapsedTime);
//
//    displayInterval(elapsed);
//  }
//
//  function startButtonHandler(){
//    startTime = new Date();
//    toggleButton();
//    window.setInterval(logElapsedTime, 1000);
//
//  }
//
//   startButton.addEventListener('click', startButtonHandler);
//
// }());
//



// document.getElementById('title').textContent = 'New Title';
//
// document.querySelector('h1').textContent = 'My Cool Title';
//
//
// var mySuperCoolHeading = document.getElementById('title');
//
// alert(mySuperCoolHeading);
//
// console.log(mySuperCoolHeading);
//
// var myNumberFive = 5;
//
// var myCoolString = "This 'is' a string";
//
// console.log(myCoolString);
//
// function add(firstNumber, secondNumber){
//   var sum = firstNumber + secondNumber;
//   console.log(sum);
// }
//
// add(1, 5);
// add(10,20);
