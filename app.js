import { makeUser } from './utils.js';

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

        JSON.stringify(localStorage.setItem('username', madeUser.userName));
        JSON.stringify(localStorage.setItem('email', madeUser.email));
        window.location = './preference/preference.html';
    }    
});



// if email = null 
// if username = null
// else returns = to loginPage/ null