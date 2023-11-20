import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

function Footer() {
  return (
    <Container className="footer-content">
      <a href="#"><img
        alt="Company Logo"
        src={require('../../assets/ChameleonLogo.png')}
        className="img-fluid"
        href="#"
        style={{ width: '300px' }}
      /></a>
      <Container className="socials">
        <Container className="social-icons">
          <a href="#"><img src={require('../../layouts/footer/assets/MicrosoftTeams-image (3).png')} alt="Link to Instagram"
            style={{ width: "40px", marginRight: '10px', height: '40px' }} /></a>
          <a href="#"><img src={require('../../layouts/footer/assets/MicrosoftTeams-image (4).png')} alt="Link to Instagram"
            style={{ width: "40px", marginRight: '10px', height: '40px' }} /></a>
          <a href="#"><img src={require('../../layouts/footer/assets/MicrosoftTeams-image (5).png')} alt="Link to Instagram"
            style={{ width: "40px", marginRight: '10px', height: '40px' }} /></a>
          <a href="#"><img src={require('../../layouts/footer/assets/MicrosoftTeams-image (6).png')} alt="Link to Instagram"
            style={{ width: "40px", marginRight: '10px', height: '40px' }} /></a>
        </Container>
        <p>&copy; 2023 Copyright reserved by Chameleon</p>
      </Container>
      <Container className="contact-menu">
        <h2><strong>Contact Us</strong></h2>
        <p>PH: 03 5975 6586</p>
        <p>E: info@chameleon.com.au</p>
      </Container>
      <img src={require('../../layouts/footer/assets/deakin.png')} alt="Deakin University Logo"
        style={{ width: '150px', height: '150px' }} />
    </Container>
  );
}

export default Footer;
