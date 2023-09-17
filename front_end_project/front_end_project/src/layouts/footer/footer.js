import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react';

function Footer() {
  return (
    <footer className="mt-5">
      <Container className="text-center">
        <Row>
          <Col xs={6}>
            <img
              alt="Company Logo"
              src={require('../../assets/logo.png')}
              className="img-fluid"
            />
            <h1>CHAMELEON</h1>
            <p>Striving to create a smarter world</p>
          </Col>
          <Col xs={3}>
            <h5>Contact Us</h5>
            <p> Phone Number: +611111111</p>
            <p>Email: chameleon@gmail.com</p>
          </Col>
          <Col xs={3}>
            <h5>JOIN OUR NEWSLETTER</h5>
            <Form.Group>
              <div className="input-container">
                <Form.Control type="email" placeholder="Enter your email" />
                <p></p>
                <Button
                  variant="orange"
                  type="submit"
                  style={{ backgroundColor: 'orange', color: 'white' }}
                >
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <p>&copy; CHAMELEON 2023</p>
      </Container>
    </footer>
  );
}

export default Footer;
