export const storeUserInfo = (token) => {
    localStorage.setItem('userToken', JSON.stringify(token))
}

export const clearUserInfo = () => {
    localStorage.removeItem('userToken');
}

export const getUserInfo = () => {
   const token = JSON.parse(localStorage.getItem('userToken'));
   return token;
}