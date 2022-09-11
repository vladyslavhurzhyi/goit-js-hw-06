const counterRef = document.querySelector('#counter');

let counterValue = counterRef.querySelector('#value');

let counter = 0;

const btnEventDecrement = counterRef.querySelector(
    'button[data-action="decrement"]'
);

// console.log(btnEventDecrement);

const btnEventIncrement = counterRef.querySelector(
    'button[data-action="increment"]'
);
// console.log(btnEventIncrement);

function counterDecr() {
    counter -= 1;
    updateCounter();
}

function counterIncr() {
    counter += 1;
    updateCounter();
}

function updateCounter() {
    counterValue.textContent = counter;
}

btnEventDecrement.addEventListener('click', counterDecr);

btnEventIncrement.addEventListener('click', counterIncr);
