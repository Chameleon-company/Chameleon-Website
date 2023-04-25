import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

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

          <NavDropdown title="Resources" id="resources-dropdown">
            <NavDropdown.Item href="#">Event Calendar</NavDropdown.Item>
            <NavDropdown.Item href="#">FAQ's</NavDropdown.Item>
            <NavDropdown.Item href="#">Emerging tech</NavDropdown.Item>
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
