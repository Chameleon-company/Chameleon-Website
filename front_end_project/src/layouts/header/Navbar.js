import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { Nav } from 'react-bootstrap';
import Logo from './images/logo.png';
import { SearchBar } from "./search_bar/SearchBar";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className="brand-logo">
          <img src={Logo} alt='Brand Logo' />
        </div>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <MdOutlineClose color='white' /> : <GiHamburgerMenu color='white' />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className="search-bar-mobile">
            <SearchBar />
          </div>
          <Nav.Link className="nav-item nav-links" href="/">HOME</Nav.Link>
          <Nav.Link className="nav-item nav-links" href="/projects">PROJECTS</Nav.Link>
          <Nav.Link className="nav-item nav-links" href="/news">NEWS</Nav.Link>
          <Nav.Link className="nav-item nav-links" href="/about">ABOUT</Nav.Link>
          <Nav.Link className="nav-item nav-links" href="/contact">CONTACT</Nav.Link>
          <Nav.Link className="nav-item nav-links" href="/support">SUPPORT</Nav.Link>
          <div className="search-bar">
            <SearchBar />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;