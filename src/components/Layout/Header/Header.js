import React from 'react';
import './Header.css';

const Header = ({ title, darkMode, onToggleDarkMode }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <button 
        className="theme-toggle"
        onClick={onToggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;