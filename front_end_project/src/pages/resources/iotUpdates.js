import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class IotUpdates extends Component {
  render() {
    return (
      <>
        <Container>
          <h1 class="text-center pt-3 pb-3">LATEST IOT UPDATES</h1>
        </Container>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
          <h2 class="text-center text-black fw-bold pt-3">
            6G Wireless Technology
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                The advancement of 6G wireless technology: 6G is the following
                generation of wireless technology and is anticipated to provide
                significantly higher speeds and lower latency than 5G. IoT
                applications will have more options as a result of the ability
                for devices to communicate data more quickly and dependably.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
          <h2 class="text-center text-black fw-bold pt-3">Edge Computing</h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                Edge computing is becoming more popular because it moves storage
                and computation closer to the network's edge. In addition to
                making IoT applications more resilient to network failures, this
                can increase performance and decrease latency for such
                applications.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
          <h2 class="text-center text-black fw-bold pt-3">
            Artificial intelligence
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                Artificial intelligence (AI) is becoming more prevalent in the
                Internet of Things (IoT). AI is being utilised to power a
                variety of IoT applications, from smart home gadgets to
                industrial automation systems. IoT devices' efficiency,
                precision, and ability to make decisions can all be improved by
                AI. The IoT is increasingly using distributed ledger technology
                called blockchain, which may be used to track and record
                transactions between IoT devices. This could aid in enhancing
                the security and openness of IoT applications.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000, marginBottom: '80px' }}>
          <h2 class="text-center text-black fw-bold pt-3">New IoT Standards</h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                The creation of new IoT standards: To solve the issues of
                scalability, interoperability, and security, new IoT standards
                are being created. These standards will aid in ensuring the
                security and dependability of IoT devices as well as their
                ability to connect with one another and other systems.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>
      </>
    );
  }
}

export default IotUpdates;
