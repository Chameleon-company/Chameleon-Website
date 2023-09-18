import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <img src ={props.link} alt="alt"/>
        <div class = "container">
        <h4><b>{props.name}</b></h4>
        </div>
    </div>
  )
}

export default Card;