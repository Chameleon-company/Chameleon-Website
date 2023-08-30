import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { Nav } from 'react-bootstrap';
import Logo from '../../pages/homepage/images/logo.png';
import { SearchBar } from "./search_bar/SearchBar";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='main-navbar'>
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
          <div className="nav-item nav-links"><Nav.Link href="/">HOME</Nav.Link></div>
          <div className="nav-item nav-links"><Nav.Link href="/projects">PROJECTS</Nav.Link></div>
          <div className="nav-item nav-links"><Nav.Link href="/news">NEWS</Nav.Link></div>
          <div className="nav-item nav-links"><Nav.Link href="/about">ABOUT</Nav.Link></div>
          <div className="nav-item nav-links"><Nav.Link href="/contact">CONTACT</Nav.Link></div>
          <div className="nav-item nav-links"><Nav.Link href="/support">SUPPORT</Nav.Link></div>
          <div className="search-bar">
            <SearchBar />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;