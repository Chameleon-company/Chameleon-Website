import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './portfolio_card.css';

const PortfolioCard = ({ title, body, onButtonClick, isMiddleCard }) => {
  const cardClassName = isMiddleCard
    ? 'custom-card middle-card'
    : 'custom-card';

  return (
    <Card className={cardClassName}>
      <Card.Body>
        <div className="project-heading">
          <h1 className="project-title">{title}</h1>
        </div>
        {body}
      </Card.Body>
      <Card.Footer>
        <div className="button-container">
          <Button onClick={onButtonClick} className="rounded-button">
            GITHUB
          </Button>
          <div className="button-spacing" />
          <Button variant="info" className="rounded-button">
            LEARN MORE
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PortfolioCard;
