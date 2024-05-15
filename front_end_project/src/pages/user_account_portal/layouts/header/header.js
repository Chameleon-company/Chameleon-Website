import React, { useState } from "react";
import logo from "./images/Logo_No_Background.png";
import profile from "./images/profile.jpg";
import "./../../css/Header_extra.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Chameleon logo" className="logo" />
        </a>
        <div className="navbar-toggle" onClick={toggleMenu}>☰</div>
        <div className={`navbar-collapse ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-nav">
            <a href="/" className="nav-link">HOME</a>
            <a href="/projects" className="nav-link">PROJECTS</a>
            <a href="/news" className="nav-link">NEWS</a>
            <a href="/blog" className="nav-link">BLOG</a>
            <a href="/about_us" className="nav-link">ABOUT</a>
            <a href="/contact" className="nav-link">CONTACT</a>
            <a href="#" className="nav-link">SUPPORT</a>
            <a href="/iotResources" className="nav-link">RESOURCES</a>
            <div className="search-form">
              <input type="search" placeholder="Search" className="search-input"/>
              <button className="search-button">Search</button>
            </div>
            <div className="profile-container">
              <img src={profile} alt="User Profile Avatar" className="profile-img" />
              <p className="profile-menu-trigger" onClick={toggleMenu}>Me▼</p>
              {isMenuOpen && (
                <div className="user_profile_menu">
                  <div className="profile-details">
                    <img src={profile} alt="User Profile Avatar" className="profile-img-large" />
                    <div className="profile-text">
                      <p className="profile-name">Name Surname</p>
                      <p className="profile-role">Product Designer</p>
                    </div>
                  </div>
                  <div className="profile-action">
                    <p className="view-profile">View Profile</p>
                  </div>
                  <div className="profile-links">
                    <p className="profile-section">Account</p>
                    <p>Settings and Privacy</p>
                    <p>Help</p>
                    <p>Language</p>
                    <p className="profile-section">Manage</p>
                    <p>Posts and Activity</p>
                    <p>Project</p>
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;