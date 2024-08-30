import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
  const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/user');
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );

  
}


export default AuthProvider;