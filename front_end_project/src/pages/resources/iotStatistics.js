import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Rectangle from 'react-rectangle';
import './resources.css';
import tech from './images/tech.png';

class IotStatistics extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="pageHeading">
            Internet of Things Statistics in Australia
          </div>

          <div className="pageSubHeading">
            <p>What are the trends for Internet of Things use in Australia?</p>
          </div>

          {/* <Col xs={12}> */}
          <div className="rectangle">
            <Rectangle className="iotRec">
              <div style={{ background: '#E4F0FF' }} />

              {/* image */}
              <div className="iotImage">
                <img src={tech} width="300" height="250" alt="City view"></img>
              </div>
              {/* text */}

              <div className="iotHeading">
                <h3>Internet of Things Statistics</h3>
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

export default IotStatistics;
