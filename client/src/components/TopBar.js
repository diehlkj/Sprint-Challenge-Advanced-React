import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

export const toggleInverse = currentBool => {
    return currentBool;
}

const TopBar = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(toggleInverse(!darkMode));
    };
    return (
        <nav className="top-bar">
            <div 
                className={darkMode ? 'dark-button active' : 'dark-button'}
                onClick={toggleDarkMode}
            />
        </nav>
    );
};

export default TopBar;
