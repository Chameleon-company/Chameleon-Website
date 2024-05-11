import React from "react";
import "./portfolio_card.css";
// import portfolio_card-media.css to style it.
import "./portfolio_card-media.css";

const PortfolioCard = ({ title, body, onButtonClick, isMiddleCard }) => {
  const cardClassName = isMiddleCard
    ? "custom-card middle-card"
    : "custom-card";

  return (
    <div className={`p-6 ${cardClassName}`}>
      <div>
        <div className="project-heading">
          <h1 className="project-title">{title}</h1>
        </div>
        <div className="project-context">{body}</div>
      </div>
      <div className="card-footer">
        <div className="date-container">Last Updated: 10/09/23</div>
        <div className="button-container">
          <div className="button-spacing" />
          <button className="rounded-full bg-green-emerald p-3 text-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
