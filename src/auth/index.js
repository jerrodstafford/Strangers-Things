export const storeUserToken = (token) => {
    localStorage.setItem('userToken', token);
}

export const clearUserToken = () => {
    localStorage.removeItem('userToken');
}

export const getCurrentUser = () => {
    const isLoggedIn = localStorage.getItem('userToken');
    return isLoggedIn;
  }


