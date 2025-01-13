import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// 1. Отримали посилання на форму
const radioForm = document.querySelector('form');
// 2. Додали обробник події на сабміт
radioForm.addEventListener('submit', event => {
  event.preventDefault();
  // 3. Зчитали значення з форми
  const delay = Number(event.target.elements.delay.value);
  const selectedValue = event.target.elements.state.value;
  // 4. Створили проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedValue === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // 5. Обробили проміс за допомогою бібліотеки iziToast
  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
  radioForm.reset();
});
