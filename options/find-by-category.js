
//findByCategory Function/
// preferencesArray = ['animals', 'humans']
/*
initialDataArray = [{
    name: 'comp1'
    category: 'animals'
}]
*/
const findByCategory = (preferencesArray, initialDataArray) => {
    //establish updatedOptionsArray 
    const updatedOptionsArray = [];
    // using the 'preferences' localStorage strings, it will find the objects that match the categories
        // pull all the available strings and attach to variable 

    //looping through the strings withn the preferences array
    for (let i = 0; i < preferencesArray.length; i++) {
        const preference = preferencesArray[i];
    //looping through the company objects within the companyArray
        for (let x = 0; x < initialDataArray.length; x++) {
            const companyObj = initialDataArray[x];
            //if the string at the index of the loop matches the category of the companyObject
            if (preference === companyObj.category){
                //pushing that companyObject at that very same index into empty optionsArray
                updatedOptionsArray.push(companyObj);
            }
        }
    }
    const stringedArray = JSON.stringify(updatedOptionsArray);
    localStorage.setItem('options', stringedArray);
};

export default findByCategory; 