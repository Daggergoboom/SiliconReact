import React, { useState } from 'react';
import SiliconLogotype from '../assets/images/logotype.svg';
import Hamburger from '../assets/images/icons/hamburger.svg';
import User from '../assets/images/icons/user.svg';

const MainNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkTheme', !darkMode);
    document.body.classList.toggle('lightTheme', darkMode);
  };

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="container">
        <a href="/">
          <img src={SiliconLogotype} alt="Silicon logotype" />
        </a>

        {/* Dark mode toggle */}
        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              type="checkbox"
              id="darkmode-switch"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Hamburger menu button */}
        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded={menuExpanded}
          aria-label="toggle navigation"
          onClick={handleMenuToggle}
        >
          <img src={Hamburger} alt="Menu" />
        </button>

        {/* Main menu */}
        <ul
          id="main-menu"
          className={`main-menu ${menuExpanded ? '' : 'hide'}`}
        >
          <li>
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li>
  <a href="#contact" className="nav-link">
    Contact
  </a>
</li>
          <li>
            <a href="#" className="btn btn-primary">
              <img src={User} alt="Sign-up" />
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;