import React from "react";
import "./portfolio_card.css";
// Importing portfolio_card-media.css to style the component for different media sizes.
import "./portfolio_card-media.css";

// PortfolioCard: Component representing a card in a portfolio with title, body, and button.
const PortfolioCard = ({ title, body, onButtonClick, isMiddleCard }) => {
  // Determine the class name based on whether the card is in the middle or not.
  const cardClassName = isMiddleCard
    ? "custom-card middle-card"
    : "custom-card";

  return (
    <div className={`p-6 ${cardClassName}`}> {/* Main container for the portfolio card */}
      <div>
        <div className="project-heading">
          <h1 className="project-title">{title}</h1> {/* Title of the project */}
        </div>
        <div className="project-context">{body}</div> {/* Body/content of the project */}
      </div>
      <div className="card-footer"> {/* Footer section of the card */}
        <div className="date-container">Last Updated: 10/09/23</div> {/* Display the last updated date */}
        <div className="button-container"> {/* Container for the button */}
          <div className="button-spacing" /> {/* Spacing between button and date */}
          <button className="rounded-full bg-green-emerald p-3 text-white" onClick={onButtonClick}>
            LEARN MORE {/* Button to learn more about the project */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard; // Exporting PortfolioCard as default
