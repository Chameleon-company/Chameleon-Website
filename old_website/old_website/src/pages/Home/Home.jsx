import React from 'react'
import HeroSection from './components/HeroSection'
import OurMissionSection from './components/OurMissionSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/home_footer_components';




function Home() {


  return (
    <div>
      <HeroSection/>
      <OurMissionSection/>
        <TestimonialSection/>
        <Footer title = "CHAMELOEN" intro = "Striving to Create a Smarter World!" contact_us = "CONTACT US" phone_number = "+611 111 111" email = "chameleon@gmail.com" by = "ⓒChameleon 2022"/>
        
    </div>
  );

}


export default Home
