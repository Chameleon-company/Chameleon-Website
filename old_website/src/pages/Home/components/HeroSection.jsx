import React from 'react'
import Button from '../../../components/button/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="heroImage">
        <div class="heroText">
        <h1 className="heroHeading">Welcome to Chameleon</h1>
        <p className = "heroPara">Striving to Create a Smarter World</p>  
        <a href="https://mailchi.mp/3d807f37a793/chameleon-newsletter">
          <Button btnName = "Subscribe"></Button>
        </a>

  </div>  
    </div>
  )
}

export default HeroSection