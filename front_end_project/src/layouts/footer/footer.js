import chameleonLogo from "../../assets/ChameleonLogo.png";
import deakinLogo from "./assets/Footer-Deakin.png";
import facebookLogo from "./assets/Footer-Facebook.png";
import twitterLogo from "./assets/Footer-Twitter.png";
import instagramLogo from "./assets/Footer-Instagram.png";
import emailLogo from "./assets/Footer-Email.png";
import React, { useState, useEffect } from 'react';

const Footer = () => {
  // Retrieve the theme from sessionStorage or default to the user's preference or 'dark'
  const storedTheme = sessionStorage.getItem('theme') || (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Set the initial theme state
  const [theme, setTheme] = useState(storedTheme);

  // Update sessionStorage whenever the theme changes
  useEffect(() => {
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


  return (
    <footer className="mt-auto">
      <div className="footer-content">
        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4 justify-center">
            <a href="/" className="mr-4">
              <img
                src={chameleonLogo}
                alt="Chameleon Logo"
                className="w-20 h-20"
              />
            </a>
            <div>
              <span className="">Chameleon Company</span>
              <div className="flex">
                {/* Social media */}
                <a href="/" className="mx-1">
                  <img
                    src={instagramLogo}
                    alt="Instagram Logo"
                    className="w-10 h-10 md:w-8 md:h-8"
                  />
                </a>
                <a href="/" className="mx-1">
                  <img
                    src={facebookLogo}
                    alt="Facebook Logo"
                    className="w-10 h-10 md:w-8 md:h-8"
                  />
                </a>
                <a href="/" className="mx-1">
                  <img
                    src={twitterLogo}
                    alt="Twitter Logo"
                    className="w-10 h-10 md:w-8 md:h-8"
                  />
                </a>
                <a href="/" className="mx-1">
                  <img
                    src={emailLogo}
                    alt="Email Logo"
                    className="w-10 h-10 md:w-8 md:h-8"
                  />
                </a>
              </div>
              <span className=" text-xs">
                © 2023 Copyright reserved by Chameleon
              </span>
            </div>
          </div>
          <div className="text-center font-bold text-2xl mb-3">
            <div>Contact us</div>
            <div>E: chameleon@deakin.edu.au</div>
          </div>
          <div className="flex justify-center mb-2">
            <img src={deakinLogo} alt="Deakin Logo" className="w-20 h-20" />
          </div>
        </div>
        <button onClick={toggleTheme} className="mt-2 mb-2 ml-3 me-1">Theme Switch</button>

      </div>
      <style>
        {`
          .footer-content {

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
    </footer>
  );
};

export default Footer;
