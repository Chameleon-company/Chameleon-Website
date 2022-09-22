import React from 'react'

import './TestimonialSection_styling.css'


function TestimonialSection_Heading_function() {
    return (
        <div className='TestimonialSection'>
        <div className="head">
            <div>Testimonials</div>
        </div>
        </div>
    );
}

function TestimonialSection_Content_function() {

    const leftquotessign1 = require("../../../assets/images/left-quotes-sign 1.png");

    return(
        <div className='TestimonialSection'>
        <div className="main">
            <div class="li">
                <div class="top">
                    <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut
                    </div>
                    <div class="img">
                    <img src="leftquotessign1" alt="" />
                    </div>
                </div>
            </div>
            <div class="li liRight">
                <div class="top">
                    <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut
                    </div>
                    <div class="imgRight">
                    <img src="leftquotessign1" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

function TestimonialSection_User_function() {

    const Ellipse1 = require("../../../assets/images/Ellipse1.png");
    const Ellipse2 = require("../../../assets/images/Ellipse2.png");

    return (
        <div className='TestimonialSection'>
        <div className='user'>
            <div class="li">
                <div class="bottom">
                    <div>
                    <img src="Ellipse1" alt="" />
                    </div>
                    <div>Robert Smith</div>
                </div>
            </div>
            <div class="li liRight">
                <div class="bottom">
                    <div>
                    <img src="Ellipse2" alt="" />
                    </div>
                    <div>Jane Fibbs</div>
                </div>
            </div>
        </div>
        </div>
    );
}