import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="top-bar">
        <div 
            className={darkMode ? 'dark-button active' : 'dark-button'}
            onClick={toggleDarkMode}
        />
        {/* <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle active' : 'toggle'}
        />
      </div> */}
    </nav>
  );
};

export default Navbar;
