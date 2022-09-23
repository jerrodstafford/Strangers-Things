export const storeUserToken = (token) => {
    localStorage.setItem('userToken', token);
}

export const clearUserInfo = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userToken');
}

export const getCurrentUser = () => {
    if(!localStorage.getItem('userToken')) {
        return;
  }
    
    const isLoggedIn = localStorage.getItem('userToken');
    return isLoggedIn;
}


