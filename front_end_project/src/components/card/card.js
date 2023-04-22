import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './card.css';
const CustomCard = ({ body, header, onButtonClick }) => {
  return (
    <Card className="custom-card">
      {header && <Card.Header>{header}</Card.Header>}
      <Card.Body>{body}</Card.Body>
      {onButtonClick && (
        <Card.Footer>
          <Button onClick={onButtonClick}>Click Me!</Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CustomCard;
