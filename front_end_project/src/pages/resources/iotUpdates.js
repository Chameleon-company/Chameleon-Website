import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Rectangle from 'react-rectangle';
import './resources.css';

class IotUpdates extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="pageHeading">
            The Latest Internet of Things Updates
          </div>

          <div className="pageSubHeading">
            <p>Emerging Internet of Things Technology</p>
          </div>

          {/* <Col xs={12}> */}
          <div className="rectangle">
            <Rectangle className="iotRec">
              <div style={{ background: '#E4F0FF' }} />

              {/* text */}

              <div className="iotHeading">
                <h3>The Latest Innovations</h3>
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

export default IotUpdates;
