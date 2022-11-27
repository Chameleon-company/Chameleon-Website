import React from 'react'


import './Login.css'

function Login() {
  return (
    <div className="loginBox">
      <div className="loginContainer">
        <img className ="loginImg" src = {require('../../assets/images/brandLogo.png')}/>
        <h1 className="loginDetails">Email</h1>
        <input className = "cred" type="email" placeHolder="Deakin Email"/>
        <h1 className="loginDetails">Password</h1>
        <input className = "cred" type="Password" placeHolder="Password"/>
        <button className="logBtn">Login</button>
      </div>
    </div>
  )
}

export default Login