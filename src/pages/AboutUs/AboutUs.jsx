import React from 'react'
import Heading from '../../components/heading/Heading'
import CompanyInfoSection from './components/CompanyInfoSection'
import './components/CompanyInfoSection.css'

function AboutUs() {
  return (
    <main>
      <Heading name = "About Us"/>
      <CompanyInfoSection />
    </main>
  )
}

export default AboutUs