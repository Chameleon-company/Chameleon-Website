import React from 'react';
import "./heading.css";


function Heading(props) {
  return (
    <div className = "main">
    <h1 className="globalHeading">
    {props.name}
    </h1>
    </div>
  )
}

export default Heading; 