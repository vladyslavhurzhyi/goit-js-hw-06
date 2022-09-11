const inputFormRef = document.querySelector('body');

const inputRef = inputFormRef.querySelector('#name-input');

const spanRef = inputFormRef.querySelector('#name-output');

// console.log(spanRef.textContent);

inputRef.addEventListener('input', (event) => {
    const value = event.currentTarget.value.trim();
    if (value === '') {
        spanRef.textContent = 'Anonymous';
    } else {
        spanRef.textContent = value;
    }
});
