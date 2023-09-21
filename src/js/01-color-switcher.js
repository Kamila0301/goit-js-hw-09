const stopButton = document.querySelector("[data-stop]");
const startButton = document.querySelector("[data-start]");
const bodyEl = document.querySelector("body");

let timerId = null;

startButton.addEventListener('click', onStartBtn);
stopButton.addEventListener('click', onStopBtn);

function onStartBtn() {
    timerId = setInterval(getBgColor, 1000);
    startButton.toggleAttribute('disabled');
}

function onStopBtn() { 
    clearInterval(timerId)
    startButton.removeAttribute('disabled');
}

function getBgColor() {
    const colorEl = getRandomHexColor();
    bodyEl.style.backgroundColor = colorEl;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
