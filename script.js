const error = document.querySelector('.error')
const form = document.querySelector('#signup-form');
const password = document.querySelector('#password')
const conf_password = document.querySelector('#conf-password')
const create = document.querySelector('.create')

create.addEventListener('click', () => {
    if (!verifyPass()) {
        error.textContent = '*Passwords do not match'
        error.style.color = 'red'
        password.style.borderColor = 'red'
        conf_password.style.borderColor = 'red'
    } else {
        error.textContent = ''
        password.style.borderColor = ''
        conf_password.style.borderColor = ''

        form.requestSubmit();
    }
})

function verifyPass() {
    return password.value === conf_password.value
}