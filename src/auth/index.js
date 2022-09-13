export const storeUserToken = (token) => {
    localStorage.setItem('userToken', token);
}

export const clearUserToken = () => {
    localStorage.removeItem('userToken');
}

export const getUserToken = () => {
    localStorage.getItem('userToken');
}