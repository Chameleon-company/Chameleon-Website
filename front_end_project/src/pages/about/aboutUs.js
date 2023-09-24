import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import logo from "./assets/ChameleonLogo.png";
import connected from "./assets/connected.png";
import environment from "./assets/environment.png";
import partner from "./assets/partner.png";
import support from "./assets/support.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

class aboutUs extends Component {
  render() {
    return (
      <>
        <br></br>

        {/*BREADCRUMB SECTION */}
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              About Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>

        <br></br>

        {/* ABOUT US SECTION */}
        <Container>
          <h1 style={{ fontWeight: "900" }} className="text-sm-left pb-3">
            ABOUT US
          </h1>
          <Row>
            <Col>
              <iframe
                src="https://www.youtube.com/embed/JirJCCIeuvg"
                autoPlay
                width="550"
                height="350"
                title="Chameleon About"
                className="pl-3"
              ></iframe>
            </Col>
          <Col>
              <h2>Chameleon is a Deakin Universty, student-led company dedicated to revolutionizing urban living through the strategic application of IoT-based solutions. Our organization is structured into three distinct divisions, each focused on key areas of strategic importance.</h2>
            </Col>
          </Row>
        </Container>

        <br></br>

        {/* OUT MISSION SECTION*/}
        <Container style={{ backgroundColor: "#67A170", maxWidth: '100%' }}>
          <h2 className="text-center text-white fw-bold mt-2 pt-3">
            OUR MISSION
          </h2>
          <Row>
            <Col>
              <img
                src={logo}
                className="img-fluid mx-auto d-block mt-5 pb-5"
                alt="mission "
                style={{ width: "300px" }}
              />
            </Col>
            <Col>
              <p className=" pb-5 text-white fs-4 text-start fw-light mt-5 pe-3" style={{ width: '70%' }}>
                At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        {/* OUR GOALS SECTION*/}
        <Container>
          <h2 className="text-center text-black fw-bold mt-2 pt-3">
            OUR GOALS
          </h2>
          <Row>
            <Col>
              <img
                src={connected}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">Better Connected</h4>
            </Col>
            <Col>
              <img
                src={environment}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">
                Environmentally Friendly
              </h4>
            </Col>
            <Col>
              <img
                src={partner}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">Partnerships</h4>
            </Col>
            <Col>
              <img
                src={support}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">
                Supporting our communities
              </h4>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>

        {/* FAQ SECTION*/}
        <Container style={{ backgroundColor: "#67A170", maxWidth: '100%' }}>
          <h2 className="text-center text-white fw-bold mt-2 pt-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <br></br>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>What does Chameleon do?</h3>
              </Accordion.Header>
              <Accordion.Body>Chameleon is an organization dedicated to creating innovative IoT-based solutions to enhance urban life. They focus on various divisions, including City of Melbourne Open Data, Chameleon Website, and Electric Vehicle (EV) Adoption Tools. These divisions work together to address urban challenges, promote sustainability, provide user-friendly access to project information, and champion the adoption of electric vehicles for a greener future.
                Chameleon's overarching mission is to make cities smarter, more livable, and environmentally friendly through their strategic approach and collaborative efforts.
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3>How can I sign up?</h3>
              </Accordion.Header>
              <Accordion.Body>You can easily sign up with us by following these steps:
                <ul>
                  <li><strong>Visit Our Website:</strong> Start by visiting our website, where you'll find a user-friendly sign-up or registration page.</li>
                  <li><strong>Create Your Account:</strong>  Click on the "Sign Up" or "Register" button and provide the required information. This includes your name, email address, and a password.</li>
                  <li><strong>Verify Your Email:</strong>  After you've filled in the necessary details, you will receive a verification email. Click the link in the email to confirm your registration.</li>
                  <li><strong>Complete Your Profile:</strong>  Log in to your newly created account and complete your profile by adding any additional information or preferences.</li>
                  <li><strong>Start Exploring:</strong>  Once your profile is set up, you can start exploring our platform, accessing resources, and engaging with our projects.</li>
                </ul>
                If you need assistance, feel free to reach out to our support team, and they will be happy to guide you through the process. You can find them under the support page or you can contact them using the phone number or email address provided at the bottom of each page on our website. We're excited to have you on board!
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3>Where can I find a progress update?</h3>
              </Accordion.Header>
              <Accordion.Body>You can conveniently access progress updates for our projects through our Chameleon Website (CW). Our website serves as a central hub for comprehensive information about all our projects, including their objectives and ongoing developments. Simply navigate to the "Projects" or "News" section on our website to find the latest updates and milestones achieved by our City of Melbourne Open Data (MOP), Chameleon Website (CW), and Electric Vehicle (EV) Adoption Tools (EVAT) divisions. We regularly update this section to keep you informed about our progress in making cities smarter, more livable, and environmentally friendly.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br></br>
          <br></br>
          <h4 className="text-white">More Questions? Send Us a Message!</h4>
          <br></br>
          <div className="d-flex flex-row">
            <InputGroup size="sm" className="mb-3" style={{ width: "500px" }}>
              <Form.Control
                as={"textarea"}
                aria-aria-label="with-textarea"
                placeholder="Please write your message here..."
              />
            </InputGroup>
            <Button variant="warning" className="ms-5" href="#">
              Send Message
            </Button>
          </div>
          <br></br>
        </Container>
        <br></br>
      </>
    );
  }
}

export default aboutUs;
