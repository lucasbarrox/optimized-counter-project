import { Counter } from './src/Counter.js';

// initialize the counter 
const counterInstance = new Counter(0);

// select DOM elements

const valueElement = document.getElementById('counter-value');
const incrementButton = document.getElementById('btn-increment');
const decrementButton = document.getElementById('btn-decrement');
const reset = document.getElementById('btn-reset');

// update the UI function

const updateUI = () => {
    valueElement.textContent = counterInstance.getValue();
};

// event listeners

incrementButton.addEventListener('click', () => {
    counterInstance.increment();
    updateUI();
});

decrementButton.addEventListener('click', () => {
    counterInstance.decrement();
    updateUI();
});

reset.addEventListener('click', () => {
    counterInstance.reset();
    updateUI();
});

updateUI(); // initial UI update