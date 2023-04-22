import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className="globalBtn">{props.btnName}</button>
  )
}

export default Button