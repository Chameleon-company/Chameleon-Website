import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="card">
        <img src ={props.link} alt="alt"/>
        <div class = "container">
        <h4 className = "cardDes"><b>{props.name}</b></h4>
        </div>
    </div> 
  )
}

export default Card;