import React from "react";
import logo from "./images/Logo_No_Background.png";
import profile from "./images/profile.jpg";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../css/Header_extra.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="navbar bg-dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Chameleon logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white ml-3 mt-2" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/news">
              NEWS
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/about_us">
              ABOUT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/contact">
              CONTACT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="">
              SUPPORT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/iotResources">
              RESOURCES
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mt-2 mb-2 ml-3 me-1"
                aria-label="Search"
              />
              <Button className="mt-2 mb-2 ml-3 me-1">Search</Button>
            </Form>
            <div className="position-relative">
              <img
                src={profile}
                className="rounded-circle ml-3"
                alt="User Profile Avatar"
                height="40"
                width="50"
              />
              <div className="position-absolute" style={{ left: "10%", top: "70%" }}>
                <p className="text-white" onClick={toggleMenu}>Me▼</p>
                {isMenuOpen && (
                  <div className="user_profile_menu" id="mySelect">
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                      <img
                        style={{ marginLeft: '50px' }}
                        src={profile}
                        className="rounded-circle ml-3"
                        alt="User Profile Avatar"
                        height="100"
                        width="100"
                      />
                      <div style={{ marginLeft: '10px' }}>
                        <p className="blod_font">Name Surname</p>
                        <p className="blod_font">Product Designer</p>
                      </div>
                    </div>
                    <div className="button1">
                      {/* <p className="view_profile_button">View Profile</p> */}
                      <p className="view_profile_button">View Profile</p>
                    </div>

                    <div className="temp1">
                      <div className="temp2">
                        {/* <p className="underline">________________________________________</p> */}
                        <p >_________________________________________________</p>
                        <p className="blod_font1">Account</p>
                        <p>Settings and Privacy</p>
                        <p>Help</p>
                        <p>Language</p>
                        {/* <p className="underline">________________________________________</p> */}
                        <p >_________________________________________________</p>
                        <p className="blod_font1">Manage</p>
                        <p>Posts and Activity</p>
                        <p>Project</p>
                        {/* <p className="underline">________________________________________</p> */}
                        <p >_________________________________________________</p>
                        <p>Sign Out</p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
