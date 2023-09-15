import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './image/Background.png';
import Logo from './image/Chameleon_Logo.png';
import Google from './image/google.png';
import Linkedin from './image/linkedin.png';
import Microsoft from './image/microsoft.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


class Login extends Component {
  render() {
    return (
      <div style={{
        height: '100vh', 
        backgroundImage: `linear-gradient(to right, transparent 43.43%, white 0%), url(${Background})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        overflow: 'hidden' 
        }}>

        <Container fluid style={{ maxWidth: '80%', marginTop: '3%', border: '3px solid gray'}}>
          <Row> 
            <Col md={5} style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>                      
              <img src={Logo} alt="Logo" style={{ width: '50%', height: 'auto', marginBottom: '2rem' }} />
              <p style={{ fontSize: '1.7rem', fontWeight: 'bold', textAlign: 'center' }}>Enhancing life through IoT-Powered Smart City Solutions</p>
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '1px', backgroundColor: 'black' }}></div>
            </Col>

            <Col md={7} style={{ padding: '8%' }}>
              <h1 style={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Login</h1>

              <Form>
                <Form.Group controlId="formEmail" style={{ marginBottom: '2rem' }}>
                  <Form.Control type="Email" placeholder="EMAIL ADDRESS" style={{ backgroundColor: '#ccc', border: '1px solid black', height: '50px' }} />
                </Form.Group>

                <Form.Group controlId="formpassword" style={{ marginBottom: '2rem' }}>
                    <Form.Control type="password" placeholder="PASSWORD" style={{ backgroundColor: '#ccc', border: '1px solid black', height: '50px' }} />
                </Form.Group>

                <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'right' }}>
                  <a href="/signup">Sign-up?</a><br />
                  <a href="/forgot">Forgot password?</a>
                </p>

                <div className="d-flex justify-content-center mb-3">
                  <Button variant="success" type="submit" style={{ padding: '10px 80px', fontSize: '1rem' }}>
                    LOGIN
                  </Button>
                </div>

                <div className="d-flex justify-content-between">
                  <div style={{ backgroundColor: 'green', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Linkedin} alt="LinkedIn Icon"/>
                  </div>

                  <div style={{ backgroundColor: 'green', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Google} alt="Google Icon" style={{ width: '60%', height: '60%' }} />
                  </div>

                  <div style={{ backgroundColor: 'green', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Microsoft} alt="Microsoft Icon" style={{ width: '60%', height: '60%' }} />
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
