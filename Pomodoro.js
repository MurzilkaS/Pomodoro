var start = document.getElementById('start');
var reset = document.getElementById('stop');
var stop = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click',function(){
    if (startTime === underfined){
    startTime = setInterval(timer,1000)
}else{
    alert("Timer is already rinning");
}
})
reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = underfined;
})
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = underfined;
})
//Start Timer Function
function timer(){
    //Work Time countdown
    if (ws.innerText != 0){
        ws.innerText--;
    }else if (wm.innerText !==0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText --;
    }
    //Break Time Countdown
    if (wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText --;
        } else if (bm.innerText != 0 && bs.innerText == 0){
            bs.innerText =59;
            bm.innerText --;
        }
    }
//Increment Counter by one if one full cycle is completed
   if(wm.innerText == 0&& ws.innerText ==0 && bm.innerText ==0 && bs.innerText == 0){
    wm.innerText == 25;
    ws.innerText == "00";

    bm.innerText == 5;
    bs.innerText == "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = underfined;
   }
//Stop timer functiov
function stopInterval(){
    clearIntrval(startTimer);
}
}