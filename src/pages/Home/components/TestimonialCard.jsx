import React from 'react'
import './TestimonialCard.css'

function TestimonialCard(props) {
  return (
    <div className="testimonial">
        <div className="testimony">
            <p className='userTestimony'>{props.testimony}</p>
        </div>
        <div className="userCard">
            
            <img className="testimonialUser" src={props.userImg} alt="Profile Photo"/>
            <p className="testimonyUserName">{props.userName}</p>

        </div>
    </div>
    
  )
}

export default TestimonialCard