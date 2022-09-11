const inputFormRef = document.querySelector('body');

const inputRef = inputFormRef.querySelector('#name-input');

const spanRef = inputFormRef.querySelector('#name-output');

// console.log(spanRef.textContent);

inputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        spanRef.textContent = 'Anonymous';
    } else {
        spanRef.textContent = event.currentTarget.value;
    }
});
