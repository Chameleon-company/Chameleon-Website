import chameleonHeader from "./images/Header-Chameleon.png";
import { useState } from "react";
import './header.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { navigation } from '../../constants/navigation';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignIn = () => { setIsSignedIn(true); };

  return (
    <>
      <Navbar expand="lg" className='header-content'>
        <Container>
          <Navbar.Brand href="#home" className='header-content'> <img alt="chameleon-logo" src={chameleonHeader} width="30" height="30" className="d-inline-block align-top" />{' '} Chameleon </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto"> {Array.isArray(navigation) && navigation.map((nav) => (<Nav.Link className='header-content' key={nav.id} href={nav.link}> {nav.name} </Nav.Link>))} </Nav>

            {!isSignedIn ? (
              <Button id="sign-in" variant="outline-success" className='header-content' onClick={handleSignIn}>Sign In</Button>
            ) : (
              <Navbar.Text className="header-content"> Signed in as: <a href="/profile">John Doe</a> </Navbar.Text>
            )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;