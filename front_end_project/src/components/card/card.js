import React from 'react';
import './card.css';

const Card = ({ title, value, description, children }) => {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {value && <p>{value}</p>}
      {description && <p className="description">{description}</p>}
      {children} {/* This is for any additional content passed to the Card */}
    </div>
  );
};

export default Card;

