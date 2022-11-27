import React from 'react'
import './TestimonialCard.css'
import { useEffect, useState } from "react";

function TestimonialCard(props) {
  let [medioType, setmedioType] = useState("pc");
  useEffect(() => {
    if(checkMedio() == null){
        setmedioType('pc')
    }else{
        setmedioType('phone')
    }
  }, []);
  const checkMedio = () => {
    const userAgent = navigator.userAgent;
    return userAgent.match(
      /(iPhone|iPod|Android|ios|iPad|AppleWebKit.*Mobile.*)/i
    );
  };
  return (
    <div className="testimonial">
        <div className="testimony">
            <p className='userTestimony'>{props.testimony}</p>
        </div>
        <div className={medioType === 'pc' ? "userCard" : "userCardPhone"}>
            
            <img className="testimonialUser" src={props.userImg} alt="Profile Photo"/>
            <p className="testimonyUserName">{props.userName}</p>

        </div>
    </div>
    
  )
}

export default TestimonialCard