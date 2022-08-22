const passwordInputs = document.querySelectorAll('.error');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        passwordInputs.forEach(passwordInput => {
            passwordInput.style.outline = '2px solid red';
        })
    } else {
        passwordInputs.forEach(passwordInput => {
            passwordInput.style.outline = '2px solid green';
        })
    }
}

confirmPassword.addEventListener('input', validatePassword);
