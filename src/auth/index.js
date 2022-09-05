export const storeUserInfo = () => {
    localStorage.setItem('userToken', 'webToken')
}

export const clearUserInfo = () => {
    localStorage.removeItem('userToken');
}

export const getUserInfo = () => {
   localStorage.getItem('userToken');
}