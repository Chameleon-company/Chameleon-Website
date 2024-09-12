import React from 'react';
import './DataPage.css'; // Ensure all common styling is here
import Screen from '../../components/app/Screen';

const DataPage = ({ title, description, imageUrl, imageAlt, products, links }) => (
    <Screen>
  <div className="page-container">
    <h1 className="page-title">{title}</h1>
    <img src={imageUrl} alt={imageAlt} className="featured-image"/>
    <p className="page-description">{description}</p>
    
    <div className="products-section">
      <h2>Products/Services Offered:</h2>
      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
    
    <div className="links-section">
      <h2>Useful Links:</h2>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <a  href={link.url}>{link.text}</a>
            <p className="link-description">{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  </Screen>
);

export default DataPage;
