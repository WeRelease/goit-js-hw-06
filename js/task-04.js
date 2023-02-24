const counterValue = document.querySelector("#value");
const decrementCounter = document.querySelector('[data-action="decrement"]');
const incrementCounter = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;
const onIncreaseCounterValue = (event) => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

const onDecreaseCounterValue = (event) => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementCounter.addEventListener("click", onDecreaseCounterValue);
incrementCounter.addEventListener("click", onIncreaseCounterValue);
