import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Rectangle from 'react-rectangle';
import './resources.css';
import smartCity from './images/city.png';
import tech from './images/tech.png';

class Resources extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="pageHeading">What Is IoT Technology?</div>

          <div className="pageSubHeading">
            <p>
              <p>An Introduction To Internet Of Things</p>
            </p>
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

              <div className="iotLearnMore">
                <a href="">Click here to learn more about IoT</a>
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

          <div className="rectangle2">
            <Rectangle className="statsRec">
              <div style={{ background: '#E4F0FF' }} />

              {/* image */}
              <div className="statsImage">
                <img
                  src={tech}
                  width="300"
                  height="250"
                  alt="Computer components digital"
                ></img>
              </div>
              {/* text */}

              <div className="statsHeading">
                <h3>IoT Statistics in Australia</h3>
              </div>

              <div className="statsLearnMore">
                <a href="">
                  Click here to learn more about IoT Stats in Australia
                </a>
              </div>

              <div className="statsPara">
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
          <div></div>
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Resources;
