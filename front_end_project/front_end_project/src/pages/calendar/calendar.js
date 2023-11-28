import { Container, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import CalendarView from '../../components/calendar/calenderView';
class Calendar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Events Calendar</h1>
          <CalendarView />
          <Col xs={12}>
            <div></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendar;
