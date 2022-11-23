import React from 'react'


import './Login.css'

function Login() {
  return (
    <div className="loginBox">
      <img className ="loginImgsmall" src = {require('../../assets/images/brandLogo.png')}/>
      <div className="loginContainer">
        <img className ="loginImg" src = {require('../../assets/images/brandLogo.png')}/>
        <h1 className="loginDetails">Email</h1>
        <input className = "cred" type="email" placeholder="Deakin Email"/>
        <h1 className="loginDetailspaswd">Password</h1>
        <input className = "cred" type="Password" placeholder="Password"/>
        <button className="logBtn">Login</button>
      </div>
    </div>
  )
}

export default Login