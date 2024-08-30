import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const scrollToBottom = (e) => {
        e.preventDefault(); 
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          OneNDF
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="#" onClick={scrollToBottom}  className="navbar-link">Cart</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Signup</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
