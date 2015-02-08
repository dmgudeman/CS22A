// CS 22A Assignment 5
// David Gudeman

'use strict'
var myEmoticon = document.getElementById("emoticon");
var myTime = document.getElementById("time");
var myPeriod = document.getElementById("period");

var emoticonArray = ["awake.gif", "sleep.gif"]
var emoticonIndex = 0;
var periodArray = ["AM", "PM"];
var periodIndex = 0;

var hour = 8;
var emoCounter = 1;
var periodCounter = 9;

var intervalHandle = setInterval(changeEmoticon, 1000);
var intervalHandleTime = setInterval(increment, 1000);
var intervalHandlePeriod = setInterval(periodUpdate, 1000);

// function to update the AM/PM element every 12 sec
function periodUpdate(){
   if (periodCounter < 12){
      periodIndex = 0
      myPeriod.textContent = periodArray[periodIndex];
      ++periodCounter;
   } else if(periodCounter < 24){
      periodIndex = 1;
      myPeriod.textContent = periodArray[periodIndex];
      ++periodCounter;
   } else {
      periodIndex = 0
      myPeriod.textContent = periodArray[periodIndex];
      periodCounter = 1;
   }
}
// cycles through hours and updates "time" Element
function increment() { 
  if (hour <12){
      hour = ++hour;
      myTime.textContent = hour;
   } else {
      hour = 0;
      increment();
   }
}
// toggles the emoticon every 12 hours
function changeEmoticon(){
    if (emoCounter < 12) { 
      emoticonIndex = 0;
      myEmoticon.setAttribute("src", emoticonArray[emoticonIndex]);
      emoCounter++;
    }else if (emoCounter < 24) {
      emoticonIndex = 1;
      myEmoticon.setAttribute("src", emoticonArray[emoticonIndex]);
      emoCounter++;
    }else{
      emoticonIndex = 0;
      myEmoticon.setAttribute("src", emoticonArray[emoticonIndex]);
      emoCounter = 1;       
    }
}
// method to stop the program running by clicking on emoticon
myEmoticon.onclick = function(){
    clearInterval(intervalHandle);
    clearInterval(intervalHandleTime);
    clearInterval(intervalHandlePeriod);
}
