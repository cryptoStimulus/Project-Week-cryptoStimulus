

export function makeUser(formData) {
    return {
        userName: formData.get('username'),
        email: formData.get('email'),
    };
}

// import { createUsername } from './utils.js'; ====> needs to be imported into preferences page when ready???
// I'd say this is more of a 'getUserData' function than a 'create'
export const createUsername = () => {
    const userNameCommon = JSON.parse(localStorage.getItem('userData'));
    return userNameCommon;
};

export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}