import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const tokenUrl = process.env.NEXT_PUBLIC_API_URL_Token;
const registerUrl =
  process.env.NEXT_PUBLIC_API_URL_Register ||
  (tokenUrl ? tokenUrl.replace(/\/token\/?$/, "/register/") : "");

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
  });

  async function login(username, email, password) {
    const response = await axios.post(tokenUrl, { username, email, password });
    const decodedAccess = jwt.decode(response.data.access);
    const user = {
      username: decodedAccess.username,
      email: decodedAccess.email,
    };

    setState({ tokens: response.data, user });
    localStorage.setItem("Auth", JSON.stringify(user));
    localStorage.setItem("Tokens", JSON.stringify(response.data));
  }

  async function signup({ name, username, email, password }) {
    await axios.post(registerUrl, {
      username,
      email,
      password,
      first_name: name,
    });
    await login(username, email, password);
  }

  function logout() {
    setState({ tokens: null, user: null });
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}
