import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.form[delay]'),
  step: document.querySelector('.form[step]'),
  amount: document.querySelector('.form[amount]'),
};
refs.form.addEventListener('submit', clickSubmit);
let delayInput = null;
let stepInput = null;
let amountInput = null;

function clickSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  delayInput = Number(delay.value);
  stepInput = Number(step.value);
  amountInput = Number(amount.value);

  for (let i = 1; i <= amountInput; i += 1) {
    delayInput += stepInput;
    createPromise(i, delayInput)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  e.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  });
}
