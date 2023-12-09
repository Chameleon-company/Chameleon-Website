import chameleonHeader from "./images/Header-Chameleon.png";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react";

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

              <li>
                <div class="relative w-full flex flex-nowrap items-stretch">
                  <input
                    type="search"
                    class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary w-48"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />

                  <button
                    class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>

              {/* <li className="nav-item">
                <input
                  type="search"
                  class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1" />

              </li>

              <li className="nav-item">
                <button
                  class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </li> */}

            </ul>

            <div>

            </div>

            {/* <div class="relative ml-10 text-gray-600 lg:block hidden">
              <input
                class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search">
              </input>
              <button type="submit" class="absolute right-0 top-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div> */}


          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

