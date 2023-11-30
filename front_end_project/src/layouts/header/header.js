import chameleonHeader from "./images/Header-Chameleon.png";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react";
import "../theme/theme.css";

const Header = () => {
  //State hook to capture Navbar's state
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="header-content">
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4  flex flex-wrap justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
            href="/"
          >
            <img
              src={chameleonHeader}
              alt=""
              style={{ height: "70px", width: "70px" }}
            />
          </a>
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
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:opacity-75 no-underline"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/news"
              >
                News and Insight
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/about_us"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/"
              >
                Support
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/iotResources"
              >
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75 no-underline"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
