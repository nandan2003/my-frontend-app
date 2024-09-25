import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a CSS file for styles

const Header = () => {
  return (
    <header className="app-header">
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
