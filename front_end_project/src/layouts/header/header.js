import chameleonHeader from "./images/Header-Chameleon.png";
<<<<<<< HEAD
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
=======
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import './header.css'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('status') === 'logged in')
    {
      setLoggedIn(true);
    }
    else
    {
      setLoggedIn(false);
    }
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const storedTheme = sessionStorage.getItem('theme') || (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <header className="header-content mx-0 my-0 mr-1 justify-between">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="nav-responsive">
            <div className="flex justify-start lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                href="/"
              >
                <img
                  src={chameleonHeader}
                  alt=""
                  style={{ height: "48px", width: "48px" }}
                />
              </a>
            </div>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleNavbar}
            >
              <FaBars />
            </button>
            </div>
            <div className="flex justify-end items-center flex-grow nav-links-margin">
              {/* <SearchBox /> */}
          
              <div
                className={
                  "lg:flex flex-grow items-center transition duration-500 ease-in-out ml-4" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >
                <ul className="flex flex-col mx-auto lg:flex-row list-none lg:ml-auto ">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/news"
                    >
                      News and Insight
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/about_us"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/support"
                    >
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/iotResources"
                    >
                      Resources
                    </a>
                  </li>
                    {loggedIn && ( // Conditional rendering for the Profile button
                    <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                       href="/profile"
                    >
                       Profile
                    </a>
                  </li>
                   )}

                  <li className="nav-item">
                    { loggedIn ? 
                      <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/logout"
                      >
                        Log out
                      </a>  :
                      <a
                        className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                        href="/login"
                      >
                        Login
                      </a>
                    }
                  </li>
                </ul>
                <hr className="border-gray-200 dark:border-gray-600" />
              </div>
            </div>
            
          </div>
        </nav>
      </header>
    </div>
>>>>>>> origin/Password-Backend-Validation
  );
};

export default Header;