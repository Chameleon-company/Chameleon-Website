import chameleonHeader from "./images/Header-Chameleon.png";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  //State hook to capture Navbar's state
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="header-content">
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4  flex flex-wrap justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink
            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
            to="/"
          >
            <img
              src={chameleonHeader}
              alt=""
              style={{ height: "70px", width: "70px" }}
            />
          </NavLink>
          <button
            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center transition duration-500 ease-in-out" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col mx-auto lg:flex-row list-none lg:ml-auto ">
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:opacity-75 no-underline"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/news"
              >
                News and Insight
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/about_us"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/"
              >
                Support
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/iotResources"
              >
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;

