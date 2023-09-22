import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let timeDifference = 0;

let formatDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDifferenceDate(selectedDates[0]);
  },
};

startBtn.setAttribute('disabled', true);

function currentDifferenceDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    startBtn.setAttribute('disabled', true);
    return Notify.failure('Please choose a date in the future');
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  icons(formatDate);
  startBtn.removeAttribute('disabled');
}

const flatP = flatpickr(inputEl, options);

let timerId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function icons(timeIcon) {
  daysEl.textContent = addLeadingZero(timeIcon.days);
  hoursEl.textContent = addLeadingZero(timeIcon.hours);
  minutesEl.textContent = addLeadingZero(timeIcon.minutes);
  secondsEl.textContent = addLeadingZero(timeIcon.seconds);
}

const countdown = () => {
  const selectedDate = flatP.selectedDates[0];
  inputEl.disabled = true;
  timerId = setInterval(() => {
    const startTime = new Date();
    const count = selectedDate - startTime;
    icons(convertMs(count));
    if (count < 1000) {
      clearInterval(timerId);
      inputEl.disabled = false;
    }
  }, 1000);
};

startBtn.addEventListener('click', countdown);
