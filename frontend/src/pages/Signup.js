import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css'; 

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      navigate('/login'); // Navigate to login page after successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
