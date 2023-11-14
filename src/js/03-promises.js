import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function submitForm(event) {
  event.preventDefault();

  let inputDelay = event.currentTarget.delay.valueAsNumber;
  const inputStep = event.currentTarget.step.valueAsNumber;
  const inputAmount = event.currentTarget.amount.valueAsNumber;

  for (let position = 1; position <= inputAmount; position++) {
    createPromise(position, inputDelay);
    inputDelay += inputStep;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✔️ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

form.addEventListener('submit', submitForm);
