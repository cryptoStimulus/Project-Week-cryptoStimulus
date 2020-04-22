//get the new favorites array 
const faves = JSON.parse(localStorage.getItem('favorites'));



function companyBlock2() {
    for (let i = 0; i < faves.length; i++) {
        const company = faves[i]; 

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
        pDescription.textContent = company.descriptionShort; 
    //append to the text div 
        textDiv.appendChild(pName);
        textDiv.appendChild(pDescription);
        companyBlock.appendChild(textDiv);

    // link div
        const linkDiv = document.createElement('div');
        linkDiv.id = 'links';
        const aLink = document.createElement('a');
        aLink.href = company.link;
        aLink.textContent = 'Website';
        linkDiv.appendChild(aLink);
        companyBlock.appendChild(linkDiv);


    // category div
        const categoryDiv = document.createElement('div'); 
        categoryDiv.class = 'category';
        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${company.category}`; 
    //append
        categoryDiv.appendChild(pCategory); 
        companyBlock.appendChild(categoryDiv); 




        const optionsList = document.getElementById('favorites-list');
    
        optionsList.appendChild(companyBlock);
    }  
}
//execute function
companyBlock2();