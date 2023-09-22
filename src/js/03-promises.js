


import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promisesForm = document.querySelector('.form');

promisesForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  let delay = Number(promisesForm.delay.value);

  for (let index = 1; index <= promisesForm.amount.value; index += 1) {
    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(promisesForm.step.value);
  }
}

function createPromise(position, delay) {
  const object = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(object);
      } else {
        // Reject
        reject(object);
      }
    }, delay);
  });
}