const input = document.querySelector('.email-input');
const form = document.querySelector('.subscribe-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value;
    const error = input.parentElement.querySelector('.error-msg');

    if(email === '') {
        input.classList.add('error');
        error.innerHTML = 'Whoops! It looks like you forgot to add your email';
    } else if(!validateEmail(email)) {
        input.classList.add('error');
        error.innerHTML = 'Please provide a valid email address';
    } else {
        input.value = '';
        input.classList.remove('error');
        error.innerHTML = '';
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };