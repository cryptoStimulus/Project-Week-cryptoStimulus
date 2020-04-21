import { makeUser } from './utils.js';
// what elements am I using to create change or what elements am I changing? 
const form = document.querySelector('form');

const loginButton = document.getElementById('login-button');
const username = document.getElementById('username');
const email = document.getElementById('email');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value === '' || username.value === '') {
        return;
    }
    else {
        const formData = new FormData(form);
        const madeUser = makeUser(formData);
        const stringed = JSON.stringify(madeUser);
        localStorage.setItem('userData', stringed);

        window.location.replace ('./preferences/index.html');
    }    
});

