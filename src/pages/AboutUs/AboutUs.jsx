import React from 'react'
import Heading from '../../components/heading/Heading'
import CompanyInfoSection from './components/CompanyInfoSection'
import StatsSection from './components/StatsSection'
import './components/CompanyInfoSection.css'


function AboutUs() {
  return (
    <main>
      <Heading name = "About Us"/>
      <CompanyInfoSection />
      <StatsSection />
    </main>
  )
}

export default AboutUs;