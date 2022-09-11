function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

const inputRef = document.querySelector('#controls input');
const divBoxes = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyDiv);

const markup = [];

function createBoxes() {
    for (let i = 0; i < inputRef.value; i += 1) {
        const newDiv = `<div style= "background-color: ${getRandomHexColor()}; width: ${
            i * 10 + 30
        }px; height: ${i * 10 + 30}px"></div>`;
        markup.push(newDiv);
        addBoxes();
    }
}

function addBoxes() {
    divBoxes.insertAdjacentHTML('beforeend', markup.join(''));
    markup.splice(0, markup.length);
}

function destroyDiv() {
    divBoxes.innerHTML = '';
}
