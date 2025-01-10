import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Для відображення повідомлень
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let suserSelectedDate = null;
btnTimerInput.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
// const timer = {
//     deadLine: selectedDates,
//     intervalValid: null,

//     start() {
//         this.intervalId = setInterval(() => {
//             const diff = this.deadline - Date.now();

//             if (diff <= 0) {
//                 this.stop();

//                 return;
//             }

//             const timeComponents = this.getTimeComponents(diff);

//             this.elements.days.textContent = this.pad(timeComponents.days);
//             this.elements.hours.textContent = this.pad(timeComponents.hours);
//             this.elements.minutes.textContent = this.pad(timeComponents.minutes);
//             this.elements.seconds.textContent = this.pad(timeComponents.seconds);
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalId);
//     },
// };
//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   },

//   pad(value) {
//     return String(value).padStart(2, '0');
//   },
// };
