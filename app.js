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
        let userDataLocalStorage = localStorage.getItem('userData'); //find item in local storage called userData
        if (!userDataLocalStorage){ // if it does not exist
            const madeUser = new FormData(form); 
            const userDataLocalStorage = makeUser(madeUser);
            const stringed = JSON.stringify(userDataLocalStorage);
            localStorage.setItem('userData', stringed);

        } else {
            userDataLocalStorage = JSON.parse(userDataLocalStorage); //if it does exist
            const updatedUserInfo = new FormData(form);

            userDataLocalStorage = updatedUserInfo; 
        }
        
        
        


        // import user Data from local storage 


        window.location.replace ('./preferences/index.html');
    }    
});

