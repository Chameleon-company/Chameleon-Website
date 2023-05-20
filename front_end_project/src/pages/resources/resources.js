import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import ReactRectangle from 'react-rectangle'; 
import './resources.css';
import smartCity from './images/city.png'
import tech from './images/tech.png'

class Resources extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="top">
            Emerging Tech
          </div>
          {/* <Col xs={12}> */}
            <div className="rectangle">
              <ReactRectangle className="first">
                <div style={{ background: '#E4F0FF' }} />

                {/* image */}
                <div className="smart">
                  <img src={smartCity} width="300" height="250"></img>
                </div>
                {/* text */}

                <div className="heading">
                  <h3>What is a smart city?</h3>
                </div>

                <div className="text4">
                  <p>
                    A smart city uses technology to connect,
                    protect and enhance the lives of citizens
                    using IoT sensors, video cameras and other
                    inputs. The aim is to provide the city operator
                    and citizens with feedback so they can make
                    informed decisions.
                  </p>
                </div>

                <div className="textsmart">
                  <p>
                    A smart city collects and analyse data from
                    sensors and cameras and send to the city
                    operator so the action can be taken, sometimes
                    automatically. For example, a public bin can
                    alert the city service for a collection.
                  </p>
                </div></ReactRectangle>    
            </div>
       
            <br></br>

            <div className="rectangle25">
              <ReactRectangle className="secondrec">
                <div style={{ background: '#E4F0FF' }} />

                {/* image */}
                <div className="tech">
                  <img src={tech} width="300" height="190"></img>
                </div>
                {/* text */}

                <div className="heading2">
                  <h3>Emerging Technologies in 2023</h3>
                </div>

                <div className="techText">
                  <p>
                    Emerging technologies are the technologies
                    that have not yet been commercialised but
                    show great potential to change our world.
                    It is considered to be the trend and in
                    their early stages.
                  </p>
                </div>

                <div className="techText2">
                  <p>
                    Emerging technologies in 2023 are:
                  </p>
                  <p> 1. Neuromorphic computing</p>
                  <p> 2. Self-supervised learning</p>
                  <p>3. Human-centred AI</p>
                </div>
              </ReactRectangle>
            </div>
            <div>
            </div>
          {/* </Col> */}
        </Row>


      </Container>
    );
  }
}

export default Resources;
