import React from 'react'
import SiliconLogotype from '../assets/images/logotype.svg'
import Hamburger from '../assets/images/icons/hamburger.svg'
import User from '../assets/images/icons/user.svg'
const MainNav = () => {
  return (
<nav className="main-nav" aria-label="main navigation">
    <a href="#main" className="skip-link">Skip to main content</a>

    <div className="container">
      <a href="/">
        <img src={SiliconLogotype} alt="Silicon logotype" />
      </a>

            <div className="darkmode-toggle">
                <p>Dark Mode</p>
                <label className="toggle">
                <input type="checkbox" id="darkmode-switch"/>""
                <span className="slider"></span>
                </label>
            </div>

                <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
                    <img src={Hamburger} alt="" />
                </button>

                <ul id="main-menu" className="main-menu hide">
                <li>
                <a href="#" className="nav-link">Features</a>
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
  )
}

export default MainNav