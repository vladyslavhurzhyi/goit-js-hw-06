function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const btnChangeRef = bodyRef.querySelector('.change-color');

btnChangeRef.addEventListener('click', changeColor);

function changeColor() {
    const randomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = randomColor;
    const nameColorRef = bodyRef.querySelector('.color');
    nameColorRef.textContent = randomColor;
}
