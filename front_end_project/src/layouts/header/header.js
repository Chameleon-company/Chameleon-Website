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

          <NavDropdown title="Services" id="services-dropdown">
            <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
            <NavDropdown.Item href="#">All Services</NavDropdown.Item>
          </NavDropdown>

          {/* following is routing and linked up fine, but dropdown menu wont show the names
          - needs to be fixed, this is temporary */}
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

            {/* <NavDropdown.Item href="cal">Event Calendar</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#">FAQ's</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#">Emerging tech</NavDropdown.Item> */}
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
