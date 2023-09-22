import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class IotStatistics extends Component {
  render() {
    return (
      <>
        <Container>
          <h1 class="text-center pb-3">STATISTICS</h1>
        </Container>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000, marginBottom: '80px' }}>
          <h2 class="text-center text-black fw-bold pt-3">
            IoT Statistics in Australia
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                By 2028, the Australian IoT market is projected to have
                increased from US$15.46 billion to US$27.13 billion. The largest
                IoT market in Australia is the automotive industry, followed by
                the industrial and retail sectors. In Australia, there will be
                16.7 million linked IoT devices by 2022. By 2028, Australia is
                projected to have 28.9 million linked IoT devices. IoT devices
                are connected to 10 ordinary Australian homes. Smart speakers,
                smart thermostats, and smart security cameras are the most
                widely used IoT devices in Australia. The adoption of Industry
                4.0 technologies, the rise of the Internet of Vehicles (IAV),
                and the desire for smart city solutions are what are driving the
                IoT market in Australia.
              </p>
            </Col>
          </Row>
        </Container>
      </>
      
    );
  }
}

export default IotStatistics;
