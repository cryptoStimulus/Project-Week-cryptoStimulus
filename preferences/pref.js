import buttonOn from '../data/button-data.js';


const updatingLocalStorage = () => {
    const radio = document.querySelectorAll('input');

    // import data for local storage preferences
    let preferenceData = localStorage.getItem('preferences');

    // if it does not exist, we will need to create array
    if (!preferenceData) {
        // make an empty array if we do not have preference data 
        preferenceData = [];
    } else {
        // if we do have it, then parse 
        preferenceData = [];
    }
    //for all of the inputs that exist 
    radio.forEach((preferenceButton) => {
        //when you press the specific preferenceButton
        preferenceButton.addEventListener('click', () => {
            // will want to wrap lines 20-26 in an if block 

            if (!preferenceData.includes(event.target.value)) {
                preferenceData.push(event.target.value);
                const stringifiedPreferenceData = JSON.stringify(preferenceData); //stringifying our updated array
                localStorage.setItem('preferences', stringifiedPreferenceData); //updating local storage
                const image = document.getElementById(event.target.value);

                buttonOn.forEach(imageObj => {
                    if (imageObj.id === image.id) {
                        image.src = imageObj.src;
                    }
                });
            } else {
                alert(`You've already chosen this preference, please choose another`);
            }
        });
    });

};

updatingLocalStorage();

//changing image upon click 



// submit button listener 
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    // upon click, we want us to reroute the user to a different page 
    window.location.replace('../options/index.html');


});




