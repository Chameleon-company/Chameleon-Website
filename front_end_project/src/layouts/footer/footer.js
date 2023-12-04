import chameleonLogo from "../../assets/ChameleonLogo.png";
import deakinLogo from "./assets/Footer-Deakin.png";
import facebookLogo from "./assets/Footer-Facebook.png";
import twitterLogo from "./assets/Footer-Twitter.png";
import instagramLogo from "./assets/Footer-Instagram.png";
import emailLogo from "./assets/Footer-Email.png";
import React, { useState, useEffect } from "react";

const Footer = () => {
  // Retrieve the theme from sessionStorage or default to the user's preference or 'dark'
  const storedTheme =
    sessionStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
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
    <footer className="">
      <style>
        {`
          .footer-content {

            ${
              theme === "dark"
                ? `
              background-color: black;
              color: white;
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
              background-color: black;
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
              background-color: rgb(30, 43, 43);
            `
                : `
              background-color: aqua;
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
