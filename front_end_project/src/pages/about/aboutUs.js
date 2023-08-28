import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/ChameleonLogo.png";
import connected from "./assets/connected.png";
import environment from "./assets/environment.png";
import partner from "./assets/partner.png";
import support from "./assets/support.png";
import Nav from "react-bootstrap/Nav";
import profileImage from "./assets/account.jpg";
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
        <Navbar className="bg-dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="65"
                height="55"
                className="d-inline-block align-top"
                alt="Chameleon logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features" className="text-white">
                  HOME
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  PROJECTS
                </Nav.Link>
                <Nav.Link href="#features" className="text-white">
                  NEWS
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  ABOUT
                </Nav.Link>
                <Nav.Link href="#features" className="text-white">
                  CONTACT
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white">
                  SUPPORT
                </Nav.Link>
                <InputGroup className="my-0 mx-2">
                  <Form.Control
                    aria-label="Search Here"
                    aria-describedby="search bar"
                  />
                </InputGroup>
                <img
                  src={profileImage}
                  className="rounded-circle my-0 mx-2"
                  alt="Profile Pic"
                  height="50"
                  width="40"
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
                src="https://www.youtube.com/watch?v=JirJCCIeuvg"
                autoPlay
                width="550"
                height="350"
                title="Chameleon About"
                className="pl-3"
              ></iframe>
            </Col>
            <Col>
              <h2>Chameleon is a Deakin Universty, student-led company....</h2>
            </Col>
          </Row>
        </Container>

        <br></br>

        {/* OUT MISSION SECTION*/}
        <Container style={{ backgroundColor: "#67A170" }}>
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
              <p className=" pb-5 text-white fs-4 text-start fw-light mt-5 pe-3">
                At Chameleon, our mission is to research, create, test, document
                and deploy IoT-based solutions to enhance life through the
                application of smart city technologies including: the building
                of smarter cities, homes, transportation, and energy management
                systems.
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
        <Container style={{ backgroundColor: "#67A170" }}>
          <h2 className="text-center text-white fw-bold mt-2 pt-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <br></br>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>What does Chameleon do?</h3>
              </Accordion.Header>
              <Accordion.Body>Content #1</Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3>How can I sign up?</h3>
              </Accordion.Header>
              <Accordion.Body>Content #2</Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3>Where can I find a progress update?</h3>
              </Accordion.Header>
              <Accordion.Body>Content #2</Accordion.Body>
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
