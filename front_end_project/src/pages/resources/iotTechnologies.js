import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class IotTechnolgies extends Component {
  render() {
    return (
      <>
        <Container>
          <h1 class="text-center pt-3 pb-3">WHAT IS INTERNET OF THINGS?</h1>
        </Container>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
          <h2 class="text-center text-black fw-bold pt-3">
            Internet of Things Technologies
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                The Internet of Things (IoT) is a network of connected computing
                devices, mechanical and digital machinery, items, animals, or
                people that can exchange data across a network without the need
                for human-to-human or human-to-computer interaction. The
                Internet of Things (IoT) is a huge network of physical items
                that are equipped with sensors, software, and network
                connectivity in order to gather and share data. By using this
                information, procedures can be automated and judgements can be
                improved.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
          <h2 class="text-center text-black fw-bold pt-3">
            The Advantages of IoT Technology
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                Efficiency gain: By automating procedures and gathering data
                that can be utilised to optimise operations, IoT can assist
                firms in becoming more efficient. IoT-connected sensors, for
                instance, can be used to optimise HVAC systems and monitor
                energy usage, which can help businesses save their energy
                expenditures. Enhanced collaboration among employees and the
                ability to work remotely are two ways that IoT might help firms
                be more productive. IoT-connected devices, for instance, can be
                used to automatically order supplies and keep track of inventory
                levels, freeing up staff members to concentrate on other
                responsibilities. Better customer service: The Internet of
                Things (IoT) can aid businesses by giving real-time data on
                customer wants and preferences. IoT-connected gadgets, for
                instance, can track customer behaviour in stores and offer
                individualised recommendations. IoT help to improve safety by
                monitoring and regulating potentially dangerous conditions. For
                instance, IoT-connected sensors can be used to track air quality
                and immediately turn off equipment if levels go too high. New
                business prospects: The Internet of Things (IoT) is generating
                new business opportunities across a range of industries,
                including manufacturing, transportation, and healthcare. For
                instance, real- time patient health monitoring and
                individualised care are both possible with IoT-connected
                equipment.
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>

        <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000, marginBottom: '80px' }}>
          <h2 class="text-center text-black fw-bold pt-3">
            How IoT Technology is Utilised
          </h2>
          <Row>
            <Col>
              <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
                Smart homes: Home appliances, security systems, and lighting may
                all be controlled and monitored via IoT devices. For instance,
                you might use your smartphone to adjust the thermostat or turn
                on the lights before you get home, or you could programme your
                security system to arm itself once you leave the house. Smart
                cities: IoT devices can be used to keep an eye on water use, air
                quality, and traffic conditions. Making better resource
                allocation decisions and improving city planning are both
                possible with the use of this data. For instance, IoT-connected
                sensors can be used to monitor water use and find leaks, or they
                can be used to detect traffic congestion and automatically
                modify traffic lights. Transportation: IoT devices may be used
                to optimise routes, track the position of assets and vehicles,
                and increase safety. IoT-connected sensors, for instance, can be
                used to track the whereabouts of buses and trains in real-time
                or to keep an eye on the state of roads and bridges. Energy
                management systems:IoT devices can be used to monitor energy
                usage and optimise it using energy management systems. For
                instance, IoT-connected sensors can be used to monitor the
                energy usage of electronics and appliances or to instantly
                manage the power grid
              </p>
            </Col>
          </Row>
        </Container>

        <br></br>
      </>
    );
  }
}

export default IotTechnolgies;
