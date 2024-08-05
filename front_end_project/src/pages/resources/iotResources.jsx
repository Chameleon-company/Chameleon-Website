import React from "react";
import { useHistory } from 'react-router-dom';
import { startTransition } from 'react';
import Screen from '../../components/app/Screen';
import { Card, Col, Row } from 'react-bootstrap';
import './iot.css';



export default function IotResources () {
  const history = useHistory();

  const handleCardClick = (url) => {
    startTransition(() => { history.push(url); });
  };

  return (
    <>
      <Screen >
        <div className='container mt-xl-5 my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>

          {/* Page Title */}
          <Row className='text-center p-3'>
            <h1>Resources</h1>
          </Row>

          {/* Page Content */}
          <Row className='p-5'>
            <Col lg={4} md={6} xs={12} className='p-2'>
              <Card className='h-100' border='rounded' onClick={() => handleCardClick('/iotTechnologies')}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Technology Graphic' />
                <Card.Body>
                  <Card.Title>Technologies</Card.Title>
                  <Card.Text> Click to view more </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className='p-2'>
              <Card className='h-100' onClick={() => handleCardClick('/iotStatistics')}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Technology Graphic' />
                <Card.Body>
                  <Card.Title>Statistics</Card.Title>
                  <Card.Text> Click to view more </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className='p-2' onClick={() => handleCardClick('/iotUpdates')}>
              <Card className='h-100'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Technology Graphic' />
                <Card.Body>
                  <Card.Title>Innovations</Card.Title>
                  <Card.Text> Click to view more </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </div>
      </Screen>
    </>
  );

}