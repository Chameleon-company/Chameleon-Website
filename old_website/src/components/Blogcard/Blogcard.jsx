import React from 'react'
import './Blogcard.css'

function Blogcard(props) {
  return (
    <div className="card">
        <img className='img' src ={props.link} alt="alt"/>
        <div class = "container">
        <h4 className = "cardDes"><b>{props.name}</b></h4>
        </div>
    </div> 
  )
}

export default Blogcard;