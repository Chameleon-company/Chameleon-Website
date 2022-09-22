import React from 'react'
import OurMissionSection from './components/OurMissionSection'


import TestimonialSection_Heading_function from './components/TestimonialSection_component'
import TestimonialSection_Content_function from './components/TestimonialSection_component'
import TestimonialSection_User_function from './components/TestimonialSection_component'
import './components/TestimonialSection_styling.css'



function Home() {
    return(
        <div>

        <OurMissionSection/>
        <TestimonialSection_Content_function/>
            {/* <div>Home</div>
            <div className='OurMissionSection'>
                <OurMissionSection_Heading />
                <OurMissionSection_Main />
            </div>
            <div className='Testimonial'>
                <TestimonialSection_Heading_function />
                <TestimonialSection_Content_function />
                <TestimonialSection_User_function />
            </div> */}
        </div>
    );
}


export default Home
