import React from 'react';
import '../styles/navbar.css';
import { FaBars, FaSearch, FaGlobe, FaThLarge, FaEnvelope, FaBell } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
      
        <img
          src="https://i.pinimg.com/1200x/12/a0/af/12a0af8a3e7afe46470fc35b7cd30a23.jpg"
          alt="logo"
          className="logo"
        />
        <FaBars className="icon menu-icon" onClick={toggleSidebar} />
        <span className="greeting">Hello Thomas <span className="wave">👋</span></span>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Search Here . . ." />
        <FaSearch className="search-icon" />
      </div>

      <div className="navbar-right">
        <FaGlobe className="icon" />
        <span className="lang-text">English</span>
        <FaThLarge className="icon" />
        <FaEnvelope className="icon" />
        <FaBell className="icon" />
        <div className="profile">
          <img src="https://i.pinimg.com/736x/eb/b5/05/ebb5056708c6cefc1823bc9cb55249b1.jpg" alt="profile" />
          <div className="profile-info">
            <span className="name">Jhon Smith</span>
            <span className="status">● online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
