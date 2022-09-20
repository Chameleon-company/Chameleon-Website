import React from 'react'
import '../../../index.css'

import OurMissionSection_Heading from './components/OurMissionSection_component'
import OurMissionSection_Main from './components/OurMissionSection_component'
import './components/OurMissionSection_styling.css'

import TestimonialSection_Heading_function from './components/TestimonialSection_component'
import TestimonialSection_Content_function from './components/TestimonialSection_component'
import TestimonialSection_User_function from './components/TestimonialSection_component'
import './components/TestimonialSection_styling.css'



function Home() {
    return(
        <div>
            <div>Home</div>
            <div className='OurMissionSection'>
                <OurMissionSection_Heading />
                <OurMissionSection_Main />
            </div>
            <div className='Testimonial'>
                <TestimonialSection_Heading_function />
                <TestimonialSection_Content_function />
                <TestimonialSection_User_function />
            </div>
        </div>
    );
}


export default Home
