import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './forgot.css'
// import image from "./logo.png";
import logo from '../../assets/logo.png';
class forgot extends Component {
    render() {
        return ( 
            <div class="ctn">
                {/* <div class="mt-5"> */}
                <div class="martop"><img src={logo} class='logo'></img><text class='txt'>CHAMELEON</text></div>
                    <Row>
                        <Col md='5'>
                            <div class="sbc">
                                <Form>

                                    <Form.Group size="lg" controlId="email">
                                    
                                        <Form.Label class='green'><text class='txt1'>Reset Password</text></Form.Label>
                                        <br /> <br />
                                        <Form.Control type="email" placeholder="EMAIL"  className="round blue"/>

                                    </Form.Group>
                                    <br />

                                    <Button variant="primary" className="w-100 orange round" >RESET PASSWORD </Button>
                                    <br/> <br/>
                                    <a class='green' href="login"><Form.Label class='ctr green'>Login</Form.Label></a>
                                </Form>

                            </div>
                        </Col>
                    </Row>

            </div>
        );
    }
}
export default forgot;