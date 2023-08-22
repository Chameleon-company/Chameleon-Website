import Logo from '../../assets/logo.png';
import './footer.css'
import FacebookLogo from '../../pages/homepage/images/Facebook.jpg'
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-row-container'>
          <img className='brand-logo-container' src={Logo} alt='Brand Logo' />
          <div className='column-container'>
            <div className='icons-container'>
              <img className='icon-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icon-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icon-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icon-container' src={FacebookLogo} alt='Brand Logo' />
            </div>
            <p>
              © Copyright reserved by Chameleon
            </p>
          </div>
        </div>
        <div className='column-container-center'>
          <h2 className='center-text-title'>
            Contact Us
          </h2>
          <h6 className='center-text'>
            PH: 03 5975 6586
          </h6>
          <h6 className='center-text'>
            E: info@chameleon.com.au
          </h6>
        </div>
        <div className='sponsor-logo-container'>
          <img src={Logo} className='brand-logo-container' alt="Sponsor's Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
