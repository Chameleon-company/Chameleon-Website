import React from "react";
import {NavLink} from 'react-router-dom';
import './navbar.css';
import BrandLogo from '../../assets/images/brandLogo.png'
import { useState } from "react";
import NavTailLogo from '../../assets/images/pngwing-1.png'

function Navbar() {
  
  const [drop, setDrop] = useState(false);

  return (
    
    <nav className = "navbar">
      <div className="brandLogo">
        <img src={BrandLogo} alt='Brand Logo'/>
      </div>
      <div className={`navLinks ${drop && "drop"}`}> 
        <NavLink className="link" to="/">Home<div className="space"></div></NavLink>
        <NavLink className="link" to="/resources">Resources<div className="space"></div></NavLink>
        <NavLink className="link" to="/blog">Blog<div className="space"></div></NavLink>
        <NavLink className="link" to="/services">Our Services<div className="space"></div></NavLink>
        <NavLink className="link" to="/portfolio">Portfolio<div className="space"></div></NavLink>
        <NavLink className="link" to="/aboutus">About Us<div className="space"></div></NavLink>
        <NavLink className="link_login" to="/login"><button className="navButton">Login</button></NavLink>
      </div>

      <div className="NavTailLogo"><img src={NavTailLogo} alt='Tail Logo'/></div>
      <div className={`nav_drop ${drop && "drop"}`}onClick={() => setDrop(!drop)}><div className="menu"></div></div>
    </nav>

  );
}

export default Navbar