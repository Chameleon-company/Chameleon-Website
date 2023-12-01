import chameleonLogo from "../../assets/ChameleonLogo.png";
import deakinLogo from "./assets/Footer-Deakin.png";
import facebookLogo from "./assets/Footer-Facebook.png";
import twitterLogo from "./assets/Footer-Twitter.png";
import instagramLogo from "./assets/Footer-Instagram.png";
import emailLogo from "./assets/Footer-Email.png";
import "../theme/theme.css";

const Footer = () => {
  const myFunctionD = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    console.log('Toggle theme mode');
  };

  const myFunctionL = () => {
    var element = document.body;
    element.classList.toggle("light-mode");
    
    console.log('Toggle theme mode');
  };
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


  return (
    <footer className="bg-[#050617] p-3 mt-auto">
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
      <button onClick={prefersDarkMode ? myFunctionL : myFunctionD} className="mt-2 mb-2 ml-3 me-1">Theme Switch</button>
      </div>
    </footer>
  );
};

export default Footer;
