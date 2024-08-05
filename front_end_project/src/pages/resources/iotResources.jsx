import React from "react";
import { useHistory } from 'react-router-dom';
import { startTransition } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Screen from '../../components/app/Screen';
import './iot.css';

export default function IotResources () {
  const history = useHistory();

  const handleCardClick = (url) => {
    startTransition(() => { history.push(url); });
  };

  const contents = [
    { id: 1, title: 'Technologies', subtitle: 'Click to view more', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/iotTechnologies' },
    { id: 2, title: 'Statistics', subtitle: 'Click to view more', image: 'https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/iotStatistics' },
    { id: 3, title: 'Innovation', subtitle: 'Click to view more', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/iotUpdates' }
  ];

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
            {Array.isArray(contents) && contents.map((content) => (
              <Col key={content.id} lg={4} md={6} xs={12} className='p-2'>
                <Card className='h-100' border='rounded' onClick={() => handleCardClick(content.link)}>
                  <Card.Img variant="top" src={content.image} alt='Technology Graphic' />
                  <Card.Body>
                    <Card.Title>{content.title}</Card.Title>
                    <Card.Text> Click to view more </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </div>
      </Screen>
    </>
  );

}