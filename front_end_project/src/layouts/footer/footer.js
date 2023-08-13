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
            <div>
              <img className='icons-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icons-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icons-container' src={FacebookLogo} alt='Brand Logo' />
              <img className='icons-container' src={FacebookLogo} alt='Brand Logo' />
            </div>
            <p>
              © Copyright reserved by Chameleon
            </p>
          </div>
        </div>
        <div className='column-container-center'>
          <h3 className='center-text'>
            Contact Us
          </h3>
          <h6 className='center-text'>
            PH: 03 5975 6586
          </h6>
          <h6 className='center-text'>
            E: info@chameleon.com.au
          </h6>
        </div>
        <img className='brand-logo-container' src={Logo} alt="Sponsor's Logo" />
      </div>
    </footer>
  );
}

export default Footer;
