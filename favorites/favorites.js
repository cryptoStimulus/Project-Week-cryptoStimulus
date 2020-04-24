//get the new favorites array 
const faves = JSON.parse(localStorage.getItem('favorites'));

/*
function createElement(parent, tag, className = '') {
    const element = document.createElement(tag);
    element.classList.add(className); 
    parent.appendChild(element);
    return element;
}
const companyImage = createElement(companyBlock, 'img', 'favorites-img');
companyImage.src = '../assets/companies/' + company.image;
*/

function companyBlock2() {
    for (let i = 0; i < faves.length; i++) {
        const company = faves[i]; 

    // parent company block
        const companyBlock = document.createElement('section');
        companyBlock.classList.add('company');
        const optionsList = document.getElementById('favorites-list');
        optionsList.appendChild(companyBlock);

    // logo div 
        const companyImage = document.createElement('img');
        companyImage.src = '../assets/companies/' + company.image;
        companyImage.classList.add('favorites-img');
        companyBlock.appendChild(companyImage);

    // company name 
        const pName = document.createElement('p');
        pName.classList.add('favorites-title'); 
        pName.textContent = company.name;
        companyBlock.appendChild(pName);

    // company desc
        const pDescription = document.createElement('p');
        pDescription.textContent = company.descriptionShort; 
        pDescription.classList.add('fav-description');
        companyBlock.appendChild(pDescription);

    // category div
        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${company.category}`; 
        pCategory.classList.add('category-text');
        companyBlock.appendChild(pCategory); 

    // link div
        const aLink = document.createElement('a');
        aLink.href = company.link;
        aLink.textContent = 'Website';
        aLink.classList.add('links-css');
        companyBlock.appendChild(aLink);
    }  
}
//execute function
companyBlock2();