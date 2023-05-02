import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Home</h1>
          <Col xs={12}>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
