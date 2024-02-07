var audio = document.createElement("audio");
audio.setAttribute("src", "sound.mp3");
audio.setAttribute("autoplay", "sound.mp3");
audio.loop = true;
let speedText = document.getElementById("speedValue")

let radio = new Audio("radio.mp3");
let horn = new Audio("horn.mp3");
let fuel = new Audio("fuel.mp3");

// Music btn handler
function musicBtnHandler() {
  audio.play();
  radio.play();
}

function hornBtnHandler() {
  horn.play();
}

function crossBtnHandler() {
  audio.pause();
  radio.pause();
}

function petrolBtnHandler() {
  fuel.play();
}

// Function for manupulating the speed of the meter
function speedMeterHandler() {
    var randomSpeed = Math.floor(Math.random() * (99 - 80 + 1)) + 80;
    speedText.innerText = randomSpeed.toString();
}

// Call the function initially
speedMeterHandler();

// Set up the interval to call the function every 0.1 second (100 milliseconds)
var intervalId = setInterval(speedMeterHandler, 200);