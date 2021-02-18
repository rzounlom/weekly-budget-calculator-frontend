import axios from "axios";

const accessTokenKey = "accessToken";

export const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey);
};

export const isLoggedIn = () => {
  return !!localStorage.getItem(accessTokenKey);
};

export const logout = () => {
  localStorage.removeItem(accessTokenKey);
};

export const login = async (username, password) => {
  const headers = { "Content-Type": "application/json" };
  const body = { username, password };
  try {
    const {
      data: { token },
    } = await axios.post("http://localhost:5000/login", body, headers);
    console.log(token);
    localStorage.setItem(accessTokenKey, token);
    return token;
  } catch (err) {
    console.log(err);
  }
};
