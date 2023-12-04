import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";

class ResourcesPage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1500px",
          margin: "auto",
          backgroundColor: "#67A170"
        }}
      >
        <Container>
          <h1 class="text-center pt-3 pb-3">RESOURCES</h1>
        </Container>

        <Container
          style={{
            backgroundColor: "#D1E2C4",
            maxWidth: 400,
            marginBottom: "50px",
          }}
        >
          <Col>
            <Row>
              <img
                src={device}
                className="img-fluid mx-auto pt-7 pb-4 padding-10"
                alt="Technology Graphic"
                style={{ width: "400px", height: "300px" }}
              />
            </Row>
          </Col>

          <Link to="technologies" class="text-decoration-none">
            <h2 class="text-center text-black fw-bold pb-4">Technologies</h2>
          </Link>
        </Container>

        <br></br>

        <Container
          style={{
            backgroundColor: "#D1E2C4",
            maxWidth: 400,
            marginBottom: "50px",
          }}
        >
          <Col>
            <Row>
              <img
                src={IoTMelbourne}
                className="img-fluid mx-auto pt-7 pb-4 padding-10"
                alt="Melbourne Street View"
                style={{ width: "400px", height: "300px" }}
              />
            </Row>
          </Col>

          <Link to="statistics" class="text-decoration-none">
            <h2 class="text-center text-black fw-bold pb-4">Statistics</h2>
          </Link>
        </Container>

        <br></br>

        <Container
          style={{
            backgroundColor: "#D1E2C4",
            maxWidth: 400,
            marginBottom: "50px",
          }}
        >
          <Col>
            <Row>
              <img
                src={tech}
                className="img-fluid mx-auto pt-7 pb-4 padding-10"
                alt="Technology Graphic"
                style={{ width: "400px", height: "300px" }}
              />
            </Row>
          </Col>

          <Link to="innovations" class="text-decoration-none">
            <h2 class="text-center text-black fw-bold pb-4">Innovations</h2>
          </Link>
        </Container>

        <br></br>
      </div>
    );
  }
}

export default ResourcesPage;
