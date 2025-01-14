import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Для відображення повідомлень
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDatePicker = document.querySelector('#datetime-picker');
const btnDateStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let intervalId = null;
btnDateStart.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме в ньому варто обробляти дату, обрану користувачем. Параметр selectedDates — це масив обраних дат, тому ми беремо перший елемент selectedDates[0].
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      btnDateStart.disabled = true;

      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      btnDateStart.disabled = false;

      iziToast.success({
        title: 'Success',
        message: 'Valid date selected!',
        position: 'topRight',
      });
    }
  },
});
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію, наприклад addLeadingZero(value), яка використовує метод рядка padStart() і перед відмальовуванням інтерфейсу форматує значення.
const addLeadingZero = value => value.toString().padStart(2, '0');

btnDateStart.addEventListener('click', () => {
  btnDateStart.disabled = true;
  inputDatePicker.disabled = true;

  intervalId = setInterval(() => {
    // скільки часу залишилось до вказаної дати
    const nowDate = new Date();
    const timeResult = userSelectedDate - nowDate;
    const { days, hours, minutes, seconds } = convertMs(timeResult);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
    // Перевіряємо за допомогою методу .every чи задовольняють усі елементи умови колбек-функціїї.
    // Таймер зупиняється, коли доходить до кінцевої дати, тобто залишок часу дорівнює нулю і інтерфейс виглядає так 00:00:00:00.
    const isTimerStop = [days, hours, minutes, seconds].every(
      value => value === 0
    );

    if (isTimerStop) {
      clearInterval(intervalBack);
      inputDatePicker.disabled = false;
    }
  }, 1000);
});
