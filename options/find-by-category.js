const findByCategory = (preferencesArray, initialDataArray) => {
    const updatedOptionsArray = [];

    // cool nested loop!
    for (let i = 0; i < preferencesArray.length; i++) {
        const preference = preferencesArray[i];
    
        for (let x = 0; x < initialDataArray.length; x++) {
            const companyObj = initialDataArray[x];
            
            if (preference === companyObj.category){
                updatedOptionsArray.push(companyObj);
            }
        }
    }
    const stringedArray = JSON.stringify(updatedOptionsArray);
    localStorage.setItem('options', stringedArray);
};

export default findByCategory; 