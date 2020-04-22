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
    else { // will reassign the different username once inputted to have a 'fresh' local storage
        let userDataLocalStorage = localStorage.getItem('userData'); //find item in local storage called userData
        if (!userDataLocalStorage) { //if it does not exist, it will set so that way, we can do lines 20-26
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

