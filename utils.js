

export function makeUser(formData) {

    const user = {
        userName: formData.get('username'),
        email: formData.get('email'),
    };

    return user;
}

// import { createUsername } from './utils.js'; ====> needs to be imported into preferences page when ready???
export const createUsername = () => {
    const userNameCommon = JSON.parse(localStorage.getItem('username'));
    return userNameCommon;
};