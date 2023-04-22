import React from 'react'
import PortfolioCard from './components/PortfolioCard'
import Portfolios from '../../data/PortfolioData'

function renderPortfolio(portfolio){
  return(

  <PortfolioCard
    key = {portfolio.id}
    link = {portfolio.imgURL}
    title = {portfolio.name}
  />
  )
    
  
}

function Portfolio(props) {
  return (
   <div>
    {Portfolios.map(renderPortfolio)}
   </div>
  )
}

export default Portfolio