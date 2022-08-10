"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

// document.form_main.start.onclick = () => start();
// document.form_main.pause.onclick = () => pause();
// document.form_main.reset.onclick = () => reset();

function start() {
  stop();
  cron = setInterval(() => { timer(); }, 10);
}

function stop() {
  clearInterval(cron);
}

function reset() { 
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.querySelector('.horas').innerText = '00';
  document.querySelector('.minutos').innerText = '00';
  document.querySelector('.segundos').innerText = '00';
  document.querySelector('.milisegundos').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.querySelector('.horas').innerText = returnData(hour);
  document.querySelector('.minutos').innerText = returnData(minute);
  document.querySelector('.segundos').innerText = returnData(second);
  document.querySelector('.milisegundos').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}
