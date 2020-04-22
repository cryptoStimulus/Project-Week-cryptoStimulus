

export function makeUser(formData) {

    const user = {
        userName: formData.get('username'),
        email: formData.get('email'),
    };

    return user;
}

// import { createUsername } from './utils.js'; ====> needs to be imported into preferences page when ready???
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