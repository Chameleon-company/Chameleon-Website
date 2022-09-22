import React from 'react'

import Footer from './components/home_footer_components';
import './components/home_footer_style.css';



function Home() {
    return(
        <div>
            <div className='Footer_Home'>
                <Footer title = "CHAMELOEN" intro = "Striving to Create a Smarter World!" contact_us = "CONTACT US" phone_number = "+611 111 111" email = "chameleon@gmail.com" by = "ⓒChameleon 2022"/>
            </div>
        </div>
    );
}

export default Home
