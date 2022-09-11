const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', () => {});

const inputLength = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length !== Number(inputLength.dataset.length)) {
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.replace('invalid', 'valid');
    }
});
