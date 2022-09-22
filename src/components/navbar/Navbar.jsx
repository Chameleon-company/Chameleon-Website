import React from 'react'
import {NavLink} from 'react-router-dom';
import './navbar.css';
import BrandLogo from '../../assets/images/brandLogo.png'
function Navbar() {
  return (
    <nav className = "navbar">
      <div className="brandLogo">
        <img src={BrandLogo} alt='Brand Logo'/>
      </div>
      <div className = "navLinks">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/resources">Resources</NavLink>
        <NavLink className="link" to="/blog">Blog</NavLink>
        <NavLink className="link" to="/services">Our Services</NavLink>
        <NavLink className="link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="link" to="/aboutus">About Us</NavLink>
        <NavLink className="link login" to="/login">
        <button className="navButton">Login</button>
        </NavLink>
         
        </div>
    </nav>
  )
}

export default Navbar