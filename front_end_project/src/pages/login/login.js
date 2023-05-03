import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './login.css'
class Login extends Component {
    render() {
      return (
      
          <Container>
          <Row>
            <h1>Login </h1>
            <Col xs={12}>
            <div className="loginBox">
            <div className="loginContainer">
            <form className="loginForm">
      
           
            <img className ="loginImg" src = {require('../../pages/login/brandLogo.png')}/>
            
           
                <h1 className="loginDetails">Email</h1>
                <input className = "cred" type="email" placeHolder="Deakin Email"/>
                <h1 className="loginDetails">Password</h1>
                <input className = "cred" type="Password" placeHolder="Password"/>
                
                <button className="logBtn">Login</button>
                <div className="linkAlign">
                <a className="userPass" href="#"> Reset Username / Password?</a>
                </div>
           
            </form>

            </div>
            </div>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Login;