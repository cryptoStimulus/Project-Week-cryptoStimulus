const faves = JSON.parse(localStorage.getItem('favorites'));

function companyBlock2() { // i usually like functions to be named as verbs
    for (let i = 0; i < faves.length; i++) {
        const company = faves[i]; 

        const companyBlock = document.createElement('section');
        companyBlock.classList.add('company');
        const optionsList = document.getElementById('favorites-list');
        optionsList.appendChild(companyBlock);

        const companyImage = document.createElement('img');
        companyImage.src = '../assets/companies/' + company.image;
        companyImage.classList.add('favorites-img');
        companyBlock.appendChild(companyImage);

        const pName = document.createElement('p');
        pName.classList.add('favorites-title'); 
        pName.textContent = company.name;
        companyBlock.appendChild(pName);

        const pDescription = document.createElement('p');
        pDescription.textContent = company.descriptionShort; 
        pDescription.classList.add('fav-description');
        companyBlock.appendChild(pDescription);

        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${company.category}`; 
        pCategory.classList.add('category-text');
        companyBlock.appendChild(pCategory); 

        const aLink = document.createElement('a');
        aLink.href = company.link;
        aLink.textContent = 'Website';
        aLink.classList.add('links-css');
        companyBlock.appendChild(aLink);
    }  
}

companyBlock2();