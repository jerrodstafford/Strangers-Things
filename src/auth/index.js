export const storeUserToken = (token) => {
    localStorage.setItem('userToken', token)
}

export const storeUserCredentials = (user, pass) => {
    localStorage.setItem('username', user)
    localStorage.setItem('password', pass)
}

export const clearUserInfo = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username')
    localStorage.removeItem('password')
}

export const getUserToken = () => {
   const token = localStorage.getItem('userToken');
   return token;
}

export const getUsername = () => {
    const currentUser = localStorage.getItem('username');
    return currentUser
}