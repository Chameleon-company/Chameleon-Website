import chameleonLogo from "../../assets/ChameleonLogo.png";
import deakinLogo from "./assets/Footer-Deakin.png";
import facebookLogo from "./assets/Footer-Facebook.png";
import twitterLogo from "./assets/Footer-Twitter.png";
import instagramLogo from "./assets/Footer-Instagram.png";
import emailLogo from "./assets/Footer-Email.png";
import themeSwitch from "./assets/theme-switch.png";
import React, { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  // Retrieve the theme from sessionStorage or default to the user's preference or 'dark'
  const storedTheme =
    sessionStorage.getItem("theme") ||
    (window?.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  // Set the initial theme state
  const [theme, setTheme] = useState(storedTheme);

  // Update sessionStorage whenever the theme changes
  useEffect(() => {
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <footer class="bg-white">
      <div class="mx-auto w-full max-w-screen-xl p-20 py-6 lg:py-8 footer-content">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center">
              <a href="/" class="flex items-center">
                <img
                  src={chameleonLogo}
                  className="me-3 w-20 h-20"
                  alt="Chameleon Logo"
                />
              </a>
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Chameleon Company
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Projects
              </h2>
              <ul class="text-gray-500 font-medium ">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    EV Adoption Tools
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Melbourne Open Data
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Website Uplift
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    Technologies
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    Statistics
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    Innovations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Contact Us
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Phone Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Send an Email
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center">
            © 2023 Copyright Rights Reserved by Chameleon
          </span>
          {/* Social */}
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="/" className="mx-1">
              <img
                src={instagramLogo}
                alt="Instagram Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="/" className="mx-1">
              <img
                src={facebookLogo}
                alt="Facebook Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="/" className="mx-1">
              <img
                src={twitterLogo}
                alt="Twitter Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="/" className="mx-1">
              <img
                src={emailLogo}
                alt="Email Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="/">
              <img
                src={themeSwitch}
                alt="Theme Switch Logo"
                className="w-6 h-6 md:w-8 md:h-8 switcher"
                onClick={toggleTheme}
              />
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
          .footer-content {

            ${
              theme === "dark"
                ? `
              background-color: #016241;
              color: white;
              h2 {
                color: white;
              }
              a {
                color: #D1E1C4;
                text-decoration: none;
              }
              a:hover {
                color: white;
              }
              span {
                color: #D1E1C4;
              }
            `
                : `
              background-color: white;
              color: black;
            `
            }
          }

          .header-content {
            ${
              theme === "dark"
                ? `
              background-color: #016241;
              color: white;
            `
                : `
              background-color: white;
              color: black;
            `
            }
          }

          #root {
            ${
              theme === "dark"
                ? `
              background-color: #151818;
            `
                : `
              background-color:  white;
            `
            }
          }

          .nav-item a {
            ${
              theme === "dark"
                ? `
              color: white;
            `
                : `
              color: black;
            `
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
