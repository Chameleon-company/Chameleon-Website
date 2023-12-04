import chameleonHeader from "./images/Header-Chameleon.png";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  //State hook to capture Navbar's state
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-[#050617] px-2 py-3">
      <div className="container px-4  flex flex-wrap justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            <img
              src={chameleonHeader}
              alt=""
              style={{ height: "70px", width: "70px" }}
            />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/projects"
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/news"
              >
                News and Insight
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/about_us"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/"
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/resources"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75 no-underline"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
