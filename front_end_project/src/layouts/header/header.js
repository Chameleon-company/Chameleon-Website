import React from "react";
import {NavLink} from 'react-router-dom';
import './header.css';
import { useState } from "react";
import Logo from './images/logo.png';

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { SearchBar } from "./search_bar/SearchBar";

function Header() {
  
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
  };

  return (
    
    <nav className = "navbar">
      <div className="brandLogo">
        <img src={Logo} alt='Brand Logo'/>
      </div>
      <div className={`navLinks ${drop && "drop"}`}> 
        <Nav.Link className="link" href="/">HOME<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/projects">PROJECTS<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/news">NEWS<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/about">ABOUT<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/contact">CONTACT<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/support">SUPPORT<div className="space"></div></Nav.Link>
        <SearchBar/>
      </div>

    </nav>

  );
}

export default Header