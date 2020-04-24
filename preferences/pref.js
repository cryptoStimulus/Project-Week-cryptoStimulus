import buttonOn from '../data/button-data.js';


const updatingLocalStorage = () => {
    const radio = document.querySelectorAll('input');
    let preferenceData = localStorage.getItem('preferences');

    if (!preferenceData) {
        preferenceData = [];
    } else {
        preferenceData = [];
    }

    radio.forEach((preferenceButton) => {
        preferenceButton.addEventListener('click', () => {

            if (!preferenceData.includes(event.target.value)) {
                preferenceData.push(event.target.value);
                const stringifiedPreferenceData = JSON.stringify(preferenceData); 
                localStorage.setItem('preferences', stringifiedPreferenceData);
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

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    window.location.replace('../options/index.html');
});




