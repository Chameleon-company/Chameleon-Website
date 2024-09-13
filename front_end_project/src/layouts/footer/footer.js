import chameleonLogo from "../../assets/ChameleonLogo.png";
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { colors } from "../../constants/colors";

const Footer = () => {
  // Retrieve the theme from sessionStorage or default to the user's preference or 'dark'
  const storedTheme =
    sessionStorage.getItem("theme") ||
    (window?.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
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
    <footer className="footer-content">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 lg:mb-0">
            <a href="/" className="flex p-1">
              <img
                src={chameleonLogo}
                alt="Chameleon Logo"
                className="w-10 h-10"
              />
            </a>
          </div>

          {/* Copyrights Content */}
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <span className="text-xs">
              © <b>2023 Chameleon Website by</b> Chameleon
              <span className="hidden sm:inline">
                <b>| All Rights Reserved | Powered by</b> Deakin University
              </span>
            </span>
          </div>

          {/* Social Media */}
          <div className="flex items-center mb-4 lg:mb-0">
            <a
              href="https://www.instagram.com/deakinuniversity/?hl=en"
              className="mx-1"
            >
              <FaInstagram
                color={theme === "dark" ? colors.white : colors.black}
                size={30}
              />
            </a>
            <a
              href="https://www.facebook.com/DeakinUniversity"
              className="mx-1"
            >
              <FaFacebookSquare
                color={theme === "dark" ? colors.white : colors.black}
                size={30}
              />
            </a>
            <a href="https://twitter.com/Deakin" className="mx-1">
              <FaTwitterSquare
                color={theme === "dark" ? colors.white : colors.black}
                size={30}
              />
            </a>
            <a href="mailto:info@chameleon.com.au" className="mx-1">
              <MdOutlineEmail
                color={theme === "dark" ? colors.white : colors.black}
                size={30}
              />
            </a>
          </div>

          {/* Light-Dark Theme */}
          <div className="flex items-center">
            <button onClick={toggleTheme} className="p-2">
              {theme === "dark" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .footer-content {

            ${
              theme === "dark"
                ? `
              background-color: ${colors.primaryDark};
              color: white;
            `
                : `
              background-color: ${colors.primaryLight};
              color: black;
            `
            }
            position: relative;
            bottom: 0;
            width: 100%;
          }

          .header-content {
            ${
              theme === "dark"
                ? `
              background-color: ${colors.primaryDark};
              color: white;
            `
                : `
              background-color: ${colors.primaryLight};
              color: black;
            `
            }
          }

          #root {
            ${
              theme === "dark"
                ? `
              background-color: #333333;
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
