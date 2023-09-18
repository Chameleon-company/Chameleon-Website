import React from 'react'
import OurMissionSection from './components/OurMissionSection'
import TestimonialSection from './components/TestimonialSection'




function Home() {
    return(
        <div>

        <OurMissionSection/>
        <TestimonialSection/>

        {/* code error */}
        {/* <TestimonialSection_Content_function/> */}
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
