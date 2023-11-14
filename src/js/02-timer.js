import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const times = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
startBtn.disabled = true;
const date = new Date();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function showTimer({ days, hours, minutes, seconds }) {
  times.days.textContent = addLeadingZero(days);
  times.hours.textContent = addLeadingZero(hours);
  times.minutes.textContent = addLeadingZero(minutes);
  times.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      startBtn.disabled = true;
      selectedDates[0] = date;
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.disabled = false;
    const result = convertMs(selectedDates[0] - date);
    times.textContent = showTimer(result);

    startBtn.addEventListener('click', () => {
      let time = selectedDates[0] - date;
      flatpickr.disabled = true;
      const interval = setInterval(() => {
        time -= 1000;
        let result = convertMs(time);
        if (time < 1000) {
          clearInterval(interval);
        }
        times.textContent = showTimer(result);
      }, 1000);
    });
  },
};

flatpickr('input#datetime-picker', options);
