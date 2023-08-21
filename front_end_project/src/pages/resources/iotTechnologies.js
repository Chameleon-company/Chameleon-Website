import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Rectangle from 'react-rectangle';
import './resources.css';
import smartCity from './images/city.png';

class IotTechnologies extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="pageHeading">Internet of Things Tehnologies</div>

          <div className="pageSubHeading">
            <p>What exactly is Internet of Things?</p>
          </div>

          {/* <Col xs={12}> */}
          <div className="rectangle">
            <Rectangle className="iotRec">
              <div style={{ background: '#E4F0FF' }} />

              {/* image */}
              <div className="iotImage">
                <img
                  src={smartCity}
                  width="300"
                  height="250"
                  alt="City view"
                ></img>
              </div>
              {/* text */}

              <div className="iotHeading">
                <h3>Internet of Things Technologies</h3>
              </div>

              <div className="iotPara">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque odio diam, molestie eu purus vel, consectetur
                  dapibus turpis. Fusce non sapien at ipsum scelerisque
                  consequat. Ut vitae quam ultricies, mattis massa tempus,
                  malesuada ligula. Pellentesque laoreet.
                </p>
              </div>
            </Rectangle>
          </div>
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}

export default IotTechnologies;
