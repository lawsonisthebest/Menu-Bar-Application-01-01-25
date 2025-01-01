const secondsInp = document.querySelector(".seconds");
const minutesInp = document.querySelector(".minutes");
const hoursInp = document.querySelector(".hours");

const playBtn = document.getElementById("start-pause");
const stopBtn = document.getElementById("stop");

const timeTxt = document.querySelector(".timeTxt");

var seconds = 0;
var minutes = 0;
var hours = 0;

var playing = false;

var audio = new Audio('alarm.mp3');
audio.loop = true;

timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;

secondsInp.addEventListener("input", ()=>{
    seconds = parseInt(secondsInp.value);
    if(seconds <= 60){
        if(parseInt(secondsInp.value) <= 0){
            secondsInp.value = "";
        }
        if(parseInt(secondsInp.value) > 0){
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
            secondsInp.value = (seconds < 10 ? "0" : "") + seconds;
        }else{
            seconds = 0;
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
        }
    }
    if(seconds > 60){
        seconds = 60;
        secondsInp.value = 60;
        timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
    }
});
minutesInp.addEventListener("input", ()=>{
    minutes = parseInt(minutesInp.value);
    if(minutes <= 60){
        if(parseInt(minutesInp.value) <= 0){
            minutesInp.value = "";
        }
        if(parseInt(minutesInp.value) > 0){
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
            minutesInp.value = (minutes < 10 ? "0" : "") + minutes;
        }else{
            minutes = 0;
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
        }
    }
    if(minutes > 60){
        minutes = 60;
        minutesInp.value = 60;
        timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
    }
});
hoursInp.addEventListener("input", ()=>{
    hours = parseInt(hoursInp.value);
    if(hours <= 60){
        if(parseInt(hoursInp.value) <= 0){
            hoursInp.value = "";
        }
        if(parseInt(hoursInp.value) > 0){
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
            hoursInp.value = (hours < 10 ? "0" : "") + hours;
        }else{
            hours = 0;
            timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
        }
    }
    if(hours > 60){
        hours = 60;
        hoursInp.value = 60;
        timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
    }
});

setInterval(() => {
    if(playing){
        if(minutes <= 0 && hours > 0){
            minutes = 60
            hours--;
        }
        if(seconds <= 0 && minutes > 0){
            seconds = 60;
            minutes--;
        }

        seconds--;

        timeTxt.innerHTML = (hours < 10 ? "0" : "") + hours + " : " + (minutes < 10 ? "0" : "") + minutes + " : " + (seconds < 10 ? "0" : "") + seconds;
        if(seconds <= 0 && minutes <= 0 && hours <= 0){
            playing = false;
            timeTxt.innerHTML = "Times Up!";
            audio.play();
        }
    }
}, 1000); // 1000 milliseconds (1 second)

playBtn.addEventListener("click", ()=>{
    playing = !playing;
    hoursInp.value = "";
    secondsInp.value = "";
    minutesInp.value = "";
});

stopBtn.addEventListener("click", ()=>{
    audio.pause();
    audio.currentTime = 0;
    hoursInp.value = "";
    secondsInp.value = "";
    minutesInp.value = "";
    timeTxt.innerHTML = "00:00:00";
    playing = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
});