const BASE_URL = process.env.REACT_APP_BASE_URL;


export const userLogin = async (uName, pWord) => {
        const userCredentials = { username: uName, password: pWord }
      try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
             user: userCredentials 
          })
        });
        const result = await response.json();
        const webToken = result.data.token;
        localStorage.setItem('userToken', webToken);
        return webToken;
      } catch(error) {throw error}
    }

export const userRegistration = async (newUsername, newPassword) => {
    const userLogin = { username: newUsername, password: newPassword }
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
           user: userLogin 
        })
      });
      const result = await response.json()
      const webToken = result.data.token;
      localStorage.setItem('userToken', webToken);
      return webToken;
    } catch(error) {throw error}
    }