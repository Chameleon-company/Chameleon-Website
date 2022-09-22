import React from 'react'

function TestimonialCard(props) {
  return (
    <div>
        <div className="testimony">
            <p>{props.testimony}</p>
        </div>
        <div className="userCard">
            <img src="" alt="Profile Photo"/>

        </div>
    </div>
    
  )
}

export default TestimonialCard