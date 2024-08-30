import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import the CSS file

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Wait for login to complete
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error); // Handle login error
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
