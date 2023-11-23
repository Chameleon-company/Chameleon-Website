import React, { Component } from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

/* The purpose of this form is to allow users to 
unsubscribe from the Chameleon company newsletter service.
This does not remove them from the mailing list, it 
just stops them from recieivng the newsletter. */
class newsUnsubForm extends Component {

  /* Constructor class, utilising props and state to set email state and allow toast message functionality */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showToast: false,
      toastMessage: '',
    };
  }

  // Set email function to set the email value that is captured from user input
  setEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  /* unsubscribe function, used to send POST request to server (Proxy API handles endpoints)
  and utilise error handling to inform user if they have successfully unsubscribed with toast, 
  or toasts error message  */
  unsubscribe = (event) => {
    event.preventDefault();

    // Make a POST request to the '/unsubscribe' endpoint
    fetch('', { //Host URL of future GCP deployment to go here, with unsubscribe proxy endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: this.state.email }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update state and show successful toast message
        this.setState({
          showToast: true,
          toastMessage: 'You have unsubscribed successfully, we hope to see you again!'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        // Update state and show unseccessful toast message
        this.setState({
          showToast: true,
          toastMessage: 'Unsubscribe failed. Please retry shortly.'
        });
      });
  }

  render() {
    return (

      /* div family utilsed to apply style to web form and its various assets */
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%', margin: '20px auto' }}>
        <Col>
          <div style={{ backgroundColor: 'white', padding: 20, border: '1px solid black', height: '100%' }}>
            <Container className="d-flex flex-column align-items-center">
              <Row className="text-center">
                <Col style={{ padding: 10 }}>
                  { /* Chameleon logo */}
                  <img src={Chameleon_Logo} style={{ width: 225, height: 225, display: 'block', margin: '0 auto' }} alt="Logo" />
                </Col>
              </Row>

              { /* web form, instructing uses on how to unsubscribe from Chameleon newsletter */}
              <Form className="d-flex flex-column align-items-center text-center" >
                <p style={{ fontSize: 20, fontWeight: 'bold' }}>Unsubscribing?</p>
                <p>Enter your email address in the field below to stop recieving Chameleon newsletters. You'll still be part of the mailing list, but you won't recieve any more emails.</p>
                <Form.Control
                  style={{
                    height: 40,
                    borderColor: 'black',
                    borderWidth: 1,
                    width: 200,
                    margin: 10,
                    paddingLeft: 10,
                  }}
                  type="email"
                  required
                  value={this.state.email}
                  onChange={this.setEmail}
                />

                { /* Button used to unsubscribe to newsletter, which triggers unsubscibe function onClick */}
                <Button
                  type="submit"
                  style={{
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10,
                  }}
                  onClick={this.unsubscribe}
                >
                  Unsubscribe
                </Button>

                { /* Display toast state after user selects unsubscribe button */}
                {this.state.showToast && <p>{this.state.toastMessage}</p>}

              </Form>
            </Container>
          </div>
        </Col>
      </div>
    );
  }
}

export default newsUnsubForm;
