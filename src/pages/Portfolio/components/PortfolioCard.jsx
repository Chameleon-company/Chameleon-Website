import React from 'react'
import './Portfolio.css'

function PortfolioCard(props) {
  return (
    
    <div className="portfolioCard">
       <img className = "portfolioImg" src= {props.link} alt="portfolio img" />
        <div className="bottom-left">
          <h1 className="portfolioTitle">{props.title}</h1>
        </div>
       <div className="read-more">
          <button href="href" className='readMoreBtn'>
            Read More
          </button>
        </div>
    </div>
    
  )
}

export default PortfolioCard