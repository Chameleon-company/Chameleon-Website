import React from 'react'
import {NavLink} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className = "navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/resources">Resources</NavLink>
        <NavLink className="navlink" to="/blog">Blog</NavLink>
        <NavLink className="navlink" to="/services">Our Services</NavLink>
        <NavLink className="navlink" to="/portfolio">Portfolio</NavLink>
        <NavLink className="navlink" to="/aboutus">About Us</NavLink>
        <NavLink className="navlink" to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar