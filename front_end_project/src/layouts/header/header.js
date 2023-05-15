{/*
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Chameleon</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/newsletter">Newsletters</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/report">Report</Nav.Link>

          <NavDropdown title="Resources" id="resources-dropdown" class="nav-bar-dropdowns">
            <Nav.Item className='nav-bar-dropdown-items'>
              <Nav.Link href="/calendar" className='nav-bar-dropdown-items-a'>Events Calendar</Nav.Link>
            </Nav.Item>

            <Nav.Item className='nav-bar-dropdown-items'>
              <Nav.Link href="/faq">Emerging Tech</Nav.Link>
            </Nav.Item> 

            <Nav.Item className="nav-bar-dropdown-items">
              <Nav.Link href="/resources">Emerging Tech</Nav.Link>
            </Nav.Item> 

          </NavDropdown>

        </Nav>
        
        <Nav>
          <Nav.Link href="#">Login</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/hello">Demo Page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
*/}

import React from "react";
import {NavLink} from 'react-router-dom';
import './header.css';
import { useState } from "react";
import logo from './images/logo.jpg';

import { Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
  };

  return (
    
    <nav className = "navbar">
      <div className="brandLogo">
        <img src={logo} alt='Brand Logo'/>
      </div>
      <div className={`navLinks ${drop && "drop"}`}> 
        <NavLink className="link" to="/">HOME<div className="space"></div></NavLink>
        <NavLink className="link_portfolio" to="/portfolio">PORTFOLIO<div className="space"></div></NavLink>
        <NavLink className="link" to="/blog">BLOG<div className="space"></div></NavLink>
        <NavLink className="link" to="/newsletters">NEWSLETTERS<div className="space"></div></NavLink>
        <NavLink className="link" to="/contact">CONTACT<div className="space"></div></NavLink>
        <NavLink className="link" to="/about_us">ABOUT US<div className="space"></div></NavLink>

        {/*<NavLink className="link" to="/resource">RESOURCE<div className="space"></div></NavLink>*/}
        
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <NavLink className="link" to="/resource">RESOURCE</NavLink>
          <div className={`dropdown-content ${drop && "show"}`}>
            <NavLink to="/events">Events Calendar</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/emerging-tech">Emerging Tech</NavLink>
          </div>
        </div>

        <NavLink className="link_login" to="/login">
          <button className="loginButton">LOGIN</button>
        </NavLink>
        
      </div>

    </nav>

  );
}

export default Header