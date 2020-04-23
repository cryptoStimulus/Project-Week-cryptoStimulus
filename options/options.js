// ///////////////
//PROJECT UPDATE FOR US TOMORROW: 
// we created a findbyCategory function that is working and ready 
// created elements in the DOM to append to our html elements 
// currently working on renderCompany Block function, we need to append from text div down 
// we also pulled both our local storages to be utilized in this file


// import other files 
import { findById } from '../utils.js';
import orgsData from '../data/orgs-data-list.js';
import findByCategory from './find-by-category.js';

const parsedPreferences = JSON.parse(localStorage.getItem('preferences'));

findByCategory(parsedPreferences, orgsData);

const parsedOptions = JSON.parse(localStorage.getItem('options'));


// for each company that comes through options array, we're filling out our template and creating the block

//render a company block function
export function renderCompanyBlock() {

    for (let i = 0; i < parsedOptions.length; i++) {
        const company = parsedOptions[i];

        // parent company block
        const companyBlock = document.createElement('section');
        companyBlock.classList.add('company');

        // logo div 
        const logoDiv = document.createElement('div');
        logoDiv.class = 'logo';
        const companyImage = document.createElement('img');
        companyImage.src = `../assets/companies/${company.image}`;
        //append to the logo div
        logoDiv.appendChild(companyImage);
        companyBlock.appendChild(logoDiv);


        // text div 
        const textDiv = document.createElement('div');
        textDiv.class = 'company-id';
        const pName = document.createElement('p');
        pName.textContent = company.name;
        const pDescription = document.createElement('p');
        pDescription.textContent = company.description;
        //append to the text div 
        textDiv.appendChild(pName);
        textDiv.appendChild(pDescription);
        companyBlock.appendChild(textDiv);

        // category div
        const categoryDiv = document.createElement('div');
        categoryDiv.class = 'category';
        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${company.category}`;
        //append
        categoryDiv.appendChild(pCategory);
        companyBlock.appendChild(categoryDiv);


        // save div
        const saveDiv = document.createElement('div');
        saveDiv.class = 'fav-button';
        const favButton = document.createElement('button');
        favButton.textContent = 'Favorite';
        favButton.id = company.id;
        favButton.type = 'checkbox';
        //append
        saveDiv.appendChild(favButton);
        companyBlock.appendChild(saveDiv);

        const optionsList = document.getElementById('options-list');

        optionsList.appendChild(companyBlock);
    }

}

// execute the function
renderCompanyBlock();

//We want this function to contain an object


//Event listeners for favorite buttons 
//gather all of the favoritesButtons and store them into an Array
const favButtonArray = document.querySelectorAll('button[type=checkbox]');

//gotten the local storage 'favorites'
let favoritesArray = localStorage.getItem('favorites');


//check to see if it exists/does exist 
if (!favoritesArray) {
    //if it does not exist, we make it equal an empty array
    favoritesArray = [];
} else {
    //if it does exist, we parse it down so we can access it and make changes 
    favoritesArray = JSON.parse(favoritesArray);
}

//we're going through all of the favorite buttons 
favButtonArray.forEach((favoriteButton) => {
    // foreach individual button favorite button, we're adding an event listener 
    favoriteButton.addEventListener('click', (event) => {

        //we've defined the value (which is a string) to a variable so we can use it. 
        const buttonId = event.target.id;

        //we have found a specific company that as a unique id name which matches the id of the button. 
        const company = findById(parsedOptions, buttonId);

        const alreadyInFavorites = favoritesArray.find((favorite) => {
            if (favorite.id === company.id) {
                return true;
            }
        });

        // if the favorites array does not have that company already in it

        //if the company object id matches the id of a company then push that specicific company
        if (!alreadyInFavorites) {
            //add that company object into the array 
            favoritesArray.push(company);

            //stringify the favoritesArray
            const stringyFavoritesArray = JSON.stringify(favoritesArray);
            //put the favorites array back into local storage with the same key name --> 'favorites'
            localStorage.setItem('favorites', stringyFavoritesArray);
        } else {
            alert('You already added this!');
        }

    });
});


//creating an event listner for the favorites PAGE button
const nextButton = document.getElementById('favePageButton');

nextButton.addEventListener('click', () => {
    window.location.replace('../favorites/index.html');
});
