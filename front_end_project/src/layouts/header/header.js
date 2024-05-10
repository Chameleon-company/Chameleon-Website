import chameleonHeader from "./images/Header-Chameleon.png";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react";
import SearchBox from "./SearchBox";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <header className="header-content mx-1 my-0 mr-1 justify-between">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
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
            <div className="flex justify-end items-center flex-grow">
              <SearchBox />
              <button
                className="ml-4 text-xl leading-none px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
                onClick={toggleTheme}
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
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
                      href="/"
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
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75 no-underline"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                </ul>
                <hr className="border-gray-200 dark:border-gray-600" />
              </div>
            </div>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleNavbar}
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


              ${theme === 'dark' ? `
              background-color: #2D6039;
              color: white;
            ` : `
              background-color: white;
              color: black;
            `}
          }

              .header-content {
                ${theme === 'dark' ? `
              background-color: black;
              color: white;
            ` : `
              background-color: white;
              color: black;
            `}
          }

              #root {
                ${theme === 'dark' ? `
              background-color: #151818;
            ` : `
              background-color:  white;
            `}
          }

              .nav-item a {
                ${theme === 'dark' ? `
              color: white;
            ` : `
              color: black;
            `}
          }
        `}
            </style>
          </div>
          );
};

          export default Header;;