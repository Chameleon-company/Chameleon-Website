import React, { Component } from 'react';
import './reset.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";
import Screen from '../../components/app/Screen';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ResetPassword extends Component {
    /* Constructor class, utilising props and state to allow toast message functionality */
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            toastMessage: '',
        };
    }

    /* Sets toast message to true, notifying users that password reset link has been sent */
    /* This function will need to be further updated to include functionality with Google Firebase backend */
    sendResetPasswordLink = () => {
        this.setState({
            showToast: true,
            toastMessage: 'Reset password link sent to your registered email',
        });
    };

    render () {
        return (
            <div></div>
            // Row, Col and Form missing and react-bootstrap import not functioning, to be fixed in the next update
            // <Screen>
            //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '40%', margin: '20px auto' }}>
            //         <Col>
            //             <div style={{ backgroundColor: 'white', padding: 20, border: '1px solid black', height: '100%' }}>
            //                 <Container className="d-flex flex-column align-items-center">
            //                     <Row className="text-center">
            //                         <Col style={{ padding: 10 }}>
            //                             { /* Chameleon logo */}
            //                             <img src={Chameleon_Logo} style={{ width: 225, height: 225, display: 'block', margin: '0 auto' }} alt="Logo" />
            //                         </Col>
            //                     </Row>

            //                     { /* web form, instructing uses on how to reset their password */}
            //                     <Form className="d-flex flex-column align-items-center text-center" >
            //                         <p style={{ fontSize: 20, fontWeight: 'bold' }}>Forgotten your password?</p>
            //                         <p>Enter your email address in the field below and we'll send you a link to reset your password.</p>
            //                         <Form.Control
            //                             style={{
            //                                 height: 42,
            //                                 borderColor: 'black',
            //                                 borderWidth: 1,
            //                                 width: 200,
            //                                 margin: 10,
            //                                 paddingLeft: 10,
            //                             }}
            //                             type="email"
            //                             required
            //                         />

            //                         { /* Button used to reset password, which triggers resetPassword function onClick */}
            //                         <Button
            //                             type="submit"
            //                             style={{
            //                                 backgroundColor: 'green',
            //                                 padding: 10,
            //                                 borderRadius: 5,
            //                                 margin: 10,
            //                             }}
            //                             onClick={this.sendResetPasswordLink}
            //                         >
            //                             Reset Password
            //                         </Button>

            //                         { /* Display toast state after user selects reset password button */}
            //                         {this.state.showToast && <p>{this.state.toastMessage}</p>}

            //                         { /* Link back to login screen */}
            //                         <p style={{ fontWeight: 'bold' }}><a href="/login">Back to sign in</a></p>

            //                     </Form>
            //                 </Container>
            //             </div>
            //         </Col>
            //     </div>
            // </Screen>
        );
    };
}

export default ResetPassword;
