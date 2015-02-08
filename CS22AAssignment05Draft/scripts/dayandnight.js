'use strict'
var myEmoticon = document.getElementById("emoticon");
var emoticonArray = ["awake.gif", "sleep.gif"]
var emoticonIndex = 0;
var intervalHandle = setInterval(changeEmoticon, 2000);
var myTime = document.getElementById("time");
var myText = myTime.textCont;
var intervalHandleTime = setInterval(changeTime, 2000)

function changeTime() {
    myTime.setAttribute("text", myTime.textContent);
            myTime++;
        if (myTime <= 12) {
         myTime = this.myTime;
         
        }
        myTime = 0;
}
     
function changeEmoticon(){
    myEmoticon.setAttribute("src", emoticonArray[emoticonIndex]);
        emoticonIndex++;
    if (emoticonIndex >= emoticonArray.length) { 
        emoticonIndex = 0;
    }
}

myEmoticon.onclick = function(){
    clearInterval(intervalHandle);
}