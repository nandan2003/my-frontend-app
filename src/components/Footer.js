import React from 'react';
import './Footer.css'; // Create a CSS file for styles

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} My App. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
