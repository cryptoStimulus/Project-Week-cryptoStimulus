

export function makeUser(_formData) {

    const user = {
        userName: _formData.get('username'),
        email: _formData.get('email'),
    };

    return user;
}

