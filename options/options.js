import { findById } from '../utils.js';
import orgsData from '../data/orgs-data-list.js';
import findByCategory from './find-by-category.js';

const parsedPreferences = JSON.parse(localStorage.getItem('preferences'));

findByCategory(parsedPreferences, orgsData);

const parsedOptions = JSON.parse(localStorage.getItem('options'));

export function renderCompanyBlock() {

    for (let i = 0; i < parsedOptions.length; i++) {
        const company = parsedOptions[i];
        const companyBlock = document.createElement('section');
        companyBlock.classList.add('company');
        
        const imageDiv = document.createElement('div');
        companyBlock.appendChild(imageDiv);
        const companyImage = document.createElement('img');
        companyImage.src = `../assets/companies/${company.image}`;
        companyImage.classList.add('options-pg-logo');
        imageDiv.appendChild(companyImage);
        
        const contentDiv = document.createElement('div');
        companyBlock.appendChild(contentDiv);

        const pName = document.createElement('p');
        pName.classList.add('options-title');
        pName.textContent = company.name;
        contentDiv.appendChild(pName);

        const pDescription = document.createElement('p');
        pDescription.classList.add('options-description');
        pDescription.textContent = company.description;
        contentDiv.appendChild(pDescription);

        const pCategory = document.createElement('p');
        pCategory.classList.add('category-text'); 
        pCategory.textContent = `Category: ${company.category}`;
        contentDiv.appendChild(pCategory);

        const favButton = document.createElement('button');
        favButton.textContent = 'Favorite';
        favButton.id = company.id;
        favButton.type = 'checkbox';
        favButton.classList.add('fav-button-css');
        contentDiv.appendChild(favButton);

        const optionsList = document.getElementById('options-list');

        optionsList.appendChild(companyBlock);
    }

}

renderCompanyBlock();

// cool use of querySelectorAll
const favButtonArray = document.querySelectorAll('button[type=checkbox]');

let favoritesArray = localStorage.getItem('favorites');

if (!favoritesArray) {
    favoritesArray = [];
} else {
    favoritesArray = JSON.parse(favoritesArray);
}

favButtonArray.forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', (event) => {

        const buttonId = event.target.id;
        const company = findById(parsedOptions, buttonId);
        const alreadyInFavorites = favoritesArray.find((favorite) => {
            if (favorite.id === company.id) {
                return true;
            }
        });

        if (!alreadyInFavorites) {
            favoritesArray.push(company);
            const stringyFavoritesArray = JSON.stringify(favoritesArray);
            localStorage.setItem('favorites', stringyFavoritesArray);
        } else {
            alert('You already added this!');
        }

    });
});

const nextButton = document.getElementById('favePageButton');

nextButton.addEventListener('click', () => {
    window.location.replace('../favorites/index.html');
});
