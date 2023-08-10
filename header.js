// {
// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import './header.css';

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand to="#">Chameleon</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link to="/">Home</Nav.Link>
//           <Nav.Link to="/portfolio">Portfolio</Nav.Link>
//           <Nav.Link to="/blog">Blog</Nav.Link>
//           <Nav.Link to="/newsletter">Newsletters</Nav.Link>
//           <Nav.Link to="/contact">Contact</Nav.Link>
//           <Nav.Link to="/about">About us</Nav.Link>
//           <Nav.Link to="/report">Report</Nav.Link>

//           <NavDropdown title="Resources" id="resources-dropdown" class="nav-bar-dropdowns">
//             <Nav.Item className='nav-bar-dropdown-items'>
//               <Nav.Link to="/calendar" className='nav-bar-dropdown-items-a'>Events Calendar</Nav.Link>
//             </Nav.Item>

//             <Nav.Item className='nav-bar-dropdown-items'>
//               <Nav.Link to="/faq">Emerging Tech</Nav.Link>
//             </Nav.Item> 

//             <Nav.Item className="nav-bar-dropdown-items">
//               <Nav.Link to="/resources">Emerging Tech</Nav.Link>
//             </Nav.Item> 

//           </NavDropdown>

//         </Nav>
        
//         <Nav>
//           <Nav.Link to="#">Login</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link to="/hello">Demo Page</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;
// }

import React from "react";
import {NavLink} from 'react-router-dom';
import './header.css';
import { useState } from "react";
import logo from './images/logo.jpg';

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

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
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/">HOME<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/portfolio">PORTFOLIO<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/blog">BLOG<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/newsletter">NEWSLETTERS<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/contact">CONTACT<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/about_us">ABOUT US<div className="space"></div></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/report">REPORT<div className="space"></div></NavLink>

        {/*<NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/resource">RESOURCE<div className="space"></div></NavLink>*/}
        
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <NavLink className={({ isActive }) => (isActive ? 'link_portfolio' : 'link')} to="/resource">RESOURCE</NavLink>
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