import React from 'react'
import './Blogcard.css'
import {Link} from 'react-router-dom';

function Blogcard(props) {
  return (
    <div className="card">
        <img className='img' src ={props.link} alt="alt"/>
        <div className = "container">
        <Link to="/blogdescription" style={{color: 'White', textDecoration:"none"}}><h4><b>{props.name}</b></h4></Link>
        </div>
    </div> 
  )
}

export default Blogcard;