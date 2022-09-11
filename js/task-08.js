const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
        return;
    }

    const EmailandPass = { email: email.value, password: password.value };
    console.log(EmailandPass);

    formRef.reset();
}
