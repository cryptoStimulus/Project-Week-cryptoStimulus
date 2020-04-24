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
        let userDataLocalStorage = localStorage.getItem('userData'); 
        if (!userDataLocalStorage) { 
            userDataLocalStorage = 'hello'; 
            localStorage.setItem('userData', userDataLocalStorage);
        } 
        const madeUser = new FormData(form); 
        userDataLocalStorage = makeUser(madeUser);
        const stringed = JSON.stringify(userDataLocalStorage);
        localStorage.setItem('userData', stringed);
        
        window.location.replace ('./preferences/index.html');
    }    
});

