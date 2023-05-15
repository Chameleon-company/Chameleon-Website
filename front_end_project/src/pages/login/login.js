import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import './login.css'

class Login extends Component {
  render() {
    return (
    
        <Container>
        <Row>
          <h1>Login</h1>
          <Col xs={12}>
            <div className='loginBox' >
              <div className='loginContainer'>
              <div className ="login-part">
              <img className ="loginImg" src = {require('../../pages/login/brandLogo.png')}/>
              <h1 className="wel">Welcome back,</h1>
              <h1 className="loginDetails">Email</h1>
                <input className = "cred" type="email" placeHolder="Deakin Email"/>
                <h1 className="loginDetails">Password</h1>
                <input className = "cred" type="Password" placeHolder="Password"/>
                <button className='rounded-button-01'>Login</button>
                <button className='rounded-button-02'>Sign Up</button>
                <div>
                <button className='mediaButton'>
                
                <img src = {require('../../pages/login/linkedin.png')}/>
                </button>
                <button className='mediaButton'>
                <img src = {require('../../pages/login/google.png')}/>
                </button>
                <button className='mediaButton'>
                <img src = {require('../../pages/login/microsoft.png')}/>
                </button>
                </div> 
              </div>
              <div className='image-part'>
              <picture className = 'imgMax'> 
              <img className  src = {require('../../pages/login/forest.jpg')}/>
            
              </picture>
              </div>
              </div>
             
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;