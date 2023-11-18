import React from "react";
import logo from "./images/Logo_No_Background.png";
import profile from "./images/profile.jpg";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.css";
import "./header-media.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Search Modal that will visible on tablet view.

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form className="d-flex inner-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mt-2 mb-2 ml-3 me-1"
                aria-label="Search"
              />
              <Button className="mt-2 mb-2 ml-3 me-1">Search</Button>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Chameleon logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white ml-3 mt-2" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/news">
              NEWS
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/about_us">
              ABOUT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/contact">
              CONTACT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="">
              SUPPORT
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/iotResources">
              RESOURCES
            </Nav.Link>
            <Nav.Link className="text-white ml-3 mt-2" href="/login">
              LOGIN
            </Nav.Link>
            <Form className="d-flex outer-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mt-2 mb-2 ml-3 me-1"
                aria-label="Search"
              />
              <Button className="mt-2 mb-2 ml-3 me-1">Search</Button>
            </Form>
            <Button variant="primary" onClick={() => setModalShow(true)} className="search-btn mt-2 mb-2 ml-3 me-1 btn btn-primary">
        Search
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <img
              src={profile}
              className="rounded-circle ml-3"
              alt="User Profile Avatar"
              height="40"
              width="50"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
