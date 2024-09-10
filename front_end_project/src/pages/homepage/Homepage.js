import React, { useState } from 'react';
import Screen from '../../components/app/Screen';
import './home.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const title = "Chameleon Website";
  const content = "At Chameleon, we thrive on innovation and diversity. With multiple projects like Melbourne Open Data and EV Tools, we explore various subsets of computer science. From software design and development to data science, AI, computer security, and project management, our team is dedicated to advancing technology and delivering exceptional results. Join us as we shape the future with cutting-edge solutions and unparalleled expertise.";

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div className="homepage-background">
      <div className="background-layer"></div>
      <div className="content-layer">
        <Container fluid>
          {/* Header */}
          <Header />

          <Container className='h-100 p-3'>
            {/* Content */}
            <Row>
              <Col md={12} xl={7}>
                <div className='bg-transparent container-fluid'>
                  <h1 className='display-2 gradient-heading'>{title}</h1>
                </div>
              </Col>

              <Col md={12} xl={5} className='py-5'>
                <p>{content}</p>
              </Col>
            </Row>
            <Button onClick={toggleDarkMode}>
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </Button>
          </Container>

          {/* Footer */}
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
